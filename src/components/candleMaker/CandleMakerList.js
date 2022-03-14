import React, { useContext, useEffect } from "react"
import { CandleMakerContext } from "./CandleMakerProvider"
import "./CandleMaker"
import { useHistory } from 'react-router-dom'

export const CandleMakerList = () => {

  const { candleMakers, getCandleMakers } = useContext(CandleMakerContext)

  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("CandleMakerList: useEffect - getCandleMakers")
    getCandleMakers()
  }, [])


  return (
      <>
      <h2>CandleMaker</h2>
      <button onClick={
          () => history.push("/candleMakers/create")
      }>
          Create Your Candle
      </button>
    <div className="candleMakers">
      {
        candleMakers.map(candleMaker => {
          return (
            <div className="candleMaker" id={`candleMaker--${candleMaker.id}`}>
              <div className="candleMaker__feeling">
                Name: { candleMaker.candle_name }
              </div>
              <div className="candleMaker__yourWhy">
                Your Why: { candleMaker.scent }
              </div>
             
            </div>
          )
        })
      }
    </div>
    </>
  )
    }
