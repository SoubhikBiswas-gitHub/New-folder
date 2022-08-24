// ***********************************************
// ************** Element Selector *********************
// ***********************************************
//oder div Selector
const createOrderDiv=document.getElementById("createOrder");


//cs_alert Selector

const cs_alert=document.getElementById("cs_alert");
const cs_tImg=document.getElementById("tImg");
const cs_tTitle=document.getElementById("tTitle");

//Pizza Button
const p1Btn = document.getElementById("p1Btn");
const p2Btn = document.getElementById("p2Btn");
const p3Btn = document.getElementById("p3Btn");
const p4Btn = document.getElementById("p4Btn");
const p5Btn = document.getElementById("p5Btn");
const p6Btn = document.getElementById("p6Btn");
const p7Btn = document.getElementById("p7Btn");
const p8Btn = document.getElementById("p8Btn");
const p9Btn = document.getElementById("p9Btn");
//Pizza Button

const p1BtnCheck=document.getElementById("p1BtnClick");


//Pizza Image
const p1Img =document.getElementById("p1Img");
const p2Img =document.getElementById("p2Img");
const p3Img =document.getElementById("p3Img");
const p4Img =document.getElementById("p4Img");
const p5Img =document.getElementById("p5Img");
const p6Img =document.getElementById("p6Img");
const p7Img =document.getElementById("p7Img");
const p8Img =document.getElementById("p8Img");
const p9Img =document.getElementById("p9Img");



// Size Button
const p1sBtn = document.getElementById("p1s");
const p1mBtn = document.getElementById("p1m");
const p1lBtn = document.getElementById("p1l");

const p2sBtn = document.getElementById("p2s");
const p2mBtn = document.getElementById("p2m");
const p2lBtn = document.getElementById("p2l");

const p3sBtn = document.getElementById("p3s");
const p3mBtn = document.getElementById("p3m");
const p3lBtn = document.getElementById("p3l");

const p4sBtn = document.getElementById("p4s");
const p4mBtn = document.getElementById("p4m");
const p4lBtn = document.getElementById("p4l");

const p5sBtn = document.getElementById("p5s");
const p5mBtn = document.getElementById("p5m");
const p5lBtn = document.getElementById("p5l");

const p6sBtn = document.getElementById("p6s");
const p6mBtn = document.getElementById("p6m");
const p6lBtn = document.getElementById("p6l");

const p7sBtn = document.getElementById("p7s");
const p7mBtn = document.getElementById("p7m");
const p7lBtn = document.getElementById("p7l");

const p8sBtn = document.getElementById("p8s");
const p8mBtn = document.getElementById("p8m");
const p8lBtn = document.getElementById("p8l");

const p9sBtn = document.getElementById("p9s");
const p9mBtn = document.getElementById("p9m");
const p9lBtn = document.getElementById("p9l");
// Size Button

//Size & Price Span:
const p1Size = document.getElementById("p1si");
const p2Size = document.getElementById("p2si");
const p3Size = document.getElementById("p3si");
const p4Size = document.getElementById("p4si");
const p5Size = document.getElementById("p5si");
const p6Size = document.getElementById("p6si");
const p7Size = document.getElementById("p7si");
const p8Size = document.getElementById("p8si");
const p9Size = document.getElementById("p9si");

const p1Price = document.getElementById("p1p");
const p2Price = document.getElementById("p2p");
const p3Price = document.getElementById("p3p");
const p4Price = document.getElementById("p4p");
const p5Price = document.getElementById("p5p");
const p6Price = document.getElementById("p6p");
const p7Price = document.getElementById("p7p");
const p8Price = document.getElementById("p8p");
const p9Price = document.getElementById("p9p");
//Size & Price Span:

//Canel Button 
const p1CancelBtn=document.getElementById("p1cancel");
const p2CancelBtn=document.getElementById("p2cancel");
const p3CancelBtn=document.getElementById("p3cancel");
const p4CancelBtn=document.getElementById("p4cancel");
const p5CancelBtn=document.getElementById("p5cancel");
const p6CancelBtn=document.getElementById("p6cancel");
const p7CancelBtn=document.getElementById("p7cancel");
const p8CancelBtn=document.getElementById("p8cancel");
const p9CancelBtn=document.getElementById("p9cancel");
//Canel Button 






// ***********************************************
// ************** Element Selector *********************
// ***********************************************





