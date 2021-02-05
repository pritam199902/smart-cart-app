import colors from "../../colors";
import { Link } from "react-router-dom";
// animation
import {fadeInDown} from "react-animations";
import { StyleSheet, css } from "aphrodite";

const WishList = () => {
  //DATA
  const isEmpty = false;
  const a = [1, 2, 3, 4, 5, 6, 7];
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

  // COMPONENT
  // Cart Item
  const CartItem = (i) => {
    return (
      <div key={i} className={css(animation.anm3)}>
        <div className="row mx-0">
          <div className="col p-2 ">
            <div className="row mx-0">
              {/* Image */}
              <div className="col-lg-3 col-md-3 col-sm-3 p-0 m-auto">
                <img src="/loding7.gif" style={styles.image} />
              </div>
              {/* info */}
              <div className="col-lg-9 col-md-9 col-sm-9">
                {/* title */}
                <Link to="/info/1">
                  <div className="row  mx-0 mt-0">
                    <div className="col">
                      <h5 style={{ color: colors.deepBlue }}>{data.name}</h5>
                    </div>
                  </div>
                </Link>
                {/* Descripton */}
                <div className="row mx-0">
                  <div className="col">
                    <h6 style={{ color: colors.black }}>
                      <span className="badge badge-success px-2 py-1">
                        100
                        <i className="fa fa-star pl-1"></i>
                      </span>{" "}
                      (1209)
                    </h6>
                  </div>
                </div>
                {/*  */}
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
                <div className="row mx-0">
                  <div className="col ">
                    <button className="btn btn-outline-danger py-1 mb-0">
                      Remove<i className="fa fa-times ml-2"></i>
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

  // #######
  return (
    <div className="row mx-0">
      <div className="col-lg-10 m-auto px-0">
        <div className="row mx-0 m-auto">
          <div className={"col-lg-10 col-md-10 m-auto px-2"}>
            {/* SECTON 1 */}
            <div className={css(animation.anm1)}>
              <div className="card shadow">
                {/* CARD HEADER */}
                <div className="card-header py-3">
                  <h5
                    className="mb-0"
                    style={{ color: colors.black, fontWeight: 600 }}
                  >
                    MY WISHLIST
                    <span className="badge badge-pill badge-info mx-2">2</span>
                  </h5>
                </div>
                {/* CARD BODY */}
                {!isEmpty && (
                  <div className="card-body p-0">
                    {a.map((d, i) => {
                      return CartItem(i);
                    })}
                  </div>
                )}
                {/* CARD FOOTER */}
                <div className="card-footer">
                  {/* IF CART EMPTY */}
                  {isEmpty && (
                    <div className="text-center">
                      <button className="btn btn-info active mb-0">
                        SHOP NOW <i className="fa fa-cart-plus ml-2"></i>
                      </button>
                    </div>
                  )}
                </div>
                {/*  */}
              </div>
            </div>
          </div>
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
    animationDuration: "2.5s",
  },

  anm3: {
    animationName: fadeInDown,
    animationDuration: "3.5s",
  },
});

export default WishList;
