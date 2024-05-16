// import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { fetchFail, fetchStart, logOutSuccess, loginSuccess,registerSuccess } from "../features/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import useAxios from "../services/useAxios"


const useApiRequest = () => {
  const { axiosToken, axiosPublic } = useAxios()
  // const {token} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async (userData) => {
    //   const BASE_URL = "https://10121.fullstack.clarusway.com"

    dispatch(fetchStart())
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login`,
      //   userData
      // );
      const { data } = await axiosPublic.post("/auth/login", userData)
      dispatch(loginSuccess(data))
      toastSuccessNotify("Login successfully")
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Login failed")
      console.log(error)
    }
  }

  const register = async (userInfo) => {
    // const BASE_URL = "https://10121.fullstack.clarusway.com"

      dispatch(fetchStart())
      try {
        // const { data } = await axios.post( `${process.env.REACT_APP_BASE_URL}/users`, userData)
        const { data } = await axiosPublic.post( "/users/", userInfo)
        console.log(data)
        dispatch(registerSuccess(data))
        toastSuccessNotify("Registration successfully")
        navigate("/")
      } catch (error) {
        console.log(error)
        dispatch(fetchFail())
        toastErrorNotify("Registration failed")
      }
   
  }
  const logout = async () => {
    dispatch(fetchStart())

    try {
      // await axiosToken.get("/auth/logout",{
      //   headers:{
      //     Authorization: `Token ${token}`
      //   },
      // })

      await axiosToken.get ("/auth/logout")
      dispatch(logOutSuccess())
      // toastSuccessNotify("Logout islemi basarılı")
      navigate("/register")

    } catch (error) {
      dispatch(fetchFail());
  
    }
  }

  return { login, register, logout }
}

export default useApiRequest
