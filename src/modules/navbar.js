import React from "react";

const Navbar = function ({ pantallas, setPantalla }) {


    const MovilPantalla = (modulo) => {
        if (pantallas.filter(e => e == modulo).length == 0) {
            setPantalla([modulo, ...pantallas]);
        }
        //setPantalla([modulo]);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-95 ">
            <a className="navbar-brand" href="#">
                <img src="assets/icons/address_book-0.png" /> My Library</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    {
                        pantallas.filter(e => e == "Lista").length >= 1 ? <li className="nav-item active">
                            <a className="nav-link" href="#" onClick={() => MovilPantalla("Lista")} > <img src="assets/icons/bar_graph-0.png" /> Lista
                                <span className="sr-only">(current)</span></a>
                        </li> :
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => MovilPantalla("Lista")} > <img src="assets/icons/bar_graph-0.png" /> Lista </a>
                            </li>
                    }

                    {
                        pantallas.filter(e => e == "Add").length >= 1 ? <li className="nav-item active">
                            <a className="nav-link" href="#" onClick={() => MovilPantalla("Add")}> <img src="assets/icons/clean_drive-3.png" /> Añadir
                                <span className="sr-only">(current)</span></a>
                        </li> :
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => MovilPantalla("Add")}> <img src="assets/icons/clean_drive-3.png" /> Añadir</a>
                            </li>
                    }

                    {
                        pantallas.filter(e => e == "Borrar").length >= 1 ? <li className="nav-item active">
                            <a className="nav-link" href="#" onClick={() => MovilPantalla("Borrar")}> <img src="assets/icons/certificate_red_line-1.png" /> Borrar
                                <span className="sr-only">(current)</span></a>
                        </li> :
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => MovilPantalla("Borrar")}> <img src="assets/icons/certificate_red_line-1.png" /> Borrar </a>
                            </li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;