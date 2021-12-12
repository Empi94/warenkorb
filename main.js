//autor Mateusz Pryszmont

const addProducts = document.querySelector(".products");
const productsInCart= document.querySelector(".productsInCart"); 
const toPay = document.querySelector(".toPay");
const withDiscount = document.querySelector(".afterDiscount");
const checkDiscount = document.querySelector(".discount");
const draw = document.querySelector(".draw");
const payButton = document.querySelector(".payButton")

// Products Klasse
class Products{
    constructor(id,productName,price,img,total,){
        this.id=id;
        this.productName=productName;
        this.price=price;
        this.img =img;
        this.total = total;
        

    }
    
}

// Warenkorb Klasse
class Carts{
    constructor(cartTotal,discount,totalDiscount){
      this.cartTotal=cartTotal;
      this.discount=discount;
      this.totalDiscount=totalDiscount;
    }
  }

  //Objekt Warenkorb
  const Cart = new Carts();
  // Produkte
  const products =[

    new Products(0,"Gift1",10,"./img/item1.png",10),
    new Products(1,"Gift2",15,"./img/item2.png",15),
    new Products(2,"Gift3",20,"./img/item3.png",20),
    new Products(3,"Gift4",25,"./img/item4.png",25,true),
] 

//Produkte Erstellungsfunktion
function addProduct() {
    products.forEach((product) => {
        addProducts.innerHTML += `
      <div class="items">
      <div class="item">
                   <img src="${product.img}" alt="${product.productName}">
               <div class="description">
                   <p>${product.productName}</p>
                   <p>€ ${product.price}</p>
                   <button class="addToCart" onclick="setTimeout(addToCart(${product.id}),1400)">Hinzufügen</button>
                   </div>
                   </div>
                   </div>
          `;
    });
  }
  addProduct();
  // funktion die aktualiesiert den warenkorb
  function updateCart() {
    addCart();
    payment();
    totalCart();
  
  }

// funktion die fügt die Produkte zum Warenkorb hin

  let basket = [];
updateCart();
function addToCart(id) {
 
  if (basket.some((item) => item.id === id)) {
    basket = basket.map((item) => {
        
        let amount = item.amount;
        let price = item.price;
        let total = item.total;
        if(item.id===id ){
            
    amount++;
    total=price*amount;

     
        
        return {
          ...item,
          amount,
          total,
        };
    }
        });
    }
       else {
    const item = products.find((product) => product.id === id);

    basket.push({
      ...item,
      amount:1,
      total:item.total,
        
    });
  }

  updateCart();
}

// funktion die den Warenkorb erstellt
function addCart() {
    productsInCart.innerHTML = "";
    basket.forEach((item) => {
      productsInCart.innerHTML += `
      <div class="cartItems">
      <div class="cartItem">
               <div class="descriptionCart">
               <img src="${item.img}" alt="${item.productName}">    
               <p>${item.price} €</p>
                   <p class="total">
                   <i id="left" class="fas fa-arrow-alt-circle-left" onclick="changeAmount('minus', ${item.id})"></i>
                   ${item.amount}
                   <i class="fas fa-arrow-alt-circle-right" onclick="changeAmount('plus', ${item.id})"></i>
                   </p>
                   
                   <p> ${item.total} €</p>
                   <i id="delete" class="fas fa-minus-square" onclick="deleteItem( ${item.id})"></i>
                   </div>
                   </div>
                   </div>
        `;
    });
  }

  //funtion die ändert der Anzahl von Produkten im Warenkorb
  function changeAmount(change, id){
    basket = basket.map((item)=>{
        let amount = item.amount
        let price = item.price;
        let total = item.total;
        if(item.id===id && amount>=1){
            
                if(change==='plus'){
                    amount++;
                    total=price*amount;
            }
else if((change ==='minus') && amount>1){
    amount--;
    total=price*amount;
}
        
    };
    return {
        ...item,
        amount,
        total,
      };
    });
    updateCart()
  }
  //funktion die entfernt Produkt aus dem Warenkorb
  function deleteItem(id) {
    basket = basket.filter((item) => item.id !== id);
  
    updateCart();
  };
  updateCart()
  //funktionen die Zahlung bedienen
  function payment() {
    let totalPrice = 0;
    basket.forEach((item) => {
      totalPrice += item.price * item.amount;
      
    });
    
    toPay.innerHTML=`${totalPrice} €`;
  return Cart.cartTotal =totalPrice;
  };
  //funktion die Rabatt generiert
  function discountGenerator(){
    const discountNames=["Gutschein 15%" ,"5€ Gutschein", "Gutschein 30%","10€ Gutschein","Gutschein 50%","15€ Gutschein","Gutschein 75%","20€ Gutschein"];
    const index =Math.floor(Math.random() * discountNames.length);
  checkDiscount.textContent = `${discountNames[index]}`;
      Cart.discount= index;
      updateCart();
      return  Cart.discount;
  
  }
  // funktion die Rechnet Kosten mit Rabatt zusammen
  function totalCart(){
   let afterDiscount=Cart.discount;
  switch(Cart.discount){
    case 0:
      afterDiscount=Cart.cartTotal-(Cart.cartTotal*(1.5/10));
      break;
      case 1:
      afterDiscount=Cart.cartTotal-5;
      break;
      case 2:
        afterDiscount=Cart.cartTotal-(Cart.cartTotal*(3.0/10));
        break;
        case 3:
      afterDiscount=Cart.cartTotal-10;
      break;
        case 4:
          afterDiscount=Cart.cartTotal-(Cart.cartTotal*(5/10));
          break;
          case 5:
      afterDiscount=Cart.cartTotal-15;
      break;
          case 6:
            afterDiscount=Cart.cartTotal-(Cart.cartTotal*(7.5/10));
            break;
            case 7:
              afterDiscount=Cart.cartTotal-20;
              break;
              default:
                checkDiscount.textContent ="Kein Gutschein";
                afterDiscount=Cart.cartTotal;
              break;}
  withDiscount.innerHTML=`${afterDiscount} €`;
  Cart.totalDiscount=afterDiscount;
  return Cart.totalDiscount;
  }
  
   draw.addEventListener("click",discountGenerator);
   payButton.addEventListener("click",() =>{
  alert("Danke für Ihr Einkauf")
   })