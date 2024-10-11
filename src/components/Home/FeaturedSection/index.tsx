import Information from "./Information";
import ActionButtons from "./ActionButtons";
import { useMovie } from "../../../context/MovieContext";

const FeaturedSection = () => {
  const { featuredMovie } = useMovie();

  if (!featuredMovie) return null;

  return (
    <div
      className="absolute w-full flex min-h-screen bg-no-repeat"
      style={{
        backgroundImage: !featuredMovie.VideoUrl
          ? `url(/images/${featuredMovie.CoverImage})`
          : "",
      }}
    >
      {featuredMovie.VideoUrl && (
        <video
          src={featuredMovie.VideoUrl}
          autoPlay
          loop
          muted
          style={{
            objectFit: "cover",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            zIndex: 0,
          }}
        />
      )}
      <div className="absolute flex flex-col w-1/2 mt-48 space-y-6 pl-4">
        <Information
          titleImage={featuredMovie.TitleImage}
          title={featuredMovie.Title}
          releaseYear={featuredMovie.ReleaseYear}
          mpaRating={featuredMovie.MpaRating}
          duration={featuredMovie.Duration}
          description={featuredMovie.Description}
        />
        <ActionButtons />
      </div>
    </div>
  );
};

export default FeaturedSection;
