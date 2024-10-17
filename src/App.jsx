import React from 'react'
import TabList from './TabList'

const App = () => {

  const tabList = [
    {
      id: "a",
      label: "Component A",
      Component: "Component A",
    },
    {
      id: "b",
      label: "Component B",
      Component: "Component B",
    },
    {
      id: "c",
      label: "Component C",
      Component: "Component C",
    },
    {
      id: "d",
      label: "Component D",
      Component: "Component D",
    },
  ]
  return (
    <div className='bg-black h-screen text-white flex flex-col justify-center items-center'>
      <TabList tabs={tabList}/>
    </div>
  )
}


export default App
