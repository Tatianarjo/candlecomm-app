import React, { useContext, useEffect } from "react"
import { CandleMakerContext } from "./CandleMakerProvider"
import "./CandleMaker"
import { useHistory } from 'react-router-dom'

export const CandleMakerList = () => {

  const { candleMakers, getCandleMakers } = useContext(CandleMakerContext)

  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    getCandleMakers()
  }, [])

  useEffect(() => {
   
  }, [candleMakers])


  return (
      <>
      <h2>CandleMaker</h2>
      <button onClick={
          () => history.push("/candles/create")
      }>
          Create Your Candle
      </button>
    {candleMakers.length > 0 && <div className="candleMakers">
      {
        candleMakers?.map(candleMaker => {
          return (
            <div key={candleMaker.id}className="candleMaker" id={`candleMaker--${candleMaker.id}`}>
              <div className="candleMaker__feeling">
                Name: { candleMaker.candle_name }
              </div>
              <div className="candleMaker__yourWhy">
                Scent: { candleMaker.scent.fragrance }
              </div>

              <div className="candleMaker__yourWhy">
                Jar Color: { candleMaker.jar_color.color }
              </div>
              {/* <div className="candleMaker__yourWhy">
                Jar Color: { candleMaker.upload.file_url }
              </div> */}
             
            </div>
          )
        })
      }
    </div>}
    </>
  )
    }


    //finish out and put the backend here 