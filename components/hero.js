import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/entangled.png";
import { Canvas } from '@react-three/fiber';
import { FadingImageDisplacement } from './transition/imageFadeMaterialDisplacement';

const Hero = () => {
  let _height = 616;
  if (window.innerWidth < 768) {
    _height = 350;
  }
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Monetize your time
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <p>Everything had been financialized except for Time. Finally trade time as a commodity. Be amongst the earliest adopters and users.</p>
            Join the limited waitlist now!
            </p>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                Register for the waitlist
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div style={{ position: "relative",width: "100%", height: _height }} className="object-cover ">
          <Canvas style={{borderRadius: "60px"}} >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <FadingImageDisplacement position={[0, 0, 0]} scale={[3.5,2,1.2]}/>
          </Canvas>
            {/* <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            /> */}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;