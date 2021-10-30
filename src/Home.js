import { useState, useEffect } from "react"
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "A story about birds", body: "lorem ipsum...", author: "SageModeBoy", id: 1 },
        { title: "A tale about cats", body: "lorem ipsum...", author: "CatBirdMode", id: 2 },
        { title: "A chronicle about bunnies", body: "lorem ipsum...", author: "BunnyBoyBird", id: 3 }
    ])

    const [name, setName] = useState("SageModeBoy")

    useEffect(() => {
        console.log("Use Effect Ran ", name);
    }, [name])

    const deleteBlog = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} deleteBlog={deleteBlog} />
            <footer><p>Created by {name}</p> <button onClick={() => setName("SageModeBeast")}>Boost</button></footer>
        </div>
    );
}

export default Home;