import React from 'react'
import { useParams } from 'react-router-dom'
export default function Microsoft() {
    const {listName} = useParams()
  return (
    <div>{listName}</div>
  )
}
