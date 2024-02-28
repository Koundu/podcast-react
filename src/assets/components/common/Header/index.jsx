import React from "react"
import "./styles.css"
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currPath = location.pathname;
  console.log("Current Path is", currPath);
  return (
    <div>
        <div className="gradient"></div>
        <div className="navbar">
            <div className="links">
                <Link to="/" className={currPath == "/" ? "active": ""}>Signup</Link>
                <Link to="/podcasts" className={currPath == "/podcasts" ? "active": ""}>Podcasts</Link>
                <Link to="/create-a-podcast" className={currPath == "/start-podcast" ? "active": ""}>Start A Podcast</Link>
                <Link to="/profile" className={currPath == "/private/profile" ? "active": ""}>Profile</Link>
            </div>
        </div>
    </div>
  )
};

export default Header;
