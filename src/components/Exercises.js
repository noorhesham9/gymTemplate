import { useEffect, useState } from "react";
import React from "react";
import { Pagination, Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";
import { exerciseOption, fetchData } from "../utils/fetchData";
import ExerciseCart from "./ExerciseCart";
const Exercises = ({ setExercises, exercises, bodypartt }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  const indexOfLAstExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLAstExercise - exercisePerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLAstExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodypartt === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOption
        );
      } else if (bodypartt === "") {
        return;
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypartt}`,
          exerciseOption
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodypartt]);
  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px" },
        mt: "50px",
        p: "20px",
      }}>
      <Typography variant="h3" mb={"46px"}>
        Showing Results
      </Typography>
      <Stack
        direction={"row"}
        sx={{
          gap: { lg: "110px", xs: "50px" },
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
        {exercises.map((exercises, index) => (
          <ExerciseCart key={index} exercise={exercises} />
        ))}
      </Stack>
      <Stack mt={"100px"} alignItems={"center"}>
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            dafaulpage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
