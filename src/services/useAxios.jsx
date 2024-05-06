import axios from "axios";



const useAxios = () => {
    const {token} = axios.create({
        baseURL: `${process.env.REACT_APP_BASE_URL}`,
        headers: {
            Authorization: 
            `Token ${token}`
        }
    })


  return {}
   
  
}

export default useAxios