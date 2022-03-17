import React, { useContext, useEffect, useState } from "react"
import { CandleMakerContext } from "./CandleMakerProvider"
import "./CandleMaker.css"
import { useHistory } from 'react-router-dom'

export const CandleMakerForm = () => {
    const { addCandleMaker, getCandleMakers, scents, getScents } = useContext(CandleMakerContext)



    const [candleMaker, setCandleMaker] = useState({
        candle_name: "",
        scentId: 1,
        jar_colorId:1,  
    });

    const history = useHistory();

    useEffect(() => {
        getCandleMakers()
    }, [scents])

    const handleControlledInputChange = (event) => {
        const newCandleMaker = { ...candleMaker }

        newCandleMaker[event.target.id] = event.target.value

        setCandleMaker(newCandleMaker)
    }

    const handleClickSaveCandleMaker = (event) => {
        const timestamp = new Date().toLocaleDateString()

        event.preventDefault()

        const profileId = parseInt(localStorage.getItem("sobrli_user"))

        if (candleMaker.candle_name === "" || candleMaker.scent ==="") {
            window.alert("Please enter information")
        } else {

            const newCandleMaker = {
                candle_name: candleMaker.candle_name,
                scent: candleMaker.scent,
                profileId: profileId,
                // jar_colorId: jar_colorId
            }
            addCandleMaker(newCandleMaker)
                .then(() => history.push("/candleMakers"))
        }
    }

    return (
        <form className="candleMakerForm">
            <h2 className="candleMakerForm_title">Create Your Candle!</h2>
            <fieldset>
            <div className="form-group">
                <label htmlFor="name">Name your candle!</label>
                <input type="text" id="candle_name" required autoFocus className="form-control" placeholder="Name your candle!" value={candleMaker.candle_name} onChange={handleControlledInputChange} />
            </div>
            </fieldset> 

            
           {scents.length> 0 &&
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Create Your Scent</label>
                    <select name="scent" id="scent" className="form-group" onChange={handleControlledInputChange}>
                        {scents.map((scent)=> {
                            return <option key={scent.fragrance}value={scent.fragrance}>{scent.fragrance}</option>
                        })}
                        
                        
                    </select>
                    </div>
            </fieldset>}



           

        

                  
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Jar Color</label>
                    <select name="color" id="color" className="form-group" onChange={handleControlledInputChange}>
                            {jar_colors.map((color)=> {
                            return <option value={color.color}>{color.color}</option>
                        })}
                    </select>
                    </div>
            </fieldset> */}

                  <button className="btn btn-primary" onClick={handleClickSaveCandleMaker}>
                      Save Your Candle
                  </button>

                
        </form>
    )
}


