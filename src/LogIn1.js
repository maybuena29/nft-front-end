import React from 'react';

import { useNavigate } from "react-router-dom";

import Q82Image from './assets/images/LogIn1__8_2.png';

import Q12Image from './assets/images/SignUp1__1_1.png';

import Q92Image from './assets/images/SignUp1__9_1.png';

import SignUpWithEmailImageImage from './assets/images/SignUp1_sign_up_with_email_image_1.png';

import Q41Image from './assets/images/LogIn1__4_1.png';

import {
  styled
} from '@mui/material/styles';

const LogIn11 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1920px`,
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

const Rectangle4 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 0.71)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `58px`,
  width: `237px`,
  height: `84px`,
  position: `absolute`,
  left: `1540px`,
  top: `60px`,
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
  left: `1530px`,
  top: `82px`,
});

const LetSGoToYourNftJournSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `81px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const LetSGoToYourNftJournSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `700`,
  fontSize: `81px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const LetSGoToYourNftJournSpan3 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `81px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const LetSGoToYourNftJournSpan4 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `700`,
  fontSize: `81px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const LetSGoToYourNftJourn = styled("div")({
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
  top: `229px`,
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
  textTransform: `none`,
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
  textTransform: `none`,
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
  textTransform: `none`,
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
  top: `610px`,
});

const Group15 = styled("div")({
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
  top: `700px`,
});

const Rectangle5 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `58px`,
  width: `664px`,
  height: `94px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const SignInWithGoogleSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const SignInWithGoogleSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const SignInWithGoogle = styled("div")({
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
  top: `30px`,
});

const Q92 = styled("img")({
  height: `72px`,
  width: `70px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `166px`,
  top: `11px`,
});

const Rectangle6 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `58px`,
  width: `664px`,
  height: `94px`,
  position: `absolute`,
  left: `1124px`,
  top: `822px`,
});

const SignUpWithEmailImage = styled("img")({
  height: `63px`,
  width: `68px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `1290px`,
  top: `840px`,
});

const SignInWithEmailSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const SignInWithEmailSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const SignInWithEmail = styled("div")({
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
  top: `852px`,
});

const Q41 = styled("img")({
  height: `845.37px`,
  width: `1252.22px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `-83px`,
  top: `143px`,
});


function LogIn1() {
  const history = useNavigate();

  const handleSignUpWithEmail1Click = () => {
    // Navigate to the SignUp2 page when "Sign Up With Email" is clicked
    history("/log-in-2");
  };

  const handleSignInClick = () => {
    // Navigate to the SignUp1 page when "Sign in with Google" is clicked
    history("/sign-up-1");
  };
  return (
    <LogIn11>
      <Q82 src={Q82Image} loading='lazy' alt={"8 2"}/>
      <Q12 src={Q12Image} loading='lazy' alt={"1 2"}/>
      <Rectangle4>
      </Rectangle4>
      <SignUp onClick={handleSignInClick}>
        {`Sign Up`}
      </SignUp>
      <LetSGoToYourNftJourn>
        <LetSGoToYourNftJournSpan1 >{`Let’s go to your `}</LetSGoToYourNftJournSpan1>
        <LetSGoToYourNftJournSpan2 >{`NFT JOURNEY
`}</LetSGoToYourNftJournSpan2>
        <LetSGoToYourNftJournSpan3 >{`with `}</LetSGoToYourNftJournSpan3>
        <LetSGoToYourNftJournSpan4 >{`NFT.CO`}</LetSGoToYourNftJournSpan4>
      </LetSGoToYourNftJourn>
      <MostPowerfulNftDesig>
        <MostPowerfulNftDesigSpan1 >{`Most powerful `}</MostPowerfulNftDesigSpan1>
        <MostPowerfulNftDesigSpan2 >{`NFT`}</MostPowerfulNftDesigSpan2>
        <MostPowerfulNftDesigSpan3 >{` design tool.`}</MostPowerfulNftDesigSpan3>
      </MostPowerfulNftDesig>
      <Group15>
        <Rectangle5>
        </Rectangle5>
        <SignInWithGoogle>
          <SignInWithGoogleSpan1 >{`Sign in with `}</SignInWithGoogleSpan1>
          <SignInWithGoogleSpan2 >{`Google`}</SignInWithGoogleSpan2>
        </SignInWithGoogle>
        <Q92 src={Q92Image} loading='lazy' alt={"9 2"}/>
      </Group15>
      <Rectangle6>
      </Rectangle6>
      <SignUpWithEmailImage src={SignUpWithEmailImageImage} loading='lazy' alt={"sign_up_with_email_image 1"}/>
      <SignInWithEmail onClick={handleSignUpWithEmail1Click}>
        <SignInWithEmailSpan1>{`Sign in with `}</SignInWithEmailSpan1>
        <SignInWithEmailSpan2>{`Email`}</SignInWithEmailSpan2>
      </SignInWithEmail>
      <Q41 src={Q41Image} loading='lazy' alt={"4 1"}/>
    </LogIn11>);

  }

export default LogIn1;

  