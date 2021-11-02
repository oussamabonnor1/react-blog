import { useHistory } from "react-router";

const NotFound = () => {

    const history = useHistory()
    
    setTimeout(() => {
        history.push("/")
    }, 1000);

    return (
        <div className="not-found">
            <h2>Page Not Found | 404</h2>
            <p>Redirecting you...</p>
        </div>
    );
}

export default NotFound;