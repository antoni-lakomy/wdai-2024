// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Produkt from './components/koszyk/zad_1_1';

function Koszyk() {
  return (
    <div>
      <Produkt nazwa='jabłko'/>
      <Produkt nazwa='gruszka'/>
      <Produkt nazwa='pomarańcza'/>
      <Produkt nazwa='bakłażan'/>
      <Produkt nazwa='kremówka'/>
    </div>  
  )
}

function NowyKoszyk() {
  return (
    <div>
      <Produkt nazwa='jabłko'/>
      <Produkt nazwa='gruszka'/>
      <Produkt nazwa='pomarańcza'/>
      <Produkt nazwa='bakłażan'/>
      <Produkt nazwa='kremówka'/>
    </div>  
  )
}


export default function App() {
  return (
    <Koszyk/>
  );
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}
