import { Route, Switch } from "react-router-dom";
import MyCart from "./COMPONENTS/products/cart";
import Home from "./COMPONENTS/products/home";
import Info from "./COMPONENTS/products/info";
import WishList from "./COMPONENTS/products/wishlist";
import Checkout from "./COMPONENTS/checkout/checkout";
import PaymentSuccess from "./COMPONENTS/checkout/paymentStatus";
import PaymentCancel from "./COMPONENTS/checkout/paymentCancel";
import Account from "./COMPONENTS/auth/account";

function Main() {
  // action
  const handlePaymentSuccess = (result) => {
    console.log(result);
    window.location = "/";
  };

  return (
    <div style={styles.main}>
      <Switch>
        
        <Route exact path="/account">
          <Account />
        </Route>

        <Route exact path="/mycart">
          <MyCart />
        </Route>

        <Route exact path="/wishlist">
          <WishList />
        </Route>

        <Route exact path={`/info/:id`}>
          <Info />
        </Route>

        <Route exact path={`/checkout`}>
          <Checkout
            action={{ handlePaymentSuccess: handlePaymentSuccess.bind(this) }}
          />
        </Route>

        <Route exact path={`/payment/success`}>
          <PaymentSuccess />
        </Route>

        <Route exact path={`/payment/cancel`}>
          <PaymentCancel />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
    </div>
  );
}

const styles = {
  main: {
    marginTop: 70,
    marginBottom: 20,
  },
};

export default Main;
