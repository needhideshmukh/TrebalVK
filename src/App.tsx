/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import Index from "./assets/Index"
import FormLeft from "./assets/FormLeft"
import StatsRight from "./assets/StatsRight"

function App() {
  return (
    <>
      <div className="heroContainer">
        <div>
          <Index />
        </div>
        <div className="formStatContainer">
          <div className="formLeft">
            <FormLeft />
          </div>
          <div className="statsRight">
            <StatsRight />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
