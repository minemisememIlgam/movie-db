import Context from "../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
const ListAdded = () => {
  const { array, setArray, liked } = useContext(Context);

  return <div>Result is {array}</div>;
};
export default ListAdded;