// ***********************************************
// **** Global Variable *********
// ***********************************************
//Image Source : 
const p1ImgSrc=p1Img.src;
const p2ImgSrc=p2Img.src;
const p3ImgSrc=p3Img.src;
const p4ImgSrc=p4Img.src;
const p5ImgSrc=p5Img.src;
const p6ImgSrc=p6Img.src;
const p7ImgSrc=p7Img.src;
const p8ImgSrc=p8Img.src;
const p9ImgSrc=p9Img.src;

//Image Name By alt : 
const p1PizzaName=p1Img.alt;
const p2PizzaName=p2Img.alt;
const p3PizzaName=p3Img.alt;
const p4PizzaName=p4Img.alt;
const p5PizzaName=p5Img.alt;
const p6PizzaName=p6Img.alt;
const p7PizzaName=p7Img.alt;
const p8PizzaName=p8Img.alt;
const p9PizzaName=p9Img.alt;



// ***********************************************
// **** Global Variable *********
// ***********************************************




























// ***********************************************
// **** Main Button Clickz Event *********
// ***********************************************

p1Btn.addEventListener("click",()=>{ 
    cancelBtnHide();
    pointerEventSetDefault();
    p1BtnCheck.checked="true";
    console.log(p1BtnCheck.checked);
    cancelBtnVisible(p1CancelBtn,p1Btn,p1ImgSrc,p1PizzaName);
});

p2Btn.addEventListener("click",()=>{ 
    cancelBtnHide();
    pointerEventSetDefault();
    cancelBtnVisible(p2CancelBtn,p2Btn,p2ImgSrc,p2PizzaName);
});

p3Btn.addEventListener("click",()=>{ 
    cancelBtnHide();
    pointerEventSetDefault();
    cancelBtnVisible(p3CancelBtn,p3Btn,p3ImgSrc,p3PizzaName);
});

p4Btn.addEventListener("click",()=>{ 
    cancelBtnHide();
    pointerEventSetDefault();
    cancelBtnVisible(p4CancelBtn,p4Btn,p4ImgSrc,p4PizzaName);
});

p5Btn.addEventListener("click",()=>{ 
    cancelBtnHide();
    pointerEventSetDefault();
    cancelBtnVisible(p5CancelBtn,p5Btn,p5ImgSrc,p5PizzaName);
});

p6Btn.addEventListener("click",()=>{ 
    cancelBtnHide();
    pointerEventSetDefault();
    cancelBtnVisible(p6CancelBtn,p6Btn,p6ImgSrc,p6PizzaName);
});

p7Btn.addEventListener("click",()=>{ 
    cancelBtnHide();
    pointerEventSetDefault();
    cancelBtnVisible(p7CancelBtn,p7Btn,p7ImgSrc,p7PizzaName);
});

p8Btn.addEventListener("click",()=>{ 
    cancelBtnHide();
    pointerEventSetDefault();
    cancelBtnVisible(p8CancelBtn,p8Btn,p8ImgSrc,p8PizzaName);
});

p9Btn.addEventListener("click",()=>{ 
    cancelBtnHide();
    pointerEventSetDefault();
    cancelBtnVisible(p9CancelBtn,p9Btn,p9ImgSrc,p9PizzaName);
});



// ***********************************************
// **** Main Button Clickz Event *********
// ***********************************************



// ***********************************************
// **** Size & Price Change Clickz Event *********
// ***********************************************
//Size & Price Change Clickz Event
p1sBtn.addEventListener("click",()=>{
    p1Price.textContent="110";
    p1Size.textContent="Small";
    console.log(p1BtnCheck);
if(p1BtnCheck.checked=="true"){
    // const orderPreviewDiv=
    createOrderCard(180,p1PizzaName.value,p1Size.value);
    console.log(orderPreviewDiv)
    createOrderDiv.prepend(orderPreviewDiv)
}

});

p1mBtn.addEventListener("click",()=>{
    p1Price.textContent="160";
    p1Size.textContent="Medium";
});
p1lBtn.addEventListener("click",()=>{
    p1Price.textContent="200";
    p1Size.textContent="Large";
});


p2sBtn.addEventListener("click",()=>{
    p2Price.textContent="160";
    p2Size.textContent="Small";
});
p2mBtn.addEventListener("click",()=>{
    p2Price.textContent="210";
    p2Size.textContent="Medium";
});
p2lBtn.addEventListener("click",()=>{
    p2Price.textContent="250";
    p2Size.textContent="Large";
});



