import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const JarColorContext = createContext()

// This component establishes what data can be used.
export const JarColorProvider = (props) => {
    const [jar_colors, setJarColors] = useState([])

    const getJarColors = () => {
        console.log("hello")
        // return fetch("http://localhost:8000/jar_colors", {
        //   headers: {
        //     Authorization: `Token ${localStorage.getItem("lu_token")}`,
        //   },
        // })
        //   .then ((response) => console.log(response.json))
        
        //   .then(setJarColors(response.json)) ;
          
      };

    const addJarColor = jarColorObj => {
        return fetch("http://localhost:8088/jar_colors", {
            method: "POST",
            headers: {
                Authorization: `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jarColorObj)
        })
        .then(getJarColors)
    }

    /*
        You return a context provider which has the
        `candleMakers` state, `getcandleMakers` function,
        and the `addCandleMakers` function as keys. This
        allows any child elements to access them.
    */
    return (
        <JarColorContext.Provider value={{
            jar_colors, getJarColors, addJarColor
        }}>
            {props.children}
        </JarColorContext.Provider>
    )
}