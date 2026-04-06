//All items stored here
let currentInventory = [
  
   
];
// Get data from localStorage using key "inventoryData"
let storedData = localStorage.getItem("inventoryData");

// Check if data exists in localStorage
if (storedData) {
    
    // Convert JSON string data back into JavaScript object/array
    currentInventory = JSON.parse(storedData);
    
    // Call function to display items on the screen
  renderItems()
}


//Ye batayega ki abhi edit mode me ho ya nahi.
let editIndex = null

//Ui render function
function renderItems(){
let sum = ''//ek-ek product ka HTML string bana ke isme add karenge.
currentInventory.forEach((elem , idx)=>{
    console.log(elem.productId)
 sum += `
   <div class="products">
  <div class="products-header">
    <h2>${elem.name}</h2>
   
    <div class="products-actions">
      <button class="btn-edit" data-id=${idx}>
        <i class="ri-pencil-line" data-id=${idx}></i> Edit
      </button>
      <button class="btn-delete" data-id=${idx}>
        <i class="ri-delete-bin-6-line"  data-id=${idx}></i>
      </button>
    </div>
  </div>
  <h3>Product id : ${elem.productId}</h3>
  <h3>Prize : ${elem.price}</h3>
  <h5>Quantity : ${elem.quantity}</h5>
  <h5>Supplier Name : ${elem.supplier}</h5>
  <h6>Expiry date : ${elem.expiry}</h6>
</div>`
     
})
 const products = document.querySelector('.all-products')     
 products.innerHTML=sum  //.all-products div me sare product daldo 
 //local Storage me save krdie Inventory Items
 localStorage.setItem("inventoryData" ,  JSON.stringify(currentInventory))  
}




const form = document.querySelector('form')
//Form handling
form.addEventListener('submit', (elem)=>{
elem.preventDefault()//stop page reloading
const input = form.querySelectorAll('input')
//console.log(input)

//ek new object bnayenge usme input ki values dalenge fir es object kocurrentInventory me push krenge
    let newItem = {
        name:input[0].value,
        productId:input[1].value,
        price:input[2].value,
        quantity:input[3].value,
        supplier:input[4].value,
        expiry:input[5].value
      
    }
    // /: Form Submit me Condition Lagao
    //input ki sari values ko object me dalenhge
     if(editIndex == null){
      //means edit nhi krre hai sird item ko inventory me ad dkiya
        currentInventory.push(newItem)
     }
     else{
      currentInventory[editIndex] = newItem
      editIndex=null
     }

   // alert(`${input[0].value} added to inventory...`)//a popup message which indicate item is added tu the inventory
    //console.log(currentInventory)
    renderItems()//currentInventory me  new items add hue hunge tuh ui ko rerender karo
    form.reset()//form ke andar ki sar input fields empty ho jayegi submit ke baad
  
})



// DELETE FEATURE (Using Event Delegation)
function deleteItem(){
    // Select parent container that holds all products --> esi ko event delegation bole hai
    const products = document.querySelector('.all-products');

    // Attach ONE event listener to parent (Event Delegation)
    products.addEventListener('click', (event)=>{

        // Check if the clicked element (or its parent) has the class 'btn-delete'
        const deleteBtn = event.target.closest('.btn-delete');

        // If click was NOT on delete button, stop execution --> es function se bahar chle jao
        if(!deleteBtn) return;

        // Get index stored inside data-id attribute
        // dataset.id always returns a STRING
        const index = Number(deleteBtn.dataset.id);//because humne delete button ko data-id=${idx} di hai

        // Remove item from array using splice
        // splice(index, 1) → remove 1 item from that index
        currentInventory.splice(index, 1);

        // Re-render UI after deleting item
        renderItems();
    });
}

// Call function once to activate delete listener
deleteItem();


function editItem(){
    const products = document.querySelector('.all-products');

    products.addEventListener('click', (elem)=>{
      //console.log(elem.target)
      const editBtn = elem.target.closest('.btn-edit')
      //user ne ediBtn me click nhi kra tuh bahar chle jao es block ke
      if(!editBtn){
        return
      }
     // console.log(editBtn)
      const id = Number(editBtn.dataset.id)
     // console.log(id)
   // console.log( currentInventory[0])
     const editItem = currentInventory[id]//es item ko me edit krunga
    // console.log(editItem)

    const inputs = form.querySelectorAll('input')

    console.log(inputs)
    //ab form ke input me editItem ki details ajayengi
    inputs[0].value = editItem.name;
    inputs[1].value = editItem.productId;
    inputs[2].value = editItem.price;
    inputs[3].value = editItem.quantity;
    inputs[4].value = editItem.supplier;
    inputs[5].value = editItem.expiry;

    editIndex = id//kis item ko edit kar rhe hai vo updae  
    })
}
editItem()

