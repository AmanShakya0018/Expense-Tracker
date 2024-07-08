import {
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Buttons from "../../components/Buttons";
import Header from "../../components/Header";

export const Auth = () => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="flex-grow p-3 border border-blacks shadow overflow-auto" style={{ background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)' }}>
        <SignedOut>
          <Header />
          <div className="relative pt-10 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <HeroSection />
              <Buttons />
              <Footer />
            </div>
          </div>
        </SignedOut>
        <SignedIn>
          <Navigate to="/dashboard" />
        </SignedIn>
      </div>
    </div>

  );
};
