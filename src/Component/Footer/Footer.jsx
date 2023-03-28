import React from 'react'
import "./Footer.scss"
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessoroies</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>Sunt consequat reprehenderit eiusmod eiusmod culpa. Id ipsum laborum aliqua adipisicing occaecat pariatur duis sit nostrud Lorem ipsum tempor. Magna ipsum est deserunt esse incididunt excepteur elit dolore excepteur laborum sint culpa. Irure anim excepteur aute magna duis est pariatur ad anim sunt aliqua cillum. Deserunt exercitation incididunt veniam elit aute aute fugiat eiusmod minim. Occaecat id voluptate irure voluptate eu voluptate ex voluptate eu. Quis laboris laborum eu Lorem magna ullamco pariatur esse aliquip.</span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>Aliquip aliqua aliqua cupidatat magna eu ea ex aute commodo adipisicing ea et adipisicing sunt. Velit cillum consectetur commodo occaecat deserunt do pariatur fugiat. Qui enim sint commodo laboris Lorem aliquip aute deserunt cupidatat mollit magna mollit.</span>
           </div>
        </div>
        <div className="buttom">
            <div className="left">
                <span className="logo">B.H Store</span>
                <span className="copyright">Copyright 2023. All Rights Reserved</span>
            </div>
            <div className="right">
                <img src="/img/payment.png " alt="" />
            </div>
        </div>
    </div>
  )
}
