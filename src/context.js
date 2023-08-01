import { useContext, useState, useEffect } from 'react'
import React from 'react'

const url = 'http://localhost:8080/product/'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [prod, setProd] = useState([])

  const getProduct = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setProd(data)
        // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <AppContext.Provider
      value={{
        prod,
        setProd,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
