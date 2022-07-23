import React, { useState, useEffect } from 'react';

// Icons
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollTopArrow = () => {

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <FaArrowCircleUp
        onClick={scrollTop}
        color="#fff"
        fontSize={50}
        className="scrollTop fixed right-[50px] bottom-[10%] cursor-pointer z-[1000]"
        style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
      />
      <style jsx>
        {`
          .scrollTop {
            animation: fadeIn 0.3s;
            transition: opacity 0.4s;
            opacity: 0.5;
          }

          .scrollTop:hover{
            opacity: 1;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 0.5;
            }
          }
        `}
      </style>
    </>
  )

}

export default ScrollTopArrow;