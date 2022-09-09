//loading effect
// const Loader=document.getElementById("loader")
// import{resetInterval} from './createOrder'
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

// ***********************************************
// ************** Element Selector *********************
// ***********************************************

//Bill Node selector for copy to today summary
const nodeCopyFrom = document.getElementById("nodeCopy");
const todaySummaryModalBoby = document.getElementById("todaySummaryBody");
const billParent =document.getElementById("billDiv");

//oder div Selector
const createOrderDiv = document.getElementById("createOrder");
const createOrderDivParent=createOrderDiv.parentElement
console.log(createOrderDivParent)

//bill Generator Button
const totalWaitTimeSpanWithTitel =document.getElementById("totalWaitTime");
const totalWaitTimeSpan=document.getElementById("totalWT");
const billGenerateBtn = document.getElementById("generateBillBtn");

//cs_alert Selector

const cs_alert = document.getElementById("cs_alert");
const cs_tImg = document.getElementById("tImg");
const cs_tTitle = document.getElementById("tTitle");
const cs_tParagraph = document.getElementById("tParagraph");

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

// Pizza select Button Selector --> CheckBox --> By default UnChecked
const p1BtnCheck = document.getElementById("p1BtnClick");
const p2BtnCheck = document.getElementById("p2BtnClick");
const p3BtnCheck = document.getElementById("p3BtnClick");
const p4BtnCheck = document.getElementById("p4BtnClick");
const p5BtnCheck = document.getElementById("p5BtnClick");
const p6BtnCheck = document.getElementById("p6BtnClick");
const p7BtnCheck = document.getElementById("p7BtnClick");
const p8BtnCheck = document.getElementById("p8BtnClick");
const p9BtnCheck = document.getElementById("p9BtnClick");

//Pizza Image
const p1Img = document.getElementById("p1Img");
const p2Img = document.getElementById("p2Img");
const p3Img = document.getElementById("p3Img");
const p4Img = document.getElementById("p4Img");
const p5Img = document.getElementById("p5Img");
const p6Img = document.getElementById("p6Img");
const p7Img = document.getElementById("p7Img");
const p8Img = document.getElementById("p8Img");
const p9Img = document.getElementById("p9Img");

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
const p1CancelBtn = document.getElementById("p1cancel");
const p2CancelBtn = document.getElementById("p2cancel");
const p3CancelBtn = document.getElementById("p3cancel");
const p4CancelBtn = document.getElementById("p4cancel");
const p5CancelBtn = document.getElementById("p5cancel");
const p6CancelBtn = document.getElementById("p6cancel");
const p7CancelBtn = document.getElementById("p7cancel");
const p8CancelBtn = document.getElementById("p8cancel");
const p9CancelBtn = document.getElementById("p9cancel");
//Canel Button

//Bill Items Select
const billCustomerName = document.getElementById("billCustomerNamelbl");
const billDateTimelbl = document.getElementById("billDateTimelbl");
const billPizzaTypesList = document.getElementById("billPizzaTypesList");
const billPizzaSizesList = document.getElementById("billPizzaSizesList");
const billPizzaQtysList = document.getElementById("billPizzaQtysList");
const billPizzaPricesList = document.getElementById("billPizzaPricesList");
const billTotal = document.getElementById("billTotal");
const billPrintBtn = document.getElementById("billPrintBtn");
//Bill Items Select

//last order history Items Select
const LOHPizzaDetails = document.getElementById("lohPizzaDetails");
const LOHPizzaPricesDetails = document.getElementById("lohPizzaPricesDetails");
const LOHtotalBill = document.getElementById("lohtotalBill");
//last order history Items Select

//Today Summery items Selector
const TDSPizzaDetails = document.getElementById("tdsPizzaDetails");
const TDSPizzaPrices = document.getElementById("tdsPizzaPrices");
const TDSBillTotal = document.getElementById("tdsBillTotal");

//Today Summery items Selector

// ***********************************************
// ************** Element Selector *********************
// ***********************************************

// ***********************************************
// **** Global Variable *********
// ***********************************************
//before execute name availibily check
let customerNameAvalityCheck = false;

