import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, loading, error } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    axios
      .delete("http://localhost:8000/blogs/" + id, { })
      .then(() =>  {
        history.push("/")
      })
  }

  return (
    <div className="blog-details">
      { loading && <div>Loading ...</div> }
      { error && (
        <div className="err">
          <img
            className="error"
            src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
            alt=""
          />
        </div>
      )}
      { blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
