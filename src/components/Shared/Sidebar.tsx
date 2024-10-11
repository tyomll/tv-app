import { useState } from "react";
import Icon from "./Icon";
import User from "./User";

interface Props {
  isOpened: boolean;
  setIsOpened: (arg: boolean) => void;
}

const LINKS = [
  {
    icon: "/search.png",
    label: "Search",
  },
  {
    icon: "/home.png",
    label: "Home",
  },
  {
    icon: "/tv-shows.png",
    label: "TV Shows",
  },
  {
    icon: "/movies.png",
    label: "Movies",
  },
  {
    icon: "/genres.png",
    label: "Genres",
  },
  {
    icon: "/watch-later.png",
    label: "Watch Later",
  },
];

const BOTTOM_LINKS = [
  {
    label: "Language",
  },
  {
    label: "Get help",
  },
  {
    label: "Exit",
  },
];

const Sidebar = ({ isOpened, setIsOpened }: Props) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(1);

  return (
    <div
      onMouseEnter={() => setIsOpened(true)}
      onMouseLeave={() => setIsOpened(false)}
      className={`absolute top-0 left-0 h-full transition-all duration-200 ease-in-out z-10 pt-16 p-4 ${
        isOpened
          ? "w-96 bg-gradient-to-r from-[#040404] to-[#020101f2] animate-slide-in"
          : "w-32 bg-[#040404] opacity-100"
      }`}
    >
      <div className="flex flex-col space-y-8 items-center">
        <div className="flex flex-col items-center">
          <User
            className={`self-start mb-14 ${
              isOpened ? "opacity-100" : "opacity-0"
            }`}
          />
          {LINKS.map((link, i) => {
            const isActive = activeLinkIndex === i;
            return (
              <div
                key={i}
                className={`relative flex items-center cursor-pointer ${
                  isActive && "bg-accent"
                } ${isOpened ? "w-80 rounded-xl" : "rounded-full"}`}
                onClick={() => setActiveLinkIndex(i)}
              >
                <div
                  className={`flex items-center justify-center w-20 h-20 p-7 rounded-full ${
                    isActive && "bg-accent"
                  }`}
                >
                  <Icon path={link.icon} />
                </div>
                {isOpened && (
                  <span
                    className={`text-4xl ml-4 text-nowrap mt-3 ${
                      isActive && "font-bold"
                    }`}
                  >
                    {link.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`flex flex-col space-y-4 absolute bottom-8 w-full pl-7 ${
          isOpened ? "opacity-100" : "opacity-0"
        }`}
      >
        {BOTTOM_LINKS.map((link, i) => {
          return (
            <button key={i} className="flex items-center space-x-2">
              {isOpened && (
                <span className="text-2xl font-bold text-gray tracking-widest text-nowrap">
                  {link.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
