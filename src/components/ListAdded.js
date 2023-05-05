import Context from "../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
const ListAdded = () => {
  const { array, setArray, liked } = useContext(Context);

  const deleteFromLiked = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  return (
    <div>
      {" "}
      {array.map((elem, index) => (
        <div>
          <h1>{elem}</h1>
          <button onClick={() => deleteFromLiked(index)}>
            {" "}
            odebrat z oblibenych
          </button>
        </div>
      ))}{" "}
    </div>
  );
};
export default ListAdded;
