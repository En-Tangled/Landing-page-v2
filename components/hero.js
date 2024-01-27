import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/entangled.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Monetize your time
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <p>Everything had been financialized except for Time. &nbsp; Finally trade time as a commodity.
            &nbsp; Be amongst the earliest adopters and users.</p>
            Join the limited waitlist now!
            </p>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://github.com/En-Tangled/Landing-page-v2"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <span> Register for the waitlist</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;