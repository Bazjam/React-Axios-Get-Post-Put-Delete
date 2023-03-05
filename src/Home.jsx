import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipum...", author: "mario", id: 3 },
  ]);

  console.log(blogs);

  return (
    <div className="home">
      {blogs.map(e => (
        <div className="blog-preview" key={e.id}>
          <h2>{e.title}</h2>
          <p>Written byt {e.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
