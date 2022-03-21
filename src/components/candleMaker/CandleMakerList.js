import React, { useContext, useEffect } from "react";
import { CandleMakerContext } from "./CandleMakerProvider";
import "./CandleMaker";
import { useHistory } from "react-router-dom";

export const CandleMakerList = () => {
  const { candleMakers, getCandleMakers, deleteCandleMakerById } =
    useContext(CandleMakerContext);

  const history = useHistory();
  const handleDelete = (e) => {
    console.log(e.target.id);
    deleteCandleMakerById(e.target.id);
  };
  //useEffect - reach out to the world for something
  useEffect(() => {
    getCandleMakers();
  }, []);

  useEffect(() => {}, [candleMakers]);

  return (
    <>
      <h2>CandleMaker</h2>
      <button onClick={() => history.push("/candles/create")}>
        Create Your Candle
      </button>
      {candleMakers.length > 0 && (
        <div className="candleMakers">
          {candleMakers?.map((candleMaker) => {
            return (
              <div
                key={candleMaker.id}
                className="candleMaker"
                id={`candleMaker--${candleMaker.id}`}
              >
                <div className="candleMaker__name">
                  Name: {candleMaker.candle_name}
                </div>
                <div className="candleMaker__scent">
                  Scent: {candleMaker.scent.fragrance}
                </div>

                <div className="candleMaker__jar">
                  Jar Color: {candleMaker.jar_color.color}
                </div>
                {/* <div className="candleMaker__yourWhy">
                Jar Color: { candleMaker.upload.file_url }
              </div> */}
                <div>
                  <div
                    id={candleMaker.id}
                    className="button"
                    onClick={(e) => handleDelete(e)}
                  >
                    Delete Candle
                  </div>
                  <div><button className='candleMaker_edit--cancel' onClick={() => {history.push(`/candles/edit/${candleMaker.id}`)}}>Edit Candle</button></div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

//finish out and put the backend here
