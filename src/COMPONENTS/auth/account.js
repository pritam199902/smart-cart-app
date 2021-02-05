import { useState } from "react";
import colors from "../../colors";
import { Link } from "react-router-dom";
// animation
import { fadeInDown } from "react-animations";
import { StyleSheet, css } from "aphrodite";

const Account = () => {
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
  const Section = () => {
    return <div>
        {/* SECTON 1 */}
        <div className={css(animation.anm1)} style={{marginBottom : 8}}>
              <div className="card shadow">
                {/* CARD HEADER */}
                <div className="card-header py-3">
                  <h6
                    className="mb-0"
                    style={{ color: colors.black, fontWeight: 600 }}
                  >
                    SECTION
                  </h6>
                </div>
                {/* CARD BODY */}
                  <div className="card-body p-0">
                  </div>
                {/*  */}
              </div>
            </div>
    </div>
  };

  const PhotoCard = () => {
    return (
      <div className={css(animation.anm3)}>
        <div className="card ">
          <div className="m-auto">
            <img
              className="m-auto"
              src="/pritam.jpg"
              alt="Card image cap"
              style={styles.image}
            />
          </div>
          <div className="card-body py-3">
            <h5 className="text-center" style={{ fontWeight: 500 }}>
              Pritam Das
            </h5>

            {/* User Information */}
            <div className="row">
              {/* name */}
              <div className="col-lg-11 col-md-11 m-auto py-2">
                {/* <div className="form-group"> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Names.."
                />
                {/* </div> */}
              </div>
              {/* email */}
              <div className="col-lg-11 col-md-11 m-auto py-2">
                {/* <div className="form-group"> */}
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email.."
                />
                {/* </div> */}
              </div>
              {/*  */}
              {/* name */}
              <div className="col-lg-11 col-md-11 m-auto py-2">
                {/* <div className="form-group"> */}
                <input
                  type="phone"
                  className="form-control"
                  placeholder="Mobile.."
                />
                {/* </div> */}
              </div>
            </div>
            {/*  */}
            <div className="col-lg-11 col-md-11 m-auto text-center">
              <button className="btn btn-info active">update</button>
            </div>
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
          {/*  */}
          {/* Impage */}
            <div className="col-lg-4 col-md-4 col-sm-4 px-2 mb-2">
              {PhotoCard()}
            </div>
          {/* Section 1 */}
          <div className="col-lg-8 col-md-4 col-sm-4 px-2 mb-2">
              {Section()}
              {Section()}
          </div>
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

export default Account;
