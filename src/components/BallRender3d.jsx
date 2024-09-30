import Spline from "@splinetool/react-spline/next";

export default function Ballrenderer() {
  return (
    <div className=" w-full h-full">
      {/* <div className="absolute top-0 left-0 w-full h-full -z-10"> */}
      <Spline scene="https://prod.spline.design/02URUbUbexan1MeO/scene.splinecode" />
    </div>
  );
}