let customerName = "";
//Store all order detail insiide object before print
let orderDetailsArray = [];
//store one pizza order detail before print
let createOrderDetailsObj = {};
//it will store all order process/after complete successful order push true --control timer function
let OrderReadyCheckingArray = [];
//order executer counter- control timer function
let totalOrderTime=0;
//click event check for bill generate button- control timer function
let billGenerateButtonClickCheck = true;
// pass the biiling all element node to loh and sod
let billPrintDynamicArray = [];
//click event check for bill print button
let printBtnClickCheck = true;
//whole day summary array
let todayOrderSummaryArray = [];
//whole day summary object
let summaryDayObj = {};

let orderCancelcheck = true;


var resetTotalInterval;
let totalWaitMin;
let totalWaitSec;

//Image Source :
const p1ImgSrc = p1Img.src;
const p2ImgSrc = p2Img.src;
const p3ImgSrc = p3Img.src;
const p4ImgSrc = p4Img.src;
const p5ImgSrc = p5Img.src;
const p6ImgSrc = p6Img.src;
const p7ImgSrc = p7Img.src;
const p8ImgSrc = p8Img.src;
const p9ImgSrc = p9Img.src;

//Image Name By alt :
const p1PizzaName = p1Img.alt;
const p2PizzaName = p2Img.alt;
const p3PizzaName = p3Img.alt;
const p4PizzaName = p4Img.alt;
const p5PizzaName = p5Img.alt;
const p6PizzaName = p6Img.alt;
const p7PizzaName = p7Img.alt;
const p8PizzaName = p8Img.alt;
const p9PizzaName = p9Img.alt;

// ***********************************************
// **** Global Variable *********
// ***********************************************

// ***********************************************
// **** Main Button Clickz Event *********
// ***********************************************

p1Btn.addEventListener("click", () => {
  checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  if (printBtnClickCheck) {
    if (billGenerateButtonClickCheck) {
      p1BtnCheck.checked = true;
      cancelBtnVisible(p1CancelBtn, p1Btn, p1ImgSrc, p1PizzaName);
    } else {
      billGenerateAlert();
      checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
    }
  } else {
    billPrintAlert();
    checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  }
});

p2Btn.addEventListener("click", () => {
  checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  if (printBtnClickCheck) {
    if (billGenerateButtonClickCheck) {
      p2BtnCheck.checked = true;
      cancelBtnVisible(p2CancelBtn, p2Btn, p2ImgSrc, p2PizzaName);
    } else {
      billGenerateAlert();
      checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
    }
  } else {
    billPrintAlert();
    checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  }
});

p3Btn.addEventListener("click", () => {
  checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  if (printBtnClickCheck) {
    if (billGenerateButtonClickCheck) {
      p3BtnCheck.checked = true;
      cancelBtnVisible(p3CancelBtn, p3Btn, p3ImgSrc, p3PizzaName);
    } else {
      billGenerateAlert();
      checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
    }
  } else {
    billPrintAlert();
    checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  }
});

p4Btn.addEventListener("click", () => {
  checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  if (printBtnClickCheck) {
    if (billGenerateButtonClickCheck) {
      p4BtnCheck.checked = true;
      cancelBtnVisible(p4CancelBtn, p4Btn, p4ImgSrc, p4PizzaName);
    } else {
      billGenerateAlert();
      checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
    }
  } else {
    billPrintAlert();
    checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  }
});

p5Btn.addEventListener("click", () => {
  checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  if (printBtnClickCheck) {
    if (billGenerateButtonClickCheck) {
      p5BtnCheck.checked = true;
      cancelBtnVisible(p5CancelBtn, p5Btn, p5ImgSrc, p5PizzaName);
    } else {
      billGenerateAlert();
      checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
    }
  } else {
    billPrintAlert();
    checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  }
});

p6Btn.addEventListener("click", () => {
  checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  if (printBtnClickCheck) {
    if (billGenerateButtonClickCheck) {
      p6BtnCheck.checked = true;
      cancelBtnVisible(p6CancelBtn, p6Btn, p6ImgSrc, p6PizzaName);
    } else {
      billGenerateAlert();
      checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
    }
  } else {
    billPrintAlert();
    checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  }
});

p7Btn.addEventListener("click", () => {
  checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  if (printBtnClickCheck) {
    if (billGenerateButtonClickCheck) {
      p7BtnCheck.checked = true;
      cancelBtnVisible(p7CancelBtn, p7Btn, p7ImgSrc, p7PizzaName);
    } else {
      billGenerateAlert();
      checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
    }
  } else {
    billPrintAlert();
    checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  }
});

