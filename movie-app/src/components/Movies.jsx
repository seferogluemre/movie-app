import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllMovies } from "../redux/slice/MovieSlice";

function Movies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return <div>Movies</div>;
}

export default Movies;
