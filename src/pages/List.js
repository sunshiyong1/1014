import React, { useEffect, useState } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Details from './list/Details'
function List() {
  const [list,setList] = useState([
    {id:1,name:'小白'},
    {id:2,name:'小灰'},
    {id:3,name:'小黑'}
  ])
  return (
    <div>
      <ul>
        {list.map((item) => {
          return <li key="item.id"><NavLink to={"/list/details?id=" + item.id}>{item.name}</NavLink> </li>
        })}
      </ul>
      <Route path="/list/details" component={Details}></Route>
    </div>
  )
}
export default List