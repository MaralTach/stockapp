import useAxios from "../services/useAxios";
import { useDispatch } from "react-redux";
import {
  fetchStart,
  fetchFail,
  getFirmsSuccess,
  getSalesSuccess,
  getStockSuccess,
} from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

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

  const getStock = async (path = "firms") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken(`/${path}`);
      const stockData = data.data;
      dispatch(getStockSuccess({ stockData, path }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const deleteStock = async (path = "firms", id) => {
    dispatch(fetchStart());
    try {
      await axiosToken.delete(`/${path}/${id}`);
      toastSuccessNotify(`${path} deleted successfully`);
      getStock(path);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify(`${path} deleting failed`);
    }
  };

  const postStock = async (path = "firms", info) => {
    dispatch(fetchStart());
    try {
      await axiosToken.post(`/${path}/ `, info);

      getStock(path);
      toastSuccessNotify(`${path} added successfully`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${path} adding failed`);
      console.log(error);
    }
  };


  const putStock = async (path = "firms", info) => {
    dispatch(fetchStart());
    try {
      await axiosToken.put(`/${path}/${info._id}`, info);

      getStock(path);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  // return { getFirms, getSales,getStock };
  return { getStock, deleteStock, postStock,putStock };
};

export default useStockRequest;
