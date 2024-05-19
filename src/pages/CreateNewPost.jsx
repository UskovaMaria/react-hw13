import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const CreateNewPost = () => {
  const navigate = useNavigate();
  const { signout } = useAuth();

  const handleLogout = () => {
    signout(() => navigate('/login'));
  };

  return (
    <div className="create-new-post-page">
      <h1>Create new post</h1>
      <button onClick={handleLogout}>Вийти</button>
    </div>
  );
};