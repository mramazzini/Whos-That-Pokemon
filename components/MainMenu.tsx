"use client";
import Link from "next/link";
import React from "react";

const MainMenu = () => {
  //Stores difficulty in local storage to be later accessed in game
  const handleDifficultyChange = (event: any) => {
    const difficulty = event.target.value;
    localStorage.setItem("difficulty", difficulty);
  };

  return (
    <div className='menu'>
      <div className='menu-header'>
        <div className='menu-header-title'>Pokemon Hub</div>
        <div className='menu-header-subtitle'>Gotta catch em all</div>
      </div>
      <div className='menu-body'>
        <select className='menu-body-item' onChange={handleDifficultyChange}>
          <option value='Easy'>Easy</option>
          <option value='Medium'>Medium</option>
          <option value='Hard'>Hard</option>
          <option value='Expert'>Expert</option>
        </select>
      </div>
      <Link href='/game' className='menu-button'>
        Play Game
      </Link>
    </div>
  );
};

export default MainMenu;
