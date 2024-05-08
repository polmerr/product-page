import React, { useEffect, useState } from "react";
import "./ProductDisplay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import sneaker1 from "../../assets/images/image-product-1.jpg";
import sneaker2 from "../../assets/images/image-product-2.jpg";
import sneaker3 from "../../assets/images/image-product-3.jpg";
import sneaker4 from "../../assets/images/image-product-4.jpg";
import thumbnail1 from "../../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../assets/images/image-product-4-thumbnail.jpg";
import next from "../../assets/images/icon-next.svg";
import previous from "../../assets/images/icon-previous.svg";
import cross from "../../assets/images/icon-close.svg";

function ProductDisplay() {
  const imgGallery = [sneaker1, sneaker2, sneaker3, sneaker4];
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
  const [lightBox, setLightBox] = useState(false);
  const [thumbnail, setThumbnail] = useState(1);
  const [mainSrc, setMainSrc] = useState(imgGallery[0]);

  const handleSlideThumbnail = (dir = "") => {
    let index = imgGallery.indexOf(mainSrc);

    dir === "prev"
      ? setMainSrc((prev) =>
          imgGallery.indexOf(prev) === 0
            ? imgGallery[imgGallery.length - 1]
            : imgGallery[imgGallery.indexOf(prev) - 1]
        )
      : dir === "next"
      ? setMainSrc((prev) =>
          imgGallery.indexOf(prev) === imgGallery.length - 1
            ? imgGallery[0]
            : imgGallery[imgGallery.indexOf(prev) + 1]
        )
      : "";
  };

  return (
    <div className="gallery">
      <div className="image-gallery">
        <img
          className="main-display img-click noSelect"
          onClick={() => {
            setLightBox((prev) => !prev);
          }}
          src={mainSrc}
          alt=""
        />
        <div className="thumbnails">
          <img
            className={`${
              thumbnail === 1 && lightBox === false
                ? "thumbnail-select noSelect"
                : "noSelect"
            }`}
            src={thumbnail1}
            onClick={() => {
              setThumbnail(1);
              setMainSrc(imgGallery[0]);
            }}
            alt=""
          />
          <img
            className={`${
              thumbnail === 2 && lightBox === false
                ? "thumbnail-select noSelect"
                : "noSelect"
            }`}
            src={thumbnail2}
            onClick={() => {
              setThumbnail(2);
              setMainSrc(imgGallery[1]);
            }}
            alt=""
          />
          <img
            className={`${
              thumbnail === 3 && lightBox === false
                ? "thumbnail-select noSelect"
                : "noSelect"
            }`}
            src={thumbnail3}
            onClick={() => {
              setThumbnail(3);
              setMainSrc(imgGallery[2]);
            }}
            alt=""
          />
          <img
            className={`${
              thumbnail === 4 && lightBox === false
                ? "thumbnail-select noSelect"
                : "noSelect"
            }`}
            src={thumbnail4}
            onClick={() => {
              setThumbnail(4);
              setMainSrc(imgGallery[3]);
            }}
            alt=""
          />
        </div>
        <FontAwesomeIcon
          className="next"
          onClick={() => handleSlideThumbnail("next")}
          icon={faChevronRight}
        />
        <FontAwesomeIcon
          className="prev"
          icon={faChevronLeft}
          onClick={() => handleSlideThumbnail("prev")}
        />
      </div>
      <div className={`light-box ${lightBox ? "" : "hidden"}`}>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => {
            setLightBox((prev) => !prev);
            setMainSrc(imgGallery[thumbnail - 1]);
          }}
          className="cross"
        />
        <div className="image-gallery">
          <div className="main-light">
            <img
              className="main-display light noSelect"
              src={imgGallery[thumbnail - 1]}
              alt=""
            />
            <FontAwesomeIcon
              className="light-next"
              onClick={() =>
                setThumbnail((prev) =>
                  prev === thumbnails.length ? 1 : prev + 1
                )
              }
              icon={faChevronRight}
            />
            <FontAwesomeIcon
              className="light-prev"
              onClick={() =>
                setThumbnail((prev) =>
                  prev === 1 ? thumbnails.length : prev - 1
                )
              }
              icon={faChevronLeft}
            />
          </div>

          <div className="thumbnails-light">
            <div>
              <img
                className={`${
                  thumbnail === 1 ? "thumbnail-select noSelect" : "noSelect"
                }`}
                src={thumbnail1}
                alt=""
                onClick={() => setThumbnail(1)}
              />
            </div>
            <div>
              <img
                src={thumbnail2}
                className={`${
                  thumbnail === 2 ? "thumbnail-select noSelect" : "noSelect"
                }`}
                alt=""
                onClick={() => setThumbnail(2)}
              />
            </div>
            <div>
              <img
                src={thumbnail3}
                className={`${
                  thumbnail === 3 ? "thumbnail-select noSelect" : "noSelect"
                }`}
                alt=""
                onClick={() => setThumbnail(3)}
              />
            </div>
            <div>
              <img
                src={thumbnail4}
                className={`${
                  thumbnail === 4 ? "thumbnail-select noSelect" : "noSelect"
                }`}
                alt=""
                onClick={() => setThumbnail(4)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`panel ${lightBox ? "" : "hidden"}`}></div>
    </div>
  );
}

export default ProductDisplay;
