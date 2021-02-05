import {useState} from 'react';
import colors from "../../colors";
import { Link } from "react-router-dom";
// animation
import { fadeInDown } from "react-animations";
import { StyleSheet, css } from "aphrodite";

const MyCart = () => {
  //DATA

  
//
  const data = {
    name: "Seagate Ultra Touch 2 TB External Hard Disk Drive  (Black)",
    description:
      "With this hard disk from Seagate, you can carry your digital life with you wherever you go. With the USB-C and USB 3.0 compatibility, you can just plug and play the files on the hard disk seamlessly on your Windows and Mac computers. Your sensitive and personal information will be safe, thanks to the Seagate Secure feature.",
    price: 7999,
    discount: 31,
    deliveryCharge: 45,
  };
  const isEmpty = false;
  //
  const discountCal = (num, dis) => {
    return Math.floor(num - num * (dis / 100));
  };
  // COMPONENT
  // Cart Item
  const CartItem = () => {
    return (
      <div>
        <div className="row mx-0">
          <div className="col p-3 ">
            <div className="row mx-0">
              {/* Image */}
              <div className="col-lg-3 col-md-3 col-sm-3 p-0">
                <img src="clock_bc.jpg" style={styles.image} />
                {/*  */}
                <div className="row mx-0 mt-2 justify-content-around">
                  <div className="col px-0 text-center m-auto">
                    <button className="btn m-auto btn-outline-secondary py-0 px-2 mb-0">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                  <div className="col px-0 m-auto text-center">
                    <span
                      className="text-center m-auto mb-0 text-secondary"
                      style={{ fontWeight: 500, fontSize: 18 }}
                    >
                      0
                    </span>
                  </div>
                  <div className="col px-0 text-center m-auto">
                    <button className="btn m-auto btn-outline-secondary py-0 px-2 mb-0">
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                </div>
                {/*  */}
              </div>
              {/* info */}
              <div className="col-lg-9 col-md-9 col-sm-9">
                {/* title */}
                <Link to="/info/123">
                  <div className="row mt-2 mx-0">
                    <div className="col">
                      <h6 style={{ color: colors.deepBlue }}>{data.name}</h6>
                    </div>
                  </div>
                </Link>
                {/* Descripton */}
                {/* <div className="row mx-0">
                  <div className="col">
                    <h6 style={{ color: colors.black }}>Item name</h6>
                  </div>
                </div> */}
                {/* seller */}
                <div className="row mx-0">
                  <div className="col">
                    <h6 style={{ color: colors.black }}>seller : PRITAM</h6>
                  </div>
                </div>
                {/* price */}
                <div className="row mx-0">
                  <div className="col ">
                    <h6 style={{ fontWeight: 700 }} className="text-success">
                      &#8377;{discountCal(data.price, data.discount)}{" "}
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#a7a7a7",
                          textDecoration: "line-through",
                        }}
                      >
                        &#8377;{data.price}
                      </span>{" "}
                      <span
                        className="text-success"
                        style={{ fontSize: 14, fontWeight: 500 }}
                      >
                        {data.discount}% off
                      </span>
                    </h6>
                  </div>
                </div>
                {/* Remove */}
                <div className="row mx-0">
                  <div className="col ">
                    <button className="btn btn-outline-danger py-1 mb-0" >
                      Remove 
                        <i className="fa fa-times ml-2"></i>

                    </button>
                  </div>
                </div>
                {/*  */}
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        <hr className="my-0" />
      </div>
    );
  };

  const PaymentDetailCard = () => {
    return (
      <div className={css(animation.anm3)}>
        <div className="card">
          <div className="card-header py-2">
            <h6 className="mb-0" style={{ color: colors.black }}>
              PRICE DETAILS
            </h6>
          </div>
          <div className="card-body py-3">
            <div className="row">
              <div className="col">
                <h6 className="float-left">Price</h6>
                <h6 className="float-right">&#8377;100</h6>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h6 className="float-left">Price</h6>
                <h6 className="float-right"> &#8377;100</h6>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h6 className="float-left">Delivery Charges</h6>
                <h6 className="float-right"> &#8377;100</h6>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <h6 className="float-left">
                  {" "}
                  <b> Total Amount</b>
                </h6>
                <h6 className="float-right"> &#8377;100</h6>
              </div>
            </div>
          </div>
          <div className="card-footer py-1">
            <h6 className="text-success">
              You will save &#8377;100 on this order{" "}
            </h6>
          </div>
        </div>
      </div>
    );
  };

  // #######
  return (
    <div className="row mx-0">
      <div className="col-lg-10 m-auto px-0">
        <div className="row mx-0 m-auto">
          <div
            className={
              isEmpty
                ? "col-lg-10 col-md-10 m-auto mb-2 px-2"
                : "col-lg-8 col-md-8 mb-2 px-2"
            }
          >
            {/* SECTON 1 */}
            <div className={css(animation.anm1)}>
              <div className="card shadow">
                {/* CARD HEADER */}
                <div className="card-header py-3">
                  <h6
                    className="mb-0"
                    style={{ color: colors.black, fontWeight: 600 }}
                  >
                    MY CART
                    <i
                      className="fa fa-shopping-cart ml-2"
                      style={{ color: colors.black }}
                    ></i>
                    <span className="badge badge-pill badge-info">2</span>
                  </h6>
                </div>
                {/* CARD BODY */}
                {!isEmpty && (
                  <div className="card-body p-0">
                    {/* <h5>My cart  </h5> */}

                    {CartItem()}
                    {CartItem()}
                  </div>
                )}
                {/* CARD FOOTER */}
                <div className="card-footer">
                  {/* IF CART EMPTY */}
                  {!isEmpty ? (
                    <div className="float-right">
                      <Link to="/checkout" >
                      <button className="btn btn-warning active mb-0">
                        PLACE ORDER <i className="fa fa-tags ml-2"></i>
                      </button>
                      </Link>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Link to="/">
                        <button className="btn btn-info active mb-0">
                          SHOP NOW <i className="fa fa-cart-plus ml-2"></i>
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/* Payment */}
          {!isEmpty && (
            <div className="col-lg-4 col-md-4 px-2">{PaymentDetailCard()}</div>
          )}
          {/*  */}
        </div>
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
    animationDuration: "1.5s",
  },

  anm3: {
    animationName: fadeInDown,
    animationDuration: "2.5s",
  },
});

export default MyCart;
