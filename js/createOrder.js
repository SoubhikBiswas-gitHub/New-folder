// // ***********************************************
// // **** order-preview Component Create function *********
// // ***********************************************
// const createOrderCard = (orderId, Ptype, Psize) => {
//     console.log(orderId)
//     console.log(Ptype)
//     console.log(Psize)
//   const orderPreviewDiv = document.createElement("div");
//   console.log(orderPreviewDiv)
//   const orderCardDiv = document.createElement("div");
//   const orderIdDiv = document.createElement("div");
//   const orderStatusDiv = document.createElement("div");
//   const detailsDiv = document.createElement("div");
//   const typeSpan = document.createElement("span");
//   const sizeSpan = document.createElement("span");
//   const hr1 = document.createElement("hr");
//   const hr2 = document.createElement("hr");
//   const statusDiv = document.createElement("div");
//   const statusSpan = document.createElement("span");
//   const dynamicSpan = document.createElement("span");
//   const timeDateDiv = document.createElement("div");
//   const countDownDiv = document.createElement("div");
//   const timeSpan = document.createElement("span");
//   const cancelBtn = document.createElement("button");

//   orderPreviewDiv.setAttribute("class", "order-preview");
//   orderPreviewDiv.setAttribute("id", "newOrderBox");
//   orderCardDiv.setAttribute("class", "order-card");
//   orderIdDiv.setAttribute("id", "");
//   orderIdDiv.setAttribute("class", "order-id");
//   orderCardDiv.setAttribute("id", "orderId");
//   orderStatusDiv.setAttribute("class", "order-status");
//   detailsDiv.setAttribute("class", "details");
//   typeSpan.setAttribute("id", "pType");
//   typeSpan.setAttribute("class", "type");
//   sizeSpan.setAttribute("id", "pSize");
//   sizeSpan.setAttribute("class", "size");
//   statusDiv.setAttribute("class", "status");
//   dynamicSpan.setAttribute("id", "dynamicOrderStatus");
//   dynamicSpan.setAttribute("class", "dynamic");
//   timeDateDiv.setAttribute("class", "time-date");
//   countDownDiv.setAttribute("id", "countDown");
//   countDownDiv.setAttribute("class", "countDown");
//   timeSpan.setAttribute("id", "time");
//   cancelBtn.setAttribute("id", "cncl");
//   orderCardDiv.setAttribute("class", "cncl");

//   orderPreviewDiv.appendChild(orderCardDiv);
//   orderCardDiv.appendChild(orderIdDiv);
//   orderCardDiv.appendChild(orderStatusDiv);
//   orderStatusDiv.appendChild(detailsDiv);
//   detailsDiv.appendChild(typeSpan);
//   detailsDiv.appendChild(hr1);
//   detailsDiv.appendChild(sizeSpan);
//   detailsDiv.appendChild(hr2);
//   orderStatusDiv.appendChild(statusDiv);
//   statusDiv.appendChild(statusSpan);
//   statusDiv.appendChild(dynamicSpan);
//   orderCardDiv.appendChild(timeDateDiv);
//   timeDateDiv.appendChild(countDownDiv);
//   countDownDiv.appendChild(timeSpan);
//   timeDateDiv.appendChild(cancelBtn);

//   orderIdDiv.textContent = `BLRPM${orderId}`;
//   typeSpan.textContent = `Type : ${Ptype}`;
//   sizeSpan.textContent = `Size : ${Psize}`;
//   statusSpan.textContent = "Status:";
//   countDownDiv.textContent = "Waiting Time";



// const countDownTimer = () => {
//   let startMin = 1;
//   let startSec = startMin * 60;
//   setInterval(() => {
//     let min = Math.floor(startSec / 60);
//     let Sec = startSec % 60;
//     Sec = Sec < 10 ? "0" + Sec : Sec;
//     min = min < 10 ? "0" + min : min;
//     timeSpan.textContent = `${min}:${Sec}`;
//     startSec--;
//   }, 1000);
// };
// countDownTimer();
//   console.log(orderIdDiv) ;
//   dynamicOrderStatus.textContent = 'Order Placed'
// 	chefReceived(dynamicOrderStatus)
// 		.then(pizzaSauceAdded)
// 		.then(firstLayerOfCheezeAdded)
// 		.then(toppingsAdded)
// 		.then(secondLayerOfCheezeAdded)
// 		.then(pizzaBaked)
// 		.then(oreganoAddedAndPacked)
// 		.then(packageReceivedAtCounter)
// 		.then(() => dynamicOrderStatus.textContent = 'Package received at counter')
// 		.catch((err) => dynamicOrderStatus.textContent = `${err}`);

// console.log(orderPreviewDiv)
// };

// // ***********************************************
// // **** order-preview Component Create  *********
// // ***********************************************
