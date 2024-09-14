import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Editpost = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState({
    title: "",
    author_name: "",
    content: "",
    user_id: "",
    email: "",
    category: ""
  });
  
useEffect(() => {
  const handleUpdate = async () => {
    try {
      const response = await axios.get(`https://backend-i9tl.onrender.com/api/posts/${id}`);
     setPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };
  handleUpdate();
}, [id]);

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-danger bg-gradient fixed-top">
        <div className="container-fluid">
          <span
            href="#"
            className="navbar-brand"
            style={{ fontSize: "1.6rem", fontWeight: "bold" }}
          >
         <i class="bi bi-cup-hot"></i>   Bankky <small>Blog.</small>
          </span>
          <button
            className="navbar-toggler bg-light bg-gradient"
            type=" button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav">
              <hr />
              <Link to="/" className="link">
                <li className="nav-item">
                  <span className="nav-link">HOME</span>
                </li>
              </Link>
              <Link to="/" className="link">
                <li className="nav-item">
                  <span className="nav-link">
                    <span>ABOUT Us</span>
                  </span>
                </li>
              </Link>
              <Link to="/AllPost" className="link">
                <li className="nav-item">
                  <span className="nav-link">BLOG</span>
                </li>{" "}
              </Link>
              <Link to="/" className="link">
                <li className="nav-item">
                  <span className="nav-link">
                    <span> SERVICE </span>
                  </span>
                </li>
              </Link>

              <li className="nav-item">
                    <div className="dropdown">
                  <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="">
                  My Account
                  </span>
                      <ul className="dropdown-menu">
                      <Link to="/Password" className={"link"}>
                        <li className={"border-bottom"}><span className="dropdown-item">Logout</span></li>
                      </Link>
                       
                      </ul>
                    </div>
                  </li>

              <Link to="/Contact" className="link">
                <button className="btn bg-light text-dark rounded-pill ">
                  LET'S TALK
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>


      <div className="container-fluid bg-light">
      <h2>Edit Post</h2>
      <input
        type="text"
        value={posts.title}
        onChange={(e) => setPosts({ ...posts, title: e.target.value})}
        placeholder="Post Title"
      />
      <input
        type="text"
        value={posts.author_name}
        onChange={(e) => setPost({ ...posts, author_name: e.target.value})}
        placeholder="Post Author"
      />
      <textarea
        value={posts.content}
        onChange={(e) => setPosts({ ...posts, content: e.target.value})}
        placeholder="Post Content"
      />
      <input
        type="text"
        value={posts.user_id}
        onChange={(e) => setPosts({ ...posts, user_id: e.target.value})}
        placeholder="User ID"
      />
      <input
        type="email"
        value={posts.email}
        onChange={(e) => setPosts({ ...posts, user_id: e.target.value})}
        placeholder="Author Email"
      />
    
     <label htmlFor="category" className="form-label">
          Category:*
        </label>
        <select id="category" className="form-control mb-3 bg-light" value={posts.category} onChange={(e) => setPosts({...posts, category: e.target.value})}  required>
        <option>~~~</option>
          <option>Recipes & Cooking Tips</option>
          <option>Restaurant Reviews</option>
          <option>Healthy Eating</option>
          <option>Food Trends & News</option>
        </select>
        
      <button>Update Post</button>
        </div>

      
    </div>
  );
};

export default Editpost;
