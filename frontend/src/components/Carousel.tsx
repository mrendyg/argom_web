import React, { useEffect, useState } from "react";
import image1 from "../IMG/test/1.jpg";
import image2 from "../IMG/test/2.jpg";
import image3 from "../IMG/test/3.jpg";
import image4 from "../IMG/test/4.jpg";

interface Props {
    images: string[];
    autoPlay?: boolean;
    showButtons?: boolean;
}

function Carousel(props: Props) {
    const images = [image1, image2, image3, image4];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedImage = images[selectedIndex];
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (props.autoPlay || !props.showButtons) {
          const interval = setInterval(() => {
            selectNewImage(true);
          }, 6000); // Duración de segundos
          return () => clearInterval(interval);
        }
    }, [selectedIndex, props.autoPlay, props.showButtons]);

    const selectNewImage = (next = true) => {
        const newIndex = next ? (selectedIndex + 1) % images.length : (selectedIndex - 1 + images.length) % images.length;
        setSelectedIndex(newIndex);
    }

    const previous = () => {
        selectNewImage(false);
    };
    
    const next = () => {
        selectNewImage(true);
    };

    return (
        <div className="">
            <div className="w-full h-auto overflow-hidden clip-rounded-full">
                <img
                    src={selectedImage}
                    alt="imagen_de_carrusel"
                    className={`max-w-500 w-full object-cover clip-top-bottom transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setLoaded(true)}
                />
                <div className="hidden md:flex">
                    <div className="absolute top-1/2 top-[38rem] left-[0.5rem] transform -translate-y-1/2">
                        <button onClick={previous} className="h-[3rem] w-[3rem] text-[#FFFFFF] text-[2rem] text-center items-center justify-center bg-[#F2F2F2] text-opacity-70 bg-opacity-10 rounded-full hover:bg-opacity-60 hover:text-[#F2F2F2] hover:bg-[#FFFFFF]">{"<"}</button>
                    </div>
                    <div className="absolute top-1/2 top-[38rem] right-[0.5rem] transform -translate-y-1/2">
                        <button onClick={next} className="h-[3rem] w-[3rem] text-[#FFFFFF] text-[2rem] text-center items-center justify-center bg-[#F2F2F2] text-opacity-70 bg-opacity-10 rounded-full hover:bg-opacity-60 hover:text-[#F2F2F2] hover:bg-[#FFFFFF]">{">"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;