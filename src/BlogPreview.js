const BlogPreview = ({ blog }) => {

    return (<div className="blog-preview">
        {(blog.title ? <h2>{blog.title}</h2> : <h2>Title</h2>)}
        <p>Written by {blog.author}</p>
    </div>);
}

export default BlogPreview;