import React from "react";

const FeaturedProducts = () => {

    return(
        <>
        <div className="w-full h-full bg-[#F2F2F2]">
            <h1 className="font-serif text-[3rem] text-center">Productos Destacados</h1>
            <div className="md:flex justify-center  sm:block">
                <div>
                    <img src="src/IMG/test/5.jpg" alt="produto1" width={300} height={499} className="m-[3rem]"/>
                </div>
                <div>
                    <img src="src/IMG/test/6.jpg" alt="produto2" width={300} height={499} className="m-[3rem]"/>
                </div>
                <div>
                    <img src="src/IMG/test/7.jpg" alt="produto3" width={300} height={499} className="m-[3rem]"/>
                </div>
            </div>
           
        </div>
        </>
    )
}

export default FeaturedProducts;