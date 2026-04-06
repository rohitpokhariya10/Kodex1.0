import React from 'react'
import { useParams } from 'react-router'

const Names = () => {
  let urlData = useParams()
  console.log(urlData)//{hanji: 'hello'}
  //hanji--->dynamic route variable
  //user.name---> url data
  return (
    <div>
      <h1>Names  : {urlData.hanji}</h1>
    </div>
  )
}

export default Names
