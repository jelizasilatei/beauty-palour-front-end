import React, { useState } from 'react';
import "../css/comments.css"

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    comment: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new comment object
    const newComment = {
      name: formData.name,
      comment: formData.comment,
      date: new Date().toLocaleDateString()
    };

    // Add the new comment to the comments array
    setComments([...comments, newComment]);

    // Clear the form data
    setFormData({
      name: '',
      comment: ''
    });
  };

  return (
    <div className="comment-section">
      <h3>Comment Section</h3>
      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index} className="comment-item">
            <div className="comment-info">
              <span className="author">{comment.name}</span>
              <span className="date">{comment.date}</span>
            </div>
            <div className="comment-text">{comment.comment}</div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required /><br/><br/>
        </label>
        <label>
          Comment:
          <textarea name="comment" value={formData.comment} onChange={handleInputChange} required></textarea><br/><br/><br/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentSection;
