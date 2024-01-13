import { fetchStart, fetchFail, getStockSuccess } from "../features/stockSlice"
import useAxios from "./useAxios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useDispatch } from "react-redux"

const useStockCalls = () => {
  const { axiosWithToken } = useAxios()
  const dispatch = useDispatch()

  //   const getFirms = async () => {
  //     dispatch(fetchStart())
  //     try {
  //       const { data } = await axiosWithToken("/firms/")
  //       dispatch(getFirmsSuccess(data.data))
  //     } catch (error) {
  //       dispatch(fetchFail())
  //       toastErrorNotify("Firm bilgileri çekilemedi.")
  //     }
  //   }

  //   const getSales = async () => {
  //     dispatch(fetchStart())
  //     try {
  //       const { data } = await axiosWithToken("/sales/")
  //       dispatch(getSalesSuccess(data.data))
  //     } catch (error) {
  //       dispatch(fetchFail())
  //       toastErrorNotify("Sales bilgileri çekilemedi.")
  //     }
  //   }

  const getStocks = async (url = "firms") => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken(`/${url}/`)
      const apiData = data.data
      dispatch(getStockSuccess({ apiData, url }))
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} bilgileri çekilemedi.`)
    }
  }

  const deleteStock = async (url = "firms", id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`/${url}/${id}/`)
      toastSuccessNotify(`${url} bilgisi silinmiştir.`)
      getStocks(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} silinemedi`)
    }
  }
  const postStock = async (url = "firms",info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`/${url}/`,info)
      toastSuccessNotify(`${url} bilgisi eklenmiştir.`)
      getStocks(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} eklenemed.`)
    }
  }
  const putStock = async (url = "firms", info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`/${url}/${info._id}`, info)
      toastSuccessNotify(`${url} kayıdı güncellenmiştir..`)
      getStocks(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} kaydi güncelenememiştir.`)
    }
  }
  const postBrand = async (url = "brands",info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`/${url}/`,info)
      toastSuccessNotify(`${url} bilgisi eklenmiştir.`)
      getStocks(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} eklenemed.`)
    }
  }
  const putBrand = async (url = "brands", info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`/${url}/${info._id}`, info)
      toastSuccessNotify(`${url} kayıdı güncellenmiştir..`)
      getStocks(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} kaydi güncelenememiştir.`)
    }
  }
  const deleteBrand = async (url = "brands", id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`/${url}/${id}/`)
      toastSuccessNotify(`${url} bilgisi silinmiştir.`)
      getStocks(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} silinemedi`)
    }
  }
  const getBrand = async (url = "brands") => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken(`/${url}/`)
      const apiData = data.data
      dispatch(getStockSuccess({ apiData, url }))
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} bilgileri çekilemedi.`)
    }
  }

  return { getStocks, deleteStock,postStock,putStock,postBrand,putBrand,deleteBrand,getBrand }
}

export default useStockCalls
