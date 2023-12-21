import React from 'react'
import List from './list_item'
import '../css/main.container.css'
import Inputbox from './inputbox'

export default function Container() {
  const responce = [
    {
    title: "this is title",
    description : "this description"
    },
    {
    title: "this is title",
    description : "this description"
    },
    {},
    {},
    {},
  ]

  return (
    <>
    <Inputbox/>
    <h1>Todo List</h1>
     {
     responce.map((e)=>{
       return <List data={e}/>
     })
     }
    </>
  )
}
