import React, { useEffect, useState } from "react";
import AdSection from "../components/AdSection";
import ChatScreen from "../components/ChatScreen";
import ClubsInfo from "../components/ClubsInfo";
import Layout from "../common/Layout";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout>
      <div className={isMobile ? "full-width" : "left-sidebar"}>
        <AdSection />
      </div>
      <div>
        <ChatScreen />
        {isMobile && (
          <div className="navigation-button">
            <Link to="/other-page">
              <button>Go to Other Page</button>
            </Link>
          </div>
        )}
      </div>
      <div className={isMobile ? "full-width" : "right-sidebar"}>
        <ClubsInfo />
      </div>
    </Layout>
  );
};
export default Home;
