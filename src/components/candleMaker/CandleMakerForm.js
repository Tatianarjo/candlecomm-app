import React, { useContext, useEffect, useState } from "react";
import { CandleMakerContext } from "./CandleMakerProvider";
import "./CandleMaker.css";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export const CandleMakerForm = () => {
  const {
    addCandleMaker,
    getCandleMakers,
    scents,
    getScents,
    jar_colors,
    getJarColors,
    deleteCandleMakerById,
    editCandleMakerById
  } = useContext(CandleMakerContext);

  const  { id } = useParams();
  console.log(id)


  const [candleMaker, setCandleMaker] = useState({
     
    candle_name: "",
    scents: [],
    jar_color: "",
  });

  const history = useHistory();

  useEffect(() => {
    getCandleMakers();
  }, [scents, jar_colors]);

  

  const handleControlledInputChange = (event) => {
   
    const newCandleMaker = { ...candleMaker };
    
    if (event.target.name === "scents") {
        newCandleMaker[event.target.name]= Array.from(event.target.options).filter(o => o.selected).map(o => o.value)
    } else {
        newCandleMaker[event.target.id] = event.target.value;
    }
   
console.log(candleMaker.scents)
    setCandleMaker(newCandleMaker);
  };
  const profile = useParams();
  const handleClickSaveCandleMaker = (event) => {

    event.preventDefault();
    if (id) {
        if (candleMaker.candle_name === "" || candleMaker.scents.length !== 0) {
            window.alert("Please enter information");
          } else {
            const editCandleMaker = {
                id: id,
              candle_name: candleMaker.candle_name,
              scents: candleMaker.scents,
              profile: candleMaker.User,
              jar_color: candleMaker.jar_color,
            };
            editCandleMakerById(editCandleMaker).then(() => history.push("/candles"));
          } 

    }  else {
        //create new candle
        if (candleMaker.candle_name === "" || candleMaker.scents === "") {
      window.alert("Please enter information");
    } else {
      const newCandleMaker = {
        candle_name: candleMaker.candle_name,
        scents: candleMaker.scents,
        profile: candleMaker.User,
        jar_color: candleMaker.jar_color,
      };
      addCandleMaker(newCandleMaker).then(() => history.push("/candles"));
    } 
    }
    

   
  };

  

  return (
    <form className="candleMakerForm">
      <h2 className="candleMakerForm_title">Create Your Candle!</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name your candle!</label>
          <input
            type="text"
            id="candle_name"
            required
            autoFocus
            className="form-control"
            placeholder="Name your candle!"
            value={candleMaker.candle_name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      {scents.length > 0 && (
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Create Your Scent</label>
            <select multiple={true}
              name="scents"
              id="scents"
              className="form-group" 
              value={candleMaker.scents}
              onChange={handleControlledInputChange}
            >
              {scents.map((scent) => {
                return (
                  <option key={scent.fragrance} value={scent.id}>
                    {scent.fragrance}
                  </option>
                );
              })}
            </select>
          </div>
        </fieldset>
      )}

      {jar_colors.length > 0 && (
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Jar Color</label>
            <select
              name="jar_color"
              id="jar_color"
              className="form-group"
              onChange={handleControlledInputChange}
            >
              {jar_colors.map((jar_color) => {
                return <option key={jar_color.color} value={jar_color.id}>{jar_color.color}</option>;
              })}
            </select>
          </div>
        </fieldset>
      )}

<button className='category_edit--save' onClick={ handleClickSaveCandleMaker}>Save Your Candle</button>
{/* <button className='category_edit--cancel' onClick={() => {history.push('/candles')}}>Edit/Cancel</button> */}

      {/* <button className="btn btn-primary" onClick={handleClickSaveCandleMaker}>
        Save Your Candle
      </button> */}
    </form>
    
  );
};


//                Things to do


// Edit Candle  - 
// Get User info to show bts
// Details page of candle
// Add upload of photo
// Design home page
// Add checkbox for candle scents - put 
//


