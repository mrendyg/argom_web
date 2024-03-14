import React from "react";

const Form = () => {

    return(
        <>
        <div className="block items-center justify-center m-[3rem] bg-[#f2f2f2] h-[23rem] w-[20rem]">
            <div className="m-2">
                <label htmlFor="nombre" className="font-serif">Nombre:</label>
                <input type="text" id="nombre" name="nombre" className="bg-[#FFFFFF] border border-solid border-[#BDBDBD] focus:border-[#B4D9CB] outline-none px-4 py-2"/>
            </div>
            <div className="m-2">
                <label htmlFor="telefono" className="font-serif" >Telefono:</label>
                <input type="text" id="telefono" name="telefono" className="bg-[#FFFFFF] border border-solid border-[#BDBDBD] focus:border-[#B4D9CB] outline-none px-4 py-2"/>
            </div>
            <div className="m-2">
                <label htmlFor="mensaje" className="font-serif" >Mensaje:</label>
                <input type="text" id="mensaje" name="mensaje" className="bg-[#FFFFFF] h-24 border border-solid border-[#BDBDBD] focus:border-[#B4D9CB] outline-none px-4 py-2"/>

            </div>
            <div className="m-2"> 
                <button className="font-serif p-4 bg-[#F2F2F2] border border-solid border-[#0D0D0D] hover:bg-[#D9D9D9]">Enviar</button>
            </div>
        </div>

        </>
    )
}

export default Form;