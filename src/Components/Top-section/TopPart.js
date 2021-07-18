import "./TopPart.style.css";

const TopPart = () => {
  return (
    <div className="top-part">
      <div className="top-part-title">
        <h1>
          Experience the most
          <br />
          <span> Beautiful </span> places on the
          <br />
          Earth with us.
        </h1>
        <p>We make sure you enjoy your trips !</p>
        <button>
          Explore <i className="far fa-chevron-right"></i>
        </button>
      </div>
      <div className="video-area">
        <div className="video">
          <div className="video-play">
            <i className="far fa-play"></i>
          </div>
          <iframe
            width="90%"
            height="460"
            src="https://www.youtube.com/embed/SAaevusBnNI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
