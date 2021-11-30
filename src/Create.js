import React, { useState } from "react";
import { useHistory } from "react-router";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuhtor] = useState("Kheem");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory ();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("  http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog Added...!");
      setIsPending(false);
      history.push('/');
    });
  };

  return (
    <div className="create">
      <h2> Add New Blog </h2>
      <form onSubmit={handleSubmit}>
        <label> Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Blog Body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label> Blog Author:</label>
        <select value={author} onChange={(e) => setAuhtor(e.target.value)}>
          <option value="kheem">Kheem</option>
          <option value="vinod">Vinod</option>
        </select>
{     !isPending &&   <button> Add Blog </button> }
{     isPending &&   <button disabled> Adding Blog .... </button> }
      </form>
    </div>
  );
};

export default Create;
