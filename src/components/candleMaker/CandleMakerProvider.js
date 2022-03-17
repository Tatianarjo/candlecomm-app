import React, { useState, createContext, useEffect } from "react"

// The context is imported and used by individual components that need data
export const CandleMakerContext = createContext()

// This component establishes what data can be used.
export const CandleMakerProvider = (props) => {
    const [candleMakers, setCandleMakers] = useState([])
    const [scents, setScents] = useState([])
    

    const getCandleMakers = () => {
        const candleMakersData = 
        ( fetch("http://localhost:8000/candles", {
          headers: {
            Authorization: `Token ${localStorage.getItem("lu_token")}`,
          },
        })
          .then((response) => response.json()))
          .then(setCandleMakers)
          
      };

    const addCandleMaker = candleMakerObj => {
        return fetch("http://localhost:8088/candles", {
            method: "POST",
            headers: {
                Authorization: `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(candleMakerObj)
        })
        .then(getCandleMakers)
    }

    const getCandleMakerById = (id) => {
        const candleMakersData = 
        ( fetch(`http://localhost:8000/candles/${id}`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("lu_token")}`,
        },
        })
          .then((response) => response.json()))
          setCandleMakers(candleMakersData)
        };

        const getScents = () => {
            const candleMakersData = 
            ( fetch("http://localhost:8000/scents", {
              headers: {
                Authorization: `Token ${localStorage.getItem("lu_token")}`,
              },
            })
              .then((response) => response.json()))
              .then(setScents)

              console.log(candleMakersData)
          };
    /*
        You return a context provider which has the
        `candleMakers` state, `getcandleMakers` function,
        and the `addCandleMakers` function as keys. This
        allows any child elements to access them.
    */
   useEffect(() => {
       getScents()
       getCandleMakers()
   },[])
    return (
        <CandleMakerContext.Provider value={{
            candleMakers, getCandleMakers, addCandleMaker, getCandleMakerById, getScents, scents
        }}>
            {props.children}
        </CandleMakerContext.Provider>
    )
}
