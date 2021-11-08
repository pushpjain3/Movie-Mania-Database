import React, { Fragment } from "react";
import { FaUser, FaCog } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiMailOpen, HiOutlinePlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { AiTwotoneHeart } from "react-icons/ai";

// const guestLinks = (
//   <ul>
//     <li>
//       <Link to="/register">Register</Link>
//     </li>
//     <li>
//       <Link to="/login" className="btn btn-primary">
//         Login
//       </Link>
//     </li>
//   </ul>
// );

const authLinks = (
  <Fragment>
    <ul>
      <li>
        <div className="dropdown">
          <button className="dropbtn">
            <div className="nav-profile">
              <img
                className="nav-profile-img"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Profile Pic"
              />
              <h3 className="nav-username">John Doe</h3>
            </div>
          </button>
          <div className="dropdown-content">
            <Link to="/profile">
              <i>
                <FaUser />
              </i>
              Profile
            </Link>
            <Link to="/settings">
              <i>
                <HiOutlinePlusCircle />
              </i>
              Watchlist
            </Link>
            <Link to="/contact">
              <i>
                <AiTwotoneHeart />
              </i>
              Favourites
            </Link>
            <Link to="/">
              <i>
                <FiLogOut />
              </i>
              Sign Out
            </Link>
          </div>
        </div>
      </li>
    </ul>
  </Fragment>
);

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="navbar-brand">
        <ul>
          <li>
            <Link to="/">
              <i>
                <BiCameraMovie />
              </i>
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/">TV Shows</Link>
          </li>
        </ul>
      </div>
      {authLinks}
    </nav>
  );
};

export default Navbar;
