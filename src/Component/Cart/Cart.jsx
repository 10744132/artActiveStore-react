import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
    const data =[
        {
            id:1,
            img:"https://images.pexels.com/photos/1358817/pexels-photo-1358817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2:"https://images.pexels.com/photos/2860744/pexels-photo-2860744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title:"jazz",
            desc:"Sint laborum veniam minisdsdsd sdsdlk sdskjdlm et.",
            isNew:true,
            oldPrice:19,
            price:102,
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/3331904/pexels-photo-3331904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title:"sax",
            desc:"Magna ullamco fugiat exercitation nisi laborum officia.",
            isNew:false,
            oldPrice:19,
            price:199,
        }, 
    ]
  return (
    <div className='cart'>
        <h1>Prodcut in you Cart</h1>
        {data?.map((item)=>(
            <div className="product" key={item.id}>
            <img src={item.img} alt="" />
            <div className="content">
                <h3 className="name">{item.title}</h3>
                <p className="info">{item.desc.substring(0,100)}</p>
                <span>1x${item.price}</span>
            </div>
            
            <div className="icon"><DeleteOutlinedIcon/></div>
        </div>
        ))}
        <div className='subtatal'>
            <h2>Subtotal</h2>
            <span> $ 222</span>

        </div>
        <button className='check'>Product to Checkout</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart