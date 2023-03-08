import { useState } from "react";

const Create =() => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Mario');

console.log(title);
  return (
    <div className="create">
        <h2>Add a new Blog</h2>
        <form> 
          <label>Blog title:</label>
          <input 
            type="text" 
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
            <textarea 
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}/>
        </form>
        <label>Blog author:</label>
        <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        > 
          <option value="mario">Mario</option>
          <option value="lisa">Lisa</option>
        </select>
        <button>Add Block</button>
    </div>
  )
}

export default Create
