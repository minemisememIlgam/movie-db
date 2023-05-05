import "./App.css";
import { useContext, useEffect, useState } from "react";
import Context from "./Context";
import ListAdded from "./components/ListAdded";
import FilmsByAge from "./components/FilmsByAge";
import Films from "./components/Films";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  const [array, setArray] = useState([]);
  const [liked, setLiked] = useState(false);
  const [search, setSearch] = useState("");
  const [films, setFilms] = useState([]);
  const [selectedValue, setSelectedValue] = useState("true");
  let lang2 = "ja";
  let lang = "en";
  let lang3 = "ru";
  const [state, setState] = useState();
  const addToLiked = () => {
    setLiked(true);
  };

  const value = {
    state,
    setState,
    setFilms,
    films,
    selectedValue,
    setSelectedValue,
    search,
    setSearch,
    liked,
    setLiked,
    array,
    setArray,
    addToLiked,
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=c47574bca98aa7568df57f6ebd8f9886&with_original_language=${(() => {
        switch (selectedValue) {
          case "all":
            return lang;
          case "japanese":
            return lang2;
          case "ru":
            return lang3;
          default:
            return lang;
        }
      })()}`
    )
      .then((response) => response.json())
      .then((json) => setState(json.results));
  }, [selectedValue]);

  return (
    <Context.Provider value={value}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Films />} />
            <Route path="Oblibene" element={<ListAdded />} />
          </Routes>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
