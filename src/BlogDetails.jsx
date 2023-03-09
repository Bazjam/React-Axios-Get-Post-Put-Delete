import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const BlogDetails = () => {
  const history = useHistory();
  const [form, setForm] = useState(false);
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const [input, setInput] = useState();
  const [textarea, setTextArea] = useState();
  
  const openForm = () => {
    setForm(true);
  };

  const handleClickChange = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8000/blogs/" + id, {
      title: input,
      body: textarea,
      author: blog.author,
    });
    history.push("/");
  };

  const handleClickDelete = () => {
    axios.delete("http://localhost:8000/blogs/" + id, {}).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {loading && <div>Loading ...</div>}
      {error && (
        <div className="err">
          <img
            className="error"
            src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
            alt=""
          />
        </div>
      )}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Author: {blog.author}</p>
          <div>{blog.body}</div>
          <div>
            <button className="mr" onClick={openForm}>Redact Form</button>
            <button onClick={handleClickDelete}>Delete</button>
          </div>

          {form && (
            <div className="create">
              <form onSubmit={handleClickChange}>
                <h3 style={{textAlign: "-webkit-left"}}>Blog title:</h3>
                <input
                  type="text"
                  placeholder={blog.title}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                
                <h3 style={{textAlign: "-webkit-left"}}>Blog body:</h3>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder={blog.body}
                  value={textarea}
                  onChange={(e) => setTextArea(e.target.value)}
                />
                <br />
                <button>Save</button>
              </form>
            </div>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
