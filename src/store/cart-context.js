import React from "react";

const CartContext = React.createContext({
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
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
