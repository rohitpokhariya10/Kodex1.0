const products = [
    {
        productName: "Apple iPhone 14 Pro",
        newPrice: 1199,
        oldPrice: 1299,
        description: "6.1-inch display, A16 chip.",
        image: "https://picsum.photos/id/1/600/400"
    },
    {
        productName: "Apple iPhone 13",
        newPrice: 799,
        oldPrice: 899,
        description: "Super Retina display, A15 chip.",
        image: "https://picsum.photos/id/20/600/400"
    },
    {
        productName: "Samsung Galaxy S23",
        newPrice: 999,
        oldPrice: 1099,
        description: "Fast performance with Snapdragon.",
        image: "https://picsum.photos/id/30/600/400"
    },
    {
        productName: "Google Pixel 7 Pro",
        newPrice: 899,
        oldPrice: 999,
        description: "Smooth camera performance.",
        image: "https://picsum.photos/id/40/600/400"
    },
    {
        productName: "OnePlus 11",
        newPrice: 699,
        oldPrice: 799,
        description: "120Hz display & fast charging.",
        image: "https://picsum.photos/id/50/600/400"
    },
    {
        productName: "Xiaomi 13 Pro",
        newPrice: 849,
        oldPrice: 949,
        description: "Great camera phone.",
        image: "https://picsum.photos/id/60/600/400"
    },
    {
        productName: "iPhone 12 Mini",
        newPrice: 599,
        oldPrice: 699,
        description: "Compact performance phone.",
        image: "https://picsum.photos/id/70/600/400"
    },
    {
        productName: "Samsung Galaxy Z Flip 5",
        newPrice: 1099,
        oldPrice: 1199,
        description: "Foldable screen phone.",
        image: "https://picsum.photos/id/80/600/400"
    },
    {
        productName: "Nothing Phone (2)",
        newPrice: 649,
        oldPrice: 749,
        description: "Funky transparent design.",
        image: "https://picsum.photos/id/90/600/400"
    },
    {
        productName: "Realme GT Neo 3",
        newPrice: 499,
        oldPrice: 599,
        description: "Fast charging & smooth UI.",
        image: "https://picsum.photos/id/100/600/400"
    }
];


//This function render the products
function renderProducts() {
    let sum = ''
    products.forEach((elem, idx) => {
        //console.log(elem)
        sum += `
         <div class="product">
                <img src="${elem.image}" alt="">
                <h2>${elem.productName}</h2>
                <div class="product-price">
                      <span class="new-price">${elem.newPrice}</span>
                      <span class="old-price">${elem.oldPrice}</span>
                </div>
                <div class="product-bottom">
                    <p>${elem.description}</p>
                    <i data-id=${idx} class="ri-poker-hearts-line"></i>
                </div>
                 <div class="buttons">
                   <button data-id=${idx} class="addToCart">
                Add To Cart
            </button>
        </div>
        
            </div>
 `

    })
    document.querySelector('.all-products').innerHTML = sum
}
renderProducts()

//Whenever user click on heart icon it turns into full heart
function likeProduct() {
    //event delegation concept used
    //document pure page ka parent hai-->like feature home me bhi same work kre & cart me bhi thats why we use document
    document.addEventListener('click', function (e) {
        // ri-poker-hearts-line--->empty heart
        //ri-poker-hearts-fill--->full heart
        const heart = e.target.closest('.ri-poker-hearts-line, .ri-poker-hearts-fill')

        if (heart) {
            //agar heart me kuch hai tuh hi if chalega
            //ON/OF feature
            heart.classList.toggle('ri-poker-hearts-line')
            heart.classList.toggle('ri-poker-hearts-fill')
        }

    })
}
likeProduct()



//Open cart
function goToCart() {
    const cartButton = document.querySelector('.ri-shopping-cart-2-line')
    const cartSection = document.querySelector('.cart-section')
    cartButton.addEventListener('click', () => {
        //console.log('clicked')
        document.querySelector('.all-products').style.display = 'none'//all-products div ki display hide kro 
        cartSection.style.display = 'flex'//cart-section dikhao sirf --> fir add to cart button pe click krke es section me cart items ayenge

    })
}
goToCart()

//Open Home
function goToHome(){
    const cartSection = document.querySelector('.cart-section')
    document.querySelector('.home').addEventListener('click', () => {
    cartSection.style.display = 'none'//cart section ki display htado (sirf home page dikhega )
    document.querySelector('.all-products').style.display = 'flex'//all-products div ki display none hogi use visible kro

})
}
goToHome()


//stores add to cart items only
let cart =[

]
//console.log(cart)  

function renderCartItem(){
let sum = ''
cart.forEach((elem , idx)=>{
 sum += `
   <div class="product">
                <img src="${elem.image}" alt="">
                <h2>${elem.productName}</h2>
                <div class="product-price">
                      <span class="new-price">${elem.newPrice}</span>
                      <span class="old-price">${elem.oldPrice}</span>
                </div>
                <div class="product-bottom">
                    <p>${elem.description}</p>
                    <i data-id=${idx} class="ri-poker-hearts-line"></i>
                </div>
                 
        </div>
        
            </div>
 `
})
 
const cartSection = document.querySelector('.cart-section')
cartSection.innerHTML = sum//cart-section me ye items dikhao
}

function addToCartFeature(){
    const allProducts = document.querySelector('.all-products')
    //event deledation
    allProducts.addEventListener('click' , (elem)=>{
        //console.log(elem.target.closest('.addToCart')  , elem)
        let clickedItem = elem.target.closest('.addToCart')
        console.log(clickedItem)
         //check
        if(!clickedItem){
           return
        }
        //agar add to cart buuton pe click kra ha i t
        
        //dataset always string return krta hai
        let id = Number(clickedItem.dataset.id)//jis product ke add to cart button pe click kra uski id milegi
        console.log(id)
        let selectedProduct = products[id]
        //console.log(selectedProduct)
        //console.log("before pushing product to cart" , cart)  
        cart.push(selectedProduct)
        //console.log(cart)
        renderCartItem()
       
     
    })

}
addToCartFeature()