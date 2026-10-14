import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { ChaiList } from './components/ChaiList'
import { Counter } from './components/Counter'
import { OrderForm } from './components/OrderForm'
import type { Chai } from './types'


const menu: Chai[] = [
  { id: 1, name: "Adrak Chai", price: 30 },
  { id: 2, name: "Modren Chai", price: 40 },
  { id: 3, name: "New Chai", price: 20 }
]

function App() {

  return (
    <>
      <div className="">
        React + TypeScript + Vite
      </div>

      <ChaiCard name="Masala Chai" price={5} isSpecial={true} />

      <Counter />

      <ChaiList items={menu} />

      <OrderForm
        onSubmit={(order) => {
          console.log("Order Placed", order.name, order.cups)
        }}
      />
    </>
  )
}

export default App
