// import React, { useState } from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
// import { Transition } from '@headlessui/react';
// import classNames from 'classnames';

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevImage = () => {
//     if (currentIndex === 0) {
//       setCurrentIndex(images.length - 1);
//     } else {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const nextImage = () => {
//     if (currentIndex === images.length - 1) {
//       setCurrentIndex(0);
//     } else {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const onMouseEnterLeft = () => {
//     document.body.style.cursor = 'w-resize';
//   };

//   const onMouseEnterRight = () => {
//     document.body.style.cursor = 'e-resize';
//   };

//   const onMouseLeave = () => {
//     document.body.style.cursor = 'default';
//   };

//   return (
//     <div
//       className="relative w-full h-96 overflow-hidden"
//       onMouseLeave={onMouseLeave}
//     >
//       <div
//         className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2"
//         onMouseEnter={onMouseEnterLeft}
//         onClick={prevImage}
//       >
//         <Transition
//           show={currentIndex !== 0}
//           enter="transition duration-300 ease-in-out"
//           enterFrom="-translate-x-full"
//           enterTo="translate-x-0"
//           leave="transition duration-300 ease-in-out"
//           leaveFrom="translate-x-0"
//           leaveTo="-translate-x-full"
//         >
//           <ChevronLeftIcon className="w-8 h-8 text-white cursor-pointer" />
//         </Transition>
//       </div>
//       <div
//         className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2"
//         onMouseEnter={onMouseEnterRight}
//         onClick={nextImage}
//       >
//         <Transition
//           show={currentIndex !== images.length - 1}
//           enter="transition duration-300 ease-in-out"
//           enterFrom="translate-x-full"
//           enterTo="translate-x-0"
//           leave="transition duration-300 ease-in-out"
//           leaveFrom="translate-x-0"
//           leaveTo="translate-x-full"
//         >
//           <ChevronRightIcon className="w-8 h-8 text-white cursor-pointer" />
//         </Transition>
//       </div>
//       {images.map((image, index) => (
//         <img
//           key={index}
//           className={classNames(
//             'absolute inset-0 w-full h-full object-cover',
//             {
//               hidden: currentIndex !== index,
//             }
//           )}
//           src={image.src}
//           alt={image.alt}
//         />
//       ))}
//     </div>
//   );
// };

// export default Carousel;


import { useState } from "react";
import ImageOne from "../assets/images/pic1.jpeg";
import ImageTwo from "../assets/images/pic2.jpeg";
import ImageThree from "../assets/images/pic3.jpeg";

const Carousel = () => {
    //   const [currentIndex, setCurrentIndex] = useState(0);

    //   const handlePrevClick = () => {

    //     setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    //   };

    //   const handleNextClick = () => {
    //     setCurrentIndex((currentIndex + 1) % images.length);
    //   };
    const handleMouseMove = (e) => {
        console.log(e.clientX,e.clientY)
    }
    

    return (
        <div className="relative">
            <div className="flex justify-center items-center w-full"
                onMouseMove={handleMouseMove}>
                <div
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer"
                    onMouseEnter={() => {
                        document.body.style.cursor = "w-resize";
                    }}
                    onMouseLeave={() => {
                        document.body.style.cursor = "default";
                    }}
                //   onClick={handlePrevClick}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-gray-400 hover:text-gray-700 transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </div>
                <div className="w-80 h-80 relative">
                    {/* {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="1"
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))} */}
                </div>
                <div
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
                    onMouseEnter={() => {
                        document.body.style.cursor = "e-resize";
                    }}
                    onMouseLeave={() => {
                        document.body.style.cursor = "default";
                    }}
                //   onClick={handleNextClick}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-gray-400 hover:text-gray-700 transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
