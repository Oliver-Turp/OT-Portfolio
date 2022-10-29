import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "../../Styles/images__gallery.css";

const Gallery = () => {
  const path = useLocation().pathname;
  const element = path.split("/")[3];
  const type = path.split("/")[4];

  const [genericState, changeGenericState] = useState({
    activeObject: null,
    objects: [
      {
        name: "Random Image",
        src: "https://source.unsplash.com/random/1920x1080/?landscape",
        id: 1,
        active: false,
      },
      {
        name: "Random Image",
        src: "https://source.unsplash.com/random/1920x1080/?landscape",
        id: 2,
        active: false,
      },
      {
        name: "Random Image",
        src: "https://source.unsplash.com/random/1920x1080/?landscape",
        id: 3,
        active: false,
      },
      {
        name: "Random Image",
        src: "https://source.unsplash.com/random/1920x1080/?landscape",
        id: 4,
        active: false,
      },
      {
        name: "Random Image",
        src: "https://source.unsplash.com/random/1920x1080/?landscape",
        id: 5,
        active: false,
      },
      {
        name: "Random Image",
        src: "https://source.unsplash.com/random/1920x1080/?landscape",
        id: 6,
        active: false,
      },
      {
        name: "Random Image",
        src: "https://source.unsplash.com/random/1920x1080/?landscape",
        id: 7,
        active: false,
      },
      {
        name: "Random Image",
        src: "https://source.unsplash.com/random/1920x1080/?landscape",
        id: 8,
        active: false,
      },
      {
        name: "Random Image",
        src: "https://source.unsplash.com/random/1920x1080/?landscape",
        id: 9,
        active: false,
      },
      {
        name: "Random Image",
        src: "https://source.unsplash.com/random/1920x1080/?landscape",
        id: 10,
        active: false,
      },
    ],
  });

  function toggleGenericActive(index) {
    const currentObj = { ...genericState.objects[index] };
    currentObj.active = !currentObj.active;

    const copy = { ...genericState };
    copy.objects.splice(index, 1, currentObj);

    changeGenericState({ ...copy });
  }

  function toggleGenericActiveStyles(index) {
    if (genericState.objects[index].active) {
      return "thumbnail-item clicked";
    } else {
      return "thumbnail-item";
    }
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sandbox | Image Gallery</title>
        </Helmet>
      </HelmetProvider>
      <div className="generic__images-wrap">
        <h3 className="">
          {element}: {type}
        </h3>
        <h6 className="">Welcome To The Sandbox</h6>
        <div className="generic__images-wrap_thumbnail-wrap">
          {genericState.objects.map((image, index) => (
            <div className={toggleGenericActiveStyles(index)} key={index}>
              <img
                src={image.src}
                alt=""
                onClick={() => {
                  toggleGenericActive(index);
                }}
              />
              <p>
                {image.name} {image.id}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
