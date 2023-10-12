"use client"

import { useState } from "react"

export default function Pagination() {
    const [numPage , setNumPage] = useState(5)
    
    
    return (
        <div className="w-1/3 flex justify-center items-center">
            <select onChange={(e)=>{
                setNumPage(e.target.value)
            }} className="rounded-md w-10 p-1">
              <option className="" value="5">5</option>
              <option className="" value="10">10</option>
              <option className="" value="15">15</option>
            </select>
          
          </div>
    )
}
