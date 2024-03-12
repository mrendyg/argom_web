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
        <div>
            <div className="w-[50rem] h-[31rem]">
                <img
                    src={selectedImage}
                    alt="imagen_de_carrusel"
                    className={`max-w-500 w-full h-100 object-cover transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setLoaded(true)}
                />
            </div>
            <div className="flex items-center flex-row mt-15">
                <button onClick={previous} className="text-white bg-[#eb118a] px-8 py-2 mx-5">{"<"}</button>
                <button onClick={next} className="text-white bg-[#eb118a] px-8 py-2 mx-5">{">"}</button>
            </div>
        </div>
    );
}

export default Carousel;
