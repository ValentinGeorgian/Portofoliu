import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit
{

  dateProductsFromJson: any;
  arrayProducts: any = [];
  arrayStoreProducts: any = [];
  varAmount: number = 0;
  messageEmptyShoppingCart: string = "";
  dateFinalOrderFromJson: any;
  deliveryOptions: string = "";
  classDeliveryOptions: string = "";
  arrayDeliveryOptions: any = [];
  classBillingAddress: string = "";
  billingAddress: string = "";
  arrayAddresses: any = [];
  classPayment: string = "";
  payment: string = "";
  arrayPayment: any = [];
  imageCards: string = "";
  classSummaryOrder: string = "";
  summaryOrder: string = "";
  valFirstName: string = "";
  valLastName: string = "";
  valEmail: string = "";
  valPhone: string = "";
  valCity: string = "";
  valAddress: string = "";
  totalPrice: string = "";
  valFirstName1: string = "";
  valLastName1: string = "";
  valPhone1: string = "";
  valDifferentAddress: string = "";
  borderFirstName: string = "";
  borderLastName: string = "";
  borderEmail: string = "";
  borderPhone: string = "";
  borderCity: string = "";
  borderAddress: string = "";
  borderFirstName1: string = "";
  borderLastName1: string = "";
  borderPhone1: string = "";
  priceWithDiscount: string = "";
  arrayOrder: any = [];
  finalOrder:any = [];

  constructor() { }

  ngOnInit(): void
  {
    this.fnJsonProducts();

    this.fnJsonFinalOrder();
  }

  async fnJsonProducts()
  {
    let productsDates: string = "assets/jsonProducts.json";
    let responseDates: any = await fetch(productsDates);
    let jsonDates: any = await responseDates.json();

    this.dateProductsFromJson = jsonDates;

    this.arrayProducts = this.dateProductsFromJson.product;

  }

  async fnJsonFinalOrder()
  {
    let finalOrderDates: string = "assets/jsonFinalOrder.json";
    let responseFinalOrder: any = await fetch(finalOrderDates);
    let jsonFinalOrder: any = await responseFinalOrder.json();

    this.dateFinalOrderFromJson = jsonFinalOrder;

    this.deliveryOptions = this.dateFinalOrderFromJson.delivery.title;
    this.classDeliveryOptions = this.dateFinalOrderFromJson.delivery.class;

    this.arrayDeliveryOptions = this.dateFinalOrderFromJson.delivery.options;

    this.classBillingAddress = this.dateFinalOrderFromJson.address.class;
    this.billingAddress = this.dateFinalOrderFromJson.address.title;

    this.arrayAddresses = this.dateFinalOrderFromJson.address.options;

    this.classPayment = this.dateFinalOrderFromJson.payment.class;
    this.payment = this.dateFinalOrderFromJson.payment.title;
    this.imageCards = this.dateFinalOrderFromJson.payment.cardTypes;

    this.arrayPayment = this.dateFinalOrderFromJson.payment.options;

    this.classSummaryOrder = this.dateFinalOrderFromJson.sumaryOrder.class;
    this.summaryOrder = this.dateFinalOrderFromJson.sumaryOrder.title;

  }

  fnRemoveAmount(param1: number)
  {
    debugger
    const labelAmount_ = <HTMLLabelElement>document.getElementById("idLabelAmount_" + param1);

    let x: number = 0;

    if (labelAmount_.innerText == "0")
    {
      return;
    }
    else
    {
      x = parseInt(labelAmount_.innerText) - 1;
      labelAmount_.innerText = x.toString();
    }

    //this.varAmount = this.varAmount + parseInt(labelAmount_.innerText);
    this.varAmount = parseInt(labelAmount_.innerText);
  }

  fnAddAmount(param1: number)
  {
    const labelAmount_ = <HTMLLabelElement>document.getElementById("idLabelAmount_" + param1);
    let x: number = 0;

    x = parseInt(labelAmount_.innerText) + 1;
    labelAmount_.innerText = x.toString();

    this.varAmount = parseInt(labelAmount_.innerText);
  }

  fnShowDetails(param1: number)
  {
    let modal = <HTMLDivElement>document.getElementById("myModal_" + param1);
    let divDiscount = <HTMLDivElement>document.getElementById("idDivDiscount_" + param1);

    modal.style.display = "block";
    divDiscount.style.visibility = "hidden";
  }

  fnLeaveProduct(param1: number, param2: string)
  {
    let modal = <HTMLDivElement>document.getElementById("myModal_" + param1);
    let divDiscount = <HTMLDivElement>document.getElementById("idDivDiscount_" + param1);

    modal.style.display = "none";

    if (param2.slice(0, 1) != "0")
    {
      divDiscount.style.visibility = "visible";
    }
    else
    {
      divDiscount.style.visibility = "hidden";
    }
  }

  fnDiscount(param1: string)
  {
    let returnDiscount: string = "";

    if (param1.slice(0, 1) != "0")
    {
      returnDiscount = param1;
    }
    else
    {
      returnDiscount = "";
    }

    return returnDiscount;
  }

  fnHideDivDiscount(param1: string)
  {
    let returnValue: string = "";

    if (param1.slice(0, 1) != "0")
    {
      returnValue = "visible";
    }
    else
    {
      returnValue = "hidden";
    }

    return returnValue;
  }

  fnAddInCart(param1: number)
  {
    const spanProducts = <HTMLButtonElement>document.getElementById("idSpanCart");
    const product_name = <HTMLParagraphElement>document.getElementById("idProductName_" + param1);
    const product_price = <HTMLParagraphElement>document.getElementById("idProductPrice_" + param1);
    const product_discount = <HTMLSpanElement>document.getElementById("idProductDiscount_" + param1);
    const product_image = <HTMLImageElement>document.getElementById("idImage_" + param1);
    const labelAmount_ = <HTMLLabelElement>document.getElementById("idLabelAmount_" + param1);
    const img_ = <HTMLImageElement>document.getElementById("idImgShoppingCart");
    const buttonNextStep_ = <HTMLButtonElement>document.getElementById("idButtonNextStep");
    const buttonEmptyBasket_ = <HTMLButtonElement>document.getElementById("idButtonEmptyBasket");
    let x: number = 0;
    let positionFromFor: number = 0;

    spanProducts.style.visibility = "visible";
    this.messageEmptyShoppingCart = "";

    if (labelAmount_.innerText != "0")
    {
      if (spanProducts.innerText == "")
      {
        spanProducts.innerText = "0";
        spanProducts.innerText = (parseInt(spanProducts.innerText) + this.varAmount).toString();
      }
      else
      {
        spanProducts.innerText = (parseInt(spanProducts.innerText) + this.varAmount).toString();
      }

      img_.style.display = "none";
      buttonNextStep_.style.display = "block";
      buttonEmptyBasket_.style.display = "block";
    }
    else
    {
      return;
    }

    let productDatesFromArray: any = {
      product_name: "",
      product_price: "",
      product_discount: "",
      product_amount: "",
      product_image: "",
      final_price: 0
    }

    productDatesFromArray.product_name = product_name.innerText;
    productDatesFromArray.product_price = product_price.innerText;
    productDatesFromArray.product_discount = product_discount.innerText;
    productDatesFromArray.product_amount = labelAmount_.innerText;
    productDatesFromArray.product_image = product_image.src;
    productDatesFromArray.final_price = 0;

    for (let i = 0; i < this.arrayStoreProducts.length; i++)
    {
      if (this.arrayStoreProducts[i].product_name == productDatesFromArray.product_name)
      {
        x = x + 1;
        positionFromFor = i;
      }
    }

    if (x > 0)
    {
      this.arrayStoreProducts[positionFromFor].product_amount =
        (parseInt(this.arrayStoreProducts[positionFromFor].product_amount) +
          parseInt(productDatesFromArray.product_amount)).toString();

    }
    else
    {
      if (labelAmount_.innerText != "0")
      {
        this.arrayStoreProducts.push(productDatesFromArray);
      }
    }


    labelAmount_.innerText = "0";
  }

  fnShowProducts()
  {
    const modalProducts_ = <HTMLDivElement>document.getElementById("modalProducts");
    const buttonEmptyBasket_ = <HTMLButtonElement>document.getElementById("idButtonEmptyBasket");
    const buttonNextStep_ = <HTMLButtonElement>document.getElementById("idButtonNextStep");
    const spanProducts = <HTMLButtonElement>document.getElementById("idSpanCart");
    const img_ = <HTMLImageElement>document.getElementById("idImgShoppingCart");

    modalProducts_.style.display = "block";

    if (spanProducts.innerText != "")
    {
      this.messageEmptyShoppingCart = "";
      buttonEmptyBasket_.style.display = "block";
      buttonNextStep_.style.display = "block";
      img_.style.display = "none";
    }
    else
    {
      this.messageEmptyShoppingCart = "Your shopping cart is empty";
      buttonEmptyBasket_.style.display = "none";
      buttonNextStep_.style.display = "none";
      img_.style.display = "block";
    }
  }

  fnCloseProductModal()
  {
    let modalProducts_ = <HTMLDivElement>document.getElementById("modalProducts");

    modalProducts_.style.display = "none";
  }

  fnShowPlopularity(param1: boolean)
  {
    let returnPopularity: string = "";

    if (param1 == true)
    {
      returnPopularity = "Popular product";
    }

    if (param1 = false)
    {
      returnPopularity = "";
    }

    return returnPopularity;
  }

  fnDeleteProduct(param1: number)
  {
    const spanProducts = <HTMLButtonElement>document.getElementById("idSpanCart");
    const img_ = <HTMLImageElement>document.getElementById("idImgShoppingCart");
    let x: number = parseInt(this.arrayStoreProducts[param1].product_amount);
    const buttonNextStep_ = <HTMLButtonElement>document.getElementById("idButtonNextStep");
    const buttonEmptyBasket_ = <HTMLButtonElement>document.getElementById("idButtonEmptyBasket");

    spanProducts.innerText = (parseInt(spanProducts.innerText) - x).toString();

    this.arrayStoreProducts.splice(param1, 1);

    if (this.arrayStoreProducts.length == 0)
    {
      spanProducts.innerText = "";
      this.messageEmptyShoppingCart = "Your shopping cart is empty";
      img_.style.display = "block";
      buttonNextStep_.style.display = "none";
      buttonEmptyBasket_.style.display = "none";
    }
    else
    {
      this.messageEmptyShoppingCart = "";
      buttonNextStep_.style.display = "block";
      buttonEmptyBasket_.style.display = "block";
    }
  }

  fnRemoveLeft(param1: number, param2: string)
  {
    const spanAmount_ = <HTMLSpanElement>document.getElementById("idSpanAmount_" + param1);
    let x: number = 0;
    const spanProducts = <HTMLButtonElement>document.getElementById("idSpanCart");
    const img_ = <HTMLImageElement>document.getElementById("idImgShoppingCart");
    const buttonNextStep_ = <HTMLButtonElement>document.getElementById("idButtonNextStep");
    const buttonEmptyBasket_ = <HTMLButtonElement>document.getElementById("idButtonEmptyBasket");
    const totalPrice_ = <HTMLSpanElement>document.getElementById("idTotalPrice_" + param1);
    let price: string = "";
    let finalPrice: string = "";

    if (spanAmount_.innerText != "0")
    {
      x = parseInt(spanAmount_.innerText) - 1;
      spanAmount_.innerText = x.toString();
      this.arrayStoreProducts[param1].product_amount = x;
      spanProducts.innerText = (parseInt(spanProducts.innerText) - 1).toString();
    }
    else
    {
      return;
    }

    if (spanProducts.innerText == "0")
    {
      spanProducts.innerText = "";
      this.messageEmptyShoppingCart = "Your shopping cart is empty";
      img_.style.display = "block";
      this.varAmount = 0;
      buttonNextStep_.style.display = "none";
      buttonEmptyBasket_.style.display = "none"
    }

    if (spanAmount_.innerText == "0")
    {
      this.arrayStoreProducts.splice(param1, 1);
    }

    for (let i = 0; i < param2.length; i++)
    {
      price = price + param2[i];
      if (param2[i] == " ")
      {
        break;
      }
    }

    finalPrice = price.trim();

    totalPrice_.innerText = (parseFloat(totalPrice_.innerText) - parseFloat(finalPrice)).toString() + " lei";

    totalPrice_.innerText = (parseFloat(totalPrice_.innerText).toFixed(2)).toString() + " lei";
  }

  fnAddRight(param1: number, param2: string)
  {
    const spanAmount_ = <HTMLSpanElement>document.getElementById("idSpanAmount_" + param1);
    const spanProducts = <HTMLButtonElement>document.getElementById("idSpanCart");
    const totalPrice_ = <HTMLSpanElement>document.getElementById("idTotalPrice_" + param1);

    let y: number = 0;
    let price: string = "";
    let finalPrice: string = "";

    for (let i = 0; i < param2.length; i++)
    {
      price = price + param2[i];
      if (param2[i] == " ")
      {
        break;
      }
    }

    finalPrice = price.trim();

    y = parseInt(spanAmount_.innerText) + 1;
    spanAmount_.innerText = y.toString();
    this.arrayStoreProducts[param1].product_amount = y;
    spanProducts.innerText = (parseInt(spanProducts.innerText) + 1).toString();
    totalPrice_.innerText = (parseFloat(totalPrice_.innerText) + parseFloat(finalPrice)).toString() + " lei";
    totalPrice_.innerText = (parseFloat(totalPrice_.innerText).toFixed(2)).toString() + " lei";
  }

  fnMetodaPret(param1: string, param2: string)
  {
    let price: string = "";
    let finalPrice: string = "";

    for (let i = 0; i < param1.length; i++)
    {
      price = price + param1[i];
      if (param1[i] == " ")
      {
        break;
      }
    }

    finalPrice = price.trim();

    finalPrice = (parseFloat(finalPrice) * parseFloat(param2)).toString();

    return parseFloat(finalPrice).toFixed(2) + " lei";
  }

  fnDiscountExtra(param1: string)
  {
    let discountReturn: number = 0;

    discountReturn = parseFloat(param1.replace(/[^\d\.]*/g, ''));

    if (discountReturn.toString() == "NaN")
    {
      discountReturn = 0;
    }

    return discountReturn;
  }

  fnPriceWithDiscount(param1: string, param2: number)
  {
    let totalPrice: string = "";
    let finalResult: string = "";

    for (let i = 0; i < param1.length; i++)
    {
      totalPrice = totalPrice + param1[i];
      if (param1[i] == " ")
      {
        break;
      }
    }

    finalResult = ((param2 / 100) * parseFloat(totalPrice)).toString();

    return parseFloat(finalResult).toFixed(2).toString();
  }

  fnFinalPriceWithDiscount(param1: string, param2: string)
  {
    let x: number = 0;

    x = parseFloat(param1) - parseFloat(param2);

    return parseFloat(x.toString()).toFixed(2).toString() + " lei";
  }

  fnEmptyBasket()
  {
    const img_ = <HTMLImageElement>document.getElementById("idImgShoppingCart");
    const buttonNextStep_ = <HTMLButtonElement>document.getElementById("idButtonNextStep");
    const spanProducts = <HTMLButtonElement>document.getElementById("idSpanCart");
    const buttonEmptyBasket_ = <HTMLButtonElement>document.getElementById("idButtonEmptyBasket");

    this.arrayStoreProducts = [];
    img_.style.display = "block";
    buttonNextStep_.style.display = "none";
    buttonEmptyBasket_.style.display = "none"
    this.messageEmptyShoppingCart = "Your shopping cart is empty";
    spanProducts.innerText = "";
  }

  fnNextStep()
  {
    let modalProducts_ = <HTMLDivElement>document.getElementById("modalProducts");
    let finalOrder_ = <HTMLDivElement>document.getElementById("finalOrder");
    let total: number = 0;
    let finalPrice: number;

    modalProducts_.style.display = "none";
    finalOrder_.style.display = "block";

    for (let i = 0; i < this.arrayStoreProducts.length; i++)
    {
      finalPrice = parseFloat(this.fnFinalPriceWithDiscount(this.fnMetodaPret(this.arrayStoreProducts[i].product_price,
        this.arrayStoreProducts[i].product_amount),
        this.fnPriceWithDiscount(this.fnMetodaPret(this.arrayStoreProducts[i].product_price,
          this.arrayStoreProducts[i].product_amount),
          this.fnDiscountExtra(this.arrayStoreProducts[i].product_discount))));
      total = total + parseFloat(finalPrice.toFixed(2));
    }

    total = total + parseInt(this.arrayDeliveryOptions[1].price);

    this.totalPrice = parseFloat(total.toString()).toFixed(2).toString();
  }

  fnClickBillingAddress(param1: number)
  {
    const radioAddress_ = <HTMLInputElement>document.getElementById("idOptionsAddress_" + param1);
    const divAddress_ = <HTMLDivElement>document.getElementById("idDivDifferentAddress");

    if (radioAddress_.value == "0")
    {
      divAddress_.style.display = "none";
    }

    if (radioAddress_.value == "1")
    {
      divAddress_.style.display = "block";
    }
  }

  fnClickOptionDelivery(param1: number)
  {
    const radioOptionDelivery_ = <HTMLInputElement>document.getElementById("idOptionsDelivery_" + param1);
    const divAddress_ = <HTMLDivElement>document.getElementById("idDivAddress");
    const divAddress1_ = <HTMLDivElement>document.getElementById("idDivAddress1");

    if (radioOptionDelivery_.value == "0")
    {
      divAddress_.style.display = "none";
      divAddress1_.style.display = "block";
    }

    if (radioOptionDelivery_.value == "1")
    {
      divAddress_.style.display = "block";
      divAddress1_.style.display = "none";
    }

    if (radioOptionDelivery_.value == "2")
    {
      divAddress_.style.display = "none";
      divAddress1_.style.display = "block";
    }
  }

  fnCancelOrder()
  {
    const img_ = <HTMLImageElement>document.getElementById("idImgShoppingCart");
    const spanProducts = <HTMLButtonElement>document.getElementById("idSpanCart");
    const divFinalOrder_ = <HTMLDivElement>document.getElementById("finalOrder");
    const standardDelivery_ = <HTMLInputElement>document.getElementById("idOptionsDelivery_1");
    const sameAddress_ = <HTMLInputElement>document.getElementById("idOptionsAddress_0");
    const divDifferentAddress_ = <HTMLInputElement>document.getElementById("idDivDifferentAddress");

    this.arrayStoreProducts = [];
    img_.style.display = "block";
    this.messageEmptyShoppingCart = "Your shopping cart is empty";
    spanProducts.innerText = "";
    divFinalOrder_.style.display = "none";
    this.arrayOrder = [];
    standardDelivery_.checked = true;
    this.valFirstName = "";
    this.valLastName = "";
    this.valEmail = "";
    this.valPhone = "";
    this.valCity = "";
    this.valAddress = "";
    this.valFirstName1 = "";
    this.valLastName1 = "";
    this.valPhone1 = "";
    this.valDifferentAddress = "";
    sameAddress_.checked = true;
    divDifferentAddress_.style.display = "none";
  }

  fnSendOrder()
  {
    const firstName_ = <HTMLInputElement>document.getElementById("idFirstName");
    const lastName_ = <HTMLInputElement>document.getElementById("idLastName");
    const email_ = <HTMLInputElement>document.getElementById("idEmail");
    const phone_ = <HTMLInputElement>document.getElementById("idPhone");
    const city_ = <HTMLInputElement>document.getElementById("idCity");
    const address_ = <HTMLTextAreaElement>document.getElementById("idAddress");
    const divFinalOrder_ = <HTMLDivElement>document.getElementById("finalOrder");
    const messageSendOrder = <HTMLDivElement>document.getElementById("finalMessage");
    const finalSpan_ = <HTMLSpanElement>document.getElementById("idFinalSpan");
    const standardDelivery_ = <HTMLInputElement>document.getElementById("idOptionsDelivery_1");
    const easyBoxDelivery_ = <HTMLInputElement>document.getElementById("idOptionsDelivery_0");
    const postalOfficesDelivery_ = <HTMLInputElement>document.getElementById("idOptionsDelivery_2");
    const firstName1_ = <HTMLInputElement>document.getElementById("idFirstName1");
    const lastName1_ = <HTMLInputElement>document.getElementById("idLastName1");
    const phone1_ = <HTMLInputElement>document.getElementById("idPhone1");
    const sameAddress_ = <HTMLInputElement>document.getElementById("idOptionsAddress_0");
    const differentAddress = <HTMLInputElement>document.getElementById("idOptionsAddress_1");
    const cardPayment_ = <HTMLInputElement>document.getElementById("idOptionPayment_0");
    const deliveryPayment_ = <HTMLInputElement>document.getElementById("idOptionPayment_1");

    let finalOrderObject = {
      easyBoxDelivery: false,
      standardDelivery: false,
      postalOfficesDeliver: false,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      firstName1: "",
      lastName1: "",
      phone1: "",
      sameBillingAddress: false,
      differentBillingAddress: false,
      differentAddress: "",
      paymentWithTheCard: false,
      paymentOnDelivery: false,
      orderProducName: "",
      totalPrice: ""
    }

    if ((easyBoxDelivery_.checked == true) || (postalOfficesDelivery_.checked == true))
    {
      if (this.valFirstName1.trim() == "")
      {
        firstName1_.focus();
        this.borderFirstName1 = "0.2rem solid red";
        return;
      }

      if (this.valLastName1.trim() == "")
      {
        lastName1_.focus();
        this.borderLastName1 = "0.2rem solid red";
        return;
      }

      if (this.valPhone1.trim() == "")
      {
        phone1_.focus();
        this.borderPhone1 = "0.2rem solid red";
        return;
      }

      if ((this.valFirstName1.trim() != "")
        && (this.valLastName1.trim() != "")
        && (this.valPhone1.trim() != ""))
      {
        finalOrderObject.easyBoxDelivery = easyBoxDelivery_.checked;
        finalOrderObject.standardDelivery = standardDelivery_.checked;
        finalOrderObject.postalOfficesDeliver = postalOfficesDelivery_.checked;
        finalOrderObject.firstName = this.valFirstName;
        finalOrderObject.lastName = this.valLastName;
        finalOrderObject.email = this.valEmail;
        finalOrderObject.phone = this.valPhone;
        finalOrderObject.city = this.valCity;
        finalOrderObject.address = this.valAddress;
        finalOrderObject.firstName1 = this.valFirstName1;
        finalOrderObject.lastName1 = this.valLastName1;
        finalOrderObject.phone1 = this.valPhone1;
        finalOrderObject.sameBillingAddress = sameAddress_.checked;
        finalOrderObject.differentBillingAddress = differentAddress.checked;
        finalOrderObject.differentAddress = this.valDifferentAddress;
        finalOrderObject.paymentWithTheCard = cardPayment_.checked;
        finalOrderObject.paymentOnDelivery = deliveryPayment_.checked;
        finalOrderObject.totalPrice = this.totalPrice;

        for (let i = 0; i < this.arrayStoreProducts.length; i++)
        {
          finalOrderObject.orderProducName = finalOrderObject.orderProducName + " | " + this.arrayStoreProducts[i].product_name;
        }

        this.arrayOrder.push(finalOrderObject);
        this.finalOrder.push(finalOrderObject);

        divFinalOrder_.style.display = "none";
        messageSendOrder.style.display = "block";
        finalSpan_.innerText = "The order was placed successfully. You will be contacted at the phone number " + this.valPhone1 + " to find out all the details of the order" + this.valEmail + " with all the details."
      }
    }

    if (standardDelivery_.checked == true)
    {
      if (this.valFirstName.trim() == "")
      {
        firstName_.focus();
        this.borderFirstName = "0.2rem solid red";
        return;
      }

      if (this.valLastName.trim() == "")
      {
        lastName_.focus();
        this.borderLastName = "0.2rem solid red";
        return;
      }

      if (this.valEmail.trim() == "")
      {
        email_.focus();
        this.borderEmail = "0.2rem solid red";
        return;
      }

      if (this.valPhone.trim() == "")
      {
        phone_.focus();
        this.borderPhone = "0.2rem solid red";
        return;
      }

      if (this.valCity.trim() == "")
      {
        city_.focus();
        this.borderCity = "0.2rem solid red";
        return;
      }

      if (this.valAddress.trim() == "")
      {
        address_.focus();
        this.borderAddress = "0.2rem solid red";
        return;
      }

      if ((this.valFirstName.trim() != "")
        && (this.valLastName.trim() != "")
        && (this.valEmail.trim() != "")
        && (this.valPhone.trim() != "")
        && (this.valCity.trim() != "")
        && (this.valAddress.trim() != ""))
      {
        finalOrderObject.easyBoxDelivery = easyBoxDelivery_.checked;
        finalOrderObject.standardDelivery = standardDelivery_.checked;
        finalOrderObject.postalOfficesDeliver = postalOfficesDelivery_.checked;
        finalOrderObject.firstName = this.valFirstName;
        finalOrderObject.lastName = this.valLastName;
        finalOrderObject.email = this.valEmail;
        finalOrderObject.phone = this.valPhone;
        finalOrderObject.city = this.valCity;
        finalOrderObject.address = this.valAddress;
        finalOrderObject.firstName1 = this.valFirstName1;
        finalOrderObject.lastName1 = this.valLastName1;
        finalOrderObject.phone1 = this.valPhone1;
        finalOrderObject.sameBillingAddress = sameAddress_.checked;
        finalOrderObject.differentBillingAddress = differentAddress.checked;
        finalOrderObject.differentAddress = this.valDifferentAddress;
        finalOrderObject.paymentWithTheCard = cardPayment_.checked;
        finalOrderObject.paymentOnDelivery = deliveryPayment_.checked;
        finalOrderObject.totalPrice = this.totalPrice;

        for (let i = 0; i < this.arrayStoreProducts.length; i++)
        {
          finalOrderObject.orderProducName = finalOrderObject.orderProducName + " | " + this.arrayStoreProducts[i].product_name;
        }

        this.arrayOrder.push(finalOrderObject);
        this.finalOrder.push(finalOrderObject);

        divFinalOrder_.style.display = "none";
        messageSendOrder.style.display = "block";
        finalSpan_.innerText = "The order was placed successfully. You will receive a message on the email address " + this.valEmail + " with all the details."
      }
    }

    console.log(this.finalOrder);
  }

  fnInputFirstName()
  {
    this.borderFirstName = "1px solid #ced4da";
  }

  fnBlurFirstName()
  {
    this.fnInputFirstName();
  }

  fnInputLastName()
  {
    this.borderLastName = "1px solid #ced4da";
  }

  fnBlurLastName()
  {
    this.fnInputLastName();
  }

  fnInputEmail()
  {
    this.borderEmail = "1px solid #ced4da";
  }

  fnBlurEmail()
  {
    this.fnInputEmail();
  }

  fnInputPhone()
  {
    this.borderPhone = "1px solid #ced4da";
  }

  fnBlurPhone()
  {
    this.fnInputPhone();
  }

  fnInputCity()
  {
    this.borderCity = "1px solid #ced4da";
  }

  fnBlurCity()
  {
    this.fnInputCity();
  }

  fnInputAddress()
  {
    this.borderAddress = "1px solid #ced4da";
  }

  fnBlurAddress()
  {
    this.fnInputAddress();
  }

  fnInputFirstName1()
  {
    this.borderFirstName1 = "1px solid #ced4da";
  }

  fnBlurFirstName1()
  {
    this.fnInputFirstName1();
  }

  fnInputLastName1()
  {
    this.borderLastName1 = "1px solid #ced4da";
  }

  fnBlurLastName1()
  {
    this.fnInputLastName1();
  }

  fnInputPhone1()
  {
    this.borderPhone1 = "1px solid #ced4da";
  }

  fnBlurPhone1()
  {
    this.fnInputPhone1();
  }

  fnFinalBack()
  {
    const divProducts = <HTMLDivElement>document.getElementById("modalProducts");
    const divFinalOrder = <HTMLDivElement>document.getElementById("finalOrder");
    const finalMessage = <HTMLDivElement>document.getElementById("finalMessage");
    const standardDelivery_ = <HTMLInputElement>document.getElementById("idOptionsDelivery_1");
    const addressStandardDelivery_ = <HTMLDivElement>document.getElementById("idDivAddress");
    const addressDelivery1 = <HTMLDivElement>document.getElementById("idDivAddress1");

    divProducts.style.display = "none";
    divFinalOrder.style.display = "none";
    finalMessage.style.display = "none";
    this.valFirstName = "";
    this.valLastName = "";
    this.valEmail = "";
    this.valPhone = "";
    this.valCity = "";
    this.valAddress = "";
    this.valFirstName1 = "";
    this.valLastName1 = "";
    this.valPhone1 = "";
    standardDelivery_.checked = true;
    addressStandardDelivery_.style.display = "block";
    addressDelivery1.style.display = "none";

    this.fnCancelOrder();
  }

  fnCloseFinalOrder()
  {
    const divFinalOrder_ = <HTMLDivElement>document.getElementById("finalOrder");
    const divProducts_ = <HTMLDivElement>document.getElementById("modalProducts");

    divFinalOrder_.style.display = "none";
    divProducts_.style.display = "block";
  }

  fnClick()
  {
    debugger
    const easyBoxDelivery_ = <HTMLInputElement>document.getElementById("idOptionsDelivery_0");
    const standardDelivery_ = <HTMLInputElement>document.getElementById("idOptionsDelivery_1");
    const postalOfficesDelivery_ = <HTMLInputElement>document.getElementById("idOptionsDelivery_2");
    let total: number = 0;
    let finalPrice: number;

    for (let i = 0; i < this.arrayStoreProducts.length; i++)
    {
      finalPrice = parseFloat(this.fnFinalPriceWithDiscount(this.fnMetodaPret(this.arrayStoreProducts[i].product_price,
        this.arrayStoreProducts[i].product_amount),
        this.fnPriceWithDiscount(this.fnMetodaPret(this.arrayStoreProducts[i].product_price,
          this.arrayStoreProducts[i].product_amount),
          this.fnDiscountExtra(this.arrayStoreProducts[i].product_discount))));
      total = total + parseFloat(finalPrice.toFixed(2));
    }

    this.totalPrice = parseFloat(total.toString()).toFixed(2).toString();

    if (easyBoxDelivery_.checked == true)
    {
      this.totalPrice = ((parseFloat(this.totalPrice)) + parseInt(this.arrayDeliveryOptions[0].price)).toFixed(2).toString();
    }

    if (standardDelivery_.checked == true)
    {
      this.totalPrice = ((parseFloat(this.totalPrice)) + parseInt(this.arrayDeliveryOptions[1].price)).toFixed(2).toString();
    }

    if (postalOfficesDelivery_.checked == true)
    {
      this.totalPrice = parseFloat(total.toString()).toFixed(2).toString();
    }
  }

  fnCloseDescriptionProduct(param1:number, param2:string)
  {
 let modal = <HTMLDivElement>document.getElementById("myModal_" + param1);
    let divDiscount = <HTMLDivElement>document.getElementById("idDivDiscount_" + param1);

    modal.style.display = "none";

    if (param2.slice(0, 1) != "0")
    {
      divDiscount.style.visibility = "visible";
    }
    else
    {
      divDiscount.style.visibility = "hidden";
    }
  }
}
