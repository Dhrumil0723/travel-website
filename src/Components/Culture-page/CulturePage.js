import Card from "../Card/Card";
import "./culture-page.style.css";

const cultureImages = [
  {
    text: "Festivals",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866522596144840744/unknown.png",
  },
  {
    text: "Culture",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866522596144840744/unknown.png",
  },
  {
    text: "Culture",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866522596144840744/unknown.png",
  },
  {
    text: "Culture",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866522596144840744/unknown.png",
  },
  {
    text: "Culture",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866522596144840744/unknown.png",
  },
  {
    text: "Culture",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866522596144840744/unknown.png",
  },
  {
    text: "Culture",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866522596144840744/unknown.png",
  },
  {
    text: "Culture",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866522596144840744/unknown.png",
  },
];

const CulturePage = () => {
  return (
    <div className="culture-page">
      <h1>India's Culture</h1>
      <div className="card-grid">
        {cultureImages.map((element, id) => (
          <div>
            <Card key={id} imgSrc={element.image} cardText={element.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturePage;
