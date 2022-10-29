import { useState } from "react";
import { SliderData } from "./SliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="generic__images-slider">
            <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                className="left-arrow"
                onClick={prevSlide}
            />
            <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className="right-arrow"
                onClick={nextSlide}
            />
            <ul>
                {SliderData.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? "slide active" : "slide"}
                            key={index}
                        >
                            {index === current && (
                                <li>
                                    <div className="slide-title">{slide.name} {slide.id}</div>
                                    <img
                                        className="image"
                                        src={slide.src}
                                    />
                                </li>
                            )}
                        </div>
                    );
                })}
            </ul>
        </div>
    )
}

export default ImageSlider