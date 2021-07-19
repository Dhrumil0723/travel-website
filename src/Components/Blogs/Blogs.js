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
      "https://cdn.discordapp.com/attachments/753151975570276352/866536124222537778/unknown.png",
    userName: "John Doe",
    userJob: "Warrior",
  },
  {
    imgSrc:
      "https://cdn.discordapp.com/attachments/753151975570276352/866614604308938782/unknown.png",
    title:
      "10 Less Visited Offbeat Places in Ladakh That You Must Visit On Your Trip",
    text: "Ladakh, the land of the Lamas, is in itself quite offbeat. While tourism here has picked up, especially for us wanderer folks – there’s still a bunch of infor....",
    userImg:
      "https://cdn.discordapp.com/attachments/753151975570276352/866536124222537778/unknown.png",
    userName: "John Doe",
    userJob: "Warrior",
  },
  {
    imgSrc:
      "https://cdn.discordapp.com/attachments/753151975570276352/866614861118570536/unknown.png",
    title: "Chindi & Karsog – An Offbeat Place Travel Guide [Himachal Pradesh]",
    text: "Ladakh, the land of the Lamas, is in itself quite offbeat. While tourism here has picked up, especially for us wanderer folks – there’s still a bunch of infor....",
    userImg:
      "https://cdn.discordapp.com/attachments/753151975570276352/866536124222537778/unknown.png",
    userName: "John Doe",
    userJob: "Warrior",
  },
];

const blogs2 = [
  {
    imgSrc:
      "https://cdn.discordapp.com/attachments/753151975570276352/866630863185641492/unknown.png",
    title: "Ooty India",
    text: "Ladakh, the land of the Lamas, is in itself quite offbeat. While tourism here has picked up, especially for us wanderer folks – there’s still a bunch of infor....",
    userImg:
      "https://cdn.discordapp.com/attachments/753151975570276352/866536124222537778/unknown.png",
    userName: "John Doe",
    userJob: "Warrior",
  },
  {
    imgSrc:
      "https://cdn.discordapp.com/attachments/753151975570276352/866630945964949514/unknown.png",
    title: "Canal Kruise, Kerala",
    text: "Ladakh, the land of the Lamas, is in itself quite offbeat. While tourism here has picked up, especially for us wanderer folks – there’s still a bunch of infor....",
    userImg:
      "https://cdn.discordapp.com/attachments/753151975570276352/866536124222537778/unknown.png",
    userName: "John Doe",
    userJob: "Warrior",
  },
  {
    imgSrc:
      "https://cdn.discordapp.com/attachments/753151975570276352/866639868137308160/jaipur.jpg",
    title: "Gateway of India, Mumbai",
    text: "Ladakh, the land of the Lamas, is in itself quite offbeat. While tourism here has picked up, especially for us wanderer folks – there’s still a bunch of infor....",
    userImg:
      "https://cdn.discordapp.com/attachments/753151975570276352/866536124222537778/unknown.png",
    userName: "John Doe",
    userJob: "Warrior",
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
