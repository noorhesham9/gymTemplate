import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Details from "../components/Details";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercixe from "../components/SimilarExercixe";
import { exerciseOption, fetchData, youtubeOptions } from "../utils/fetchData";
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const [targetMuscleExercises, settargetMuscleExercises] = useState([]);
  const [equipmentExercises, setequipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const YoutubeSearch =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOption
      );
      setExerciseDetail(exerciseDetailData);
      const exerciseVideoData = await fetchData(
        `${YoutubeSearch}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData);

      const TargetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOption
      );

      settargetMuscleExercises(TargetMuscleExercisesData);
      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOption
      );
      setequipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideo={exerciseVideos}
        exerciseD={exerciseDetail}
      />
      <SimilarExercixe
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
