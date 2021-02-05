import "../../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import colors from "../../colors";

// animation
import { fadeInDown, rubberBand, lightSpeedIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";

const Navbar = () => {
  // DATA
  const navOptions = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "MYCART",
      link: "/mycart",
    },
    {
      title: "WISHLIST",
      link: "/wishlist",
    },
    {
      title: "ACCOUNT",
      link: "/account",
    },
  
  ];

  // MAIN
  return (
      <nav
      className={ "navbar navbar-expand-lg navbar-light mb-3 fixed-top" }
      style={{ backgroundColor: colors.violet }}
    >
      <div className={css(animation.anm2)}>
        <a className="navbar-brand" href="#">
          <h4 className="mb-0" style={styles.title}>
            <i className="fa fa-shopping-bag text-light mr-3"></i>
            SMART CART
          </h4>
        </a>
      </div>
      <div className={css(animation.anm2)}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className="collapse navbar-collapse justify-content-around"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {navOptions.map((data, i) => {
            return (
              <li className="nav-item active" key={i}>
                <Link className="nav-link text-light" to={data.link}>
                  {data.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Search */}
        <div className={css(animation.anm2)}>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2 text-light"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light my-2 my-sm-0" type="submit">
              <i className="fa fa-search text-light"></i>
            </button>
            {/* <h5 className="my-2 my-sm-0" style={{cursor : 'search'}} onClick={()=>{console.log("Clicked")}} >
          </h5> */}
          </form>
        </div>
        {/* CART */}
        {/* <div> */}

        <div className={css(animation.anm2)}>
          <Link to="/mycart">
            <h5>
              <i className="fa fa-shopping-cart text-light"></i>
              <span className="badge badge-pill badge-info">2</span>
            </h5>
          </Link>
        </div>
        {/* ACCOUNT */}
        <div className={css(animation.anm2)}>
          <Link to="/account">
            <h6 className="text-light">
              <i className="fa fa-user text-light mr-2"></i>
              Prtam
            </h6>
          </Link>
        </div>
        {/*  */}
        {/* </div> */}
      </div>
    </nav>
  );
};

// styles
const styles = {
  title: {
    fontSize: 29,
    fontWeight: 700,
    color: colors.white,
  },
};

// animation
const animation = StyleSheet.create({
  anm1: {
    animationName: fadeInDown,
    animationDuration: "2s",
  },
  anm2: {
    animationName: rubberBand,
    animationDuration: "2.6s",
  },
  anm3: {
    animationName: lightSpeedIn,
    animationDuration: "1.5s",
  },
});

export default Navbar;
