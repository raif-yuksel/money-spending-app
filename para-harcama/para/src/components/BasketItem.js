import {useState} from 'react'
import './Basket.css'

function BasketItem({item, product}) {
	return (
		<>
			<li className="basket-item">
				{product.title} <span>x {item.amount}</span>
			</li>
		</>
	)
}

export default BasketItem