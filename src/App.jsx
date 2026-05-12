import { useState } from "react"

import Card from "./card"

const players = [ 
                 {id:1, name: "mo salah", position:"rw", nationality:"egypt"},
                 {id:2, name: "sadio mane", position:"lw", nationality:"Senegal"}, 
                 {id:3, name: "firmino", position:"cf", nationality:"Brazil"} 
                ]

function App(){
  const [count, setcount] = useState(0)
  return(
    <>
    <h1>count: {count}</h1>
    {count>0 && <h2>count is positive</h2>}
    {count<0 && <h2>count is negative</h2>}
    {count==0 && <h2>count is zero</h2>}
    <button onClick={() =>  setcount(count+1) }> Add</button>
    <button onClick={() =>  setcount(count-1) }> sub</button>
    <button onClick={() =>  setcount(0) }> reset</button>
    
    <h2>players</h2>
    {players.map((player) => (
                                <Card 
                                key={player.id}
                                name={player.name}
                                position={player.position}
                                nationality={player.nationality}
                                 />
    ))}
    </>
  )
}
export default  App