import { useState, useEffect } from "react"
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs").then((res) => {
                return res.json()
            }).then((data) => {
                setBlogs(data)
                setIsLoading(false)
            })
        }, 1000);
    }, [])

    const deleteBlog = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
    }

    return (
        <div className="home">
            {isLoading && <p>Loading...</p>}
            {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog} />}
        </div>
    );
}

export default Home;