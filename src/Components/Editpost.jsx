import React, { useState } from 'react';
import axios from 'axios';

const Editpost = ({ postId }) => {
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`https://backend-i9tl.onrender.com/api/edit/${postId}`, {
        title,
        author_name: authorName,
        content,
        user_id: userId,
        email,
        category
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
      />
      <input
        type="text"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        placeholder="Post Author"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post Content"
      />
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Author Email"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Post Category"
      />
      <button onClick={handleUpdate}>Update Post</button>
    </div>
  );
};

export default Editpost;