import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Q81Image from "./assets/images/SignUp1__8_1.png";
import Q11Image from "./assets/images/SignUp1__1_1.png";
import Q31Image from "./assets/images/SignUp1__3_1.png";
import Line1Image from "./assets/images/SignUp2_Line_1.png";
import Line2Image from "./assets/images/SignUp2_Line_2.png";
import Line3Image from "./assets/images/SignUp2_Line_3.png";
import Line4Image from "./assets/images/SignUp2_Line_4.png";
import { styled } from "@mui/material/styles";
import axios from "axios";
import mainApi from "./context/main_api";
import { AuthContext } from "./context/AuthContext";

const SignUp21 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `100%`, // Adjusted to be 100% of the viewport width
  height: `auto`, // Height will adjust based on content
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  // overflow: `hidden`,
});

const Q81 = styled("img")({
  height: `1080px`,
  width: `1920px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q11 = styled("img")({
  height: `132px`,
  width: `230px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `98px`,
  top: `36px`,
});

const Group12 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `258px`,
  height: `84px`,
  left: `1530px`,
  top: `60px`,
});

const Rectangle1 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 0)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `58px`,
  width: `237px`,
  height: `84px`,
  position: `absolute`,
  left: `10px`,
  top: `0px`,
});

const LogIn = styled("div")({
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
  left: `0px`,
  top: `22px`,
});

const Q31 = styled("img")({
  height: `867.14px`,
  width: `894.97px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `121px`,
  top: `154px`,
  rotate: `10.37deg`,
});

const Rectangle2 = styled("div")({
  background: `linear-gradient(139.52deg, rgba(255, 255, 255, 0.26) 0.0013581613137283231%, rgba(255, 255, 255, 0.07) 100.00114713056875%)`,
  backdropFilter: `blur(20px)`,
  WebkitBackdropFilter: `blur(20px)`,
  borderRadius: `21px`,
  width: `676px`,
  height: `792px`,
  position: `absolute`,
  left: `1101px`,
  top: `204px`,
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
  width: `258px`,
  height: `40px`,
  position: `absolute`,
  left: `1182px`,
  top: `407px`,
});

const FullName = styled("div")({
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
  width: `258px`,
  height: `40px`,
  position: `absolute`,
  left: `1181px`,
  top: `520px`,
});

const EmailAddress = styled("div")({
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
  width: `258px`,
  height: `40px`,
  position: `absolute`,
  left: `1181px`,
  top: `633px`,
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
  width: `258px`,
  height: `40px`,
  position: `absolute`,
  left: `1182px`,
  top: `746px`,
});

const SignUp = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `700`,
  fontSize: `60px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `258px`,
  height: `85px`,
  position: `absolute`,
  left: `1310px`,
  top: `257px`,
});

const Group11 = styled("div")({
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
  left: `1274px`,
  top: `830px`,
});

const InputField = styled("input")({
  background: "rgba(255, 255, 255, 0.1)",
  border: "none",
  borderRadius: "8px",
  width: "524px",
  height: "70px",
  padding: "12px 16px",
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "18px",
  outline: "none",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  boxSizing: "border-box",
  "&::placeholder": {
    color: "rgba(255, 255, 255, 0.7)",
    "&:invalid": {
      border: "2px solid red",
    },
  },
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

const GetAccessToday = styled("div")({
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

const Line1 = styled("img")({
  height: `0px`,
  width: `524px`,
  position: `absolute`,
  left: `1186px`,
  top: `456px`,
});

const Line2 = styled("img")({
  height: `0px`,
  width: `524px`,
  position: `absolute`,
  left: `1182px`,
  top: `566px`,
});

const Line3 = styled("img")({
  height: `0px`,
  width: `524px`,
  position: `absolute`,
  left: `1186px`,
  top: `683px`,
});

const Line4 = styled("img")({
  height: `0px`,
  width: `524px`,
  position: `absolute`,
  left: `1186px`,
  top: `795px`,
});

const inputFieldValidations = {
  username: /^[a-zA-Z0-9_]{6,}$/,
  fullName: /^[a-zA-Z\s]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

export const ErrorText = styled("div")({
  color: "red",
  fontSize: "12px",
  marginTop: "5px",
});

function SignUp2() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const {setAccessToken, setLoginStatus}= useContext(AuthContext)
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleValidation = () => {
    const newErrors = {};

    if (formData.username.trim().length == "") {
      newErrors.username = "Username is required.";
    }
    if (formData.email.trim().length == "") {
      newErrors.email = "Email is required.";
    }
    if (formData.password.trim().length == "") {
      newErrors.password = "Password is required.";
    }
    if (formData.fullname.trim().length == "") {
      newErrors.fullname = "Fullname is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = handleValidation();

    if(!isValid) {
      return console.log('Invalid Input');
    } 
    
    try{
      const request = await axios.post(`${mainApi}/api/register`,{
          username:formData.username,
          email:formData.email,
          fullname:formData.fullname,
          password:formData.password
      },{
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': process.env.REACT_APP_SECRET_API_KEY
        }
      }).catch((err) => {
        alert("Error: " + err.response.data.message);
        console.log("Error: ", err);
        return
      })
      if(!request){
        return
      }
      console.log(request)
      localStorage.setItem("accessToken", request.data.accessToken);
      setAccessToken(request.data.accessToken)
      setLoginStatus(true)
  }
  catch(error){
      alert(error);
  }

  };

  const handleGetAccessTodayClick = () => {
    // Step 3: Navigate to the LandingPage route
    history("/landing-page");
  };

  const handleLogInClick = () => {
    // Navigate to the LogIn1 page when "Log In" is clicked
    history("/log-in-1");
  };

  return (
    <SignUp21>
      <Q81 src={Q81Image} loading="lazy" alt={"8 1"} />
      <Q11 src={Q11Image} loading="lazy" alt={"1 1"} />
      <Group12>
        <Rectangle1></Rectangle1>
        <LogIn onClick={handleLogInClick}>{`Log In`}</LogIn>
      </Group12>
      <Q31 src={Q31Image} loading="lazy" alt={"3 1"} />
      <Rectangle2></Rectangle2>
      <form onSubmit={handleSubmit} noValidate>
        <Username>
          <InputField
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Username"
            pattern="^[a-zA-Z0-9_]{6,}$"
            required
          />
          {errors.username && <ErrorText>{errors.username}</ErrorText>}
        </Username>
        <FullName>
          <InputField
            type="text"
            name="fullname"
            onChange={handleChange}
            placeholder="Full Name"
            pattern="^[a-zA-Z\s]+$"
            required
          />
          {errors.fullname && <ErrorText>{errors.fullname}</ErrorText>}
        </FullName>
        <EmailAddress>
          <InputField
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email Address"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            required
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
        </EmailAddress>
        <Password>
          <InputField
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            required
          />
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
        </Password>
        <SignUp type="submit">{`SIGN UP`}</SignUp>
      </form>
      <Group11>
        <Rectangle8 onClick={handleSubmit}></Rectangle8>
        <GetAccessToday onClick={handleSubmit}>
          {`Get Access Today`}
        </GetAccessToday>
      </Group11>
      <Line1 src={Line1Image} loading="lazy" alt={"Line 1"} />
      <Line2 src={Line2Image} loading="lazy" alt={"Line 2"} />
      <Line3 src={Line3Image} loading="lazy" alt={"Line 3"} />
      <Line4 src={Line4Image} loading="lazy" alt={"Line 4"} />
    </SignUp21>
  );
}

export default SignUp2;
