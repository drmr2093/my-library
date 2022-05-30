import React, { useState, useEffect } from "react";
import bd from '../appi/bd';
import ListaTr from './listtr';
import Modal from './modal';

const Lista = function ({ pantalla, setPantalla }) {

    const [elementos, setElementos] = useState([]);
    const [e_naranjas, setNaranjas] = useState(false);
    const [e_rojos, setRojos] = useState(false);
    const [modal_visible, setModal] = useState(false);
    const [modal_action, setModalAction] = useState([]);

    const cerrar_ventana = function () {
        let t = [];
        pantalla.forEach(element => {
            if (element != "Lista") {
                t.push(element);
            }
        });

        setPantalla(t);
    }

    const abrir_modal = function (ver) {
        setModal(ver);
    }

    const handleChangeNaranjas = () => {
        setNaranjas(!e_naranjas);
    }

    const handleChangeRojos = () => {
        setRojos(!e_rojos);
    }


    useEffect(() => {
        bd.getList().then(
            function (e) {
                setElementos(e);
            }
        );
    }, []);



    return (
        <>
            <div className="container">
                <div className="card mb-4">
                    <div className="modal-header">
                        <h4 className="modal-title">Tus Lecturas</h4>
                        <button type="button" onClick={() => cerrar_ventana()} className="btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"> </th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Plot</th>
                                    <th scope="col">Capitulo</th>
                                    <th scope="col">Ultima vez</th>
                                    <th scope="col">Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    elementos.map((e) => {
                                        return <ListaTr e={e}
                                            key={e.id}
                                            modalOn={abrir_modal}
                                            setmodalAct={setModalAction}
                                            colorOn={[e_naranjas, e_rojos]} />
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="row">
                            <div className="col col-6"> <div className="form-group row">
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" onClick={() => handleChangeNaranjas()} type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Naranjas
                                        </label>
                                    </div>
                                </div>
                            </div> </div>
                            <div className="col col-6"> <div className="form-group row">
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" onClick={() => handleChangeRojos()} id="gridCheck2" />
                                        <label className="form-check-label" htmlFor="gridCheck2">
                                            Rojos
                                        </label>
                                    </div>
                                </div>
                            </div> </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal visible={modal_visible}
                title="¿Mandar a Rojo?"
                aceptar="Mandar a Rojo"
                cancelar="cancelar"
                gif="sure.gif"
                modalOff={abrir_modal}
                modalAcept={modal_action}
                modalRefresh={setElementos} ></Modal>
        </>
    )
}

export default Lista;