p8Btn.addEventListener("click", () => {
  checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  if (printBtnClickCheck) {
    if (billGenerateButtonClickCheck) {
      p8BtnCheck.checked = true;
      cancelBtnVisible(p8CancelBtn, p8Btn, p8ImgSrc, p8PizzaName);
    } else {
      billGenerateAlert();
      checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
    }
  } else {
    billPrintAlert();
    checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  }
});

p9Btn.addEventListener("click", () => {
  checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  if (printBtnClickCheck) {
    if (billGenerateButtonClickCheck) {
      p9BtnCheck.checked = true;
      cancelBtnVisible(p9CancelBtn, p9Btn, p9ImgSrc, p9PizzaName);
    } else {
      billGenerateAlert();
      checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
    }
  } else {
    billPrintAlert();
    checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault();
  }
});

// ***********************************************
// **** Main Button Clickz Event *********
// ***********************************************

// ***********************************************
// **** Size & Price Change Clickz Event *********
// ***********************************************
//Size & Price Change Clickz Event
p1sBtn.addEventListener("click", () => {
  p1Price.textContent = 110;
  p1Size.textContent = "Small";
  const pSizeValue_ = p1Size.textContent;
  const pPriceValue_ = p1Price.textContent;
  if (p1BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p1PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p1PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p1mBtn.addEventListener("click", () => {
  p1Price.textContent = 160;
  p1Size.textContent = "Medium";
  const pSizeValue_ = p1Size.textContent;
  const pPriceValue_ = p1Price.textContent;
  if (p1BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p1PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p1PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p1lBtn.addEventListener("click", () => {
  p1Price.textContent = 200;
  p1Size.textContent = "Large";
  const pSizeValue_ = p1Size.textContent;
  const pPriceValue_ = p1Price.textContent;
  if (p1BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p1PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p1PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p2sBtn.addEventListener("click", () => {
  p2Price.textContent = 160;
  p2Size.textContent = "Small";
  const pSizeValue_ = p2Size.textContent;
  const pPriceValue_ = p2Price.textContent;
  if (p2BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p2PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p2PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p2mBtn.addEventListener("click", () => {
  p2Price.textContent = "210";
  p2Size.textContent = "Medium";
  const pSizeValue_ = p2Size.textContent;
  const pPriceValue_ = p2Price.textContent;
  if (p2BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p2PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p2PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p2lBtn.addEventListener("click", () => {
  p2Price.textContent = 250;
  p2Size.textContent = "Large";
  const pSizeValue_ = p2Size.textContent;
  const pPriceValue_ = p2Price.textContent;
  if (p2BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p2PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p2PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p3sBtn.addEventListener("click", () => {
  p3Price.textContent = 130;
  p3Size.textContent = "Small";
  const pSizeValue_ = p3Size.textContent;
  const pPriceValue_ = p3Price.textContent;
  if (p3BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p3PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p3PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p3mBtn.addEventListener("click", () => {
  p3Price.textContent = 180;
  p3Size.textContent = "Medium";
  const pSizeValue_ = p3Size.textContent;
  const pPriceValue_ = p3Price.textContent;
  if (p3BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p3PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p3PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p3lBtn.addEventListener("click", () => {
  p3Price.textContent = 220;
  p3Size.textContent = "Large";
  const pSizeValue_ = p3Size.textContent;
  const pPriceValue_ = p3Price.textContent;
  if (p3BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p3PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p3PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p4sBtn.addEventListener("click", () => {
  p4Price.textContent = 120;
  p4Size.textContent = "Small";
  const pSizeValue_ = p4Size.textContent;
  const pPriceValue_ = p4Price.textContent;
  if (p4BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p4PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p4PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p4mBtn.addEventListener("click", () => {
  p4Price.textContent = 170;
  p4Size.textContent = "Medium";
  const pSizeValue_ = p4Size.textContent;
  const pPriceValue_ = p4Price.textContent;
  if (p4BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p4PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p4PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p4lBtn.addEventListener("click", () => {
  p4Price.textContent = 210;
  p4Size.textContent = "Large";
  const pSizeValue_ = p4Size.textContent;
  const pPriceValue_ = p4Price.textContent;
  if (p4BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p4PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p4PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p5sBtn.addEventListener("click", () => {
  p5Price.textContent = 180;
  p5Size.textContent = "Small";
  const pSizeValue_ = p5Size.textContent;
  const pPriceValue_ = p5Price.textContent;
  if (p5BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p5PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p5PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p5mBtn.addEventListener("click", () => {
  p5Price.textContent = 230;
  p5Size.textContent = "Medium";
  const pSizeValue_ = p5Size.textContent;
  const pPriceValue_ = p5Price.textContent;
  if (p5BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p5PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p5PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p5lBtn.addEventListener("click", () => {
  p5Price.textContent = 270;
  p5Size.textContent = "Large";
  const pSizeValue_ = p5Size.textContent;
  const pPriceValue_ = p5Price.textContent;
  if (p5BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p5PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p5PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p6sBtn.addEventListener("click", () => {
  p6Price.textContent = 170;
  p6Size.textContent = "Small";
  const pSizeValue_ = p6Size.textContent;
  const pPriceValue_ = p6Price.textContent;
  if (p6BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p6PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p6PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p6mBtn.addEventListener("click", () => {
  p6Price.textContent = 220;
  p6Size.textContent = "Medium";
  const pSizeValue_ = p6Size.textContent;
  const pPriceValue_ = p6Price.textContent;
  if (p6BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p6PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p6PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p6lBtn.addEventListener("click", () => {
  p6Price.textContent = 260;
  p6Size.textContent = "Large";
  const pSizeValue_ = p6Size.textContent;
  const pPriceValue_ = p6Price.textContent;
  if (p6BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p6PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p6PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p7sBtn.addEventListener("click", () => {
  p7Price.textContent = 140;
  p7Size.textContent = "Small";
  const pSizeValue_ = p7Size.textContent;
  const pPriceValue_ = p7Price.textContent;
  if (p7BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p7PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p7PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p7mBtn.addEventListener("click", () => {
  p7Price.textContent = 190;
  p7Size.textContent = "Medium";
  const pSizeValue_ = p7Size.textContent;
  const pPriceValue_ = p7Price.textContent;
  if (p7BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p7PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p7PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p7lBtn.addEventListener("click", () => {
  p7Price.textContent = 230;
  p7Size.textContent = "Large";
  const pSizeValue_ = p7Size.textContent;
  const pPriceValue_ = p7Price.textContent;
  if (p7BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p7PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p7PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p8sBtn.addEventListener("click", () => {
  p8Price.textContent = 145;
  p8Size.textContent = "Small";
  const pSizeValue_ = p8Size.textContent;
  const pPriceValue_ = p8Price.textContent;
  if (p8BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p8PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p8PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p8mBtn.addEventListener("click", () => {
  p8Price.textContent = 195;
  p8Size.textContent = "Medium";
  const pSizeValue_ = p8Size.textContent;
  const pPriceValue_ = p8Price.textContent;
  if (p8BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p8PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p8PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p8lBtn.addEventListener("click", () => {
  p8Price.textContent = 235;
  p8Size.textContent = "Large";
  const pSizeValue_ = p8Size.textContent;
  const pPriceValue_ = p8Price.textContent;
  if (p8BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p8PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p8PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p9sBtn.addEventListener("click", () => {
  p9Price.textContent = 125;
  p9Size.textContent = "Small";
  const pSizeValue_ = p9Size.textContent;
  const pPriceValue_ = p9Price.textContent;
  if (p9BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p9PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p9PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p9mBtn.addEventListener("click", () => {
  p9Price.textContent = 175;
  p9Size.textContent = "Medium";
  const pSizeValue_ = p9Size.textContent;
  const pPriceValue_ = p9Price.textContent;
  if (p9BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p9PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p9PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

p9lBtn.addEventListener("click", () => {
  p9Price.textContent = 215;
  p9Size.textContent = "Large";
  const pSizeValue_ = p9Size.textContent;
  const pPriceValue_ = p9Price.textContent;
  if (p9BtnCheck.checked) {
    if (customerNameAvalityCheck) {
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p9PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    } else {
      while (!customerName) {
        customerName = prompt("Please Enter The Customer Name..");
      }
      sizeSmall_Medium_Large_BtnSameUtilityFunction(
        p9PizzaName,
        pSizeValue_,
        pPriceValue_
      );
    }
  } else {
    pizzaSelectAlert();
    checkBoxUnchacked();
    cancelBtnHide();
    pointerEventSetDefault();
  }
});

// ***********************************************
// **** Size & Price Change Clickz Event *********
// ***********************************************

// ***********************************************
// **** Bill Generate Clickz Event *********
// ***********************************************
billGenerateBtn.addEventListener("click", () => {
  createOrderDivParent.style.background="url(./assets/orderbg.gif)";
  var billDateTime = billDateTimeGenerator();
  //before adding removing child from bill
  console.log(orderDetailsArray);
  const updatedArray = orderDetailsArray.filter(
    (obj) => obj.PriceValue !== 0 && obj.QtyValue !== 0
  );
  billGenerator(updatedArray, customerName, billDateTime);
  allChildRemoveFromParentFunction(createOrderDiv);
  printBtnClickCheck = false;
  customerNameAvalityCheck = false;
  billGenerateButtonClickCheck = true;
  customerName = "";
  billDateTime = "";
  totalOrderTime = 0;
  OrderReadyCheckingArray = [];
  checkBoxUnchacked();
  cancelBtnHide();
  pointerEventSetDefault();
  totalWaitTimeSpanWithTitel.style.display="none"
  billGenerateBtn.style.display = "none";
  // billParent.style.display = "none";

});

// ***********************************************
// **** Bill Generate Clickz Event *********
// ***********************************************

// ***********************************************
// **** Bill Print Clickz Event *********
// ***********************************************
billPrintBtn.addEventListener("click", () => {
  //colone node of customer bill full and append by todays full summary node..
  const dynamicCreateDiv = document.createElement("div");
  dynamicCreateDiv.setAttribute("id", "dynamicCreateDiv");
  dynamicCreateDiv.setAttribute("class", "dynamicCreateDiv");
  const nodeCopyTo = nodeCopyFrom.cloneNode(true);
  dynamicCreateDiv.appendChild(nodeCopyTo);
  todaySummaryModalBoby.appendChild(dynamicCreateDiv);

  printBtnClickCheck = true;
  let tempArray = [];
  let totalSum = 0;
  let todayTotalSum = 0;
  //Removing value to summary of the day..
  allChildRemoveFromParentFunction(LOHPizzaDetails);
  allChildRemoveFromParentFunction(LOHPizzaPricesDetails);
  LOHtotalBill.removeChild(LOHtotalBill.lastChild);
  //Adding value to summary of the day..
  for (let i = 0; i < billPrintDynamicArray.length; i = i + 4) {
    for (let j = i; j < i + 3 && j < billPrintDynamicArray.length; j++) {
      let val = billPrintDynamicArray[j].textContent;
      tempArray.push(val);
    }
    let [type, size, qty] = tempArray;
    const detailsPizza = document.createElement("li");
    detailsPizza.textContent = `${type}(${size})(${qty})`;
    LOHPizzaDetails.appendChild(detailsPizza);
    tempArray = [];
  }
  for (let k = 3; k < billPrintDynamicArray.length; k = k + 4) {
    const pricePizza = document.createElement("li");
    pricePizza.textContent = billPrintDynamicArray[k].textContent;
    totalSum += parseInt(pricePizza.textContent);
    LOHPizzaPricesDetails.appendChild(pricePizza);
  }
  const LOHtotal = document.createElement("div");
  LOHtotal.textContent = `${totalSum}/-`;
  LOHtotal.setAttribute("class", "amtTotal_");
  LOHtotal.setAttribute("id", "amtTotal_");
  LOHtotalBill.appendChild(LOHtotal);

  //Reemoving value to summary of the day
  allChildRemoveFromParentFunction(TDSPizzaDetails);
  allChildRemoveFromParentFunction(TDSPizzaPrices);
  TDSBillTotal.removeChild(TDSBillTotal.lastChild);

  //updating value to summary of the day
  for (let item of todayOrderSummaryArray) {
    let { sizeP, qtyP, priceP } = item;
    todayTotalSum += parseInt(priceP);
    const SizeP_QtyP = document.createElement("li");
    SizeP_QtyP.textContent = `${sizeP}(${qtyP})`;
    TDSPizzaDetails.appendChild(SizeP_QtyP);
    const PriceP_ = document.createElement("li");
    PriceP_.textContent = priceP;
    TDSPizzaPrices.appendChild(PriceP_);
  }
  const TotalP_ = document.createElement("div");
  TotalP_.setAttribute("class", "amtTotal_");
  TotalP_.textContent = todayTotalSum;
  TDSBillTotal.appendChild(TotalP_);
  billPrintDynamicArray = [];
  summaryDayObj = {};

  //removing the billing all element..
  billCustomerName.removeChild(billCustomerName.lastChild);
  billDateTimelbl.removeChild(billDateTimelbl.lastChild);
  allChildRemoveFromParentFunction(billPizzaTypesList);
  allChildRemoveFromParentFunction(billPizzaSizesList);
  allChildRemoveFromParentFunction(billPizzaQtysList);
  allChildRemoveFromParentFunction(billPizzaPricesList);
  billTotal.removeChild(billTotal.lastChild);

  //all global value resetting
  customerNameAvalityCheck = false;
  customerName = "";
  totalOrderTime = 0;
  orderDetailsArray = [];
  createOrderDetailsObj = {};
  OrderReadyCheckingArray = [];
  billPrintDynamicArray = [];
  billGenerateButtonClickCheck = true;
  printBtnClickCheck = true;
  console.log(todayOrderSummaryArray);
});
// ***********************************************
// **** Bill Print Clickz Event *********
// ***********************************************

// ***********************************************
// **** Cancel Button Clickz Event *********
// ***********************************************

p1CancelBtn.addEventListener("click", () =>
  checkBoxUnchackedCancelBtnHideEvent()
);
p2CancelBtn.addEventListener("click", () =>
  checkBoxUnchackedCancelBtnHideEvent()
);
p3CancelBtn.addEventListener("click", () =>
  checkBoxUnchackedCancelBtnHideEvent()
);
p4CancelBtn.addEventListener("click", () =>
  checkBoxUnchackedCancelBtnHideEvent()
);
p5CancelBtn.addEventListener("click", () =>
  checkBoxUnchackedCancelBtnHideEvent()
);
p6CancelBtn.addEventListener("click", () =>
  checkBoxUnchackedCancelBtnHideEvent()
);
p7CancelBtn.addEventListener("click", () =>
  checkBoxUnchackedCancelBtnHideEvent()
);
p8CancelBtn.addEventListener("click", () =>
  checkBoxUnchackedCancelBtnHideEvent()
);
p9CancelBtn.addEventListener("click", () =>
  checkBoxUnchackedCancelBtnHideEvent()
);

// ***********************************************
// **** Cancel Button Clickz Event Clickz Event *********
// ***********************************************

// ***********************************************
// ****all Size button Same utility Function *********
// ***********************************************

const sizeSmall_Medium_Large_BtnSameUtilityFunction = (
  pizzaNameValue,
  pizzaSizeValue,
  pizzaPriceValue
) => {
  createOrderDivParent.style.background="none";
  const pizzaSizeValue_ = pizzaSizeValue;
  const pizzaPriceValue_ = pizzaPriceValue;
  const pizzaNameValue_ = pizzaNameValue;
  const oId = orderIdGenerator();
  const orderPreviewDiv = createElement(
    oId,
    pizzaNameValue_,
    pizzaSizeValue_,
    pizzaPriceValue_
  );
  createOrderDiv.appendChild(orderPreviewDiv);
  checkBoxUnchacked();
  cancelBtnHide();
  pointerEventSetDefault();

  tempObj = {
    PizzaName: pizzaNameValue_,
    SizeValue: pizzaSizeValue_,
    QtyValue: 1,
    PriceValue: pizzaPriceValue_,
  };
  pizzaQtyValueUpdater(tempObj, orderDetailsArray);
  tempObj = {};


  totalWaitTimeSpanWithTitel.style.display="block";
  if(totalOrderTime==0){
    totalWaitTime(60);
  }else{

  }
};

// ***********************************************
// ****all Size button Same utility Function *********
// ***********************************************

// ***********************************************
// **** Utility Function *********
// ***********************************************

const checkBoxUnchecked_cancelBtnHide_pointerEventSetDefault = () => {
  checkBoxUnchacked();
  cancelBtnHide();
  pointerEventSetDefault();
};

const cancelBtnVisible = (cancelBtn, ParentBtn, imgSrc, title) => {
  cancelBtn.style.display = "block";
  ParentBtn.style.pointerEvents = "none";
  cs_alert.style.display = "block";
  cs_tImg.src = imgSrc;
  cs_tImg.alt = title;
  cs_tTitle.textContent = title;
  setTimeout(() => {
    cs_alert.style.display = "none";
  }, 4000);
};

const pizzaSelectAlert = () => {
  cs_alert.style.display = "block";
  cs_alert.style.backgroundColor = "#5800FF";
  cs_tTitle.textContent = "Pizza Mart !!";
  cs_tParagraph.textContent = "To Create Order Please Select Pizza First !!";
  cs_tImg.src = "./assets/Pizza Mart.png";
  cs_tParagraph.style.color = "#fff";
  setTimeout(() => {
    cs_alert.style.display = "none";
    cs_tParagraph.textContent = " Please select the size !";
    cs_alert.style.backgroundColor = "#7DCE13";
  }, 4000);
};

const billGenerateAlert = () => {
  cs_alert.style.display = "block";
  cs_alert.style.backgroundColor = "#FF4A4A";
  cs_tTitle.textContent = "Pizza Mart !!";
  cs_tParagraph.textContent =
    "To Create New Order Please Click Bill Button & Generate Bill First!!";
  cs_tImg.src = "./assets/Pizza Mart.png";
  setTimeout(() => {
    cs_alert.style.display = "none";
    cs_tParagraph.textContent = " Please select the size !";
    cs_alert.style.backgroundColor = "#7DCE13";
  }, 4000);
};

const billPrintAlert = () => {
  cs_alert.style.display = "block";
  cs_alert.style.backgroundColor = "#F32424";
  cs_tTitle.textContent = "Pizza Mart !!";
  cs_tParagraph.textContent =
    "Please Print the Bill First!! and Get Paid From Customer";
  cs_tImg.src = "./assets/Pizza Mart.png";
  setTimeout(() => {
    cs_alert.style.display = "none";
    cs_tParagraph.textContent = " Please select the size !";
    cs_alert.style.backgroundColor = "#7DCE13";
  }, 4000);
};

const cancelBtnHide = () => {
  p1CancelBtn.style.display = "none";
  p2CancelBtn.style.display = "none";
  p3CancelBtn.style.display = "none";
  p4CancelBtn.style.display = "none";
  p5CancelBtn.style.display = "none";
  p6CancelBtn.style.display = "none";
  p7CancelBtn.style.display = "none";
  p8CancelBtn.style.display = "none";
  p9CancelBtn.style.display = "none";
};

const checkBoxUnchacked = () => {
  p1BtnCheck.checked = false;
  p2BtnCheck.checked = false;
  p3BtnCheck.checked = false;
  p4BtnCheck.checked = false;
  p5BtnCheck.checked = false;
  p6BtnCheck.checked = false;
  p7BtnCheck.checked = false;
  p8BtnCheck.checked = false;
  p9BtnCheck.checked = false;
};

const pointerEventSetDefault = () => {
  p1Btn.style.pointerEvents = "auto";
  p2Btn.style.pointerEvents = "auto";
  p3Btn.style.pointerEvents = "auto";
  p4Btn.style.pointerEvents = "auto";
  p5Btn.style.pointerEvents = "auto";
  p6Btn.style.pointerEvents = "auto";
  p7Btn.style.pointerEvents = "auto";
  p8Btn.style.pointerEvents = "auto";
  p9Btn.style.pointerEvents = "auto";
};

const orderIdGenerator = () => {
  const timeNow = new Date();
  let year = timeNow.getFullYear();
  let month = timeNow.getMonth() + 1;
  let date = timeNow.getDate();
  let hour = timeNow.getHours();
  let min = timeNow.getMinutes();
  let sec = timeNow.getSeconds();
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  return `${hour}${min}${sec}-${date}${month}${year}`;
};

const billDateTimeGenerator = () => {
  const timeNow = new Date();
  let year = timeNow.getFullYear();
  let month = timeNow.getMonth() + 1;
  let date = timeNow.getDate();
  let hour = timeNow.getHours();
  let min = timeNow.getMinutes();
  let sec = timeNow.getSeconds();
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  return ` ${date}/${month}/${year} ${hour}:${min}:${sec}`;
};

const checkBoxUnchackedCancelBtnHideEvent = () => {
  cancelBtnHide();
  checkBoxUnchacked();
};

const allChildRemoveFromParentFunction = (Parent) => {
  while (Parent.firstChild) {
    Parent.removeChild(Parent.firstChild);
  }
  // or
  //parent.innerHTML = '';
};

const afterCancelValueUpdater = (removeObj, orderDetailsArray) => {
  console.log(orderDetailsArray)
  let foundObj = orderDetailsArray.find(
    (val) =>
      val.PizzaName == removeObj.PizzaName &&
      val.SizeValue == removeObj.SizeValue
  );

  foundObj.QtyValue -= removeObj.QtyValue;
  let substractPrice =
    parseInt(foundObj.PriceValue) - parseInt(removeObj.priceP);
  foundObj.PriceValue = substractPrice;
  console.log(orderDetailsArray)



};



const pizzaQtyValueUpdater = (tempOrderObj, orderDetailsArray) => {
  let foundObj = orderDetailsArray.find(
    (val) =>
      val.PizzaName == tempOrderObj.PizzaName &&
      val.SizeValue == tempOrderObj.SizeValue
  );
  if (!foundObj) {
    orderDetailsArray.push(tempOrderObj);
    return;
  }
  foundObj.QtyValue += tempOrderObj.QtyValue;
  let addPrice =
    parseInt(tempOrderObj.PriceValue) * parseInt(foundObj.QtyValue);
  foundObj.PriceValue = addPrice;
};

const todaySummaryUpdater = (summaryObj, todayOrderSummaryArray) => {
  let checkObj = todayOrderSummaryArray.find(
    (val) => val.sizeP == summaryObj.sizeP
  );
  if (!checkObj) {
    todayOrderSummaryArray.push(summaryObj);
    return;
  }
  checkObj.qtyP += summaryObj.qtyP;
  let addPrice = parseInt(summaryObj.priceP) + parseInt(checkObj.priceP);
  checkObj.priceP = addPrice;
};
// console.log(todayOrderSummaryArray)


document.querySelector("#createOrder").addEventListener("click", function (e) {
  if (e.target && e.target.id == "cncl") {
    const hideNode = e.target.parentNode.parentNode.parentNode //going parent master node
    const a = e.target.parentNode.parentNode //going parent node
    //coming down from parent again**********
    const b = a.firstElementChild;
    const c = b.nextElementSibling;
    const d = c.firstElementChild;
    const d_1 = d.firstElementChild; // --->want ---> Type
    const d_2 = d_1.nextElementSibling; //don't want -->hr
    const d_3 = d_2.nextElementSibling; // --->want  ----> Size
    const d_4 = d_3.nextElementSibling; //don't want -->hr
    const d_5 = d_4.nextElementSibling; // --->want  ----> Price
    const f= c.nextElementSibling
    const g=f.firstElementChild
    const h=g.firstElementChild;
    const h_1=g.firstElementChild;
    const h_2=h_1.nextElementSibling;
    const removeName = d_1.textContent.split(":")[1].trim();
    const removeSize = d_3.textContent.split(":")[1].trim();
    const removePrice = d_5.textContent.split(":")[1].trim();
    const removeTime = h_2.textContent.split(":")[1].trim();

    tempRemoveObj = {
      PizzaName: removeName,
      SizeValue: removeSize,
      QtyValue: 1,
      PriceValue: removePrice,
    };
    console.log(f)
    console.log(removeTime)
    afterCancelValueUpdater(tempRemoveObj, orderDetailsArray);
    document.querySelector("#createOrder").removeChild(hideNode);
    orderCancelcheck = false;

  //   totalOrderTime-=removeTime
  // totalWaitTime(totalOrderTime)
  }
});


 //*****************************/
  //*****total wait Time Function***********/
  //*****************************/
const totalWaitTime=(totalOrderTime)=>{
  resetTotalInterval&&clearInterval(resetTotalInterval);
  totalWaitSec=0;
   totalWaitSec = totalWaitSec+ parseInt(totalOrderTime)  ;
    resetTotalInterval = setInterval(updateCounterTotal, 1000);
   function updateCounterTotal() {
    let tmin = Math.floor(totalWaitSec / 60);
    let tsec = totalWaitSec % 60;
    console.log(tmin)
    console.log(tsec)
    tsec = tsec < 10 ? "0" + tsec : tsec;
    tmin = tmin < 10 ? "0" + tmin : tmin;
    totalWaitTimeSpan.textContent = `${tmin}:${tsec}`;
    if (tsec == 00 && tmin == 00) {
      clearInterval(resetTotalInterval);
      totalWaitTimeSpan.textContent = `00:00`;
      billGenerateBtn.style.display = "block";
      billGenerateButtonClickCheck = false;
    }
    totalWaitSec--;
    // return totalWaitSec;
  }
}


// ***********************************************
// **** Utility Function *********
// ***********************************************
