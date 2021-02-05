import { useState } from "react";
import colors from "../../colors";

import { Link } from "react-router-dom";
// animation
import { fadeInDown, fadeInLeft, fadeOutRight } from "react-animations";
import { StyleSheet, css } from "aphrodite";
// import fadeIn from "react-animations/lib/fade-in";
import fadeInRight from "react-animations/lib/fade-in-right";
// toaser
import Toster from "toastr";
Toster.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-bottom-center",
  preventDuplicates: true,
  onclick: null,
  showDuration: "200",
  hideDuration: "1000",
  timeOut: "2000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

const Home = () => {
  //DATA
  const isEmpty = false;
  const a = [1, 2, 3, 4, 5, 6];
  const c = [1, 2, 3, 4];
  // data
  const data = {
    name: "Seagate Ultra Touch 2 TB External Hard Disk Drive  (Black)",
    description:
      "With this hard disk from Seagate, you can carry your digital life with you wherever you go. With the USB-C and USB 3.0 compatibility, you can just plug and play the files on the hard disk seamlessly on your Windows and Mac computers. Your sensitive and personal information will be safe, thanks to the Seagate Secure feature.",
    price: 7999,
    discount: 31,
    deliveryCharge: 45,
  };
  //
  const discountCal = (num, dis) => {
    return Math.floor(num - num * (dis / 100));
  };

  const [isInWish, setIsInWish] = useState(false);
  const handleAddToWish = () => {
    // console.log(isInWish);
    const flag = !isInWish;
    setIsInWish(flag);
    !isInWish
      ? Toster.success("Added To Wishlist")
      : Toster.error("Removed From Wishlist");
  };

  // COMPONENT
  // WISH LOVE BTN
  const WishBtn = (flag) => {
    return (
      <div style={styles.floating} className={css(animation.anm5)}>
        <div
          className="float-right card px-1 py-0 m-2"
          style={{ borderRadius: 50 }}
        >
          <h6
            className="mb-0 pb-1 text-center m-auto"
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleAddToWish();
            }}
          >
            {flag ? (
              <img
                className={css(animation.anm5)}
                style={{ height: 16 }}
                src="/love1.png"
              />
            ) : (
              <img
                className={css(animation.anm5)}
                style={{ height: 16 }}
                src="/love0.png"
              />
            )}
          </h6>
        </div>
      </div>
    );
  };

  // Cart Item
  const CartItem = (i) => {
    return (
      <div key={i} className="col-lg-2 col-md-3 col-sm-4 p-1 ">
        <div className={css(animation.anm1)}>
          {/* <div className="row mx-0"> */}
          {/*  */}
          <div className="card">
            <div style={{ height: "auto" }}>
              {WishBtn(isInWish)}
              <img
                className="m-auto"
                style={styles.image}
                src="/loding7.gif"
                alt="Product sample photo"
              />
            </div>
            <div className="card-body py-1 px-1 text-center">
              <Link to="/info/id">
                <h6
                  className="mb-1"
                  style={{
                    color: colors.deepBlue,
                    fontWeight: 450,
                    fontSize: 13,
                  }}
                >
                  {data.name.substr(0, 35) + ".."}
                </h6>
              </Link>
              <h6 className="mb-1" style={{ color: colors.black }}>
                <span className="badge badge-warning px-2 py-1">
                  4.2
                  <i className="fa fa-star pl-1"></i>
                </span>{" "}
                <span className="text-secondary" style={{ fontSize: 13 }}>
                  (1209)
                </span>
              </h6>

              <p
                style={{ fontWeight: 600, fontSize: 14 }}
                className="text-dark mb-1"
              >
                &#8377;{discountCal(data.price, data.discount)}{" "}
                <span
                  style={{
                    fontSize: 13,

                    color: "#a7a7a7",
                    textDecoration: "line-through",
                  }}
                >
                  &#8377;{data.price}
                </span>{" "}
                <span className="text-success" style={{ fontSize: 13 }}>
                  {data.discount}% off
                </span>
              </p>
            </div>
          </div>
          {/*  */}
        </div>
        {/* </div> */}
      </div>
    );
  };

  ///////////////////
  const CategoryHeader = (i) => {
    return (
      <div key={i} className="col-12 px-1">
        <div className={css(animation.anm10)}>
          <div className="card">
            <div className="card-header py-2">
              <div className="container">
                <h5 className="mb-0 text-secondary m-auto "  >
                 <span style={{ fontWeight: 700 }} > MY CATEGORY</span>
                <button className="btn btn-info active float-right mb-0 py-2" style={{ fontSize: 10 }}>View all</button></h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mx-0 ">
            {a.map((d, j) => {
              return CartItem(j);
            })}
          </div>
        </div>
      </div>
    );
  };

  // #######
  return (
    <div className="row mx-0">
      <div className="col px-1">
        {c.map((d, i) => {
          return (
            <div key={i} className="row mx-0 justify-content-center mb-4">
              {CategoryHeader(i)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: "auto",
    width: "100%",
    position: "relatve",
    margin: "auto",
  },
  floating: {
    position: "absolute",
    top: "0px",
    right: "0px",
  },
};

// animation
const animation = StyleSheet.create({
  anm1: {
    animationName: fadeInLeft,
    animationDuration: "1.5s",
  },
  anm10: {
    animationName: fadeInRight,
    animationDuration: "1.5s",
  },

  anm3: {
    animationName: fadeInDown,
    animationDuration: "3.5s",
  },
});

export default Home;
