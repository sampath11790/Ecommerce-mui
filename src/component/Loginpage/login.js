// import cls from "./login.module.css";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { Login, Signup } from "../../Reduxstore/auth/Auth-thunk";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { ClassSharp } from "@mui/icons-material";

function SignIn() {
  const [signup, setsignup] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const Disptach = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", data);
    const obj = {
      email: data.email,
      password: data.password,
    };

    if (obj.email === "" && obj.password === "") {
      return;
    }
    if (!signup) {
      Disptach(Login(obj));
      // console.log("login", obj);
      return;
    }
    if (signup && obj.password === data.confirmpassword) {
      Disptach(Signup(obj));
      // console.log("signup", obj);

      return;
    }
    alert("enter valid password");
    // console.log(obj);
  };
  const enteredDatahandler = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      {/* <img src="https://img.freepik.com/free-vector/flat-design-minimal-boutique-template-twitter-header_23-2149353661.jpg?w=826&t=st=1685715253~exp=1685715853~hmac=97eaef38fceff51565edd5b422fb9d371d77e0e74678c6cdcaa39d4c8c1b37ab"></img> */}
      <Typography
        component="h1"
        variant="h5"
        sx={{ marginTop: 5, marginBottom: -10, color: "purple" }}
      >
        Style is a way to say who you are without having to speak. Join us and
        let your fashion speak volumes
      </Typography>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          marginBottom: 15,

          // height: "100%",
        }}
      >
        <Box className="loginimage">
          <img src="https://4.bp.blogspot.com/-8Cf0O7eQTB0/T7IYD0CVv_I/AAAAAAABf5s/NyrH5EE61h8/s1600/02.jpg"></img>
        </Box>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {signup ? "SignUp" : "Login"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              width: { sx: "90%", sm: "90%", md: "400px" },
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={enteredDatahandler}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={enteredDatahandler}
              name="password"
              label="Password"
              type="password"
            />
            {signup && (
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={enteredDatahandler}
                name="confirmpassword"
                label="confirmPassword"
                type="password"
              />
            )}
            {/* <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "purple" }}
            >
              {signup ? "Signup" : " Sign In"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={() => setsignup(!signup)} variant="body2">
                  {signup ? "Log In" : "Don't have an account? Sign Up"}
                  {}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SignIn;
