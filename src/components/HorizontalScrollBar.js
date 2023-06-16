import React, { useContext } from "react";
import BodyParts from "./BodyParts";
import { Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import ExerciseCart from "./ExerciseCart";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

// const LeftArrow = () => {
//   const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
//   return (
//     <Typography
//       disabled={isFirstItemVisible}
//       onClick={() => scrollPrev()}
//       className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
//   return (
//     <Typography
//       disabled={isLastItemVisible}
//       onClick={() => scrollNext()}
//       className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    // <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
    //   Left
    // </button>

    <Typography
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Typography
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
}

function Card({ proppps, item, isBodyPart }) {
  return (
    <div>
      {isBodyPart ? (
        <BodyParts
          item={item}
          bodypartt={proppps.bodypartt}
          setBodypartt={proppps.setBodypartt}
        />
      ) : (
        <ExerciseCart exercise={item} />
      )}
    </div>
  );
}

const HorizontalScrollBar = (props) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {props.data.map((item, id) => (
        <Card
          item={item}
          isBodyPart={props.isBodyPart}
          proppps={props}
          itemId={id}
          title={id}
          key={id}
        />
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