p3sBtn.addEventListener("click",()=>{
    p3Price.textContent="130";
    p3Size.textContent="Small";
});
p3mBtn.addEventListener("click",()=>{
    p3Price.textContent="180";
    p3Size.textContent="Medium";
});
p3lBtn.addEventListener("click",()=>{
    p3Price.textContent="220";
    p3Size.textContent="Large";
});


p4sBtn.addEventListener("click",()=>{
    p4Price.textContent="120";
    p4Size.textContent="Small";
});
p4mBtn.addEventListener("click",()=>{
    p4Price.textContent="170";
    p4Size.textContent="Medium";
});
p4lBtn.addEventListener("click",()=>{
    p4Price.textContent="210";
    p4Size.textContent="Large";
});


p5sBtn.addEventListener("click",()=>{
    p5Price.textContent="180";
    p5Size.textContent="Small";
});
p5mBtn.addEventListener("click",()=>{
    p5Price.textContent="230";
    p5Size.textContent="Medium";
});
p5lBtn.addEventListener("click",()=>{
    p5Price.textContent="270";
    p5Size.textContent="Large";
});


p6sBtn.addEventListener("click",()=>{
    p6Price.textContent="170";
    p6Size.textContent="Small";
});
p6mBtn.addEventListener("click",()=>{
    p6Price.textContent="220";
    p6Size.textContent="Medium";
});
p6lBtn.addEventListener("click",()=>{
    p6Price.textContent="260";
    p6Size.textContent="Large";
});


p7sBtn.addEventListener("click",()=>{
    p7Price.textContent="140";
    p7Size.textContent="Small";
});
p7mBtn.addEventListener("click",()=>{
    p7Price.textContent="190";
    p7Size.textContent="Medium";
});
p7lBtn.addEventListener("click",()=>{
    p7Price.textContent="230";
    p7Size.textContent="Large";
});


p8sBtn.addEventListener("click",()=>{
    p8Price.textContent="145";
    p8Size.textContent="Small";
});
p8mBtn.addEventListener("click",()=>{
    p8Price.textContent="195";
    p8Size.textContent="Medium";
});
p8lBtn.addEventListener("click",()=>{
    p8Price.textContent="235";
    p8Size.textContent="Large";
});


p9sBtn.addEventListener("click",()=>{
    p9Price.textContent="125";
    p9Size.textContent="Small";
});
p9mBtn.addEventListener("click",()=>{
    p9Price.textContent="175";
    p9Size.textContent="Medium";
});
p9lBtn.addEventListener("click",()=>{
    p9Price.textContent="215";
    p9Size.textContent="Large";
});
//Size & Price Change Clickz Event
// ***********************************************
// **** Size & Price Change Clickz Event *********
// ***********************************************



// ***********************************************
// **** Utility Function *********
// ***********************************************

let cancelBtnVisible=(cancelBtn,ParentBtn,imgSrc,title)=>{
    cancelBtn.style.display="block";
    ParentBtn.style.pointerEvents="none";
    cs_alert.style.display="block"
    cs_tImg.src=imgSrc;
    cs_tImg.alt=title;
    cs_tTitle.textContent=title
   setTimeout(()=>{
    cs_alert.style.display="none"
   },4000)
}

let cancelBtnHide=()=>{
    p1CancelBtn.style.display="none";
    p2CancelBtn.style.display="none";
    p3CancelBtn.style.display="none";
    p4CancelBtn.style.display="none";
    p5CancelBtn.style.display="none";
    p6CancelBtn.style.display="none";
    p7CancelBtn.style.display="none";
    p8CancelBtn.style.display="none";
    p9CancelBtn.style.display="none";
};


let pointerEventSetDefault=()=>{
    p1Btn.style.pointerEvents="auto";
    p2Btn.style.pointerEvents="auto";
    p3Btn.style.pointerEvents="auto";
    p4Btn.style.pointerEvents="auto";
    p5Btn.style.pointerEvents="auto";
    p6Btn.style.pointerEvents="auto";
    p7Btn.style.pointerEvents="auto";
    p8Btn.style.pointerEvents="auto";
    p9Btn.style.pointerEvents="auto";
};




// const outsideClickListener = (element) => ({ target }) => {
//     if (!element.contains(target)) {
//         pointerEventSetDefault();
//     }
//   };

