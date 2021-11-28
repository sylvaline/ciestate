import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

function BtnToTop() {
  const { y: pageToTop } = useWindowScroll();
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    if (pageToTop > 400) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageToTop]);

  const scrollTotop = ()=> window.scrollTo({top : 0, behavior:'smooth'})

  return (
    <>
      {visibility ? (
        <div className="btn_to_top" onClick={scrollTotop}>
          <div className="arrow_up">
            <i className="fas fa-hand-point-up"></i>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default BtnToTop;
