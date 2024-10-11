interface Props {
  path: string;
}
const Icon = ({ path }: Props) => {
  return <img src={`/icons/${path}`} />;
};

export default Icon;
