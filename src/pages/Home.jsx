import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const user = useState({})
    const navigate = useNavigate();
    useEffect(()=> {
        navigate("/auth")
    }, [])
    return (
        <div className="bg-red-400">
            This is the home page
        </div>
    )
}

export default Home;