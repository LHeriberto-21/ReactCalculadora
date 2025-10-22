export type MenuItems = {
      id: number,
      name: String,
      price: number
}

export type OrderItems = MenuItems & {
      quantity: number
}