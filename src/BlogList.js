import { Link } from "react-router-dom";
import BlogPreview from "./BlogPreview";

const BlogList = ({ blogs }) => {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <Link to={`/blogs/${blog.id}`}  key={blog.id}>
                    <BlogPreview blog={blog} />
                </Link>
            ))}
        </div>
    );
}

export default BlogList;