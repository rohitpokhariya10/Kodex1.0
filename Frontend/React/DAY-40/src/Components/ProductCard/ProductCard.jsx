import React from 'react'
import './ProductCard.css'

const ProductCard = ({data}) => {
  console.log({data})

  return (
    <div className='wrapper'>
        <h2>Our Products</h2>
        <div className="product">
       { 
       data.map((elem , idx)=>{
        return <div  key= {idx}className="card">
            <div className="img">
                <img src={elem.image} alt={"Not Found"} />
            </div>
                <h3 className="heading">{elem.name}</h3>
                <h4 className="category" >{elem.category}</h4>
                <h2 className="price">{elem.price}</h2>
                <button>Add To Cart</button>
        </div>
       
       
        })
       }
    </div>
      
    </div>
  )
}

export default ProductCard