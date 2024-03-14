import React from "react";

const Form = () => {

    return(
        <>
        <div className="block">
            <div className="m-2">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" />
            </div>
            <div className="m-2">
                <label for="telefono" >Telefono:</label>
                <input type="text" id="telefono" name="telefono"/>
            </div>
            <div className="m-2">
                <label for="mensaje">Mensaje:</label>
                <input type="text" id="mensaje" name="mensaje"/>
            </div>
        </div>

        <button className="p-4 bg-white">Enviar</button>
        </>
    )
}

export default Form;