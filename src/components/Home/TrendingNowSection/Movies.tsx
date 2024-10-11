import Carousel from "react-multi-carousel";
import { TrendingMovie } from "../../../types";

interface Props {
  movies: TrendingMovie[];
  selectMovie: (id: string) => void;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1200, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
};

const Movies = ({ movies, selectMovie }: Props) => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        swipeable
        draggable
        itemClass="max-w-[200px] cursor-pointer"
      >
        {movies.map((movie, index) => {
          return (
            <div key={index} onClick={() => selectMovie(movie.Id)}>
              <img src={`/images/${movie.CoverImage}`} alt={movie.Title} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Movies;
