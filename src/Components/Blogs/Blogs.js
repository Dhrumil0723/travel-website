import { useState } from "react";
import BlogCard from "./blogCard/BlogCard";
import "./blogs.style.css";

const blogs1 = [
  {
    imgSrc:
      "https://cdn.discordapp.com/attachments/753151975570276352/866549223997571082/unknown.png",
    title: "Babul Tree in Sarson Ke Khet – Rural Gurgaon",
    text: "The Tree of Life: In Sarson Ke Khets of Gurgaon Don’t get me wrong, I am aware that the tree of life is a mythical tree depicted in art that transcends religion from Jainism, Buddhism, Hind.......",
    userImg:
      "https://cdn.discordapp.com/attachments/856097034037362718/866652629009301524/CamScanner_07-03-2021_13.41.04_1.jpg",
    userName: "Vansh Shah",
    userJob: "PiRO Developer",
  },
  {
    imgSrc:
      "https://cdn.discordapp.com/attachments/753151975570276352/866614604308938782/unknown.png",
    title:
      "10 Less Visited Offbeat Places in Ladakh That You Must Visit On Your Trip",
    text: "Ladakh, the land of the Lamas, is in itself quite offbeat. While tourism here has picked up, especially for us wanderer folks – there’s still a bunch of infor....",
    userImg:
      "https://cdn.discordapp.com/attachments/753151975570276352/866647323622768640/1605498105617.png",
    userName: "Siddhartha",
    userJob: "Bade bhiya",
  },
  {
    imgSrc:
      "https://cdn.discordapp.com/attachments/753151975570276352/866614861118570536/unknown.png",
    title: "Chindi & Karsog – An Offbeat Place Travel Guide [Himachal Pradesh]",
    text: "Chindi, a hamlet in Karsog Valley is unknown and an offbeat place in Himachal Pradesh. And, that is its biggest advantage. Untouched by tourism, Chindi maintains ....",
    userImg:
      "https://cdn.discordapp.com/attachments/753151975570276352/866647532422823946/1625676878105.png",
    userName: "Venom",
    userJob: "The real OG",
  },
];

const blogs2 = [
  {
    imgSrc:
      "https://cdn.discordapp.com/attachments/753151975570276352/866630863185641492/unknown.png",
    title: "My Trip to Ooty, Tamilnadu: A Mesmerizing Experience",
    text: "Ooty, one of the famous tourist places for the honeymooners; the hill station about which we heard for the umpteenth time since childhood; the shooting spot for so many movies; ....",
    userImg:
      "https://cdn.discordapp.com/attachments/753151975570276352/866647555688628224/1586838939841.png",
    userName: "Ankit",
    userJob: "The great titan",
  },
  {
    imgSrc:
      "https://cdn.discordapp.com/attachments/753151975570276352/866630945964949514/unknown.png",
    title: "The thriving port town of Kochi",
    text: "Once the main centre of India’s spice trade, is a unique amalgamation of the old and the new. Take a walk down the rambling alleys of Kochi’s historic Jewish Colony, lined with brightly-painted houses....",
    userImg:
      "https://cdn.discordapp.com/attachments/753151975570276352/866647573276131348/1594219183776.png",
    userName: "Annu",
    userJob: "Team Evolving's didi",
  },
  {
    imgSrc:
      "https://cdn.discordapp.com/attachments/753151975570276352/866639868137308160/jaipur.jpg",
    title: "Jaipur – Off the beaten trail in The ‘Pink’ City",
    text: "India’s official ‘pink city’, there’s much more to Rajasthan’s capital than its pink-red-tinged buildings and historic splendour. This majestic home to erstwhile royals ....",
    userImg:
      "https://cdn.discordapp.com/attachments/753151975570276352/866647592518811648/1619943307826.png",
    userName: "Vinitpal",
    userJob: "Lightning Kirua",
  },
];

const Blogs = () => {
  const [view, setView] = useState(false);

  const handleViewClick = () => {
    setView(!view);
    console.log("pika");
  };

  return (
    <div className="blogs" id="blog">
      <div className="text">
        <h1>Popular Blogs</h1>
        <p>Blogs by the travellers around the globe</p>
      </div>
      <div className="blog-container">
        {blogs1.map((blog, id) => (
          <BlogCard
            key={id}
            imgSrc={blog.imgSrc}
            title={blog.title}
            text={blog.text}
            userImg={blog.userImg}
            userName={blog.userName}
            userJob={blog.userJob}
          />
        ))}
        {view &&
          blogs2.map((blog, id) => (
            <BlogCard
              key={id}
              imgSrc={blog.imgSrc}
              title={blog.title}
              text={blog.text}
              userImg={blog.userImg}
              userName={blog.userName}
              userJob={blog.userJob}
            />
          ))}
      </div>
      <div className="view-more">
        <h3 onClick={() => handleViewClick()}>
          {" "}
          {!view ? "View More" : "Close"}
        </h3>
        <i
          onClick={() => handleViewClick()}
          className={!view ? "far fa-chevron-down" : "far fa-chevron-up"}
        ></i>
      </div>
    </div>
  );
};

export default Blogs;
