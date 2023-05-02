import "./App.css";
import { useContext, useEffect, useState } from "react";
import Context from "./Context";

import FilmsByAge from "./components/FilmsByAge";
import Films from "./components/Films";

function App() {
  const [films, setFilms] = useState([]);
  const [selectedValue, setSelectedValue] = useState("true");
  let lang2 = "ja";
  let lang = "en";
  const [state, setState] = useState();
  const value = {
    state,
    setState,
    setFilms,
    films,
    selectedValue,
    setSelectedValue,
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=c47574bca98aa7568df57f6ebd8f9886&with_original_language=${
        selectedValue === "all" ? lang : lang2
      }`
    )
      .then((response) => response.json())
      .then((json) => setState(json.results));
  }, [selectedValue]);

  return (
    <Context.Provider value={value}>
      <div className="App">
        <FilmsByAge />
        <Films />
      </div>
    </Context.Provider>
  );
}

export default App;
