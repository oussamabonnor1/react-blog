import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory()

    const deleteBlog = () => {
        fetch("http://localhost:8000/blogs/"+blog.id, {
            method: "DELETE"
        }).then(()=>{
            history.push("/")
        })
                        
    }
    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {
                blog &&
                (
                    <article>
                        <h2>{blog.title} | #{blog.id}</h2>
                        <p>{blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={deleteBlog}>delete</button>
                    </article>
                )
            }
        </div>
    );
}

export default BlogDetails;