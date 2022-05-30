import React, { useState, useEffect } from "react";
import bd from '../appi/bd';



const ListaTr = function ({ e, modalOn, setmodalAct, colorOn }) {

    const [valuecap, setValuecap] = useState(e.capitulos);

    const handleInputChange = (d) => {
        setValuecap(d.target.value);
        bd.setLibro([{ "t": "capitulos", "v": d.target.value }, { "t": "id", "v": e.ID }]);
    }

    const Arojo = function () {
        setmodalAct([{ "t": "capitulos", "v": e.capitulos },
        { "t": "id", "v": e.ID },
        { "t": "color", "v": 3 }]);
        modalOn(true);
    }

    const rojo = { "background-color": "#e02424" }
    const verde = { "background-color": "#09b618" }
    const naranja = { "background-color": "#f19437" }
    const letra = { "font-size": "12px" }

    return (
        <>
            {((colorOn[0] && e.color == 2) || (colorOn[1] && e.color == 3) || e.color == 1) ?
                <tr key={e.ID} style={letra}>
                    <td><div className="cuadro_tabla" onClick={() => Arojo()} style={(e.color == 1) ? verde : (e.color == 2) ? naranja : rojo}><span>A rojo</span></div></td>
                    <th scope="row">{e.nombre}</th>
                    <td>{e.plot}</td>
                    <td><input type="number" className="form-95 in-table" value={valuecap} name="valuecap" key={e.ID}
                        onChange={handleInputChange} /></td>
                    <td>{e.ultimo}</td>
                    <td><a type="submit" className="btn btn-primary"
                        href={e.link} target="_blank" style={letra}>  <img src="assets/icons/html2-0.png" /> Leer </a></td>
                </tr>
                :
                null
            }
        </>
    )
}

export default ListaTr;