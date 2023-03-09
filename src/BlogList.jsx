import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(({ id, title, author }) => (
        <div className="blog-preview" key={id}>
          <Link to={`/blogs/${id}`}>
            <h2>{title}</h2>
            <p>Author: {author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
