import react, { useState, useEffect } from "react";
import Navbar from "./modules/navbar";
import Header from "./modules/header";
import Body from "./modules/body";



const ini_pantalla = [];


const App = () => {
    const [pantalla, setPantalla] = useState(ini_pantalla);

    const rei = (e) => {
        setPantalla(e);
    }





    return (
        <>
            <Navbar setPantalla={rei} pantallas={pantalla} />
            <br />

            <Body pantalla={pantalla} setPantalla={rei} />
            {
                pantalla.length == 0 ?
                    <Header name="My Library" lead="Bienvenidos. Selecciona que quieres hacer."></Header> : null
            }

        </>
    );
}

export default App;