import React, { useContext } from "react"
import { Route } from "react-router-dom"
import { CandleMaker } from "./candleMaker/CandleMaker"
import { CandleMakerList } from "./candleMaker/CandleMakerList"
import { CandleMakerContext, CandleMakerProvider } from "./candleMaker/CandleMakerProvider"
import { CandleMakerForm } from "./candleMaker/CandleMakerForm"
// import { SupportBoard } from "./supportBoard/SupportBoard"
// import { SupportBoardList } from "./supportBoard/SupportBoardList"
// import { SupportBoardForm } from "./supportBoard/SupportBoardForm"
// import { SupportBoardDetail } from "./supportBoard/SupportBoardDetail"
// import { SupportBoardProvider } from "./supportBoard/SupportBoardProvider"
// import { CalendarProvider } from "./calendar/CalendarProvider"
// import { MotivationQuote } from "./motivationQuote/MotivationQuote"
// import { Calendar } from "./calendar/Calendar"
// import { Home } from "./home/Home"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* // <moodTrackerProvider> */}
                <Route exact path="/">
                    {/* <Home /> */}
                    {/* <MoodTracker />
                    <SupportBoard /> */}
                </Route>

                <CandleMakerProvider>
                    <Route exact path="/candles">
                        <CandleMakerList />
                    </Route>
                    <Route exact path="/candles/create">
                        <CandleMakerForm />
                    </Route>
                </CandleMakerProvider>

                {/* <SupportBoardProvider>
                    <Route exact path="/supports">
                        <SupportBoardList />
                    </Route>
                    <Route exact path="/supports/create">
                        <SupportBoardForm />
                    </Route>
                    <Route path="/supports/detail/:supportBoardId(\d+)">
                        <SupportBoardDetail />
                    </Route>
                </SupportBoardProvider>

                <Route path = "/motivations">
                    <MotivationQuote />
                </Route>

                <CalendarProvider>
                    <Route exact path="/calendars">
                        <Calendar />
                    </Route>
                </CalendarProvider> */}

                
           

            {/* Render the animal list when http://localhost:3000/animals */}
            
        </>
    )
}