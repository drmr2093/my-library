import React, { useState, useEffect } from "react";
import bd from '../appi/bd';

const inicialFormulario = {
    nombres: "",
    plot: "",
    capitulo: 0,
    link: ""
}

const Add = function ({ pantalla, setPantalla }) {

    const [formularios, setFormulario] = useState(inicialFormulario);
    const { nombres, plot, capitulo, link } = formularios;


    const cerrar_ventana = function () {
        let t = [];
        pantalla.forEach(element => {
            if (element != "Add") {
                t.push(element);
            }
        });

        setPantalla(t);
    }


    const handleInputChange = (e) => {
        const changeFormValues = {
            ...formularios,
            [e.target.name]: e.target.value
        }


        setFormulario(changeFormValues);
    }

    const handleInputSave = () => {
        bd.setLibro([{ t: "nombre", v: nombres },
        { t: "capitulos", v: capitulo },
        { t: "link", v: link },
        { t: "plot", v: plot }]);

        setFormulario(inicialFormulario);
    }


    return (
        <div className="container">
            <div className="card mb-4">
                <div className="modal-header">
                    <h4 className="modal-title">Añadir Lectura</h4>
                    <button type="button" onClick={() => cerrar_ventana()} className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"><img src="assets/icons/address_book-1.png" className="icon-16-4" /> Nombre </label>
                        <div className="col-sm-10">
                            <input type="text"
                                className="form-95"
                                id="inputEmail3"
                                name="nombres"
                                value={nombres}
                                onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"><img src="assets/icons/chm-0.png" className="icon-16-4" /> Plot </label>
                        <div className="col-sm-10">
                            <input type="text"
                                className="form-95"
                                id="inputPassword3"
                                name="plot"
                                value={plot}
                                onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"><img src="assets/icons/charmap-1.png" className="icon-16-4" /> Capitulo </label>
                        <div className="col-sm-10">
                            <input type="number"
                                className="form-95"
                                id="inputPassword4"
                                name="capitulo"
                                value={capitulo}
                                onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"><img src="assets/icons/internet_connection_wiz-5.png" className="icon-16-4" /> Link </label>
                        <div className="col-sm-10">
                            <input type="text"
                                className="form-95"
                                id="inputPassword5"
                                name="link"
                                value={link}
                                onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="button" className="btn btn-primary" onClick={handleInputSave}>Agregar</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Add;