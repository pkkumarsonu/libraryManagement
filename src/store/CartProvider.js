import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [
    {
      bookId: "1",
      bookName: "ABC abc",
      author: "J. K. Rowling",
    },

    {
      bookId: "2",
      bookName: "ABCD abcd",
      author: "Jeffrey Archer",
    },

    {
      bookId: "3",
      bookName: "XYZ xyz hsjh",
      author: "Chetan Bhagat",
    },

    {
      bookId: "4",
      bookName: "XYZ1hhh hjakdj",
      author: "M.K. Gandhi",
    },
  ],
  totalId: 4,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    console.log("inside add");
    console.log("action.item.bookId= " + state.totalId);
    state.totalId = action.item.bookId + 1;
    console.log("state.totalId= " + state.totalId);
    updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalId: action.item.bookId + 1,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.bookId === action.id
    );
    const existingItem = state.items[existingCartItemIndex];

    let updatedItems;
    updatedItems = state.items.filter((item) => item.bookId !== action.id);

    return {
      items: updatedItems,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    console.log("inside addItemToCartHandler");
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalId: cartState.totalId,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
