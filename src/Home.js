import { useState } from "react"
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "A story about birds", body: "lorem ipsum...", author: "SageModeBoy", id: 1 },
        { title: "A tale about cats", body: "lorem ipsum...", author: "CatBirdMode", id: 2 },
        { title: "A chronicle about bunnies", body: "lorem ipsum...", author: "BunnyBoyBird", id: 3 }
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs}/>
        </div>
    );
}

export default Home;