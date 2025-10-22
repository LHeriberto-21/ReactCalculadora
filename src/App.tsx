import MenuItems from "./Components/MenuItems";
import OrderContents from "./Components/OrderContents";
import OrderTotal from "./Components/OrderTotal";
import TipPercentageForm from "./Components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./Hooks/useOrder";

export default function App() {

  const {order, tip, setTip, addItem, removeItem, placeOrder} = useOrder(); 


  return (
    <>
      <header className='bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-black'>
          Calculadora de propinas y consumo
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">

        <div className="p-5">
          <h2 className=" text-4xl font-black">
            Menú
          </h2>

          {/* Renderizacion de cada uno de los objetos dentro del componente de menuitems*/}
          <div
          className=" mt-10 space-y-3 "
          >
            {menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        
        <div 
        className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10"
        >
          {order.length  ? ( (
            <>
              <OrderContents
              order={order}
              removeItem={removeItem}

              />

              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />
              <OrderTotal
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          )) : (
            <p className=" text-center">La orden esta vacía</p>
          )}
          

        </div>
      </main>
    </>
  )
}

