import React, { useState } from 'react';

const UserProfile = ({ user }) => {
  const [avatar, setAvatar] = useState(user.avatar || '');
  
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-end items-end">
      <div className="mr-4">
        <img
          src={avatar || 'https://via.placeholder.com/150'}
          alt="User Avatar"
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold">{user.name}</h2>
        <input type="file" accept="image/*" onChange={handleAvatarChange} className="mt-2" />
      </div>
    </div>
  );
};

export default UserProfile;
