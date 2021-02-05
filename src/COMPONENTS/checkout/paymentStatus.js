import {Link} from "react-router-dom";

const Status = ({status}) => {
  return (
    <div className="row mx-0 m-auto pt-5">
      <div className="col-lg-8 col-md-8 col-sm-8 m-auto">
        <div className="card m-auto">
          <div className="card-body text-center">


            <img src="/paymentSuccess.gif" style={styles.image} />
            <h3 className="text-success mt-1">Payment Successfull!</h3>


            {/* <h6 className="text-warning">Check your network connectivity</h6> */}
            <Link to="/">
              <button
                className="btn btn-outline-info"
                onClick={() => {
                  window.location.reload();
                }}
                style={{ fontSize: 17 }}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: '50%',
    width: "50%",
    position: "relatve",
    margin: "auto",
  },
};

export default Status;
