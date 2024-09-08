// // EditPost.js
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const Editpost = () => {
//   const { id } = useParams(); // Extract post ID from URL parameters
//   const navigate = useNavigate();
//   const [post, setPost] = useState({ title: '', author_name: '', content: '', user_id: '', email: '' });

//   // Fetch the existing post data when the component loads
//   useEffect(() => {
//     const fetchPost = () => {
//       fetch(`https://backend-i9tl.onrender.com/api/posts/${id}`)
//         .then((response) => response.json())
//         .then((data) => setPost({ title: data.title || '', author_name: data.author_name || '', content: data.content || '', user_id: data.user_id || '', email: data.email || '' }))
//         .catch((error) => console.error('Error fetching post:', error));
//     };

//     fetchPost();
//   }, [id]);

//   // Handle form submission to update the post
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch(`https://backend-i9tl.onrender.com/api/update/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(post),
//     })
//       .then((response) => {
//         if (response.ok) {
//           //navigate('/'); // Redirect to the home page or any other page after successful update
//           alert('Post updated');
//         } else {
//           console.error('Failed to update post');
//           alert('failed to update post');
//         }
//       })
//       .catch((error) => console.error('Error updating post:', error));
//   };

//   return (
//     <div>
//       <h2>Edit Post</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input
//             type="text"
//             value={post.title}
//             onChange={(e) => setPost({ ...post, title: e.target.value })}
//             required
//           />

//           <label>Author: <input type='text' value={post.author_name} onChange={(e) => setPost({...post, author_name: e.target.value })} required
//                            /></label>
//         </label>
//         <br />
//         <label>
//           Content:
//           <textarea
//             value={post.content}
//             onChange={(e) => setPost({ ...post, content: e.target.value })}
//             required
//           />
//         </label>

//         <label>User_id:
//         <input type='password' value={post.user_id} onChange={(e) => setPost({...post, user_id: e.target.value})} required /></label>

//         <label>Email:
//         <input type='email' value={post.email} onChange={(e) => setPost({...post, email: e.target.value})} required
//           />
//         </label>
//         <br />
//         <button type="submit">Update Post</button>
//       </form>
//     </div>
//   );
// };

// export default Editpost;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Editpost = () => {
  const { id } = useParams(); // Get post ID from URL params
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    author_name: '',
    content: '',
    user_id: 0,
    email: ''
  });

  // Fetch the existing post data when the component loads
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://backend-i9tl.onrender.com/api/posts/${id}`);
        if (!response.ok) throw new Error('Failed to fetch post data');
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  // Handle form submission to update the post
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://backend-i9tl.onrender.com/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        alert('Post updated successfully');
        navigate('/'); // Redirect to the home page or any other page after successful update
      } else {
        throw new Error('Failed to update post');
      }
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Failed to update post');
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={post.title || ''}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Author Name:
          <input
            type="text"
            name="author_name"
            value={post.author_name || ''}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            name="content"
            value={post.content || ''}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          User ID:
          <input
            type="number"
            name="user_id"
            value={post.user_id || ''}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={post.email || ''}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default Editpost;