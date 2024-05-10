import useAxios from '../services/useAxios'
import { useDispatch } from 'react-redux'
import { fetchStart, firmSuccess, fetchFail } from '../features/firmsSlice'
import { useEffect } from 'react'

const useStockRequest = () => {

    const {axiosToken} = useAxios()
    const dispatch = useDispatch()

    const getFirms = async ()=> {
        dispatch(fetchStart())  
        try {
            const data = await axiosToken("/firms")
            console.log(data)
        dispatch(firmSuccess(data))
            
        } catch (error) {
            console.log(error)
         dispatch(fetchFail())
            
        }
    }
  return {getFirms}
}

export default useStockRequest