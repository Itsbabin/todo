import React from 'react'
import './App.css'
import Container from './components/main.container'
import List from './components/list_item'

export default function App() {

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
     <Container/>
     <h1>Todo List</h1>
     {
     responce.map((e)=>{
       return <List data={e}/>
     })
     }
    
   
    </>
  )
}
