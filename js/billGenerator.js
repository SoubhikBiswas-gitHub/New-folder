// ***********************************************
// **** Bill Component Create function *********
// ***********************************************

const billGenerator=(OrderDetailsArray,CustomerName,BillDateTime)=>{
  let billTotalAmount=0;
  const customerName =document.createElement("span");
  customerName.setAttribute("class","customerName");
  customerName.setAttribute("id","billCustomerName");
  billCustomerName.appendChild(customerName);
  customerName.textContent=CustomerName;
  const dateTime =document.createElement("span");
  dateTime.setAttribute("class","dateTime");
  dateTime.setAttribute("id","billDateTime");
  billDateTimelbl.appendChild(dateTime);
  dateTime.textContent=BillDateTime;

for(let item of OrderDetailsArray){
let{PizzaName,SizeValue,QtyValue,PriceValue}=item;


const namePizza=document.createElement("li");
namePizza.textContent=PizzaName;
billPizzaTypesList.appendChild(namePizza);
billPrintDynamicArray.push(namePizza);

const sizePizza=document.createElement("li");
sizePizza.textContent=SizeValue;
billPizzaSizesList.appendChild(sizePizza);
billPrintDynamicArray.push(sizePizza);

const qtyPizza=document.createElement("li");
qtyPizza.textContent=`${QtyValue} #`;
billPizzaQtysList.appendChild(qtyPizza);
billPrintDynamicArray.push(qtyPizza);

const pricePizza=document.createElement("li");
pricePizza.textContent=`${PriceValue} /-`;
billPizzaPricesList.appendChild(pricePizza);
billPrintDynamicArray.push(pricePizza);

summaryDayObj={
  sizeP:SizeValue,
  qtyP:QtyValue,
  priceP:PriceValue
}
console.log(summaryDayObj)
todaySummaryUpdater(summaryDayObj,todayOrderSummaryArray);

}
OrderDetailsArray.forEach((ele) => billTotalAmount+=parseInt(ele['PriceValue']) )
billAmountTotal=document.createElement("div");
billAmountTotal.setAttribute("class","amtTotal");
billAmountTotal.setAttribute("id","amtTotal");
billAmountTotal.textContent=`${billTotalAmount} /-`;
billTotal.appendChild(billAmountTotal);
OrderDetailsArray=[];
billGenerateBtn.style.display = "none";
OrderDetailsArray="";
billGenerateButtonClickCheck=true;

}