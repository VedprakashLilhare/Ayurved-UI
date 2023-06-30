import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css"

const Home = () => {
  return (
    <div>
      <Typography sx={{ margin:"4%" }} variant="h2" align="center" color={"white"}>
        Database for Medical plants
      </Typography>
      <div>
        <ul className="ul">
          <li style={{ listStyle: 'none' }}>
          <Button sx={{ margin:"2% 3%"}} variant="outlined" >
            <Link style={{textDecoration:'none'}} to="/plant/feed">
              <Typography sx={{ margin:"3% auto" }} variant="h5" align="center" color={"white"}>
            Search plants</Typography>
            </Link>
            </Button>
          </li>
          <li style={{ listStyle: 'none' }}>
          <Button sx={{ margin:"2% 3%"}} variant="outlined" >
            <Link style={{textDecoration:'none'}} to="/plant/dashboard">
              <Typography sx={{ margin:"3% auto" }} variant="h5" align="center" color={"white"}>
                Support to Create Database</Typography>
            </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
