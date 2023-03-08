import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create =() => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Mario');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setLoading(true)
    setTimeout(()=>{

      axios.post('http://localhost:8000/blogs', {
        title,
        body,
        author
      })
      .then(function (response) {
        console.log(response);
        setLoading(false)
        history.push("/")
      })
    },1000)
  }

  return (
    <div className="create">
        <h2>Add a new Blog</h2>
        <form onSubmit={handleSubmit}> 
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
          <label>Blog author:</label>
          <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          > 
            <option value="mario">Mario</option>
            <option value="lisa">Lisa</option>
          </select>
          {!loading && <button>Add Block</button>}
          {loading && <button disabled>Adding blog...</button>}
        </form>
    </div>
  )
}

export default Create
