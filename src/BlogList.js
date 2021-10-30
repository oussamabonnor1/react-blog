const BlogList = ({blogs, deleteBlog}) => {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={()=> deleteBlog(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;