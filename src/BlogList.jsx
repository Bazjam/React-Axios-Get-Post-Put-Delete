const BlogList = ({ blogs, title }) => {


  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map(({id, title, author}) => (
        <div className="blog-preview" key={ id }>
          <h2>{ title }</h2>
          <p>Written by { author }</p>
          <button>Delete</button>
          </div>
      ))}
    </div>
  );
};

export default BlogList;
