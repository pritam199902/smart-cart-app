// env setup
// import env from 'dotenv';
// env.config()

import { useState } from "react";
import colors from "../../colors";
import { Link } from "react-router-dom";
// animation
import { fadeInDown, lightSpeedIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import rubberBand from "react-animations/lib/rubber-band";
// const Stripe from 'react-stripe-checkout';
import StripeCheckout from "react-stripe-checkout";

//
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

const Checkout = ({ action }) => {
  //DATA
  const data = {
    name: "Seagate Ultra Touch 2 TB External Hard Disk Drive  (Black)",
    description:
      "With this hard disk from Seagate, you can carry your digital life with you wherever you go. With the USB-C and USB 3.0 compatibility, you can just plug and play the files on the hard disk seamlessly on your Windows and Mac computers. Your sensitive and personal information will be safe, thanks to the Seagate Secure feature.",
    price: 7999,
    discount: 31,
    deliveryCharge: 45,
  };
  //
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);

  const discountCal = (num, dis) => {
    return Math.floor(num - num * (dis / 100));
  };
  // COMPONENT
  // Cart Item
  const CartItem = () => {
    return (
      <div>
        <div className="row mx-0">
          <div className="col p-2 ">
            <div className="row mx-0">
              {/* Image */}
              <div className="col-lg-3 col-md-3 col-sm-3 p-0">
                <img src="/loding7.gif" style={styles.image} />

                <div className="row mx-0 mt-2">
                  <div className="col px-0 text-center m-auto">
                    <button className="btn m-auto btn-outline-info py-0 px-2 mb-0">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                  <div className="col px-0 m-auto text-center">
                    <span
                      className="text-center m-auto mb-0 text-info"
                      style={{ fontWeight: 500, fontSize: 18 }}
                    >
                      0
                    </span>
                  </div>
                  <div className="col px-0 text-center m-auto">
                    <button className="btn m-auto btn-outline-info py-0 px-2 mb-0">
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* info */}
              <div className="col-lg-9 col-md-9 col-sm-9">
                {/* title */}
                <div className="row mx-0">
                  <div className="col">
                    <Link to="/info/123">
                      <div className="row mt-2 mx-0">
                        <div className="col p-0">
                          <h6 style={{ color: colors.deepBlue }}>
                            {data.name}
                          </h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-1 p-0">
                    <button className="btn btn-warning py-1 mb-0">
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
                {/* <Link to="/info/123">
                  <div className="row mt-2 mx-0">
                    <div className="col">
                      <h6 style={{ color: colors.deepBlue }}>{data.name}</h6>
                    </div>
                  </div>
                </Link> */}

                {/* Descripton */}
                {/* <div className="row mx-0">
                  <div className="col">
                    <h6 style={{ color: colors.black }}>Item name</h6>
                  </div>
                </div> */}
                {/* seller */}
                <div className="row mx-0">
                  <div className="col">
                    <h6 style={{ color: colors.black }}>Seller : PRITAM</h6>
                  </div>
                </div>
                {/* price */}
                <div className="row mx-0">
                  <div className="col ">
                    <h5 style={{ fontWeight: 700 }} className="text-success">
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
                    </h5>
                  </div>
                </div>
                {/* Remove */}
                {/* <div className="row mx-0">
                  <div className="col ">
                    <button className="btn btn-warning py-1 mb-0">
                      Remove<i className="fa fa-times ml-2"></i>
                    </button>
                  </div>
                </div> */}
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

  // const UpiPayment = () => {
  //   return (
  //     <div className={css(animation.anm1)}>
  //       <div className="row m-auto justify-content-center pt-2">
  //         <div className="col-lg-6 col-md-7 col-sm-8 px-4 ">
  //           <input
  //             className="form-control form-control-lg float-right"
  //             type="text"
  //             placeholder="UPI ID"
  //           />
  //         </div>
  //         <div className="col-lg-3 col-md-3 col-sm-3">
  //           <button
  //             className="btn btn-warning active mb-0"
  //             style={{ fontSize: 15 }}
  //           >
  //             PAY &#8377;{`${100}`}
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // const CardPayment = () => {
  //   return (
  //     <div className={css(animation.anm1)}>
  //       <div className="row m-auto justify-content-center pt-2">
  //         {/* CARD  NUMBER */}
  //         <div className="col-lg-8 col-md-9 col-sm-10 px-4 m-auto">
  //           <input
  //             className="form-control form-control-lg"
  //             type="text"
  //             placeholder="Card Number"
  //           />
  //         </div>
  //         {/* MONTH */}
  //         <div className="col-lg-8 col-md-9 col-sm-10 px-4 ">
  //           <div className="row mx-0 justify-content-between">
  //             {/*  */}
  //             <div className="col-lg-6 col-md-6 col-sm-6 px-1 my-3">
  //               <input
  //                 className="form-control "
  //                 type="month"
  //                 placeholder="Validity"
  //               />
  //             </div>
  //             {/*  */}
  //             <div className="col-lg-5 col-md-5 col-sm-5 px-1 my-3 float-right">
  //               <input
  //                 className="form-control "
  //                 type="number"
  //                 placeholder="CVV"
  //               />
  //             </div>
  //             {/*  */}
  //           </div>
  //         </div>
  //         {/*  */}
  //         <div className="col-lg-8 col-md-9 col-sm-10 px-4 m-auto justify-content-center">
  //           <button
  //             className="btn btn-warning active mb-0 float-right"
  //             style={{ fontSize: 15 }}
  //           >
  //             PAY &#8377;{`${100}`}
  //           </button>
  //         </div>
  //         {/*  */}
  //       </div>
  //     </div>
  //   );
  // };

  const makePayment = (token) => {
    console.log(token);
    // setIsLoadingBtn(false);
    Toster.success("Payment successfull!");
    window.location="/payment/success"
    // action.handlePaymentSuccess(token.card.name)
  };

  const handleCancelPayCard = () => {
    // setIsLoadingBtn(false);
    Toster.warning("You canceld the payment!", "Payment Cancel");
    // setIsLoadingBtn(false);
    window.location="/payment/cancel"
  };

  const CheckoutForm = () => {
    return (
      <StripeCheckout
        stripeKey="pk_test_51IGzZ7GQk6NoeQ8KmUc8vtLZXcql7RFgnEHHrig1GMAMuzIc8WpCu7tVjPnwEX6WCmL3ouOJN94EL4NnYB8awU5B00OZZPX2n0"
        name="SMART CART PAY" // the pop-in header title
        description="Pay your bill securely" // the pop-in header subtitle
        image="/logo.png"
        token={makePayment}
        closed={handleCancelPayCard} // called when the checkout popin is closed (no IE6/7)
        
        currency="INR"
        panelLabel="PAY" // prepended to the amount in the bottom pay button
        amount={discountCal(data.price, data.discount) / 0.7121}

        allowRememberMe={false}
      >
        {/* opened={()=>{setIsLoadingBtn(false)  }}// called when the checkout popin is opened (no IE6/7) */}
        <button
          className="btn btn-warning active mb-0 ml-2"
          style={{ fontSize: 15 }}
          onClick={() => {
            setIsLoadingBtn(true);
          }}
          disabled={isLoadingBtn}
        >
          {/* PAY &#8377; {`${100}`} */}
          {isLoadingBtn ? (
            <>
              Please wait.. <i className="fa fa-spin fa-spinner ml-2"></i>{" "}
            </>
          ) : (
            <>PAY &#8377; {discountCal(data.price, data.discount)}</>
          )}
        </button>
      </StripeCheckout>
    );
  };

  const PaymentSection = () => {
    return (
      <div className={css(animation.anm2)}>
        {/* CARD BODY */}
        <div className="card-body py-3 px-0">
          <div className="row">
            <div className="col m-auto text-center">
              <h6>
                Pay using your card
                {CheckoutForm()}
              </h6>
            </div>
          </div>
        </div>
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
          <div className={"col-lg-8 col-md-8 mb-2 px-2"}>
            {/* SECTON 1 */}
            <div className={css(animation.anm1)}>
              <div className="card shadow mb-2">
                {/* CARD BODY */}
                <div className="card-body py-3">
                  <h6
                    className=""
                    style={{ color: colors.black, fontWeight: 600 }}
                  >
                    <span
                      className="badge badge-secondary px-2 py-1 mr-2"
                      style={{ fontSize: 15 }}
                    >
                      1
                    </span>{" "}
                    LOGIN
                  </h6>
                  <h6 className="mb-0 mt-1 px-1 text-info">
                    {" "}
                    <i className="fa fa-user mr-2 text-dark"></i> Pritam Das{" "}
                    <span className="text-secondary">7699621924</span>
                  </h6>
                </div>
              </div>
            </div>
            {/* SECTION 2 */}
            <div className={css(animation.anm2)}>
              <div className="card shadow mb-2">
                {/* CARD BODY */}
                <div className="card-body py-3">
                  <h6
                    className="mb-0"
                    style={{ color: colors.black, fontWeight: 600 }}
                  >
                    <span
                      className="badge badge-secondary px-2 py-1 mr-2"
                      style={{ fontSize: 15 }}
                    >
                      2
                    </span>
                    DELIVERY ADDRESS
                    <button
                      className={"btn btn-info py-1  float-right m-auto"}
                      data-toggle="modal"
                      data-target="#addressModal"
                    >
                      <i className="fa fa-edit m-0"></i>
                    </button>
                  </h6>
                  <h6 className="mb-0 mt-1 px-1 ">
                    {" "}
                    <i className="fa fa-map-marker-alt mr-2 text-dark"></i>{" "}
                    PRITAM DAS
                    <span className="text-secondary">
                      Sankuria, Near Shibtala, Murshidabad, West bengal - 742187
                    </span>
                  </h6>
                </div>
                {/* MODAL */}
                {/* <button type="button" className="btn btn-primary" >
  Launch static backdrop modal
</button> */}

                <div
                  className="modal fade py-3"
                  id="addressModal"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header py-3">
                        <h6 className="modal-title" id="staticBackdropLabel">
                          DELIVERY ADDRESS
                        </h6>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body py-1">
                        {/* Address form */}
                        <form className="px-3">
                          {/* Name */}
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="name" style={{ fontSize: 15 }}>
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder="Name.."
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="pin" style={{ fontSize: 15 }}>
                                  Pin
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="pin"
                                  placeholder="Pin.."
                                />
                              </div>
                            </div>
                          </div>
                          {/* Mobile */}
                          <div className="form-group">
                            <label htmlFor="mobile" style={{ fontSize: 15 }}>
                              Mobile
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="mobile"
                              placeholder="Mobile.."
                            />
                          </div>
                          {/* Address */}
                          <div className="form-group">
                            <label htmlFor="address" style={{ fontSize: 15 }}>
                              Address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address"
                              placeholder="Address.."
                            />
                          </div>
                          {/* City */}
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="city" style={{ fontSize: 15 }}>
                                  City
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="city"
                                  placeholder="City.."
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="state" style={{ fontSize: 15 }}>
                                  State
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="state"
                                  placeholder="State.."
                                />
                              </div>
                            </div>
                          </div>
                          {/* Land mark */}
                          <div className="form-group">
                            <label htmlFor="landmark" style={{ fontSize: 15 }}>
                              Landmark
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="landmark"
                              placeholder="Landmark.."
                            />
                          </div>
                          {/*  */}
                        </form>
                        {/* ************ */}
                      </div>
                      <div className="modal-footer px-5 pb-3">
                        <button
                          type="button"
                          className="btn btn-secondary mx-2"
                          data-dismiss="modal"
                        >
                          CLOSE
                        </button>
                        <button
                          type="button"
                          className="btn btn-success active px-4"
                          data-dismiss="modal"
                        >
                          SAVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  */}
              </div>
            </div>
            {/* SECTION 3 */}
            <div className={css(animation.anm2)}>
              <div className="card shadow mb-2">
                {/* CARD HEADER */}
                <div className="card-header py-3">
                  <h6
                    className="mb-0"
                    style={{ color: colors.black, fontWeight: 600 }}
                  >
                    <span
                      className="badge badge-secondary px-2 py-1 mr-2"
                      style={{ fontSize: 15 }}
                    >
                      3
                    </span>
                    ORDER SUMMARY
                  </h6>
                </div>
                {/* CARD BODY */}
                {isEmpty ? (
                  <div className="card-body ">
                    <h6 className="mb-0">
                      Total item :{" "}
                      <span
                        style={{ fontSize: 15 }}
                        className="badge badge-info badge-pill px-2"
                      >
                        2
                      </span>
                    </h6>
                  </div>
                ) : (
                  <div className="card-body p-0">
                    <div className={css(animation.anm3)}>
                      {CartItem()}
                      {CartItem()}
                      {CartItem()}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* SECTON 4 */}

            {/* payment */}
            <div className={css(animation.anm3)}>
              <div className="card shadow mb-2">
                <div className="card-header py-3">
                  <h6 className="mb-0 ">
                    <span
                      className="badge badge-secondary px-2 py-1 mr-2"
                      style={{ fontSize: 15 }}
                    >
                      4
                    </span>
                    PAYMENT OPTION
                  </h6>
                </div>
                {/* CARD BODY */}
                {PaymentSection()}
                {/*  */}
              </div>
            </div>
            {/*  */}
          </div>
          {/* Payment card */}
          <div className="col-lg-4 col-md-4 px-2">{PaymentDetailCard()}</div>
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
  anm2: {
    animationName: fadeInDown,
    animationDuration: "3.2s",
  },
  anm3: {
    animationName: fadeInDown,
    animationDuration: "2.2s",
  },
  anm4: {
    animationName: rubberBand,
    animationDuration: "2.5s",
    animationIterationCount: "infinite",
  },
});

export default Checkout;
