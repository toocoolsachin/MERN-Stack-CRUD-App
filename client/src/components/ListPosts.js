import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../actions/post';

const ListPosts = () => {
  const dispatch = useDispatch();
  const { posts, postError } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return postError ? (
    <h1>Error in fetching posts</h1>
  ) : (
    <div className='container'>
      <div className='flex-center'>
        <h1 className='list-post'>Posts</h1>
        <Link to='/add-post' className='post-btn'>
          Create Post
        </Link>
      </div>
      {posts?.map((post) => (
        <div key={post._id} className='post-card'>
          <h2 className='post-title'>{post.title}</h2>
          <p className='post-desc'>{post.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ListPosts;
