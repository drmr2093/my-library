
import React from "react";
import bd from '../appi/bd';



const Modal = function ({ visible, title, aceptar, cancelar, gif, modalOff, modalAcept, modalRefresh }) {


    const visibles = { "display": "inherit" };
    const clickAceptar = function () {
        bd.setLibro(modalAcept).then(function (r) {
            bd.getList().then(
                function (e) {
                    modalRefresh(e);
                }
            );
        });
        modalOff(false);
    }


    return (
        <>
            {visible ?
                <div className="modal" id="exampleModal" style={visibles}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                                <button type="button" className="btn" onClick={() => modalOff(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src={"assets/" + gif} className="img-fluid" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => modalOff(false)}>{cancelar}</button>
                                <button type="button" className="btn btn-primary" onClick={() => clickAceptar()}>{aceptar}</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </>

    )
}

export default Modal;