import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(({ id, title, author }) => (
        <Link className="link-wrapper" to={`/blogs/${id}`}>
          <div className="blog-preview" key={id}>
            <h2>{title}</h2>
            <p>Author: {author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
