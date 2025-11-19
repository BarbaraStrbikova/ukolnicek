
import './App.css'

import  {Item } from './components/Item';

function App() {
 

  return (
    <>
      <Item
      title="Uklid kuchyn"
      description='Umyj nadobi, utri stul a povysavej a vytri podlahu'
      done={false}/>
    <Item
      title="Vyper spodni pradlo a rucniky"
      description='Dej spinave pradlo do pracky, nastav ji na 60 stupnu a po vyprani dej pradlo do susicky'
      done={true}/>

     
    </>
  )
}

export default App
