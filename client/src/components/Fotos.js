import React, { useEffect } from "react";
import "./style/fotos.css";
import Carousel from "react-elastic-carousel";
import { useDispatch } from "react-redux";
import getFotos from "../actions/getFotos";
import {fotosCarrusel} from "../utils"

export default function Fotos() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2 },
  ];
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getFotos());
  }, [dispatch]);

  
  return (
    <div className="divRey">
      <Carousel
        enableAutoPlay
        autoPlaySpeed={4500}
        className="carousel"
        breakPoints={breakPoints}
        >
        {fotosCarrusel.length > 0
          ? fotosCarrusel.map((el, i) => (
                <div  key={i} className="itemCarousel">
                  <img
                    className="img"
                    alt=""
                    src={el.img}
                  />
                </div>
            ))
          : null}
      </Carousel>
    </div>
  );
}
