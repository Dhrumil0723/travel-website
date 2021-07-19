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
      "https://cdn.discordapp.com/attachments/753151975570276352/866549223997571082/unknown.png",
    title: "Babul Tree in Sarson Ke Khet – Rural Gurgaon",
    text: "The Tree of Life: In Sarson Ke Khets of Gurgaon Don’t get me wrong, I am aware that the tree of life is a mythical tree depicted in art that transcends religion from Jainism, Buddhism, Hind.......",
    userImg:
      "https://cdn.discordapp.com/attachments/753151975570276352/866536124222537778/unknown.png",
    userName: "John Doe",
    userJob: "Warrior",
  },
];

const Blogs = () => {
  return (
    <div className="blogs">
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
        <h1>View More</h1>
      </div>
    </div>
  );
};

export default Blogs;