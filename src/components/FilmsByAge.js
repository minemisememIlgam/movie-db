import Context from "../Context";
import { useContext } from "react";
function FilmsByAge() {
  const { selectedValue, setSelectedValue } = useContext(Context);

  const wasClicked = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <select value={selectedValue} onChange={wasClicked}>
      <option className="nadl" value="japanese">
        Japanese films
      </option>
      <option className="adl" value="all" defaultValue>
        English Films
      </option>
      <option className="nadl" value="ru" defaultValue>
        Russian films
      </option>
    </select>
  );
}

export default FilmsByAge;
