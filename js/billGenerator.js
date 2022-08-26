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
const sizePizza=document.createElement("li");
sizePizza.textContent=SizeValue;
billPizzaSizesList.appendChild(sizePizza);
const qtyPizza=document.createElement("li");
qtyPizza.textContent=QtyValue;
billPizzaQtysList.appendChild(qtyPizza);
const pricePizza=document.createElement("li");
pricePizza.textContent=PriceValue;
billPizzaPricesList.appendChild(pricePizza);
}
OrderDetailsArray.forEach((ele) => billTotalAmount+=parseInt(ele['PriceValue']) )
billAmountTotal=document.createElement("div");
billAmountTotal.setAttribute("class","amtTotal");
billAmountTotal.setAttribute("id","amtTotal");
billAmountTotal.textContent=`${billTotalAmount} /-`;
billTotal.appendChild(billAmountTotal);
}