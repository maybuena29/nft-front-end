import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Q82Image from "./assets/images/LandingPage__8_2.png";
import Q12Image from "./assets/images/SignUp1__1_1.png";
import Q21Image from "./assets/images/LandingPage__2_1.png";
import { AuthContext } from "./context/AuthContext";

const LandingPage1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  // position: `relative`,
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

const Q82 = styled("img")({
  width: `100%`, // Adjusted to be 100% of the parent container's width
  height: `auto`, // Height will adjust proportionally based on the width
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

const TheNftYieldProtocolSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', 'sans-serif'`,
  fontWeight: `400`,
  fontSize: `126px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `114.99999761581421%`,
  textTransform: `none`,
});

const TheNftYieldProtocolSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `700`,
  fontSize: `126px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `114.99999761581421%`,
  textTransform: `none`,
});

const TheNftYieldProtocolSpan3 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: `400`,
  fontSize: `126px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `114.99999761581421%`,
  textTransform: `none`,
});

const TheNftYieldProtocol = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: "unset",
  fontWeight: `400`,
  fontSize: `126px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `114.99999761581421%`,
  textTransform: `none`,
  width: `604px`,
  height: `384px`,
  position: `absolute`,
  left: `134px`,
  top: `234px`,
});

const Q21 = styled("img")({
  height: `1080px`,
  width: `1920px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `328px`,
  top: `0px`,
});

const Rectangle3 = styled("div")({
  background: `linear-gradient(104.58deg, rgba(255, 255, 255, 0.26) -0.00178560223244109%, rgba(255, 255, 255, 0.07) 99.99911643206143%)`,
  backdropFilter: `blur(10px)`,
  WebkitBackdropFilter: `blur(10px)`,
  borderRadius: `15px`,
  width: `542px`,
  height: `141px`,
  position: `absolute`,
  left: `134px`,
  top: `705px`,
});

const DeFiYieldsArenTEasyTSpan1 = styled("span")({
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

const DeFiYieldsArenTEasyTSpan2 = styled("span")({
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

const DeFiYieldsArenTEasyTSpan3 = styled("span")({
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

const DeFiYieldsArenTEasyT = styled("div")({
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
  height: `88px`,
  position: `absolute`,
  left: `174px`,
  top: `732px`,
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

function LandingPage() {
  const history = useNavigate();
  
  const {setAccessToken, setLoginStatus, setAccessTokenInLocalStorage}= useContext(AuthContext)

  const logout = async () => {
    localStorage.removeItem('accessToken');
    setAccessToken('');
    setLoginStatus(false);
  }

  const handleLogInClick = () => {
    history("/sign-up-1");
  };
  return (
    <LandingPage1>
      <Q82 src={Q82Image} loading="lazy" alt={"8 2"} />
      <Q12
        src={Q12Image}
        onClick={handleLogInClick}
        loading="lazy"
        alt={"1 2"}
      />
      <TheNftYieldProtocol>
        <TheNftYieldProtocolSpan1>{`The `}</TheNftYieldProtocolSpan1>
        <TheNftYieldProtocolSpan2>{`NFT`}</TheNftYieldProtocolSpan2>
        <TheNftYieldProtocolSpan3>{` Yield Protocol.`}</TheNftYieldProtocolSpan3>
      </TheNftYieldProtocol>
      <Q21 src={Q21Image} loading="lazy" alt={"2 1"} />
      <Rectangle3></Rectangle3>
      <DeFiYieldsArenTEasyT>
        <DeFiYieldsArenTEasyTSpan1>{`DeFi Yields`}</DeFiYieldsArenTEasyTSpan1>
        <DeFiYieldsArenTEasyTSpan2>{` aren’t easy to manage. And so does`}</DeFiYieldsArenTEasyTSpan2>
        <DeFiYieldsArenTEasyTSpan3>{` money.`}</DeFiYieldsArenTEasyTSpan3>
      </DeFiYieldsArenTEasyT>
      <Rectangle4></Rectangle4>
        <SignUp onClick={logout}>{`Logout`}</SignUp>
    </LandingPage1>
  );
}

export default LandingPage;
