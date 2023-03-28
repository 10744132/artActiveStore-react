import React from 'react'
import "./FeatureProducts.scss"
import { Card } from '../Card/Card'
export const FeatureProducts = ({type}) => {

    const data =[
        {
            id:1,
            img:"https://images.pexels.com/photos/1358817/pexels-photo-1358817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2:"https://images.pexels.com/photos/2860744/pexels-photo-2860744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title:"jazz",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/3331904/pexels-photo-3331904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title:"sax",
            isNew:false,
            oldPrice:19,
            price:12,
        },        
        {
            id:3,
            img:"https://images.pexels.com/photos/2228466/pexels-photo-2228466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title:"jazz",
            isNew:true,
            oldPrice:19,
            price:12,
        },    
        {
            id:4,
            img:"https://images.pexels.com/photos/2350325/pexels-photo-2350325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title:"jazz",
            isNew:false,
            oldPrice:19,
            price:12,
        },
    ]
  return (
    <div className='featureProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Deserunt veniam amet cillum dolore non non voluptate consequat laborum. Labore sint nisi cillum anim esse aliqua veniam ipsum reprehenderit deserunt fugiat Lorem ad. Commodo cupidatat voluptate ipsum voluptate commodo dolore velit officia esse dolore ullamco ad. Est id anim adipisicing in. Excepteur deserunt officia sit anim ex elit. Et non incididunt eiusmod aliquip. Nulla anim aliqua tempor quis laboris irure dolor ex.</p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} id={item.id}/>
                 )                
            )}
        </div>
    </div>
  )
}
