import React, { useEffect } from 'react'
import KPIcards from '../components/KPIcards'
import Charts from '../components/Charts'
import useStockRequest from '../services/useStockRequest'

const Home = () => {

  const { getStock } = useStockRequest()

  useEffect(() => {
    getStock("sales")
    getStock("purchases")
  }, [])

  return (
    <div>
      <KPIcards/>
      <Charts/>

    </div>
  )
}

export default Home