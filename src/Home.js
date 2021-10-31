
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs")

    return (
        <div className="home">
            {error && <p>{error}</p> }
            {isLoading && <p>Loading...</p>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;