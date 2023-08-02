import React from "react";

import { useNavigate } from "react-router-dom";

import Q81Image from "./assets/images/SignUp1__8_1.png";

import Q11Image from "./assets/images/SignUp1__1_1.png";

import Q31Image from "./assets/images/SignUp1__3_1.png";

import Rectangle2Image from "./assets/images/SignUp1_Rectangle_2.png";

import Q91Image from "./assets/images/SignUp1__9_1.png";

import SignUpWithEmailImageImage from "./assets/images/SignUp1_sign_up_with_email_image_1.png";

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

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


const SignUp11 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    display: `flex`,
    // position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: `100%`, // Adjusted to be 100% of the viewport width
    height: `100%`, // Height will adjust based on content
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    // overflow: `hidden`,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', // Change the flex direction to stack elements vertically
    },
  });

const Q81 = styled("img")({
  height: `100%`,
  width: `100%`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});

const Q11 = styled("img")({
  height: `132px`,
  width: `230px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `98px`,
  top: `36px`
});

const Group13 = styled("div")({
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
  top: `60px`
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
  top: `0px`
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
  top: `22px`
});

const Q31 = styled("img")({
  height: `867.14px`,
  width: `894.97px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `121px`,
  top: `154px`,
  rotate: `10.37deg`
});

const LetSStartYourNftJourSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `81px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const LetSStartYourNftJourSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `700`,
  fontSize: `81px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const LetSStartYourNftJourSpan3 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `81px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const LetSStartYourNftJourSpan4 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `700`,
  fontSize: `81px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const LetSStartYourNftJour = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: "unset",
  fontWeight: `400`,
  fontSize: `81px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `664px`,
  height: `353px`,
  position: `absolute`,
  left: `1124px`,
  top: `229px`
});

const MostPowerfulNftDesigSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const MostPowerfulNftDesigSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const MostPowerfulNftDesigSpan3 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const MostPowerfulNftDesig = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: "unset",
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `378px`,
  height: `40px`,
  position: `absolute`,
  left: `1124px`,
  top: `610px`
});

const Group1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `664px`,
  height: `94px`,
  left: `1124px`,
  top: `700px`
});

const Rectangle2 = styled("img")({
  height: `94px`,
  width: `664px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});

const SignUpWithGoogleSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const SignUpWithGoogleSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const SignUpWithGoogle = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: "unset",
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `250px`,
  height: `40px`,
  position: `absolute`,
  left: `248px`,
  top: `30px`
});

const Q91 = styled("img")({
  height: `72px`,
  width: `70px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `166px`,
  top: `11px`
});

const Rectangle3 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `58px`,
  width: `664px`,
  height: `94px`,
  position: `absolute`,
  left: `1124px`,
  top: `822px`
});

const SignUpWithEmailSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const SignUpWithEmailSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`
});

const SignUpWithEmail = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: "unset",
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `250px`,
  height: `40px`,
  position: `absolute`,
  left: `1372px`,
  top: `852px`
});

const SignUpWithEmailImage = styled("img")({
  height: `63px`,
  width: `68px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `1290px`,
  top: `840px`
});

function SignUp1() {
  const history = useNavigate();

  const handleSignUpWithEmailClick = () => {
    // Navigate to the SignUp2 page when "Sign Up With Email" is clicked
    history("/sign-up-2");
  };

  const handleLogInClick = () => {
    // Navigate to the LogIn1 page when "Log In" is clicked
    history("/log-in-1");
  };
  return (
    <ThemeProvider theme={theme}>
    <SignUp11>
      <Q81 src={Q81Image} loading="lazy" alt={"8 1"} />
      <Q11 src={Q11Image} loading="lazy" alt={"1 1"} />
      <Group13>
        <Rectangle1></Rectangle1>
        <LogIn onClick={handleLogInClick}>{`Log In`}</LogIn>
      </Group13>
      <Q31 src={Q31Image} loading="lazy" alt={"3 1"} />
      <LetSStartYourNftJour>
        <LetSStartYourNftJourSpan1>{`Let’s start your `}</LetSStartYourNftJourSpan1>
        <LetSStartYourNftJourSpan2>{`NFT JOURNEY
`}</LetSStartYourNftJourSpan2>
        <LetSStartYourNftJourSpan3>{`with `}</LetSStartYourNftJourSpan3>
        <LetSStartYourNftJourSpan4>{`NFT.CO`}</LetSStartYourNftJourSpan4>
      </LetSStartYourNftJour>
      <MostPowerfulNftDesig>
        <MostPowerfulNftDesigSpan1>{`Most powerful `}</MostPowerfulNftDesigSpan1>
        <MostPowerfulNftDesigSpan2>{`NFT`}</MostPowerfulNftDesigSpan2>
        <MostPowerfulNftDesigSpan3>{` design tool.`}</MostPowerfulNftDesigSpan3>
      </MostPowerfulNftDesig>
      <Group1>
        <Rectangle2 src={Rectangle2Image} loading="lazy" alt={"Rectangle 2"} />
        <SignUpWithGoogle>
          <SignUpWithGoogleSpan1>{`Sign up with `}</SignUpWithGoogleSpan1>
          <SignUpWithGoogleSpan2>{`Google`}</SignUpWithGoogleSpan2>
        </SignUpWithGoogle>
        <Q91 src={Q91Image} loading="lazy" alt={"9 1"} />
      </Group1>
      <Rectangle3></Rectangle3>
      <SignUpWithEmail onClick={handleSignUpWithEmailClick}>
        <SignUpWithEmailSpan1>{`Sign up with `}</SignUpWithEmailSpan1>
        <SignUpWithEmailSpan2>{`Email`}</SignUpWithEmailSpan2>
      </SignUpWithEmail>
      <SignUpWithEmailImage
        src={SignUpWithEmailImageImage}
        loading="lazy"
        alt={"sign_up_with_email_image 1"}
      />
    </SignUp11>
    </ThemeProvider>
  );
}

export default SignUp1;
