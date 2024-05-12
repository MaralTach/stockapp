import useAxios from "../services/useAxios";
import { useDispatch } from "react-redux";
import { fetchStart, fetchFail, getFirmsSuccess, getSalesSuccess, getStockSuccess } from "../features/stockSlice";
import { useEffect } from "react";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosToken("/firms");

  //     dispatch(getFirmsSuccess(data.data));
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(fetchFail());
  //   }
  // };


  // const getSales = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosToken("/sales");

  //     dispatch(getSalesSuccess(data.data));
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(fetchFail());
  //   }
  // };



  const getStock = async (path="firms") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken(`/${path}`);
      const stockData = data.data
      dispatch(getStockSuccess({stockData, path}));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  }
  const deleteStock = async (path = "firms", id) => {
    dispatch(fetchStart());
    try {
    await axiosToken.delete(`/${path}/${id}`);
    
     getStock(path)
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  }


  // return { getFirms, getSales,getStock };
  return { getStock,deleteStock };
};

export default useStockRequest;
