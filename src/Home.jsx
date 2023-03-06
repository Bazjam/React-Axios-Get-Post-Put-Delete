import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

const {data: blogs, loading, error} = useFetch("http://localhost:8000/blogs/")

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
