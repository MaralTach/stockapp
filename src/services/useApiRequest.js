import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchRegisterFail, fetchRegisterStart, registerSuccess } from "../features/authRegisterSlice"

const useApiRequest = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async (userData) => {
    //   const BASE_URL = "https://10001.fullstack.clarusway.com"

    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData
      )
      dispatch(loginSuccess(data))
      toastSuccessNotify("Login işlemi başarılı")
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Login başarısız oldu")
      console.log(error)
    }
  }

  const register = async (userData) => {
    // const BASE_URL = "https://10121.fullstack.clarusway.com"

      dispatch(fetchRegisterStart())
      try {
        const { data } = await axios.post( `${process.env.REACT_APP_BASE_URL}/users`,userData )
        console.log(data)
        dispatch(registerSuccess(data))
        toastSuccessNotify("Register islemi bésarılı")
      } catch (error) {
        console.log(error)
        dispatch(fetchRegisterFail())
        toastErrorNotify("Register islemi basarısız oldu")
      }
   
  }
  const logout = async () => {}

  return { login, register, logout }
}

export default useApiRequest
