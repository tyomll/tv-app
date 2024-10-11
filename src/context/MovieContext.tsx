import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { FeaturedMovie, TrendingMovie } from "../types";
import apiClient from "../lib/axios";
import { endpoints } from "../constants/endpoints";

export const MovieContext = createContext<{
  featuredMovie: FeaturedMovie | null;
  isPlaying: boolean;
  selectMovie: (id: string) => void;
  trendingMovies: TrendingMovie[];
} | null>(null);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [featuredMovie, setFeaturedMovie] = useState<FeaturedMovie | null>(
    null
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState<TrendingMovie[]>([]);

  const selectedMovieId = localStorage.getItem("selected_movie_id");

  const fetchTrendingMovies = async () => {
    const { data } = await apiClient.get(endpoints.trandingMovies);
    if (selectedMovieId) {
      const selectedMovie = data.find(
        (movie: TrendingMovie) => movie.Id === selectedMovieId
      );
      const filteredMovies = data.filter(
        (movie: TrendingMovie) => movie.Id !== selectedMovieId
      );
      setTrendingMovies(
        selectedMovie ? [selectedMovie, ...filteredMovies] : data
      );
    } else {
      setTrendingMovies(data);
    }
  };

  const fetchFeaturedMovie = async () => {
    if (!selectedMovieId) {
      const { data } = await apiClient.get(endpoints.featuredMovie);
      setFeaturedMovie(data[0]);
    } else {
      const selectedMovie = trendingMovies.find(
        (movie) => movie.Id === selectedMovieId
      );
      setFeaturedMovie(selectedMovie ?? null);
    }
  };

  const selectMovie = useCallback(
    (id: string) => {
      localStorage.setItem("selected_movie_id", id);
      const movie = trendingMovies.find((movie) => movie.Id === id) ?? null;
      setFeaturedMovie(movie);
      setIsPlaying(true);
    },
    [trendingMovies]
  );

  useEffect(() => {
    const fetchMovies = async () => {
      await fetchTrendingMovies();
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (trendingMovies.length > 0) {
      fetchFeaturedMovie();
    }
  }, [trendingMovies]);

  return (
    <MovieContext.Provider
      value={{ featuredMovie, isPlaying, selectMovie, trendingMovies }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext)!;
