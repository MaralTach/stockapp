import useAxios from "../services/useAxios";
import { useDispatch } from "react-redux";
import { fetchStart, fetchFail, getFirmsSuccess, getSalesSuccess } from "../features/stockSlice";
import { useEffect } from "react";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken("/firms");

      dispatch(getFirmsSuccess(data.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };


  const getSales = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken("/sales");

      dispatch(getSalesSuccess(data.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };



  const getStock = async (path) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken(`/${path}`);
      dispatch(getFirmsSuccess(data.data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  }


  return { getFirms, getSales,getStock };
};

export default useStockRequest;
