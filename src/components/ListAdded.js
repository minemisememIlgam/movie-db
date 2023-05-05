import Context from "../Context";
import { useContext } from "react";

const ListAdded = () => {
  const { liked } = useContext(Context);
  console.log(liked);
  return <div>{liked ? <h1>Film was liked! </h1> : <h1>hgh </h1>}</div>;
};
export default ListAdded;
