import "./destination.style.css";
import Card from "../../Card/Card";

const Destination = () => {
  const destinationCards = [
    {
      cardText: "Delhi",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866270198931521566/unknown.png",
    },
    {
      cardText: "Delhi",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866270198931521566/unknown.png",
    },
    {
      cardText: "Delhi",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866270198931521566/unknown.png",
    },
    {
      cardText: "Delhi",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866270198931521566/unknown.png",
    },
    {
      cardText: "Delhi",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866270198931521566/unknown.png",
    },
    {
      cardText: "Delhi",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866270198931521566/unknown.png",
    },
    {
      cardText: "Delhi",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866270198931521566/unknown.png",
    },
    {
      cardText: "Delhi",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866270198931521566/unknown.png",
    },
    {
      cardText: "Delhi",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866270198931521566/unknown.png",
    },
    {
      cardText: "Delhi",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866270198931521566/unknown.png",
    },
    {
      cardText: "Delhi",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866270198931521566/unknown.png",
    },
    {
      cardText: "Delhi",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866270198931521566/unknown.png",
    },
  ];

  return (
    <div className="destination">
      <div className="destination-wrapper">
        <div className="destination-heading">
          <h2>Travel Destinations you would like to visit in India!</h2>
        </div>
        <div className="destination-card-container">
          {destinationCards.map((card, i) => (
            <Card key={i} cardText={card.cardText} imgSrc={card.cardImg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
