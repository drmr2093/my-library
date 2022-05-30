import React from "react";
import Lista from "./lista";
import Add from "./add";
import Borrar from "./borrar";



const Body = function ({ pantalla, setPantalla }) {

    const verificaPantalla = (modulo) => {
        let regresa = false;
        for (let i = 0; i < pantalla.length; i++) {
            if (modulo == pantalla[i]) {
                regresa = true;
            }
        }

        return regresa;
    }

    return (
        <>
            {
                (verificaPantalla("Borrar")) ? <Borrar setPantalla={setPantalla} pantalla={pantalla} /> : <></>
            }

            {
                (verificaPantalla("Add")) ? <>  <br /> <Add setPantalla={setPantalla} pantalla={pantalla} /> </> : <></>
            }

            {
                (verificaPantalla("Lista")) ? <> <br /> <Lista setPantalla={setPantalla} pantalla={pantalla} /> </> : <></>
            }

        </>
    )
}

export default Body;