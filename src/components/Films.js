import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import FilmsByAge from "./FilmsByAge";
import { useState } from "react";

function Films() {
  const {
    addToLiked,
    liked,
    setLiked,
    search,
    setSearch,
    state,
    setState,
    array,
    setArray,
  } = useContext(Context);

  const [addedToLikedOrNot, setAddedToLikedOrNot] = useState(
    Array(10).fill(false)
  );
  const [showDescription, setShowDescription] = useState(Array(10).fill(false)); //мы создаем массив с таким же количеством элементов как в массиве с фильмами

  const seeDescription = (index) => {
    const newShowDescription = [...showDescription];
    newShowDescription[index] = true;
    setShowDescription(
      newShowDescription
    ); /*const newShowDescription = [...showDescription]

то есть в этот момент мы имеем массив  newShowDescription где 10 элементов false 
 newShowDescription[index] = true  тут мы по индексово меняем на тру 
User
{showDescription[index] ? <h1>{elem.overview}</h1> : null} и если какой то элемент стал тру то мы показываем описание  */
  };
  const hideDescription = (index) => {
    const newShowDescription = [...showDescription];
    newShowDescription[index] = false;
    setShowDescription(newShowDescription);
  };

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

  const checkAddedOrNot = (index) => {
    const newAdded = [...addedToLikedOrNot];
    newAdded[index] = true;
    setAddedToLikedOrNot(newAdded);
  };

  function handleInputChange(event) {
    setSearch(event.target.value);
  }
  const pushToArray = (title) => {
    setArray([...array, title]);
  };
  console.log(addedToLikedOrNot[0]);
  return (
    <div className="movie">
      <FilmsByAge />
      <Link to="Oblibene">Na hlavni stranku!</Link>{" "}
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
        state.slice(0, 10).map((elem, index) => {
          return (
            <div>
              <h1>{elem.title}</h1>

              <img
                src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                alt="b"
              />
              {showDescription[index] ? (
                <button onClick={() => hideDescription(index)}>
                  Hide Description
                </button>
              ) : (
                <button onClick={() => seeDescription(index)}>
                  Show Description
                </button>
              )}

              {showDescription[index] ? <h1>{elem.overview}</h1> : null}

              {addedToLikedOrNot[index] ? (
                <h1>mate to!</h1>
              ) : (
                <button
                  onClick={() => {
                    pushToArray(elem.title);
                    checkAddedOrNot(index);
                  }}
                >
                  Pridat do oblibenych!
                </button>
              )}
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
