import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
function Product() {
  const [quantity ,setQuantity] =useState(1)
  const [selectImage, setSelectImage] =useState(0)
  const images=[
    "https://images.pexels.com/photos/2228466/pexels-photo-2228466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2350325/pexels-photo-2350325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
            <img src={images[0]} alt=""  onClick={e=>{setSelectImage(0)}}/>
            <img src={images[1]} alt=""  onClick={e=>{setSelectImage(1)}}/>
        </div>
        <div className="mainImg">
          <img src={images[selectImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>title</h1>
        <span className='price'>$199</span>
        <p>Est cupidatat officia amet magna adipisicing pariatur laboris enim nulla. Ipsum non in et mollit eu reprehenderit quis ea laborum nostrud et anim laboris nisi. Adipisicing exercitation elit sunt tempor veniam veniam et exercitation minim fugiat commodo. Labore aliqua proident cillum ullamco. Duis veniam ut eiusmod nostrud velit eu quis ipsum eiusmod elit. Anim velit exercitation officia mollit consectetur commodo officia. Aute labore minim voluptate ipsum minim dolore consectetur irure voluptate amet.</p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev===1 ? 1 : prev-1)} >-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1) }>+</button>
        </div>
        <button className="add">
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <div className="line"></div>
            <div className="info">
              <span>DESCRIPTION</span>
              <div className="line"></div>
              <span>ADDITIONAL INFORMATION</span>
              <div className="line"></div>
              <span>FAQ</span>
            </div>
      </div>
    </div>
  )
}

export default Product