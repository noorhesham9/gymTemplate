import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
const BodyParts = (props) => {
  return (
    <Stack
      onClick={() => {
        props.setBodypartt(props.item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      alignItems={"center"}
      justifyContent={"center"}
      className="bodyPart-card"
      sx={{
        borderTop: props.bodypartt === props.item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}>
      <img
        src={Icon}
        alt="dumble"
        style={{
          width: "40px",
          height: "40px",
        }}
      />

      <Typography
        fontSize={"24px"}
        fontWeight={"bold"}
        color={"#3A1212"}
        textTransform={"capitalize"}>
        {" "}
        {props.item}
      </Typography>
    </Stack>
  );
};

export default BodyParts;
