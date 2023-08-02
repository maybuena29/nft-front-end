
import {useState, createContext, useEffect} from 'react';
import axios from 'axios'
import { TrinityRingsSpinner } from 'react-epic-spinners'
import appLogo from "../assets/images/SignUp1__3_1.png"
import mainApi from "./main_api";

export const AuthContext = createContext()


export const AuthProvider = (props) => {
    const [isLoggedIn, setLoginStatus] = useState(false)
    const [user, setUser] = useState({})
    const [accessToken, setAccessToken] = useState("")
    const [isLoading, setLoading] = useState(true)

    const setAccessTokenInLocalStorage = (accessToken) => {
        localStorage.setItem("accessToken", accessToken);
    };

    const verify = async () => {
        try {
          const accessTokenFromLocalStorage = localStorage.getItem("accessToken");
          if (accessTokenFromLocalStorage) {
            setAccessToken(accessTokenFromLocalStorage);
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${accessTokenFromLocalStorage}`;
    
            const response = await axios.get(`${mainApi}/api/show/user`, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-api-key": process.env.REACT_APP_SECRET_API_KEY,
              },
            });
    
            setLoginStatus(true);
            setUser(response.data);
          }
        } catch (error) {
          console.log("Error: ", error);
          setLoginStatus(false);
        } finally {
          setLoading(false);
        }
      };

    useEffect(()=>{
        verify()
    }, [])
   
    return (
        <>
            <AuthContext.Provider value={{isLoggedIn, setLoginStatus, setUser, user, accessToken, setAccessToken, setAccessTokenInLocalStorage}}>
            { !isLoading ? props.children:
                <div className='flex items-center justify-center flex-auto w-full'>
                    <div className='mx-auto mt-32 text-center'>
                        <img className='w-1/2 mx-auto md:w-1/5' src={appLogo}/>
                        {/* <TrinityRingsSpinner color="#FF3C52" size={100} animationDelay={0.1} className='mx-auto mb-5'></TrinityRingsSpinner> */}
                        <label className='mx-auto text-xl font-medium tracking-wide font-poppins'>Loading...</label>
                    </div>
                </div>
            }
            </AuthContext.Provider>
        </>
    );
};