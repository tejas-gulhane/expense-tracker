import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { uiActions } from "./components/store/uireducer";
import Notification from "./components/UI/Notification";
import { cartActions } from "./components/store/cartReducer";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);


  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.shownotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );
      const response = await fetch(
        `https://expense-tracker-62dd0-default-rtdb.firebaseio.com/cart.json`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed.");
      }

      dispatch(
        uiActions.shownotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.shownotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    });
  }, [cart, dispatch]);

const fetchdata = async () => {
  const response = await fetch(`https://expense-tracker-62dd0-default-rtdb.firebaseio.com/cart.json`)
  const data = await response.json()
  console.log(data)
  
  dispatch(cartActions.getcartonrefresh({
    items: data.items ? data.items : [],
    totalItems:data.totalItems ? data.totalItems : 0
  }))
}


  useEffect(()=>{fetchdata()},[dispatch])

   

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartOpen && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;