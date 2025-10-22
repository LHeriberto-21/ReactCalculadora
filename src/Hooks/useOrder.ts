import { useState } from "react";
import type { MenuItems, OrderItems } from "../Types";

export default function useOrder() {

	{/** Genericos en react: Inferimos desde el generico que tipo debe ser nuestro estado inicial*/ }
	const [order, setOrder] = useState<OrderItems[]>([]);
	const [tip, setTip] = useState(0);

	const addItem = (item: MenuItems) => {
		const itemExist = order.find(orderItem => orderItem.id === item.id)

		if(itemExist){
			const updateOrder = order.map(orderItem => orderItem.id === item.id ? 
				{...orderItem, quantity: orderItem.quantity + 1} : 
				orderItem 
			);
			setOrder(updateOrder)

		} else{
			const newItem : OrderItems = {...item, quantity: 1};
			setOrder([...order, newItem])
		}

	}

	const removeItem = (id: MenuItems['id'] ) =>{
		setOrder(order.filter(item => item.id !== id))
	}

	const placeOrder = () => {
		setOrder([]);
		setTip(0);
	}

	return {
		order,
		tip,
		setTip,
		addItem, 
		removeItem, 
		placeOrder
	}


}