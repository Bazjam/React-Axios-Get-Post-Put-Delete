import axios from "axios";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

console.log(blogs);

  const handleClick = () => {
    axios
      .delete("http://localhost:8000/blogs/", { })
      .then(()=> {
        console.log(`Deleted`);
      })
  }
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(({ id, title, author }) => (
        <div className="blog-preview" key={id}>
          <Link to={`/blogs/${id}`}>
            <h2>{title}</h2>
            <p>Written by {author}</p>
          </Link>
          {/* <button onClick={handleClick}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
