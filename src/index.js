import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react";
// import { useState } from "react";
// import "./Search.css";

// export default function Search(props) {
//   const [input, setInput] = useState("");

//   let products = props.productList;
//   console.log(products);

//   const handleChange = (e) => {
//     e.preventDefault();
//     setInput(e.target.value);
//   };

//   if (input.length > 0) {
//     products = products.filter((i) => {
//       return i.title.match(input);
//     });
//     console.log(products);
//   }
//   // const mappedData = products.map((item, id) => {
//   //   return (
//   //     <div key={id} className="item">
//   //       <h3>Name:{item.title} </h3>
//   //       <p> {item.price} sek</p>
//   //       <img className="image" src={item.image} alt="" />
//   //     </div>
//   //   );
//   // });
//   return (
//     <div className="component-search">
//       Search
//       <input
//         type="text"
//         onChange={handleChange}
//         placeholder="search by name"
//         value={input}
//       />
//       <div>
//         {products.map((item, id) => {
//           return (
//             <div key={id} className="item">
//               <h3>Name:{item.title} </h3>
//               <p> {item.price} sek</p>
//               <img className="image" src={item.image} alt="" />
//             </div>
//           );
//         })}
//       </div>
//       {/* {input ? { mappedData } : <p>no way </p>} */}
//     </div>
//   );
// }
