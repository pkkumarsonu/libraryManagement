import CartContext from "../store/cart-context";
import { useContext, useState } from "react";
import Books from "./Books";
import classes from "./User.module.css";

const User = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const [enteredSearchWord, setEnteredSearchWord] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const cartCtx = useContext(CartContext);

  const logoutHandleClick = () => {
    props.isLogout(true);
  };

  const handleInputChange = (event) => {
    setSearchWord(event.target.value);
    if (searchWord != " ") setEnteredSearchWord(true);
    else setEnteredSearchWord(false);
    console.log(searchWord);
    const filtered = cartCtx.items.filter((book) => {
      return book.bookName.toLowerCase().includes(searchWord.toLowerCase());
    });

    console.log("filtered = " + JSON.stringify(filtered));
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>User</h1>
      <input type="text" value={searchWord} onChange={handleInputChange} />

      {enteredSearchWord ? (
        filteredData.map((value) => {
          return (
            <tr>
              <td>{value.bookId}</td>
              <td>{value.bookName}</td>
            </tr>
          );
        })
      ) : (
        <Books />
      )}

      <button onClick={logoutHandleClick}>Logout</button>
    </div>
  );
};

export default User;
