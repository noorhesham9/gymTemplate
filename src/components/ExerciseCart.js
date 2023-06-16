import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Pagination,
  Stack,
  Typography,
  Typyography,
} from "@mui/material";
const ExerciseCart = ({ exercise }) => {
  return (
    <Link
      style={{ marginRight: "30px" }}
      className="exercise-card"
      to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt="exercise.name" loading="lazy"></img>
      <Stack direction={"row"}>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}>
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml={"21px"}
        color={"#000"}
        fontWeight={"bold"}
        mt={"11px"}
        pb={"10px"}
        textTransform={"capitalize"}
        fontSize={"23px"}>
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCart;
