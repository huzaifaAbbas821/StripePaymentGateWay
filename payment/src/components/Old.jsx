// import React, { useState } from 'react';
// import bg from "../assets/bg-image.jpg";

// function Main() {
//   const [card, setCard] = useState('');
//   const [date, setDate] = useState('');

//   const handleCardDisplay = () => {
//     const rawText = [...card.split(' ').join('')]; // Remove old spaces
//     const creditCard = []; // Create card as array
//     rawText.forEach((t, i) => {
//       if (i % 4 === 0 && i !== 0) creditCard.push(' '); // Add space
//       creditCard.push(t);
//     });
//     return creditCard.join(''); // Transform card array to string
//   };

//   const handleDateDisplay = () => {
//     const rawText = [...date.split('/').join('')]; // Remove old slashes
//     const creditDate = []; // Create date as array
//     rawText.forEach((t, i) => {
//       if (i === 2) creditDate.push('/'); // Add slash after MM
//       creditDate.push(t);
//     });
//     return creditDate.join(''); // Transform date array to string
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
//     setCard(value);
//   };

//   const handleDateChange = (e) => {
//     const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
//     setDate(value);
//   };

//   const handleKeyPress = (e) => {
//     const charCode = e.keyCode;
//     // Allow only backspace, delete, arrow keys, and numbers
//     if (!(
//       (charCode >= 48 && charCode <= 57) || // Numbers
//       (charCode >= 96 && charCode <= 105) || // Numpad numbers
//       charCode === 8 || // Backspace
//       charCode === 46 || // Delete
//       charCode === 37 || // Left arrow
//       charCode === 39 // Right arrow
//     )) {
//       e.preventDefault();
//     }
//   };

//   return (
//     <div
//       className="w-screen h-screen font-sans"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="text-[#f5c22a] text-center  py-[10vw] md:py-[4vw] text-[4vh] md:text-[3.2vw] font-bold">
//         Payment Method
//       </div>
//       <div className="w-full  flex flex-col gap-[2vw] justify-center items-center rounded-xl px-4">
//         <div className="lg:w-[30%] md:w-[50%] sm:w-[70%] w-full bg-black bg-opacity-70 border-[2px] border-white rounded-lg py-[4vh] px-[2vw] md::p-[2vw] text-white">
//           <div className="mb-4">
//             <label className="block w-full pb-2 text-sm" htmlFor="ccn">
//               Card Number
//             </label>
//             <input
//               className="block w-full bg-[#2e2e2e] rounded-lg p-[0.4vw]"
//               id="ccn"
//               type="text"
//               inputMode="numeric"
//               maxLength={19}
//               value={handleCardDisplay()}
//               onChange={handleInputChange}
//               onKeyDown={handleKeyPress}
//               placeholder=" xxxx xxxx xxxx xxxx"
//               required
//             />
//           </div>
//           <div className="flex flex-row justify-between w-full mb-4">
//             <div className="w-[45%]">
//               <label className="block pb-2 text-sm" htmlFor="cvv">
//                 CVV
//               </label>
//               <input
//                 className="w-full px-2 py-1 rounded-lg bg-[#2e2e2e]"
//                 type="tel"
//                 name="cvv"
//                 maxLength={4}
//                 id="cvv"
//                 onKeyDown={handleKeyPress}
//                 placeholder="CVV"
//                 required
//               />
//             </div>
//             <div className="w-[45%]">
//               <label className="block pb-2 text-sm" htmlFor="expDate">
//                 Exp Date
//               </label>
//               <input
//                 className="w-full px-2 py-1 rounded-lg bg-[#2e2e2e]"
//                 type="text"
//                 name="expDate"
//                 id="expDate"
//                 maxLength={5}
//                 placeholder="MM/YY"
//                 value={handleDateDisplay()}
//                 onChange={handleDateChange}
//                 onKeyDown={handleKeyPress}
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex flex-col mb-4">
//             <label className="block pb-2 text-sm" htmlFor="nameOnCard">
//               Name On Card
//             </label>
//             <input
//               type="text"
//               className="rounded-lg bg-[#2e2e2e] p-[0.4vw]"
//               id="nameOnCard"
//               placeholder="Name"
//               required
//             />
//           </div>
//           <button className="rounded-lg bg-[#f5c22a] text-black text-center text-[2vh] md:text-[1vw] w-full py-2 font-bold">
//             Pay $40
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;
