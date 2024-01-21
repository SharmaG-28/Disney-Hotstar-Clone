import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import user from "../images/user.png";
import searchIcon from "../images/search.png";
import homeIcon from "../images/home.png";
import movieIcon from "../images/movie.png";
import tvIcon from "../images/tv.png";
import logOut from "../images/out.png"
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/setup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface NavbarProps {
  setMenu: (menu: string) => void;
  setSearch: (search: boolean) => void;
  search: boolean;
  searchRef: React.RefObject<HTMLInputElement>;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const [touch, setTouch] = useState(false);

  const logout = async() => {
    try{
        await signOut(auth)
        !auth.currentUser && toast.success("Logged Out Successfully")
    }
    catch(err){
        console.error(err);
    }
  }

  return (
    <div className={`z-20 fixed grid grid-cols-2 bg-black h-screen w-28 ${touch ? 'touch-active' : ''}`}>
      <div onMouseEnter={() => setTouch(true)} onMouseLeave={() => setTouch(false)}>
        <img src={logo} className='w-32 ml-5 mt-5' alt="logo" />
        <Link to="/signin">
          <img src={user} className='w-8 ml-8 mt-10 cursor-pointer' alt="user" />
        </Link>
        <img
          onClick={() => {
            setTimeout(() => {
              props.searchRef?.current?.focus();
            }, 1);
            props.setSearch(!props.search);
          }}
          src={searchIcon}
          className='w-11 ml-7 mt-11 cursor-pointer'
          alt="search"
        />
        <img
          src={homeIcon}
          onClick={() => {
            props.setSearch(false);
            props.setMenu("home");
          }}
          className='w-10 ml-7 mt-7 cursor-pointer'
          alt="home"
        />
        <img
          src={movieIcon}
          onClick={() => {
            props.setSearch(false);
            props.setMenu("movie");
          }}
          className='w-15 ml-5 mt-9 cursor-pointer'
          alt="movie"
        />
        <img
          src={tvIcon}
          onClick={() => {
            props.setSearch(false);
            props.setMenu("tv");
          }}
          className=' w-12 ml-6 mt-8 cursor-pointer'
          alt="tv"
        />
        {auth.currentUser && <img
          src={logOut}
          onClick={logout}
          className='w-16 ml-6 mt-8 cursor-pointer'
          alt="logOut"
        />}
      </div>
      {touch && (
        <div
          className='z-20 ml-8 w-20 h-screen font-bold text-base text-slate-300'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        >
          <h4 className=' mt-24 '>Signin</h4>
          <h4 className='mt-14'>Search</h4>
          <h4 className='mt-12'>Home</h4>
          <h4 className='mt-11'>Movie</h4>
          <h4 className='mt-10'>TV</h4>
          {auth.currentUser && <h4 className='mt-9'>LogOut</h4>}
        </div>
      )}
    </div>
  );
};

export default Navbar;
