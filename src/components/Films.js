import { useContext } from "react";
import Context from "../Context";

function Films() {
  const { state, setState } = useContext(Context);

  return (
    <div className="movie">
      {state ? (
        state.map((elem) => {
          return (
            <div>
              <h1>{elem.title}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                alt="b"
              />
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
