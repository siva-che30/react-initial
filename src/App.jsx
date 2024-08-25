// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import User from "./User";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

function App () {

  const siva = {
    name :"Sivakumar",
    age : 26,
    phone : 1,
  }
  return<>
<h1>HELLO !</h1>
{/* <h2>Hello 2</h2>
<p1>Sivakumar</p1>
<p2>Sivakumar</p2> */}
<User 
// name = {siva.name}
// age = {siva.age}
// phone = {siva.phone}
{...siva}
/>
  </> 
}

function Hello (){
  return <h1>Welcome !</h1>
}
// export default App

export {App,Hello}; 
