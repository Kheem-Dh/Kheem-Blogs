import { useHistory, useParams } from "react-router"
import useFetch from './useFetch'
const BlogDetials = () => {
    const {id} = useParams()
    const {data: blog , isPending, error} = useFetch("http://localhost:8000/blogs/" + id)
 const history = useHistory();
    const handleDelete = () =>{
      fetch("http://localhost:8000/blogs/" + id, {
          method: 'DELETE'
      }).then(() => {
          history.push('/');
      })
  }
    return (  
       
        <div className="Blog-details">
            {isPending && <div> Loading .... </div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p> Written By : {blog.author}</p>
                    <div>{blog.body}</div>
                    <button className="Blog-details" onClick= {handleDelete}> Delete This</button>
                </article>
            )}


        </div>
    );
}
 
export default BlogDetials