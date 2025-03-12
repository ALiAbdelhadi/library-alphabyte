"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Container from "../../Container";

gsap.registerPlugin(ScrollTrigger);
const NewCollection = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const boxes = sectionRef.current.querySelectorAll(".animate-box");
    boxes.forEach((box) => {
      const button = box.querySelector(".animate-button");
      const image = box.querySelector(".animate-image");
      const text = box.querySelector(".animate-text");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          end: "top 60%",
        },
      });
      tl.fromTo(
        button,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power1.inOut",
        },
      )
        .fromTo(
          image,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.2",
        )
        .fromTo(
          text,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.5",
        );
    });
  }, []);
  return (
    <section ref={sectionRef} className="py-12 md:py-24 lg:py-32 ">
      <Container>
        <div className="flex md:flex-row flex-col  items-start">
          <div className="w-full flex justify-between flex-col md:mb-0 mb-20 space-y-3">
            <Link className="animate-box" href="Collection/spot">
              <div className="relative">
                <img
                  alt="Line Up/Down LED Suspended Lamp"
                  className="object-cover w-full h-54 md:h-[500px] rounded-lg animate-image"
                  src="/blocks/new-collection/new-collection-3.jpg"
                />
                <div
                  className={`py-2 px-4 select-none bg-[linear-gradient(90deg,_transparent_0%,_#ffb96914_90%)] inline-flex w-fit items-center whitespace-nowrap rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary dark:text-secondary-foreground absolute top-0 right-0 mt-4 mr-4 shadow-lg backdrop-blur-[6px] overflow-hidden  `}
                >
                  <p className="overflow-hidden">NEW</p>
                </div>
              </div>
              <div className="my-4 animate-text">
                <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-bold uppercase">
                  Halo — LED Ring Suspended Lamp
                </h2>
                <p className="block mt-2 text-sm sm:text-base md:text-lg hover:underline font-medium">
                  Discover more
                </p>
              </div>
            </Link>
            <Link className="animate-box" href="Collection/hallo">
              <div className="relative">
                <img
                  alt="Line Up/Down LED Suspended Lamp"
                  className="object-cover w-full h-55 md:h-[500px] rounded-lg animate-image"
                  src="/blocks/new-collection/new-collection-2.jpg"
                />
                <div
                  className={`py-2 px-4 select-none backdrop-blur-sm inline-flex text-[#fff] dark:text-secondary-foreground w-fit items-center whitespace-nowrap rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary absolute top-0 right-0 mt-4 mr-4 shadow-lg overflow-hidden`}
                >
                  <p className="overflow-hidden">NEW</p>
                </div>
              </div>
              <div className="mt-4 animate-text absolute">
                <h2 className="text-muted-foreground text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  font-bold uppercase">
                  Halo — LED Ring Suspended Lamp
                </h2>
                <p className="block mt-2 text-sm sm:text-base md:text-lg hover:underline  font-medium">
                  Discover more
                </p>
              </div>
            </Link>
          </div>
          <Link
            className="w-full animate-box  md:mt-0 md:ml-10"
            href="Collection/track"
          >
            <div className="relative">
              <img
                alt="Line Up/Down LED Suspended Lamp"
                className="object-cover w-full h-auto md:h-[500px] lg:h-[750px] rounded-lg animate-image"
                src="/blocks/new-collection/new-collection-1.jpg"
              />
              <div
                className={`py-2 px-4 select-none  bg-[linear-gradient(90deg,_transparent_0%,_#ffb96914_90%)] inline-flex text-[#FFF] dark:text-secondary-foreground w-fit items-center whitespace-nowrap rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary absolute top-0 right-0 mt-4 mr-4 shadow-lg backdrop-blur-[6px] overflow-hidden  `}
              >
                <p className="overflow-hidden">NEW</p>
              </div>
            </div>
            <div className="mt-4 animate-text">
              <h2 className="text-sm sm:text-lg md:text-xl text-muted-foreground lg:text-2xl xl:text-3xl  font-bold uppercase">
                Line — Up/Down LED Suspended Lamp
              </h2>
              <p className="block mt-2 text-sm sm:text-base md:text-lg hover:underline  font-medium">
                Discover more
              </p>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default NewCollection;
