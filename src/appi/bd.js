
/**
 * getList
 * Esta funcion permite traer la lista completa de los libros en la BD
 */
const getList = async () => {
    let dato = {};
    try {
        const res = await fetch(
            `http://localhost:8080/myLibrary/lst_libros.php`
        );

        if (!res.ok) {
            console.log(res);
        }

        const data = await res.json();
        dato = data;
    } catch (error) {
        console.log(error);
        dato = error;
    } finally {
        return dato;
    }
}

const setLibro = async (valores) => {
    let dato = {};
    try {
        const res = await fetch(
            `http://localhost:8080/myLibrary/ins_upd.php` + getValues(valores)
        );

        if (!res.ok) {
            console.log(res);
        }


        dato = res;
    } catch (error) {
        console.log(error);
        dato = error;
    } finally {
        return dato;
    }
}


/**
 * funcion que permite generar los valores get de una url apartir de un objeto {t:xxx, v:xxxx}
 * @param {object} values 
 * @returns {string}
 */
const getValues = (values) => {
    let frist = true;
    let regresa = values.map((e) => {
        let t = "";
        if (!frist) {
            t = "&";
        } else {
            t = "?";
            frist = false;
        }

        return t + e.t + "=" + e.v;

    }).join("");

    return regresa;
}
export default { getList, setLibro };