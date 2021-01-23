import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addPost } from '../actions/post';

const AddPost = (props) => {
  const dispatch = useDispatch();
  const { posts, postError } = useSelector((state) => state.post);

  const [formData, setFormData] = useState({
    title: '',
    desc: '',
  });

  const { title, desc } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(formData));
    props.history.push('/');
  };

  return (
    <div className='container'>
      <form className='post-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <p className='form-label'>Title</p>
          <input
            type='text'
            name='title'
            value={title}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <p className='form-label'>Body</p>
          <textarea
            className='form-control text-area'
            name='desc'
            value={desc}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type='submit' className='add-btn'>
          Submit
        </button>
        <Link to='/' className='post-btn'>
          Go back
        </Link>
      </form>
    </div>
  );
};

export default withRouter(AddPost);
