import { FC } from 'react';
import { Box, Button, Typography, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { StyledProfile } from '.';
import { WidthController } from '../../components';
 
const Profile: FC = () => {

  const [form, setForm] = useState({
    linkedin: "",
    hobbies: "",
    goals: "",
    experience: "",
  });

  const params = useParams();

  // useEffect(() => {
  //   async function fetchData() {
  //     const id = params.id.toString();
  //     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
  
  //     if (!response.ok) {
  //       const message = `An error has occurred: ${response.statusText}`;
  //       window.alert(message);
  //       return;
  //     }
  
  //     const record = await response.json();
  //     if (!record) {
  //       window.alert(`Record with id ${id} not found`);
  //       return;
  //     }
  
  //     setForm(record);
  //   }
  
  //   fetchData();
  
  //   return;
  // }, [params.id]);


    return ( 
      <StyledProfile>
        <WidthController>
          <Box marginTop="20px">
            <Typography  sx={{ fontSize: "30px", fontWeight: "900" }}>
              Edit Profile
            </Typography>
          </Box>
          <Box marginTop="40px">
            <Typography sx={{ fontSize: "20px", fontWeight: "900" }}>
                Name
            </Typography>
            <TextField
              disabled
              defaultValue="Dishant Behera"
              margin="normal"
              variant="outlined"
              sx = {{width: "50%"}}
            />
          </Box>
          <Box marginTop="40px">
            <Typography sx={{ fontSize: "20px", fontWeight: "900" }}>
                LinkedIn
            </Typography>
            <TextField
              defaultValue="https://www.linkedin.com/in/dishant-behera/"
              margin="normal"
              variant="outlined"
              sx = {{width: "50%"}}
            />
            <Typography sx={{ fontSize: "12px", fontWeight: "500", color: "#9e9e9e" }}>
                Eg: https://www.linkedin.com/in/dishant-behera/
            </Typography>
          </Box>
          <Box marginTop="40px">
            <Typography sx={{ fontSize: "20px", fontWeight: "900" }}>
                Email
            </Typography>
            <TextField
              disabled
              defaultValue="dishant26201@gmail.com"
              margin="normal"
              variant="outlined"
              sx = {{width: "50%"}}
            />
          </Box>
          <Box marginTop="40px">
            <Typography sx={{ fontSize: "20px", fontWeight: "900" }}>
                Interest/Hobbies
            </Typography>
            <TextField
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
              defaultValue=""
              sx = {{width: "50%"}}
            />
          </Box>
          <Box marginTop="40px">
            <Typography sx={{ fontSize: "20px", fontWeight: "900" }}>
                Future Goals
            </Typography>
            <TextField
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
              defaultValue=""
              sx = {{width: "50%"}}
            />
          </Box>
          <Box marginTop="40px" marginBottom="40px">
            <Typography sx={{ fontSize: "20px", fontWeight: "900" }}>
                Most Memorable Learning Experience
            </Typography>
            <TextField
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
              defaultValue=""
              sx = {{width: "50%"}}
            />
          </Box>
          <Button
            type="submit"
            sx={{
                padding: "0.5rem",
                width: "20%",
                borderRadius: "0.5rem",
                backgroundColor: "#1a75ff",
                color: "#ffffff",
                fontWeight: "bold",
                fontFamily: "Rubik, sans-serif",
                fontSize: "1rem",
                marginBottom: "40px",
                textTransform: "none",
                "&:hover": { cursor: "pointer", backgroundColor: "#1a75ff" },
            }}
          >
            Save Changes
          </Button>
        </WidthController>
      </StyledProfile>
      );
}

export default Profile;