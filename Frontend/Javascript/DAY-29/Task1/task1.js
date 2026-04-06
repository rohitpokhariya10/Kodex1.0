const cars = [
    {
        carname: "Swift",
        brand: "Maruti Suzuki",
        price: "₹5.79 Lakh – ₹8.79 Lakh",
        images: "https://i.pinimg.com/1200x/af/7d/28/af7d281da019435a720bf9e239ee4892.jpg",

        engine: "1.2L Z-Series Petrol Engine (1197cc) | 82 bhp | 112 Nm Torque",
        colors: ["Pearl Arctic White", "Sleek Silver", "Midnight Blue", "Fire Red", "Mineral Grey"],
        mileage: "24.8 – 25.75 kmpl",
        cartype: "Hatchback",
        parent_company: "Maruti Suzuki",
        fuel_options: ["Petrol", "CNG"],
        pros: ["High fuel efficiency", "Low maintenance", "Affordable", "Good resale value", "Easy city driving"],
        cons: ["Limited rear space", "Basic boot space", "Less premium interior"]
    },

    {
      carname: "i20",
      brand: "Hyundai",
      price: "₹6.86 Lakh – ₹10.52 Lakh",
     images:"../i20.png",
      engine: "1.2L Kappa Petrol Engine (1197cc) | 82 bhp | 114 Nm Torque",
      colors: ["Aqua Turquoise","Polar White","Phantom Black","Typhoon Silver","Fiery Red"],
      mileage: "16 – 20 kmpl",
      cartype: "Premium Hatchback",
      parent_company: "Hyundai Motor India",
      fuel_options: ["Petrol"],
      pros: ["Premium interior","Good features","Comfortable ride","Refined engine","Modern design"],
      cons: ["Expensive top variant","No diesel","Average resale"]
    },

    {
      carname: "Nexon",
      brand: "Tata",
      price: "₹7.32 Lakh – ₹14.15 Lakh",
      images: "https://i.pinimg.com/1200x/54/8e/96/548e96d31b869be94640d6b7ee08e5ca.jpg",
      engine: "1.2L Turbo Petrol (1199cc) | 118 bhp | 170 Nm OR 1.5L Diesel (1497cc) | 113 bhp | 260 Nm",
      colors: ["Calypso Red","Pure White","Atlas Grey","Sapphire Blue","Solar Yellow"],
      mileage: "17 – 24 kmpl",
      cartype: "Compact SUV",
      parent_company: "Tata Motors",
      fuel_options: ["Petrol","Diesel"],
      pros: ["5-star safety","Strong build","Good road presence","Feature loaded","Value for money"],
      cons: ["Top variants costly","Infotainment average","Diesel maintenance higher"]
    },

    {
      carname: "Thar",
      brand: "Mahindra",
      price: "₹9.99 Lakh – ₹17.19 Lakh",
      images: "https://i.pinimg.com/736x/66/90/e8/6690e8dc48f90bdd3d49f098475f0f55.jpg",
      engine: "2.0L mStallion Turbo Petrol (1997cc) | 150 bhp | 300 Nm OR 2.2L mHawk Diesel (2184cc) | 130 bhp | 300 Nm",
      colors: ["Galaxy Grey","Molten Red","Pearl White","Mystic Copper","Aqua Marine"],
      mileage: "8 – 15 kmpl",
      cartype: "Off-road SUV",
      parent_company: "Mahindra & Mahindra",
      fuel_options: ["Petrol","Diesel"],
      pros: ["Best off-road","Rugged look","High ground clearance","Powerful engine","Strong build"],
      cons: ["Low mileage","Rear comfort limited","Not ideal for city daily use"]
    },

    {
      carname: "City",
      brand: "Honda",
      price: "₹11.95 Lakh – ₹16.07 Lakh",
      images:"../hundai.png",
      engine: "1.5L i-VTEC Petrol (1498cc) | 119 bhp | 145 Nm Torque",
      colors: ["Obsidian Blue","Radiant Red","Platinum White","Meteoroid Grey","Lunar Silver"],
      mileage: "17.8 – 18.4 kmpl",
      cartype: "Sedan",
      parent_company: "Honda Cars India",
      fuel_options: ["Petrol"],
      pros: ["Spacious","Reliable engine","Premium feel","Good resale","Smooth CVT"],
      cons: ["Expensive","No diesel","Low ground clearance"]
    }
];


const card = document.querySelector('main')
let sum = ''
cars.forEach((elem) => {
    sum += `
 <div class="car-card">
        <img src =${elem.images} alt="">

        <div class="div2">
           <h2>${elem.carname}<span>(${elem.cartype})</span></h2>
           <h3>${elem.parent_company}</h3>
           <h4>${elem.mileage}</h4>
           <h5>mielage</h5>

            <div class="fuel-options">
            <h5>${elem.fuel_options[0]}</h5> 
           
           </div>
          
           <div class="colors">
            <div>
             "${elem.colors}"
            </div>
             <div>
             "${elem.colors}"
            </div>
             <div>
             "${elem.colors}"
            </div>
             <div>
             "${elem.colors}"
            </div>
             <div>
             "${elem.colors}"
            </div>
             <p>+4</p>
           </div>
        </div>

        <div class="div3">
            <h3 class="pros">pros -</h3>
            <div>
                <p>${elem.pros[0]}</p>
                <p>${elem.pros[1]}</p>
                <p>${elem.pros[2]}</p>
               
            </div>
            <h3 class="cons">cons -</h3>
            <div>
                <p>${elem.cons[0]}</p>
                <p>${elem.cons[1]}</p>
                <p>${elem.cons[2]}</p>
               
            </div>
        </div>
       </div>
 `

    card.innerHTML = sum
})