import React, { useState } from "react";
import Sidebar from "../../components/Shared/Sidebar";
import FeaturedSection from "../../components/Home/FeaturedSection";
import TrendingNowSection from "../../components/Home/TrendingNowSection";

const Layout: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="relative h-screen bg-[#141414] text-white">
      <Sidebar isOpened={isMenuOpened} setIsOpened={setIsMenuOpened} />
      <div className="flex flex-col justify-end relative ml-32 h-full">
        <FeaturedSection />
        <TrendingNowSection />
      </div>
    </div>
  );
};

export default Layout;
