import  {useState} from "react"
const Home = () => {
    const [name, setName] = useState("SageModeBoy")
    const [level, setLevel] = useState(1)

    const handleClick = (name, e) => {
        setName("SageModeBeast")
        setLevel(100)
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <h4>{name} is level {level}</h4>
            <button onClick={(e) => handleClick("SageModeBoy",e)
            }>Refresh Posts</button>
        </div>
    );
}

export default Home;