import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";


const Layout_2 = () => {
  const ref = useRef(null);

  useEffect(() => {
    let scroll:any;
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
},[ref]);

  return (
    <div ref={ref} className="h-screen w-[400vw] bg-orange-300">
      Layout_2 ssssssssssssss
    </div>
  );
};

export default Layout_2;
