import React from "react"
import { Link, useHistory} from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => { 
    const history = useHistory()
    const handleLogOut = () => {
        localStorage.removeItem("lu_token")
        history.push("/login")
    }

    return (
        <ul className="navbar">
             {/* <li className="navbar__item">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>  */}
             <li className="navbar__item active">
                <Link className="navbar__link" to="/">HOME!</Link>
            </li>
           
            <li className="navbar__item">
                <Link className="navbar__link" to="/candles">Make Your Candle</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/supports">Support</Link>
            </li>
            
            <li className="navbar__item">
                <button onClick={handleLogOut}>Log Out</button>
                {/* <Link className="navbar__link" to="/login">LogOut</Link> */}
            </li> 
        </ul>
    )
}