import { useState } from "react";
import { Link } from "react-router-dom";
import colors from "../../colors";

// animation
import { fadeInDown, rubberBand } from "react-animations";
import { StyleSheet, css } from "aphrodite";
// import shake from "react-animations/lib/shake";
import flip from "react-animations/lib/flip";

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



const ProductInfo = () => {
  //DATA
  //   const isEmpty = false;
  const [data, setData] = useState({
    name: "Seagate Ultra Touch 2 TB External Hard Disk Drive  (Black)",
    description:
      "With this hard disk from Seagate, you can carry your digital life with you wherever you go. With the USB-C and USB 3.0 compatibility, you can just plug and play the files on the hard disk seamlessly on your Windows and Mac computers. Your sensitive and personal information will be safe, thanks to the Seagate Secure feature.",
    price: 7999,
    discount: 31,
    deliveryCharge: 45,
    // isInWish : true
    specification: [
      {
        key: "Sales Package",
        value:
          "1 Hard Drive, 46 cm USB 3.0 Cable, USB Type C Adapter, Quick Start Guide",
      },
      {
        key: "Model No",
        value: "STHH2000300/STHH2000400",
      },
      {
        key: "Type",
        value: "HDD",
      },
      {
        key: "Capacity",
        value: "2 TB",
      },
      {
        key: "Color",
        value: "Black",
      },
      {
        key: "Encryption",
        value: "256-bit AES Encryption",
      },
      {
        key: "Power Source",
        value: "USB-powered",
      },
    ],
  });

  // discount calculator
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
      : Toster.info("Removed From Wishlist");
  };

  // COMPONENT
  // WISH LOVE BTN
  const WishBtn = (flag) => {
    return (
      <div className={css(animation.anm5)}>
        <div
          className="float-right card px-2 py-1 mx-2 m-auto"
          style={{ borderRadius: 50 }}
        >
          <h4
            className="mb-0 py-1 text-center m-auto"
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleAddToWish();
            }}
          >
            {flag ? 
            <img
              className={css(animation.anm5)}
              style={{ height: 30 }}
              src= "/loding7.gif" 
            />
            : 
            <img
            className={css(animation.anm5)}
            style={{ height: 30 }}
            src= "/loding7.gif" 
          />
 
  }
          </h4>
        </div>
      </div>
    );
  };

  
  // Cart Item
  const ItemInfo = () => {
    return (
      <div >
        <div className="card">
          <div className="card-body py-2">
            <div className="row mt-2 mx-0">
              <div className="col px-0">
                <h5 style={{ color: colors.deepBlue, fontWeight: 700 }}>
                  {data.name}
                </h5>
              </div>

              {/* Wish */}
              {WishBtn(isInWish)}
              {/* {isInWish ? WishBtn() : WishBtn()} */}
            </div>

            {/* price */}
            <div className="row mx-0 ">
              <div className="col px-0">
                <h2 style={{ fontWeight: 700 }} className="text-success">
                  &#8377;{discountCal(data.price, data.discount)}
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 500,
                      color: "#a7a7a7",
                      textDecoration: "line-through",
                    }}
                  >
                    &#8377;{data.price}
                  </span>{" "}
                  <span
                    className="text-success"
                    style={{ fontSize: 18, fontWeight: 500 }}
                  >
                    {data.discount}% off
                  </span>
                </h2>
              </div>
            </div>
            {/* seller */}
            <div className="row mx-0 mt-3">
              <div className="col px-0">
                <h6 style={{ color: colors.black }}>
                  Seller : <span className="text-info">PRTAM</span>
                </h6>
                <p className="pl-4" style={{ color: colors.black }}>
                  7 Days Replacement Policy
                </p>
              </div>
            </div>
            {/* Descripton */}
            <div className="row mx-0 mt-2">
              <div className="col px-0">
                <h6 style={{ color: colors.black }}>Descripton</h6>
                <p className="pl-4">{data.description}</p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>

        {/* <hr className="my-0" /> */}
      </div>
    );
  };

  //   item specification
  const ItemSpecification = () => {
    return (
      <div className="card">
        <div className="card-header py-3">
          <h4 className="mb-0">SPECIFICATIONS</h4>
        </div>
        <div className="card-body py-3">
          <div className="row mx-0">
            <div className="col px-0">
              {/*  */}
              {data.specification.map((data, i) => {
                return (
                  <div key={i} className="row mx-0 mb-3">
                    <div className="col-4 px-0">
                      <h6 className="mb-0">{data.key}</h6>
                    </div>
                    <div className="col-8 px-0">
                      <p className="mb-0">{data.value}</p>
                    </div>
                  </div>
                );
              })}
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Review = () => {
    return (
      <div className="card">
        <div className="card-header py-3">
          <h4 className="mb-0">
            Rating & Views
            <button className="btn btn-success active float-right mb-0">
              <i className="fa fa-star m-auto"></i> Rate Product
            </button>
          </h4>
        </div>
        <div className="card-body py-3">
          <div className="row mx-0">
            <div className="col px-0 m-auto">
              <div className={css(animation.anm44)}>
              <h1 className="mb-0 text-center text-success">
                <i className="fa fa-star"></i> {10920}
              </h1>
              </div>
              <h6 className="mb-0 text-center mt-3 text-info">
                Total View {1092} <i className="fa fa-eye"></i>
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ImageView = () => {
    return (
      <div className="card shadow">
        {/* CARD BODY */}
        <div className="card-body p-0">
          {/* IMAGE */}
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="/loding7.gif"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/loding7.gif"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/loding7.gif"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/*  */}
        </div>
        {/* CARD FOOTER */}
        <div className="card-footer text-center ">
          <div className={css(animation.anm5)}>
            <Link to="/checkout">
            <button className={"btn btn-danger  active mb-0 mr-1"}>
              BUY NOW <i className="fa fa-tags ml-2"></i>
            </button>
            </Link>
          {/* </div>
          <div className={css(animation.anm4)}> */}
            <Link to="/mycart">
            <button className="btn btn-info active mb-0 ml-1">
              ADD TO CART <i className="fa fa-cart-plus ml-2"></i>
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  // #######
  return (
    <div className="row mx-0 mb-2">
      {/* SECTON 1 */}
      <div className={"col-lg-5 col-md-5 col-sm-5 px-2 mb-2 "}>
        <div className={css(animation.anm3)}>{ImageView()}</div>
        {/*  */}
      </div>
      {/* SECTON 2 */}
      <div className="col-lg-7 col-md-7 col-sm-7 px-2 ">
        <div className="row mx-0 mb-2">
          <div className="col py-0 px-0">
            <div className={css(animation.anm1)}>{ItemInfo()}</div>
          </div>
        </div>
        {/*  */}
        <div className="row mx-0 mb-2">
          <div className="col py-0 px-0">
            <div className={css(animation.anm2)}>{ItemSpecification()}</div>
          </div>
        </div>
        {/*  */}
        <div className="row mx-0 mb-2">
          <div className="col py-0 px-0">
            <div className={css(animation.anm3)}>{Review()}</div>
          </div>
        </div>
        {/*  */}
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
};

// animation
const animation = StyleSheet.create({
  anm1: {
    animationName: fadeInDown,
    animationDuration: "1s",
  },
  anm2: {
    animationName: fadeInDown,
    animationDuration: "1.5s",
  },
  anm3: {
    animationName: fadeInDown,
    animationDuration: "2s",
  },
  anm4: {
    animationName: rubberBand,
    animationDuration: "2.5s",
  },
  anm5: {
    // animationDelay :'2.6s',
    animationName: rubberBand,
    animationDuration: "3s",
    // animationPlayState : 'running'
    
  },
  anm44: {
    animationDelay :'5s',
    animationName: flip,
    animationDuration: "2s",
    // animationIterationCount: "infinite",
  },
});

export default ProductInfo;
