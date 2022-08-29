
// ***********************************************
// **** order-preview Component Create function *********
// ***********************************************

const createElement = (orderId, Ptype, Psize,Pprice) => {
  const orderPreviewDiv = document.createElement("div");
  orderPreviewDiv.setAttribute("class", "order-preview");
  orderPreviewDiv.setAttribute("id", "newOrderBox");
  const orderCardDiv = document.createElement("div");
  orderCardDiv.setAttribute("class", "order-card");
  orderCardDiv.setAttribute("id", "orderId");
  orderPreviewDiv.appendChild(orderCardDiv);
  const orderIdDiv = document.createElement("div");
  const orderStatusDiv = document.createElement("div");
  const timeDateDiv = document.createElement("div");
  orderIdDiv.setAttribute("id", "orderId");
  orderIdDiv.setAttribute("class", "order-id");
  orderStatusDiv.setAttribute("class", "order-status");
  timeDateDiv.setAttribute("class", "time-date");
  orderCardDiv.appendChild(orderIdDiv);
  orderCardDiv.appendChild(orderStatusDiv);
  orderCardDiv.appendChild(timeDateDiv);
  const detailsDiv = document.createElement("div");
  const statusDiv = document.createElement("div");
  const countDownDiv = document.createElement("div");
  const cancelBtn = document.createElement("button");
  detailsDiv.setAttribute("class", "details");
  statusDiv.setAttribute("class", "status");
  countDownDiv.setAttribute("id", "countDown");
  countDownDiv.setAttribute("class", "countDown");
  cancelBtn.setAttribute("id", "cncl");
  cancelBtn.setAttribute("class", "cncl");
  orderStatusDiv.appendChild(detailsDiv);
  orderStatusDiv.appendChild(statusDiv);
  timeDateDiv.appendChild(countDownDiv);
  timeDateDiv.appendChild(cancelBtn);
  const typeSpan = document.createElement("span");
  const sizeSpan = document.createElement("span");
  const priceSpan=document.createElement("span");   
  const hr1 = document.createElement("hr");
  const hr2 = document.createElement("hr");
  const hr3 = document.createElement("hr");
  typeSpan.setAttribute("id", "pType");
  typeSpan.setAttribute("class", "type");
  sizeSpan.setAttribute("id", "pSize");
  sizeSpan.setAttribute("class", "size");
  priceSpan.setAttribute("id", "pPrice");
  priceSpan.setAttribute("class", "price");
  detailsDiv.appendChild(typeSpan);
  detailsDiv.appendChild(hr1);
  detailsDiv.appendChild(sizeSpan);
  detailsDiv.appendChild(hr2);
  detailsDiv.appendChild(priceSpan);
  detailsDiv.appendChild(hr3);
  const statusSpan = document.createElement("span");
  const dynamicSpan = document.createElement("span");
  const readyStatus = document.createElement("img");
  statusSpan.setAttribute("id", "statusSpan");
  dynamicSpan.setAttribute("id", "dynamicOrderStatus");
  dynamicSpan.setAttribute("class", "dynamic");
  statusDiv.appendChild(statusSpan);
  statusDiv.appendChild(dynamicSpan);
  const timeSpan = document.createElement("div");
  const timeSpanTxt = document.createElement("div");
  countDownDiv.appendChild(timeSpanTxt);
  countDownDiv.appendChild(timeSpan);
  timeSpan.setAttribute("id", "time");
  timeSpan.setAttribute("class", "time");

  //*****************************/
  //*****Adding Inner Text For all Component***********/
  //*****************************/

  timeSpanTxt.innerText = "Waiting Time :";
  cancelBtn.textContent = "Cancel";
  orderIdDiv.textContent = `BLRPM-${orderId}`;
  typeSpan.textContent = `Type : ${Ptype}`;
  sizeSpan.textContent = `Size : ${Psize}`;
  priceSpan.textContent = `Price : ${Pprice}/-`;
  statusSpan.textContent = "Status:";
  dynamicSpan.textContent = "Order Placed";
  timeSpan.textContent = "00:00";

  //clncle event
 
  


  //*****************************/
  //*****Waiting Time Function***********/
  //*****************************/

  let startMin = 1;
  let startSec = startMin * 60;
   const resetInterval = setInterval(updateCounter, 1000);
  function updateCounter() {
    let min = Math.floor(startSec / 60);
    let Sec = startSec % 60;
    Sec = Sec < 10 ? "0" + Sec : Sec;
    min = min < 10 ? "0" + min : min;
    timeSpan.textContent = `${min}:${Sec}`;
    if (Sec == 00 && min == 00) {
      clearInterval(resetInterval);
      timeSpan.textContent = `00:00`;
      dynamicSpan.style.display = "none";
      statusSpan.style.display = "none";
      statusDiv.appendChild(readyStatus);
      readyStatus.src = "./assets/readyOrder.gif";
      readyStatus.style.width = "100%";
      // OrderReadyCheckingArray.filter(ele=>ele!="InCompleted");
      // console.log(allPizzaReadyCheckingCounter)
      // console.log(OrderReadyCheckingArray)
      // if (allPizzaReadyCheckingCounter === OrderReadyCheckingArray.length) {
      //   billGenerateBtn.style.display = "block";
      //   billGenerateButtonClickCheck = false;
      // }
    }
    if (Sec == 15 && min == 00) {
cancelBtn.disabled = true;
    }

  //   if(orderCancelCheckCounter===0){
  //     billGenerateBtn.style.display = "none";
  //       billGenerateButtonClickCheck = true;
  //       //all global value resetting
  // customerNameAvalityCheck = false;
  // customerName = "";
  // allPizzaReadyCheckingCounter = 0;
  // orderDetailsArray = [];
  // createOrderDetailsObj = {};
  // OrderReadyCheckingArray = [];
  // billPrintDynamicArray = [];
  // billGenerateButtonClickCheck = true;
  // printBtnClickCheck = true;
  //   }
    startSec--;
  }


  
  //*****************************/
  //*****Promise Function***********/
  //*****************************/

  chefReceived(dynamicSpan,orderCancelcheck)
    .then(pizzaSauceAdded)
    .then(firstLayerOfCheezeAdded)
    .then(toppingsAdded)
    .then(secondLayerOfCheezeAdded)
    .then(pizzaBaked)
    .then(oreganoAddedAndPacked)
    .then(packageReceivedAtCounter)
    .then(() => {
      dynamicOrderStatus.textContent = "Package received at counter";
				// OrderReadyCheckingArray.push("Completed")
    })
    .catch((err) => {
      // (dynamicOrderStatus.textContent = `${err}`)
      // OrderReadyCheckingArray.push("china")
  });

  //*****************************/
  //*****Returning Parent Div***********/
  //*****************************/
  // console.log(OrderReadyCheckingArray)
  // console.log(allPizzaReadyCheckingCounter)
  return orderPreviewDiv;
};




