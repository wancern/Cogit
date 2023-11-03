'use client';

import React, { useState } from 'react';
import ProfileMenu from './ProfileMenu';
import EditNickname from './EditNickname';


function Profile() {
  const [showMenu, setMenu] = useState(false);
  const [showEditNickname, setShowEditNickname] = useState(false);


  const onClick = () => {
    setMenu((prev) => !prev);  
  };

  const onClickEditNickname = () => {
    setShowEditNickname((prev) => !prev);
    setMenu((prev) => !prev);
  };

  return (
    <div>
      <button className="w-10 h-10 text-xl font-bold text-white rounded-full bg-hover" onClick={onClick}>
        <span className="relative mb-1">닉</span>
      </button>
      {showMenu && (
        <ProfileMenu onClickEditNickname={onClickEditNickname} onCloseMenu={() => setMenu(false)} />
      )}
      {showEditNickname && (
        <EditNickname isOpen={showEditNickname} onClose={() => setShowEditNickname(false)} />
      )}

    </div>
  );
}

export default Profile;
