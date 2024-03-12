import React, { useState } from "react";
import image1 from "../IMG/test/1.jpg";
import image2 from "../IMG/test/2.jpg";
import image3 from "../IMG/test/3.jpg";
import image4 from "../IMG/test/4.jpg";

function Carousel(props: any) {
    const images = [image1, image2, image3, image4];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedImage = images[selectedIndex];

    const selectNewImage = (next = true) => {
        const newIndex = next ? (selectedIndex + 1) % images.length : (selectedIndex - 1 + images.length) % images.length;
        setSelectedIndex(newIndex);
    }

    const previous = () => {
        selectNewImage(false);
    }

    const next = () => {
        selectNewImage();
    }

    return (
        <>
            <img src={selectedImage} alt="imagen_de_carrusel"/>
            <button onClick={previous}>{"<"}</button>
            <button onClick={next}>{">"}</button>
        </>
    )
}

export default Carousel;
