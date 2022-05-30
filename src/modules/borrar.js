import React, { useState, useEffect } from "react";
import Modal from "./modal";
import bd from '../appi/bd';

const Borrar = function ({ pantalla, setPantalla }) {

    const [libros, setLibros] = useState([]);
    const [aborrar, setABorrar] = useState(1);
    const [modal_visible, setModal] = useState(false);
    const [modal_action, setModalAction] = useState([]);

    const cerrar_ventana = function () {
        let t = [];
        pantalla.forEach(element => {
            if (element != "Borrar") {
                t.push(element);
            }
        });

        setPantalla(t);
    }

    const handleChangeSelect = (e) => {
        setABorrar(e.target.value);
    }

    const handleClickErrase = () => {
        setModal(true);
        setModalAction([{ t: "id", v: aborrar }, { t: "eliminar", v: "1" }]);
    }

    useEffect(() => {
        bd.getList().then(
            function (e) {
                setLibros(e);
            }
        );

    }, []);

    const abrir_modal = function (ver) {
        setModal(ver);
    }



    return (
        <>
            <div className="container">
                <div className="card mb-4">
                    <div className="modal-header">
                        <h4 className="modal-title">Borrar Lectura</h4>
                        <button type="button" onClick={() => cerrar_ventana()} className="btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <p>Selecciona la lectura que desea borrar: </p>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"><img src="assets/icons/address_book-1.png" className="icon-16-4" /> Nombre </label>
                            <div className="col-sm-10">
                                <select className="form-95"
                                    name="borrar"
                                    value={aborrar}
                                    onChange={handleChangeSelect}>
                                    {
                                        libros.map((e) => {
                                            return <option value={e.ID} key={e.ID}>{e.nombre}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="button" className="btn btn-primary" onClick={handleClickErrase}>Borrar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal visible={modal_visible}
                title="¿Seguro que quieres eliminar este Libro?"
                aceptar="Eliminar"
                cancelar="cancelar"
                gif="sure.gif"
                modalOff={abrir_modal}
                modalAcept={modal_action}
                modalRefresh={setLibros} ></Modal>
        </>
    )
}

export default Borrar;