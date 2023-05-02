import Context from "../Context";
import { useContext } from "react";
function FilmsByAge() {
  const { selectedValue, setSelectedValue } = useContext(Context);

  const wasClicked = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <select value={selectedValue} onChange={wasClicked}>
      <option className="nadl" value="japanese" defaultValue>
        Japanese films
      </option>
      <option className="adl" value="all">
        All Films
      </option>
    </select>
  );
}

export default FilmsByAge;
