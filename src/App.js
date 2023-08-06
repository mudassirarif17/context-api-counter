
// If you want use the value of context you should import the hook which is useContext hook

import Item from "./components/Item"
import Cart from "./components/Cart"

// Here I am importing my Context
import "./App.css"


export default function App() {
  return (
    <div className='App'>
      <Item name="ThinkPad T470S" price={50000}/>
      <Item name="Pandrive" price={500}/>
      <Item name="Mobile" price={25000}/>
      <Cart/>
    </div>
  )
}
