
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';


const useLocomotiveScroll = (ref: any) => {
  const locomotiveScrollRef = useRef(null);
    let scroll:any;
  useEffect(() => {

  import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
          el: ref.current as any,
          smooth: true,
          direction:"horizontal" 
      });
  });

  // `useEffect`'s cleanup phase
  return () => {
      if (scroll) scroll.destroy();
  }
},[]);

  return [scroll];
}

export default useLocomotiveScroll;