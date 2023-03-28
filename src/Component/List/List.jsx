import React from 'react'
import "./List.scss"
import { Card } from '../Card/Card'
const List = () => {
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
        {
            id:5,
            img:"https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2:"https://images.pexels.com/photos/2860744/pexels-photo-2860744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title:"jazz",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:6,
            img:"https://images.pexels.com/photos/1358817/pexels-photo-1358817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2:"https://images.pexels.com/photos/2860744/pexels-photo-2860744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title:"jazz",
            isNew:true,
            oldPrice:19,
            price:12,
        },
    ]
  return (
    <div className='list'>{data.map(item=>(
        <Card  item={item} key={item.id} />
    ))}</div>
  )
}

export default List