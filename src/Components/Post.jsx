import React from "react";

const Post = ({posts}) => {
    return (
        <>
        <h2>Your post</h2>
        {postMessage.length > 0 ? (
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <p><small>{new Date(post.created_at).toLocaleString()}</small></p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No posts available.</p>
        )}
        </>
    )
}

export default Post;