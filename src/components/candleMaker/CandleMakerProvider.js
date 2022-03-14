import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const CandleMakerContext = createContext()

// This component establishes what data can be used.
export const CandleMakerProvider = (props) => {
    const [candleMakers, setCandleMakers] = useState([])

    const getCandleMakers = () => {
        return fetch("http://localhost:8000/candleMakers", {
          headers: {
            Authorization: `Token ${localStorage.getItem("lu_token")}`,
          },
        })
          .then((response) => response.json())
          .then(setCandleMakers);
      };

    const addCandleMaker = candleMakerObj => {
        return fetch("http://localhost:8088/candleMakers", {
            method: "POST",
            headers: {
                Authorization: `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(candleMakerObj)
        })
        .then(getCandleMakers)
    }

    /*
        You return a context provider which has the
        `candleMakers` state, `getcandleMakers` function,
        and the `addCandleMakers` function as keys. This
        allows any child elements to access them.
    */
    return (
        <CandleMakerContext.Provider value={{
            candleMakers, getCandleMakers, addCandleMaker
        }}>
            {props.children}
        </CandleMakerContext.Provider>
    )
}
