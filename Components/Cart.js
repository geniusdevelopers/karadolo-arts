import { useState, forwardRef, useImperativeHandle } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
} from "react-icons/io";
import styles from "../styles/Cart.module.css";
import itemPic from "../photos/11.jpg";

const MyCart = forwardRef(function MyCart(props, ref) {
  const [cart, SetCart] = useState(true);

  useImperativeHandle(
    ref,
    () => {
      return {
        handleCartVisibility() {
          SetCart(false);
          console.log("child");
        },
      };
    },
    []
  );

  return (
    <div
      className={
        cart
          ? `${styles.cart} ${styles.cart_hidden}`
          : `${styles.cart} ${styles.cart_visible}`
      }
    >
      <div className={styles.my_cart}>
        <hr size="2" width="100%" color="blue" />
        <div className={styles.cart_header}>
          <h1>My Shopping Cart</h1>
          <AiOutlineClose
            className={styles.close_cart_icon}
            onClick={() => {
              SetCart(!cart);
            }}
          />
        </div>
        <hr size="2" width="100%" color="blue" />
        <Item />
        <Item />
        <Item />
        <Item />
        <div className={styles.cart_footer}>
          <h1>TOTAL:</h1>
          <h1> $ 348.68</h1>
        </div>
        <form className={styles.form}>
          <input
            className={styles.form_input}
            type="text"
            id="user_name"
            name="name"
            placeholder="Your Name"
            minLength="3"
            maxLength="25"
            required
          />
          <input
            className={styles.form_input}
            type="number"
            id="phone_number"
            name="phone"
            placeholder="Phone Number eg 0718338810"
            min="100000000"
            max="888888888"
            required
          />
          <input
            className={styles.form_input}
            type="text"
            id="email"
            name="email"
            placeholder="email"
          />
          <button className={styles.submit_order_button}>SUBMIT ORDER</button>
        </form>
      </div>
    </div>
  );
});

function Item(props) {
  return (
    <>
      <div className={styles.item_container}>
        <div className={styles.item}>
          <Image src={itemPic} alt="item picture" className={styles.item_pic} />
          <div>
            Content_geordanna-cordero-fields-762597-unsplash by Karadolo Artist:
            Sam Nujoma
          </div>
          <div>$80.78</div>
        </div>
        <div className={styles.item_operation_container}>
          <button className={styles.remove_item_button}>Remove</button>
          <div>
            <AiOutlineMinus className={styles.order_number_icon} />
            {1}
            <AiOutlinePlus className={styles.order_number_icon} />
          </div>
        </div>
      </div>
      <hr size="2" width="100%" color="blue" />
    </>
  );
}

export default MyCart;
