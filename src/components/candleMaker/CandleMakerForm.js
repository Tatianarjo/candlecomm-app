import React, { useContext, useEffect, useState } from "react"
import { CandleMakerContext } from "./CandleMakerProvider"
import "./CandleMaker.css"
import { useHistory } from 'react-router-dom'

export const CandleMakerForm = () => {
    const { addCandleMaker, getCandleMakers } = useContext(CandleMakerContext)



    const [candleMaker, setCandleMaker] = useState({
        candle_name: "",
        scentId: 1,
        jar_colorId:1,  
    });

    const history = useHistory();

    useEffect(() => {
        getCandleMakers()
    }, [])

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

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Create Your Scent</label>
                    <select name="scent" id="scent" className="form-group" onChange={handleControlledInputChange}>
                        <option value="vanillabreeze">Vanilla Breeze</option>
                        <option value="morroccancashmere">Morroccan Cashmere</option>
                        <option value="peachcardamon">Peach Cardamon</option>
                        <option value="daisymusk">Daisy Musk</option>
                        <option value="cucumbermelon">Cucumber Melon</option>
                        <option value="cedarwood">Cedar Wood</option>
                    </select>
                    </div>
            </fieldset>

{/* 
            <fieldset>
<div className="form-group">
  <label htmlFor="jar_colorId">Jar Color: </label>
  <select
    name="jar_colorId"
    className="form-control"
    value={candleMaker.jar_colorId}
    onChange={changeEventState}
  >
    <option value="0">Select Your Jar Color</option>
    {jar_colors.map((jar_color) => {
      
      return (
      <option value={jar_color.id} key={jar_color.id}>{jar_color.color}</option>
    )}
    )}
  </select>
</div>
</fieldset> */}

                  
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Jar Color</label>
                    <select name="scent" id="scent" className="form-group" onChange={handleControlledInputChange}>
                        <option value="pink">Pink</option>
                        <option value="white">White</option>
                        <option value="purple">Purple</option>
                        <option value="blue">Blue</option>
                        <option value="black">Black</option>
                        <option value="yellow">Yellow</option>
                    </select>
                    </div>
            </fieldset>

                  <button className="btn btn-primary" onClick={handleClickSaveCandleMaker}>
                      Save Your Candle
                  </button>

                
        </form>
    )
}


// above code for the jar colors