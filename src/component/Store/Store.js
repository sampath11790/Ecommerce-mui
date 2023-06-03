import * as React from "react";
import { child, Men } from "../../Data/Data";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Data from "../../Data/Data";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { CurrencyRupee, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
// import Catagory from "../SupportPages/Catagory";

export default function Store() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        flexGrow: 1,
        height: "100%",
        margin: 2,
      }}
    >
      {/* <Catagory></Catagory> */}
      {[...child, ...Men].map((item) => (
        <Card sx={{ maxWidth: 245, m: 1 }}>
          <NavLink
            to="StoreItem"
            state={item}
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            {/* <CardHeader /> */}
            <CardMedia
              component="img"
              height="250"
              width="400"
              image={item.imageUrl[0]}
              alt="Paella dish"
            />
          </NavLink>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {item.title}
            </Typography>
            <Typography variant="h6" color="text">
              <CurrencyRupee />
              {item.price}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="share">
              <span style={{ fontSize: 18, padding: 0, margin: 0 }}>
                Add Cart
              </span>
              <ShoppingCart sx={{ color: "orange", bg: "green" }} />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
