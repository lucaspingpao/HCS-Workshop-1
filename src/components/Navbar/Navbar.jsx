import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Lucas Pao</h1>
        <div className="info-bar">
          <p className="info-item">lucaspao@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
              className="info-link"
              to={{ pathname: "https://instagram.com/paopianocovers"}}
              target="_blank"
          >
          Instagram
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://www.youtube.com/channel/UCm0a7WR5C2684z6fL5XNodw"}}
            target="_blank"
          >
          YouTube
          </Link>
          <Link
              className="info-link"
              to={{ pathname: "https://github.com"}}
              target="_blank"
          >
          Github
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <Link className="nav-link" to={{ pathname: "/about" }}>About</Link>
        <Link className="nav-link" to={{ pathname: "/experience" }}>Experience</Link>
        <Link className="nav-link" to={{ pathname: "/projects" }}>Projects</Link>
        <Link className="nav-link" to={{ pathname: "/education" }}>Education</Link>
      </div>
    </>
  );
}
