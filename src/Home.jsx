import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:8000/blogs/")
      
      .then((d) => {
        const data = d.data;
        setBlogs(data);
        setLoading(false);
        setError(false)
      })
      .catch(()=> {
        setError(true)
        setLoading(false);
        console.log(error);
    })
  }, []);

  return (
    <div className="home">
      {loading && <div>Loading ...</div>}
      {error && <div ><img className="error" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" /></div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
      {/* Filter by author */}
      {/* <BlogList blogs={blogs.filter((e) => e.author === "yoshi")} title={"Yoshi Blogs"}/> */}
    </div>
  );
};

export default Home;
