import { Play } from "lucide-react";

const ActionButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <button className="flex items-center justify-center gap-2 bg-white py-4 w-60 rounded-full">
        <Play className="fill-primary w-7 h-7" />
        <span className="text-primary text-2xl font-bold pt-1">Play</span>
      </button>
      <button className="flex items-center justify-center gap-2 bg-primaryBackground py-4 w-60 rounded-full">
        <span className="text-white text-2xl font-bold pt-1">More Info</span>
      </button>
    </div>
  );
};

export default ActionButtons;
