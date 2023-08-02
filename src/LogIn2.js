import React, { useContext } from "react";
import { ErrorText } from "./SignUp2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Q82Image from "./assets/images/LogIn1__8_2.png";
import Q12Image from "./assets/images/SignUp1__1_1.png";
import Q41Image from "./assets/images/LogIn1__4_1.png";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import mainApi from "./context/main_api";
import { AuthContext } from "./context/AuthContext";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones)
      sm: 600, // Small devices (tablets)
      md: 960, // Medium devices (small laptops)
      lg: 1280, // Large devices (laptops/desktops)
      xl: 1920, // Extra large devices (large laptops/desktops)
    },
  },
});

// Define the custom InputField component here
const InputField = styled("input")({
  width: `550px`,
  height: `60px`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  outline: `none`,
  border: `none`,
  padding: `8px 16px`,
  borderRadius: `10px`,
  backgroundColor: `rgba(255, 255, 255, 0.2)`,
  backdropFilter: `blur(10px)`,
  color: `rgba(255, 255, 255, 1)`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  transition: `background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out`,
  "&::placeholder": {
    color: "rgba(255, 255, 255, 0.7)",
  },
  "&:hover": {
    backgroundColor: `rgba(255, 255, 255, 0.25)`,
  },
  "&:focus": {
    backgroundColor: `rgba(255, 255, 255, 0.3)`,
    boxShadow: `0 0 0 2px rgba(255, 255, 255, 0.2)`,
  },
});

const LogIn21 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `100%`,
  height: `1080px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  // overflow: `hidden`,
});

const Q82 = styled("img")({
  height: `1080px`,
  width: `1920px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q12 = styled("img")({
  height: `132px`,
  width: `230px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `98px`,
  top: `36px`,
});

const Q41 = styled("img")({
  height: `845.37px`,
  width: `1252.22px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `-83px`,
  top: `143px`,
});

const Rectangle2 = styled("div")({
  // Existing styles
  background: `linear-gradient(139.52deg, rgba(255, 255, 255, 0.26) 0.0013581613137283231%, rgba(255, 255, 255, 0.07) 100.00114713056875%)`,
  backdropFilter: `blur(20px)`,
  WebkitBackdropFilter: `blur(20px)`,
  borderRadius: `21px`,
  width: `676px`,
  height: `792px`,
  position: `absolute`,
  left: `1101px`,
  top: `204px`,
  // Center the content
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Username = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `550px`,
  height: `40px`,
  position: `absolute`,
  left: `1150px`,
  top: `500px`,
});

const Password = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `550px`,
  height: `40px`,
  position: `absolute`,
  left: `1150px`,
  top: `613px`,
});

const Group8 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `577px`,
  height: `86px`,
  left: `1151px`,
  top: `500px`,
});

const Rectangle3 = styled("div")({
  background: `linear-gradient(98.48deg, rgba(255, 255, 255, 0.33) -0.0017141581118997988%, rgba(255, 255, 255, 0.33) 99.99778336791958%)`,
  backdropFilter: `blur(20px)`,
  WebkitBackdropFilter: `blur(20px)`,
  borderRadius: `21px`,
  width: `577px`,
  height: `86px`,
  position: `absolute`,
  left: `1154px`,
  top: `172px`,
});

const Group9 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `577px`,
  height: `86px`,
  left: `1150px`,
  top: `613px`,
});

const Rectangle5 = styled("div")({
  background: `linear-gradient(98.48deg, rgba(255, 255, 255, 0.33) -0.0017141581118997988%, rgba(255, 255, 255, 0.33) 99.99778336791958%)`,
  backdropFilter: `blur(20px)`,
  WebkitBackdropFilter: `blur(20px)`,
  borderRadius: `21px`,
  width: `577px`,
  height: `86px`,
  position: `absolute`,
  left: `1154px`,
  top: `172px`,
});

const SignIn = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `700`,
  fontSize: `64px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `258px`,
  height: `85px`,
  position: `absolute`,
  left: `1310px`,
  top: `373px`,
});

const Group10 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `330px`,
  height: `78px`,
  left: `1275px`,
  top: `749px`,
});

const Rectangle8 = styled("div")({
  background: `linear-gradient(103.3deg, rgba(0, 0, 0, 0.33) 0%, rgba(255, 255, 255, 0.33) 100.00000298023232%)`,
  backdropFilter: `blur(10px)`,
  WebkitBackdropFilter: `blur(10px)`,
  borderRadius: `15px`,
  width: `330px`,
  height: `78px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const LogInNow = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `258px`,
  height: `40px`,
  position: `absolute`,
  left: `35px`,
  top: `19px`,
});

const Rectangle4 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 0.71)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `58px`,
  width: `237px`,
  height: `84px`,
  position: `absolute`,
  left: `1529px`,
  top: `57px`,
});

const SignUp = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `258px`,
  height: `40px`,
  position: `absolute`,
  left: `1519px`,
  top: `79px`,
});

function LogIn2() {
  const navigate = useNavigate();

  const {setAccessToken, setLoginStatus, setAccessTokenInLocalStorage}= useContext(AuthContext)
  const [credentials, setcredentials] = useState({
    username:"",
    password:""
  })
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setcredentials({...credentials, [e.target.name]: e.target.value})
  }

  const handleValidation = () => {
    const newErrors = {};
    if (credentials.username.trim().length == "") {
      newErrors.username = "Username is required.";
    }
    if (credentials.password.trim().length == "") {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //For Login
  const login = async(e)=>{
    e.preventDefault()
    const isValid = handleValidation();

    if(!isValid){
      return console('Invalid Input');
    }
    
    try{
        const response = await axios.post(`${mainApi}/api/login`,{
            username:credentials.username,
            password:credentials.password
        },{
          withCredentials: true,
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': process.env.REACT_APP_SECRET_API_KEY
          }
        }).catch((err) => {
          console.log("Error: " + err.response.data.message);
          return
        })

        if(!response){
          return
        }
        
        // setAccessTokenInLocalStorage(response.data.accessToken);
      
        localStorage.setItem("accessToken", response.data.accessToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
        console.log(response)
        // setAccessToken(response.data.accessToken)
        setLoginStatus(true);
    }
    catch(error){
        alert(error);
    }
  }

  const handleLogInClick1 = () => {
    // Navigate to the SignUp1 page when "Sign Up" is clicked
    navigate("/sign-up-1");
  };

  return (
    <ThemeProvider theme={theme}>
      <LogIn21>
        <Q82 src={Q82Image} loading="lazy" alt={"8 2"} />
        <Q12 src={Q12Image} loading="lazy" alt={"1 2"} />
        <Q41 src={Q41Image} loading="lazy" alt={"4 1"} />
        <Rectangle2></Rectangle2>
        <form onSubmit={login}>
          <Username>
            <InputField
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Username"
            />
            {errors.username && <ErrorText>{errors.username}</ErrorText>}
          </Username>
          <Password>
            <InputField
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
          </Password>
        </form>
        <SignIn>{`SIGN IN`}</SignIn>
        <Group10>
          <Rectangle8></Rectangle8>
          <LogInNow onClick={login}>
            {`Log In Now`}
          </LogInNow>
        </Group10>
        <Rectangle4></Rectangle4>
        <SignUp onClick={handleLogInClick1}>{`Sign Up`}</SignUp>
      </LogIn21>
    </ThemeProvider>
  );
}

export default LogIn2;
