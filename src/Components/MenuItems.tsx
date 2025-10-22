import { formatCurrency } from "../Helpers"
import type { MenuItems } from "../Types"
type MenuItemsProps = {
	item: MenuItems,
	addItem: (item: MenuItems) => void
}


export default function MenuItems({item, addItem}: MenuItemsProps) {
	return (
		<button
		className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
		onClick={() => addItem(item)}
		>
			<p>{item.name}</p>
			<p className=" font-black">{formatCurrency(item.price)}</p>
		</button>
	)
}
