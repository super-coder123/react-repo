
// import { useState } from 'react'

// function App() {
//   const [color, setColor] = useState("red")

//   return (
//         <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
//           <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//             <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//               <h1 className='bg-black' style={{backgroundColor:color}}>Hello world</h1>
//               <button
//                 onClick={()=> setColor("yellow")}
//                 className='justify-center rounded-md bg-yellow-400 text-black font-extrabold'>Yellow</button>
//             </div>
//           </div>
//         </div>
//   )
// }

//  export default App
















import { useState } from "react"
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="body"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
         

          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow" , color:"black"}}
          >Yellow</button>

          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink" , color:"black"}}
          >Pink</button>


          <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >Orange</button>

          <button
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "white", color:"black"}}
          >White</button>

          <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black" , color:"white"}}
          >Black</button>

          <button
          onClick={() => setColor("maroon")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "maroon"}}
          >maroon</button>

          <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}
          >Olive</button>

        </div>
      </div>
    </div>
  )
}

export default App










//  <div className="w-full h-screen duration-200" style={{backgroundColor:color}}></div>
//  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> </div> 
//  <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//  <button onClick={() => setColor("red")}
//  className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Red</button>
// </div>



// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [bgColor, setBgColor] = useState('default-background'); // Set initial class name

//   return (
//     <div className={`w-full h-screen ${bgColor}`}>
//       <div className="flex justify-center items-center h-full">
//         <button
//           onClick={() => setBgColor('red-background')}
//           className="px-4 py-2 text-white bg-red-500 rounded-md mx-2"
//         >
//           Red
//         </button>
//         <button
//           onClick={() => setBgColor('blue-background')}
//           className="px-4 py-2 text-white bg-blue-500 rounded-md mx-2"
//         >
//           Blue
//         </button>
//         <button
//           onClick={() => setBgColor('default-background')}
//           className="px-4 py-2 text-black bg-gray-300 rounded-md mx-2"
//         >
//           Default
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

