import React, { useState, createContext, useEffect } from "react"

// The context is imported and used by individual components that need data
export const CandleMakerContext = createContext()

// This component establishes what data can be used.
export const CandleMakerProvider = (props) => {
    const [candleMakers, setCandleMakers] = useState([])
    const [scents, setScents] = useState([])
    const [jar_colors, setJarColors] = useState([])
    

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

    const addCandleMaker = (candleMaker) => {
        return fetch("http://localhost:8000/candles", {
            method: "POST",
            headers: {
                Authorization: `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(candleMaker)
        })
        .then((response) => response.json()) 
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

          const getJarColors = () => {
            ( fetch("http://localhost:8000/jarcolors", {
              headers: {
                Authorization: `Token ${localStorage.getItem("lu_token")}`,
              },
            })
              .then((response) => response.json()))
              .then(setJarColors)

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
       getJarColors()
   },[])
    return (
        <CandleMakerContext.Provider value={{
            candleMakers, getCandleMakers, addCandleMaker, getCandleMakerById, getScents, scents, jar_colors, getJarColors
        }}>
            {props.children}
        </CandleMakerContext.Provider>
    )
}
