import { useContext } from "react";
import Context from "../Context";

function Films() {
  const { addToLiked, liked, setLiked, search, setSearch, state, setState } =
    useContext(Context);

  function handleSearchSubmit(event) {
    event.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c47574bca98aa7568df57f6ebd8f9886&query=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        setState(data.results);
      })
      .catch((error) => console.error(error));
  }

  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="movie">
      <form onSubmit={handleSearchSubmit}>
        <input
          value={search}
          onChange={handleInputChange}
          type="text"
          placeholder="search film"
        />
        <button type="submit">Search</button>
      </form>
      {state ? (
        state.slice(0, 10).map((elem) => {
          return (
            <div>
              <h1>{elem.title}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                alt="b"
              />
              <button onClick={() => addToLiked()}>
                Pridat do oblibenych!
              </button>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Films;