// ***********************************************
// **** Utility Function *********
// ***********************************************




// ***********************************************
// **** order-preview Component Create function *********
// ***********************************************
const createOrderCard = (orderId, Ptype, Psize) => {
    console.log(orderId)
    console.log(Ptype)
    console.log(Psize)
  const orderPreviewDiv = document.createElement("div");
  console.log(orderPreviewDiv)
  const orderCardDiv = document.createElement("div");
  const orderIdDiv = document.createElement("div");
  const orderStatusDiv = document.createElement("div");
  const detailsDiv = document.createElement("div");
  const typeSpan = document.createElement("span");
  const sizeSpan = document.createElement("span");
  const hr1 = document.createElement("hr");
  const hr2 = document.createElement("hr");
  const statusDiv = document.createElement("div");
  const statusSpan = document.createElement("span");
  const dynamicSpan = document.createElement("span");
  const timeDateDiv = document.createElement("div");
  const countDownDiv = document.createElement("div");
  const timeSpan = document.createElement("span");
  const cancelBtn = document.createElement("button");

  orderPreviewDiv.setAttribute("class", "order-preview");
  orderPreviewDiv.setAttribute("id", "newOrderBox");
  orderCardDiv.setAttribute("class", "order-card");
  orderIdDiv.setAttribute("id", "");
  orderIdDiv.setAttribute("class", "order-id");
  orderCardDiv.setAttribute("id", "orderId");
  orderStatusDiv.setAttribute("class", "order-status");
  detailsDiv.setAttribute("class", "details");
  typeSpan.setAttribute("id", "pType");
  typeSpan.setAttribute("class", "type");
  sizeSpan.setAttribute("id", "pSize");
  sizeSpan.setAttribute("class", "size");
  statusDiv.setAttribute("class", "status");
  dynamicSpan.setAttribute("id", "dynamicOrderStatus");
  dynamicSpan.setAttribute("class", "dynamic");
  timeDateDiv.setAttribute("class", "time-date");
  countDownDiv.setAttribute("id", "countDown");
  countDownDiv.setAttribute("class", "countDown");
  timeSpan.setAttribute("id", "time");
  cancelBtn.setAttribute("id", "cncl");
  orderCardDiv.setAttribute("class", "cncl");

  orderPreviewDiv.appendChild(orderCardDiv);
  orderCardDiv.appendChild(orderIdDiv);
  orderCardDiv.appendChild(orderStatusDiv);
  orderStatusDiv.appendChild(detailsDiv);
  detailsDiv.appendChild(typeSpan);
  detailsDiv.appendChild(hr1);
  detailsDiv.appendChild(sizeSpan);
  detailsDiv.appendChild(hr2);
  orderStatusDiv.appendChild(statusDiv);
  statusDiv.appendChild(statusSpan);
  statusDiv.appendChild(dynamicSpan);
  orderCardDiv.appendChild(timeDateDiv);
  timeDateDiv.appendChild(countDownDiv);
  countDownDiv.appendChild(timeSpan);
  timeDateDiv.appendChild(cancelBtn);

  orderIdDiv.textContent = `BLRPM${orderId}`;
  typeSpan.textContent = `Type : ${Ptype}`;
  sizeSpan.textContent = `Size : ${Psize}`;
  statusSpan.textContent = "Status:";
  countDownDiv.textContent = "Waiting Time";



const countDownTimer = () => {
  let startMin = 1;
  let startSec = startMin * 60;
  setInterval(() => {
    let min = Math.floor(startSec / 60);
    let Sec = startSec % 60;
    Sec = Sec < 10 ? "0" + Sec : Sec;
    min = min < 10 ? "0" + min : min;
    timeSpan.textContent = `${min}:${Sec}`;
    startSec--;
  }, 1000);
};
countDownTimer();
  console.log(orderIdDiv) ;
  dynamicOrderStatus.textContent = 'Order Placed'
	chefReceived(dynamicOrderStatus)
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheezeAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheezeAdded)
		.then(pizzaBaked)
		.then(oreganoAddedAndPacked)
		.then(packageReceivedAtCounter)
		.then(() => dynamicOrderStatus.textContent = 'Package received at counter')
		.catch((err) => dynamicOrderStatus.textContent = `${err}`);

console.log(orderPreviewDiv)
};

// ***********************************************
// **** order-preview Component Create  *********
// ***********************************************




