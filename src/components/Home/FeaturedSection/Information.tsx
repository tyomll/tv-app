import { formatSecondsToTime } from "../../../utils";

interface Props {
  titleImage: string;
  title: string;
  releaseYear: string;
  mpaRating: string;
  duration: string;
  description: string;
}
const Information = ({
  titleImage,
  title,
  releaseYear,
  mpaRating,
  duration,
  description,
}: Props) => {
  return (
    <div>
      <h2 className="uppercase text-2xl text-gray tracking-wide font-bold">
        Movie
      </h2>
      <img src={`/images/${titleImage}`} alt={title} draggable={false} />
      <div className="flex space-x-4 mt-8 text-2xl">
        <span>{releaseYear}</span>
        <span>{mpaRating}</span>
        <span>{formatSecondsToTime(duration)}</span>
      </div>
      <p className="mt-4 text-3xl leading-relaxed">{description}</p>
    </div>
  );
};

export default Information;
