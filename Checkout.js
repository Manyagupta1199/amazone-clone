import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const[{basket}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/Nov/MEDH_SWM_1500x200.jpg" alt="" />
                <div>
                    <h2 className='checkout__title'>
                        Your Shopping Basket </h2>

                        {basket.map(item =>(
                            <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            />
                        
                        ))}
                </div>
            </div>
            <div className='ckeckout__right'>
                <Subtotal/>
                
            </div>
        </div>
    );
}

export default Checkout;
