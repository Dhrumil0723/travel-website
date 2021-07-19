import BlogCard from "./blogCard/BlogCard";
import "./blogs.style.css";

const blogs = [
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

const Blogs = () => {
  return (
    <div className="blogs" id="blog">
      <div className="text">
        <h1>Popular Blogs</h1>
        <p>Blogs by the travellers around the globe</p>
      </div>
      <div className="blog-container">
        {blogs.map((blog, id) => (
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
        <h3>View More</h3>
        <i className="far fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default Blogs;
