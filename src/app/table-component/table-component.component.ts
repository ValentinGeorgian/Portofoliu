import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit
{

  productDates: any;
  arrayProducts: any = [];
  arrayProducts1: any = [];
  arrayDelivery: any = [];
  valInputProductName: string = "";
  arrayProductName: any = [];
  valInputPrice: string = "";
  arrayProductPrice: any = []
  valInputProducer: string = "";
  arrayProducer: any = [];
  valInputCategory: string = "";
  arrayCategory: any = [];
  valSelectDelivered: string = "";
  arrayProducer1: any = [];
  arrayProducer2: any = [];
  arrayProducer3: any = [];
  arrayProducer4: any = [];
  arrayProducer5: any = [];
  valSelectStock: string = "";
  arrayInStock: any = [];
  arrayNotInStock: any = [];
  valSelectFIlterOptions: string = "";
  arrayStringFilters: any = [];
  arrayNumberFilters: any = [];
  valSelectStringOptions: string = "";
  valSelectNumberOptions: string = "";
  valInputFilters: string = "";
  arrayProductsStartsWith: any = [];
  arrayProductsEndsWith: any = [];
  arrayProductsIncludes: any = [];
  arrayProducerStartsWith: any = [];
  arrayProducerEndsWith: any = [];
  arrayProducerIncludes: any = [];
  arrayCategoryStartsWith: any = [];
  arrayCategoryEndsWith: any = [];
  arrayCategoryIncludes: any = [];
  arrayPrice1: any = [];
  arrayPrice2: any = [];
  arrayPrice3: any = [];
  arrayPrice4: any = [];
  arrayPrice5: any = [];
  arrayPrice6: any = [];
  arrayDeliveredStartsWith: any = [];
  arrayDeliveredEndsWith: any = [];
  arrayDeliveredIncludes: any = [];
  arrayRangeSort: any = [];
  positionOfK: number = 0;
  valMinInputRange: string = "";
  valProductName: string = "";
  valMaxInputRange: string = "";
  valMin: string = "";
  valMax: string = "";
  positionKRightCLick: number = 0;
  valInputAddProductId: string = "";
  valInputAddProductName: string = "";
  valInputAddProductPrice: string = "";
  valSelectAddProductDelivered: string = "";
  valInputAddProductProducer: string = "";
  valInputAddProductCategory: string = "";
  valInputStock: string = "";
  alertMessage: string = "";
  valSelectDeliveredOptions: string = "";
  arrayDelivery1: any = [];
  arrayDelivery2: any = [];
  arrayDelivery3: any = [];
  arrayDelivery4: any = [];
  arrayDelivery5: any = [];
  pathImage: string = "";

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void
  {
    this.fnDatesForTable();
  }

  async fnDatesForTable()
  {
    let datesForTable:string = "assets/jsonTable.json";
    let responseDatesForTable:any = await fetch(datesForTable);
    let jsonDatesForTable:any = await responseDatesForTable.json();

    this.productDates = jsonDatesForTable;

    this.arrayProducts = this.productDates.products;
    this.arrayProducts1 = this.arrayProducts;
    this.arrayDelivery = this.productDates.delivery_by;
    this.arrayStringFilters = this.productDates.stringFilters;
    this.arrayNumberFilters = this.productDates.numberFilters;
  }

  fnStockProduct(param1: boolean, param2: number)
  {
    let returnInStock: string = "";
    const tdTable = <HTMLTableRowElement>document.getElementById("idRow_" + param2);

    if (param1 == true)
    {
      returnInStock = "In stock";
      tdTable.style.textDecoration = "none";
    }

    if (param1 == false)
    {
      returnInStock = "Out of stock";
      tdTable.style.textDecoration = "line-through";
    }

    return returnInStock;
  }

  fnDelivery(param1: number)
  {
    let deliveryReturn: string = "";

    for (let i = 0; i < this.arrayDelivery.length; i++)
    {
      if ((this.arrayDelivery[i].id == param1) && (this.arrayDelivery[i].id == 1))
      {
        deliveryReturn = this.arrayDelivery[i].name;
      }

      if ((this.arrayDelivery[i].id == param1) && (this.arrayDelivery[i].id == 2))
      {
        deliveryReturn = this.arrayDelivery[i].name;
      }

      if ((this.arrayDelivery[i].id == param1) && (this.arrayDelivery[i].id == 3))
      {
        deliveryReturn = this.arrayDelivery[i].name;
      }

      if ((this.arrayDelivery[i].id == param1) && (this.arrayDelivery[i].id == 4))
      {
        deliveryReturn = this.arrayDelivery[i].name;
      }

      if ((this.arrayDelivery[i].id == param1) && (this.arrayDelivery[i].id == 5))
      {
        deliveryReturn = this.arrayDelivery[i].name;
      }
    }

    return deliveryReturn;
  }

  fnInputProductName()
  {
    if (this.valInputProductName == "")
    {
      this.arrayProducts = this.arrayProducts1;
    }
    else
    {
      this.arrayProducts = this.arrayProducts1;
      this.arrayProductName = this.arrayProducts.filter((e: any) =>
      {
        if (e.product_name.toLowerCase().includes(this.valInputProductName.toLowerCase()) == true)
        {
          return e;
        }
      });
      this.arrayProducts = this.arrayProductName;
      this.valInputPrice = "";
      this.valInputProducer = "";
      this.valInputCategory = "";
      this.valSelectDelivered = "222";
      this.valSelectStock = "0";
    }
  }

  fnInputProductPrice()
  {
    if (this.valInputPrice == "")
    {
      this.arrayProducts = this.arrayProducts1;
    }
    else
    {
      this.arrayProducts = this.arrayProducts1;
      this.arrayProductPrice = this.arrayProducts.filter((e: any) =>
      {
        if (e.product_price == parseInt(this.valInputPrice))
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayProductPrice;
      this.valInputProductName = "";
      this.valInputProducer = "";
      this.valInputCategory = "";
      this.valSelectDelivered = "222";
      this.valSelectStock = "0";
    }
  }

  fnInputProducer()
  {
    if (this.valInputProducer == "")
    {
      this.arrayProducts = this.arrayProducts1;
    }
    else
    {
      this.arrayProducts = this.arrayProducts1;
      this.arrayProducer = this.arrayProducts.filter((e: any) =>
      {
        if (e.produced_by.toLowerCase().includes(this.valInputProducer.toLowerCase()) == true)
        {
          return e;
        }
      });
      this.arrayProducts = this.arrayProducer;
      this.valInputProductName = "";
      this.valInputPrice = "";
      this.valInputCategory = "";
      this.valSelectDelivered = "222";
      this.valSelectStock = "0";
    }
  }

  fnInputCategory()
  {
    if (this.valInputCategory == "")
    {
      this.arrayProducts = this.arrayProducts1;
    }
    else
    {
      this.arrayProducts = this.arrayProducts1;
      this.arrayCategory = this.arrayProducts.filter((e: any) =>
      {
        if (e.category.toLowerCase().includes(this.valInputCategory.toLowerCase()) == true)
        {
          return e;
        }
      });
      this.arrayProducts = this.arrayCategory;
      this.valInputProductName = "";
      this.valInputPrice = "";
      this.valInputProducer = "";
      this.valSelectDelivered = "222";
      this.valSelectStock = "0";
    }
  }

  fnChangeDelivered()
  {
    if (this.valSelectDelivered == "1")
    {
      this.arrayProducer1 = this.arrayProducts1.filter((e: any) =>
      {
        if (e.delivered_by == this.valSelectDelivered)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayProducer1;
    }

    if (this.valSelectDelivered == "2")
    {
      this.arrayProducer2 = this.arrayProducts1.filter((e: any) =>
      {
        if (e.delivered_by == this.valSelectDelivered)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayProducer2;
    }

    if (this.valSelectDelivered == "3")
    {
      this.arrayProducer3 = this.arrayProducts1.filter((e: any) =>
      {
        if (e.delivered_by == this.valSelectDelivered)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayProducer3;
    }

    if (this.valSelectDelivered == "4")
    {
      this.arrayProducer4 = this.arrayProducts1.filter((e: any) =>
      {
        if (e.delivered_by == this.valSelectDelivered)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayProducer4;
    }

    if (this.valSelectDelivered == "5")
    {
      this.arrayProducer5 = this.arrayProducts1.filter((e: any) =>
      {
        if (e.delivered_by == this.valSelectDelivered)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayProducer5;
    }

    if (this.valSelectDelivered == "222")
    {
      this.arrayProducts = this.arrayProducts1;
    }

    this.valInputProductName = "";
    this.valInputPrice = "";
    this.valInputProducer = "";
    this.valInputCategory = "";
    this.valSelectStock = "0";
  }

  fnChangeStock()
  {
    if (this.valSelectStock == "1")
    {
      this.arrayProducts = this.arrayProducts1;
      this.arrayInStock = this.arrayProducts.filter((e: any) =>
      {
        if (e.in_stock == true)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayInStock;
    }

    if (this.valSelectStock == "2")
    {
      this.arrayProducts = this.arrayProducts1;
      this.arrayNotInStock = this.arrayProducts.filter((e: any) =>
      {
        if (e.in_stock == false)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayNotInStock;
    }

    if (this.valSelectStock == "0")
    {
      this.arrayProducts = this.arrayProducts1;
    }

    this.valInputProductName = "";
    this.valInputPrice = "";
    this.valInputProducer = "";
    this.valInputCategory = "";
    this.valSelectDelivered = "222";
  }

  fnShowFilters()
  {
    const checkFilters_ = <HTMLInputElement>document.getElementById("idInputCheckbox");
    const divFilters = <HTMLDivElement>document.getElementById("idDivFilters");
    const selectFilter1_ = <HTMLSelectElement>document.getElementById("idSelectFilter1");
    const selectFilter2_ = <HTMLSelectElement>document.getElementById("idSelectFilter2");
    const selectFilter3_ = <HTMLSelectElement>document.getElementById("idSelectFilter3");
    const inputFilters_ = <HTMLInputElement>document.getElementById("idInputFilters");
    
    if (checkFilters_.checked == true)
    {
      divFilters.style.display = "block";
      this.arrayProducts = this.arrayProducts1;
    }
    else
    {
      divFilters.style.display = "none";
      selectFilter1_.style.display = "none";
      selectFilter2_.style.display = "none";
      selectFilter3_.style.display = "none";
      inputFilters_.style.display = "none";
      this.arrayProducts = this.arrayProducts1;
    }
  }

  fnChangeFilterOptions()
  {
    const selectFilter1_ = <HTMLSelectElement>document.getElementById("idSelectFilter1");
    const selectFilter2_ = <HTMLSelectElement>document.getElementById("idSelectFilter2");
    const selectFilter3_ = <HTMLSelectElement>document.getElementById("idSelectFilter3");
    const inputFilters_ = <HTMLInputElement>document.getElementById("idInputFilters");
    const buttonFilters_ = <HTMLButtonElement>document.getElementById("idButtonFilters");

    if ((this.valSelectFIlterOptions == "1") ||
      (this.valSelectFIlterOptions == "4") ||
      (this.valSelectFIlterOptions == "5"))
    {
      selectFilter2_.style.display = "none";
      selectFilter1_.style.display = "block";
      selectFilter3_.style.display = "none";
      inputFilters_.style.display = "block";
      buttonFilters_.style.display = "block";

      for (let i = 0; i < this.arrayStringFilters.length; i++)
      {
        if (selectFilter1_.options.length == this.arrayStringFilters.length)
        {
          break;
        }
        else
        {
          let x: any = document.createElement("option");
          x.innerText = this.arrayStringFilters[i].option;
          x.hidden = this.arrayStringFilters[i].hidden;
          x.value = i;
          selectFilter1_.appendChild(x);
        }
      }

    }

    if (this.valSelectFIlterOptions == "2")
    {
      selectFilter1_.style.display = "none";
      selectFilter2_.style.display = "block";
      selectFilter3_.style.display = "none";
      inputFilters_.style.display = "block";
      buttonFilters_.style.display = "block";

      for (let i = 0; i < this.arrayNumberFilters.length; i++)
      {
        if (selectFilter2_.options.length == this.arrayNumberFilters.length)
        {
          break;
        }
        else
        {
          let x: any = document.createElement("option");
          x.innerText = this.arrayNumberFilters[i].option;
          x.hidden = this.arrayNumberFilters[i].hidden;
          x.value = i;
          selectFilter2_.appendChild(x);
        }
      }
    }
    if (this.valSelectFIlterOptions == "3")
    {
      selectFilter1_.style.display = "none";
      selectFilter2_.style.display = "none";
      selectFilter3_.style.display = "block";
      inputFilters_.style.display = "none";
      buttonFilters_.style.display = "none";

      for (let i = 0; i < this.arrayDelivery.length; i++)
      {
        if (selectFilter3_.options.length == this.arrayDelivery.length)
        {
          break;
        }
        else
        {
          let x: any = document.createElement("option");
          x.innerText = this.arrayDelivery[i].name;
          x.hidden = this.arrayDelivery[i].hidden;
          x.value = i;
          selectFilter3_.appendChild(x);
        }
      }
    }
  }

  fnInputFIlters()
  {
    if (this.valInputFilters == "")
    {
      this.arrayProducts = this.arrayProducts1;
    }
  }

  fnApplyFilters()
  {
    if ((this.valSelectFIlterOptions == "1") && (this.valSelectStringOptions == "1"))
    {
      this.arrayProductsStartsWith = this.arrayProducts.filter((e: any) =>
      {
        if (e.product_name.toLowerCase().startsWith(this.valInputFilters.toLowerCase()) == true)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayProductsStartsWith;
    }

    if ((this.valSelectFIlterOptions == "1") && (this.valSelectStringOptions == "2"))
    {
      this.arrayProductsEndsWith = this.arrayProducts.filter((e: any) =>
      {
        if (e.product_colour.toLowerCase().endsWith(this.valInputFilters.toLowerCase()) == true)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayProductsEndsWith;
    }

    if ((this.valSelectFIlterOptions == "1") && (this.valSelectStringOptions == "3"))
    {
      this.arrayProductsIncludes = this.arrayProducts.filter((e: any) =>
      {
        if (e.product_name.toLowerCase().includes(this.valInputFilters.toLowerCase()) == true)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayProductsIncludes;
    }

    //

    if ((this.valSelectFIlterOptions == "4") && (this.valSelectStringOptions == "1"))
    {
      this.arrayProducerStartsWith = this.arrayProducts.filter((e: any) =>
      {
        if (e.produced_by.toLowerCase().startsWith(this.valInputFilters.toLowerCase()) == true)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayProducerStartsWith;
    }

    if ((this.valSelectFIlterOptions == "4") && (this.valSelectStringOptions == "2"))
    {
      this.arrayProducerEndsWith = this.arrayProducts.filter((e: any) =>
      {
        if (e.produced_by.toLowerCase().endsWith(this.valInputFilters.toLowerCase()) == true)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayProducerEndsWith;
    }

    if ((this.valSelectFIlterOptions == "4") && (this.valSelectStringOptions == "3"))
    {
      this.arrayProducerIncludes = this.arrayProducts.filter((e: any) =>
      {
        if (e.produced_by.toLowerCase().includes(this.valInputFilters.toLowerCase()) == true)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayProducerIncludes;
    }

    if ((this.valSelectFIlterOptions == "5") && (this.valSelectStringOptions == "1"))
    {
      this.arrayCategoryStartsWith = this.arrayProducts.filter((e: any) =>
      {
        if (e.category.toLowerCase().startsWith(this.valInputFilters.toLowerCase()) == true)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayCategoryStartsWith;
    }

    if ((this.valSelectFIlterOptions == "5") && (this.valSelectStringOptions == "2"))
    {
      this.arrayCategoryEndsWith = this.arrayProducts.filter((e: any) =>
      {
        if (e.category.toLowerCase().endsWith(this.valInputFilters.toLowerCase()) == true)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayCategoryEndsWith;
    }

    if ((this.valSelectFIlterOptions == "5") && (this.valSelectStringOptions == "3"))
    {
      this.arrayCategoryIncludes = this.arrayProducts.filter((e: any) =>
      {
        if (e.category.toLowerCase().includes(this.valInputFilters.toLowerCase()) == true)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayCategoryIncludes;
    }

    if ((this.valSelectFIlterOptions == "2") && (this.valSelectNumberOptions == "1"))
    {
      this.arrayPrice1 = this.arrayProducts.filter((e: any) =>
      {
        if (e.product_price < parseInt(this.valInputFilters))
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayPrice1;
    }

    if ((this.valSelectFIlterOptions == "2") && (this.valSelectNumberOptions == "2"))
    {
      this.arrayPrice2 = this.arrayProducts.filter((e: any) =>
      {
        if (e.product_price > parseInt(this.valInputFilters))
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayPrice2;
    }

    if ((this.valSelectFIlterOptions == "2") && (this.valSelectNumberOptions == "3"))
    {
      this.arrayPrice3 = this.arrayProducts.filter((e: any) =>
      {
        if (e.product_price == parseInt(this.valInputFilters))
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayPrice3;
    }

    if ((this.valSelectFIlterOptions == "2") && (this.valSelectNumberOptions == "4"))
    {
      this.arrayPrice4 = this.arrayProducts.filter((e: any) =>
      {
        if (e.product_price != parseInt(this.valInputFilters))
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayPrice4;
    }

    if ((this.valSelectFIlterOptions == "2") && (this.valSelectNumberOptions == "5"))
    {
      this.arrayPrice5 = this.arrayProducts.filter((e: any) =>
      {
        if (e.product_price <= parseInt(this.valInputFilters))
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayPrice5;
    }

    if ((this.valSelectFIlterOptions == "2") && (this.valSelectNumberOptions == "6"))
    {
      this.arrayPrice6 = this.arrayProducts.filter((e: any) =>
      {
        if (e.product_price >= parseInt(this.valInputFilters))
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayPrice6;
    }
  }

  fnChangeStringOptions()
  {
    this.valInputFilters = "";
  }

  fnChangeNumberOptions()
  {
    this.valInputFilters = "";
  }

  fnInputRange()
  {
    let inputRange_ = <HTMLInputElement>document.getElementById("customRange1");

    this.valMinInputRange = inputRange_.min;
    this.valMaxInputRange = inputRange_.value;

    this.arrayProducts = this.arrayProducts1;
    this.arrayRangeSort = this.arrayProducts.filter((e: any) =>
    {
      if ((e.product_price >= inputRange_.min) && (e.product_price < inputRange_.value))
      {
        return e;
      }
    });

    this.arrayProducts = this.arrayRangeSort;
  }

  fnClickSortByPrice()
  {
    const inputRange_ = <HTMLInputElement>document.getElementById("customRange1");
    const checkSortByPrice_ = <HTMLInputElement>document.getElementById("idSortByPrice");
    const divFilters_ = <HTMLDivElement>document.getElementById("idDivUp");
    let x: number = 0;
    let y: number = 0;

    if (checkSortByPrice_.checked == true)
    {
      inputRange_.disabled = false;
      divFilters_.style.display = "none";
      this.valMinInputRange = "";

      x = this.arrayProducts[0].product_price;

      for (let i = 0; i < this.arrayProducts.length; i++)
      {
        if (this.arrayProducts[i].product_price > x)
        {
          x = this.arrayProducts[i].product_price;
        }
      }

      this.valMax = x.toString();

      y = this.arrayProducts[0].product_price;

      for (let i = 0; i < this.arrayProducts.length; i++)
      {
        if (this.arrayProducts[i].product_price < y)
        {
          y = this.arrayProducts[i].product_price;
        }
      }

      this.valMin = y.toString();
    }
    else
    {
      inputRange_.disabled = true;
      divFilters_.style.display = "block";
      this.arrayProducts = this.arrayProducts1;
      this.valMaxInputRange = "";
      this.valMinInputRange = "";
      inputRange_.value = inputRange_.min;
    }

  }

  fnUpdate(param1: number)
  {
    const modalWindow_ = <HTMLDivElement>document.getElementById("myModal");
    const image_ = <HTMLImageElement>document.getElementById("idImage");
    const selectStockModal_ = <HTMLSelectElement>document.getElementById("idSelectStockModal");

    modalWindow_.style.display = "block";
    image_.src = this.arrayProducts[param1].path_image;
    this.valProductName = this.arrayProducts[param1].product_name;
    this.positionOfK = param1;

    if (this.arrayProducts[this.positionOfK].in_stock == true)
    {
      selectStockModal_.value = "1";
    }
    else
    {
      selectStockModal_.value = "2";
    }
  }

  fnCloseModal()
  {
    const modalWindow_ = <HTMLDivElement>document.getElementById("myModal");
    const selectStockModal_ = <HTMLSelectElement>document.getElementById("idSelectStockModal");
    const image_ = <HTMLImageElement>document.getElementById("idImage");

    modalWindow_.style.display = "none";
    selectStockModal_.value = "0";
    image_.src = "";
  }

  fnChangeSelectStockModal()
  {
    const selectStockModal_ = <HTMLSelectElement>document.getElementById("idSelectStockModal");

    if (selectStockModal_.value == "1")
    {
      this.arrayProducts[this.positionOfK].in_stock = true;
    }

    if (selectStockModal_.value == "2")
    {
      this.arrayProducts[this.positionOfK].in_stock = false;
    }
  }

  fnChangeUpload(event: any)
  {
    const image_ = <HTMLImageElement>document.getElementById("idImage");
    let x: any = event.target.files[0];
    let y = URL.createObjectURL(x);

    this.arrayProducts[this.positionOfK].path_image = y;
    image_.src = this.arrayProducts[this.positionOfK].path_image;
  }

  fnClickRow(event: MouseEvent, param1: number)
  {
    const divOptions_ = <HTMLDivElement>document.getElementById("idDivDeleteAndAdd");

    event.preventDefault();

    divOptions_.style.top = event.pageY + "px";
    divOptions_.style.left = event.pageX + "px";
    divOptions_.style.display = "block";

    this.positionKRightCLick = param1;
  }

  fnCloseWindow()
  {
    const divOptions_ = <HTMLDivElement>document.getElementById("idDivDeleteAndAdd");

    divOptions_.style.display = "none";
  }

  fnDeleteProduct()
  {
    let messageConfirm: boolean = confirm("The product will be deleted from the list. Do you want to proceed?");

    if (messageConfirm == true)
    {
      this.arrayProducts.splice(this.positionKRightCLick, 1);
    }
  }

  fnAddNewProduct()
  {
    const modalNewProduct_ = <HTMLDivElement>document.getElementById("myModal1");
    const divModal_ = <HTMLDivElement>document.getElementById("idDivModalContent");

    modalNewProduct_.style.display = "block";

    window.onclick = function (event: any)
    {
      if (event.target == modalNewProduct_)
      {
        modalNewProduct_.style.display = "none";
      }
    }

    this.valInputAddProductId = "";
    this.valInputAddProductName = "";
    this.valInputAddProductPrice = "";
    this.valSelectAddProductDelivered = "";
    this.valInputAddProductProducer = "";
    this.valInputAddProductCategory = "";
    this.valInputStock = "In stock";
    this.alertMessage = "";
    divModal_.style.border = "none";
    divModal_.style.borderRadius = "0rem";
  }

  fnUploadImage(event: any)
  {
    let pathImage: any = event.target.files[0];
    let createPathImage = URL.createObjectURL(pathImage);

    this.pathImage = createPathImage;
  }

  fnAddProduct()
  {
    const modalNewProduct_ = <HTMLDivElement>document.getElementById("myModal1");
    const divModal_ = <HTMLDivElement>document.getElementById("idDivModalContent");

    let datesNewProduct = {
      product_id: 0,
      product_name: "",
      product_price: 0,
      product_colour: "",
      delivered_by: 0,
      produced_by: "",
      category: "",
      is_visible: false,
      in_stock: false,
      path_image: ""
    }
    let x: number = 0;
    let alertMessage_ = <HTMLParagraphElement>document.getElementById("idMessage");

    for (let i = 0; i < this.arrayProducts.length; i++)
    {
      for (let i = 0; i < this.arrayProducts.length; i++)
      {
        if (this.arrayProducts[i].product_id > x)
        {
          x = this.arrayProducts[i].product_id;
          datesNewProduct.product_id = x + 1;
        }
      }
    }

    datesNewProduct.product_name = this.valInputAddProductName;
    datesNewProduct.product_price = parseInt(this.valInputAddProductPrice);

    if (this.valSelectAddProductDelivered == "1")
    {
      datesNewProduct.delivered_by = 1;
    }

    if (this.valSelectAddProductDelivered == "2")
    {
      datesNewProduct.delivered_by = 2;
    }

    if (this.valSelectAddProductDelivered == "3")
    {
      datesNewProduct.delivered_by = 3;
    }

    if (this.valSelectAddProductDelivered == "4")
    {
      datesNewProduct.delivered_by = 4;
    }

    if (this.valSelectAddProductDelivered == "5")
    {
      datesNewProduct.delivered_by = 5;
    }

    datesNewProduct.produced_by = this.valInputAddProductProducer;
    datesNewProduct.category = this.valInputAddProductCategory;
    datesNewProduct.in_stock = true;
    datesNewProduct.path_image = this.pathImage;

    if ((this.valInputAddProductName != "") &&
      (this.valInputAddProductPrice != "") &&
      (this.valSelectAddProductDelivered != "") &&
      (this.valInputAddProductProducer != "") &&
      (this.valInputAddProductCategory != "") &&
      (this.valInputStock != ""))
    {
      this.arrayProducts.push(datesNewProduct);
      this.alertMessage = "";
    }
    else
    {
      this.alertMessage = "You must complete all the fields!";
      alertMessage_.style.color = "red";
      alertMessage_.style.textShadow = "1px 1px 1px red";
      alertMessage_.style.margin = "0rem";
      divModal_.style.border = "0.2rem solid red";
      divModal_.style.borderRadius = "0.5rem";
      return;
    }

    modalNewProduct_.style.display = "none";

    this.valInputAddProductId = "";
    this.valInputAddProductName = "";
    this.valInputAddProductPrice = "";
    this.valSelectAddProductDelivered = "";
    this.valInputAddProductProducer = "";
    this.valInputAddProductCategory = "";
    this.valInputStock = "";
  }

  fnChangeDeliveredOptions()
  {
    if (this.valSelectDeliveredOptions == "1")
    {
      this.arrayDelivery1 = this.arrayProducts1.filter((e: any) =>
      {
        if (e.delivered_by == this.valSelectDeliveredOptions)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayDelivery1;
    }

    if (this.valSelectDeliveredOptions == "2")
    {
      this.arrayDelivery2 = this.arrayProducts1.filter((e: any) =>
      {
        if (e.delivered_by == this.valSelectDeliveredOptions)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayDelivery2;
    }

    if (this.valSelectDeliveredOptions == "3")
    {
      this.arrayDelivery3 = this.arrayProducts1.filter((e: any) =>
      {
        if (e.delivered_by == this.valSelectDeliveredOptions)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayDelivery3;
    }

    if (this.valSelectDeliveredOptions == "4")
    {
      this.arrayDelivery4 = this.arrayProducts1.filter((e: any) =>
      {
        if (e.delivered_by == this.valSelectDeliveredOptions)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayDelivery4;
    }

    if (this.valSelectDeliveredOptions == "5")
    {
      this.arrayDelivery5 = this.arrayProducts1.filter((e: any) =>
      {
        if (e.delivered_by == this.valSelectDeliveredOptions)
        {
          return e;
        }
      });

      this.arrayProducts = this.arrayDelivery5;
    }
  }

}


