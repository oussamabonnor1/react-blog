import { useState } from "react";
import { useHistory } from "react-router";
import BlogPreview from "./BlogPreview";

const AddNewBlog = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")

    const history = useHistory()

    let blog = { title, body, author }

    const handleSubmit = (e)=>{
        e.preventDefault();
        blog = { title, body, author }
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        }).then((res)=>{
            console.log(res);
            history.push("/")
        })
    }

    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="SageModeBoy">SageModeBoy</option>
                    <option value="CatBirdMode">CatBirdMode</option>
                    <option value="BunnyBoyBird">BunnyBoyBird</option>
                </select>
                <button>Add Blog</button>
            </form>
            <br />
            <h2>Blog Preview</h2>
            <BlogPreview blog={blog} />
        </div>
    );
}

export default AddNewBlog;