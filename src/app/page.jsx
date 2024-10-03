// import Ballrenderer from "@/components/BallRender3d";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";

import Ballrenderer from "@/components/BallRender3d";
import Footer from "@/components/Footer";
import LoginPage from "@/components/LoginPage";

export default function Home() {
  return (
    <div className="min-h-screen mt-[5rem] lg:mt-0">
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <LoginPage />
        <div className=" lg:block">
          <div className="h-full hidden lg:block w-full bg-gradient-to-tr from-black via-black to-gray-900">
            <Ballrenderer />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
