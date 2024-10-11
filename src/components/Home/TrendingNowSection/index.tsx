import "react-multi-carousel/lib/styles.css";
import { useMovie } from "../../../context/MovieContext";
import Movies from "./Movies";

const TrendingNowSection = () => {
  const { selectMovie, trendingMovies } = useMovie();

  return (
    <div className="relative">
      <h2 className="text-white text-3xl font-medium mb-4 absolute -top-12 z-[2]">
        Trending Now
      </h2>
      <Movies movies={trendingMovies} selectMovie={selectMovie} />
    </div>
  );
};

export default TrendingNowSection;
