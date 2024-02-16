import {useState} from 'react'
import { ReactDOM } from 'react'
import {useRecoilValue, useSetRecoilState, atom, RecoilRoot} from 'recoil'
import {Button, Card, Typography} from '@mui/material'


function App() {
  const [count, setCount] = useState(0)
  return (
  <RecoilRoot>
    <div style={{
    display: "flex",
    justifyContent: "center"
   }}>
    <Card style={{
      padding: 20, width: 500
    }}>
      <Typography variant='h5'>Welcome to counter game</Typography>
      <br />
      <Buttons />
      <CountComponent />
    </Card>
   </div>
   </RecoilRoot>
   
  )
}

function Buttons(){
  return <div style={{
    display: "flex",
    justifyContent: "space-between"
   }}>
    <Increase />
    <Decrease />
   </div>
}

function Increase(){
  const setCount = useSetRecoilState(countState)
  return <div>
    <Button variant={"contained"} onClick={()=> {
      setCount(existingCount => existingCount + 1)
    }}>Increase Counter</Button>
  </div>
}

function Decrease(){
  const setCount = useSetRecoilState(countState)
  return <div>
    <Button variant={"contained"} onClick={()=> {
      setCount(existingCount => existingCount -1)
    }}>Decrease Counter</Button>
  </div>
}

function CountComponent(){
  const count = useRecoilValue(countState)
  
  return <div>
    <Typography variant='h5'textAlign={'center'}>{count}</Typography>
  </div>
}

export default App

//atom - state
const countState = atom ({
  key: 'countState',
  default: 0
});

/*
usecase -2 - with useContext - solve props drilling
import {createContext, useContext, useState} from 'react'
import { ReactDOM } from 'react'
import {Button, Card, Typography} from '@mui/material'

const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0)
  return (
  <CountContext.Provider value={{
    count: count,
    setCount: setCount
  }}>
    <div style={{
    display: "flex",
    justifyContent: "center"
   }}>
    <Card style={{
      padding: 20, width: 500
    }}>
      <Typography variant='h5'>Welcome to counter game</Typography>
      <br />
      <Buttons />
      <CountComponent />
    </Card>
   </div>
  </CountContext.Provider>  
   
  )
}

function Buttons(){
  return <div style={{
    display: "flex",
    justifyContent: "space-between"
   }}>
    <Increase />
    <Decrease />
   </div>
}

function Increase(){
  const {count, setCount} = useContext(CountContext)
  return <div>
    <Button variant={"contained"} onClick={()=> {
      setCount(count+1)
    }}>Increase Counter</Button>
  </div>
}

function Decrease(){
  const {count, setCount} = useContext(CountContext)
  return <div>
    <Button variant={"contained"} onClick={()=> {
      setCount(count-1)
    }}>Decrease Counter</Button>
  </div>
}

function CountComponent(){
  const {count} = useContext(CountContext)
  return <div>
    <Typography variant='h5'textAlign={'center'}>{count}</Typography>
  </div>
}

export default App
*/


/*
usecase -1 - without useContext

import {useState} from 'react'
import { ReactDOM } from 'react'
import {Button, Card, Typography} from '@mui/material'

function App() {
  const [count, setCount] = useState(0)
  return (
   <div style={{
    display: "flex",
    justifyContent: "center"
   }}>
    <Card style={{
      padding: 20, width: 500
    }}>
      <Typography variant='h5'>Welcome to counter game</Typography>
      <br />
      <Buttons count={count} setCount={setCount} />
      <CountComponent count={count}/>
    </Card>
   </div>
  )
}

function Buttons({count, setCount}){
  return <div style={{
    display: "flex",
    justifyContent: "space-between"
   }}>
    <Increase count={count} setCount={setCount} />
    <Decrease count={count} setCount={setCount} />
   </div>
}

function Increase({count, setCount}){
  return <div>
    <Button variant={"contained"} onClick={()=> {
      setCount(count+1)
    }}>Increase Counter</Button>
  </div>
}

function Decrease({count, setCount}){
  return <div>
    <Button variant={"contained"} onClick={()=> {
      setCount(count-1)
    }}>Decrease Counter</Button>
  </div>
}

function CountComponent({count}){
  return <div>
    <Typography variant='h5'textAlign={'center'}>{count}</Typography>
  </div>
}

export default App

*/