import React from 'react';
import buildImages from '../../constants/buildImages.js';

// Images
import Image from 'next/image';

// Icons
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Builds = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="bg-[#15131A] text-white">
      <br /><br />
      <p className="text-center text-5xl font-bold mb-10 custom:text-4xl">Our Sample Builds</p>

      <div className="build-container max-w-full flex relative">
        <div className="build-container__images w-max overflow-x-scroll flex" ref={scrollRef}>
          {/* map images here */}
          {[buildImages.g1, buildImages.g2, buildImages.g3, buildImages.g4, buildImages.g1, buildImages.g2, buildImages.g3, buildImages.g4].map((image, index) => (
            <div className="build-container__images_card min-w-[301px] h-[447px] relative mr-[2rem]" key={`gallery_image-${index + 1}`}>
              <Image
                src={image}
                alt="build_image"
              />
            </div>
          ))}
        </div>
        <div className="build-container-arrows bottom-[60%] absolute flex justify-between w-full items-center">
          {/* left and right arrow here */}
          <BsArrowLeftCircleFill
            onClick={() => scroll('left')}
            className="left-arrow cursor-pointer"
            fontSize={75}
          />
          <BsArrowRightCircleFill
            onClick={() => scroll('right')}
            className="right-arrow cursor-pointer"
            fontSize={75}
          />
        </div>
      </div>

    </div>
  )
}

export default Builds;