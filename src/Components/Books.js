import CartContext from "../store/cart-context";
import { useContext } from "react";

const Books = () => {
  const cartCtx = useContext(CartContext);

  return (
    <table>
      {cartCtx.items.map((employee) => {
        return (
          <tr>
            <td>{employee.bookId}</td>
            <td>{employee.bookName}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Books;
