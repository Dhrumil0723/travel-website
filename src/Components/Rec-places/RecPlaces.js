import "./RecPlaces.style.css";
import Card from "../Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const RecPlaces = () => {
  const places = [
    {
      name: "Taj Mahal",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866485799548354560/unknown.png",
    },
    {
      name: "Taj Mahal",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866485799548354560/unknown.png",
    },
    {
      name: "Taj Mahal",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866485799548354560/unknown.png",
    },
    {
      name: "Taj ",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866485799548354560/unknown.png",
    },
  ];

  return (
    <div className="RecPlaces">
      <div className="text">
        <h1>Places We Recommend !</h1>
        <p>Places worth visiting in India</p>
      </div>
      <div className="rec-places-list">
        <Carousel
          centerMode={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {places.map((place, id) => (
            <Card key={id} cardText={place.name} imgSrc={place.image} />
          ))}
        </Carousel>
      </div>
      <div className="btm-design">
        <button>View All</button>
        {/* <img src="./assets/bgImage.png" alt="vector" /> */}
      </div>
    </div>
  );
};

export default RecPlaces;
