interface Props {
  className?: string;
}
const User = ({ className }: Props) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <img src="/images/avatar.jpg" className="w-20 h-20 rounded-full" />
      <span className="text-3xl font-bold">Daniel</span>
    </div>
  );
};

export default User;
