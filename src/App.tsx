import { useState } from 'react';

import './App.css'

import  {Item } from './components/Item';
import type {ItemData} from './components/Item';
import type {FormData} from './components/Form';

import {List} from './components/List';

import {Form} from './components/Form';
// import { Parent } from './components/Parent';

  const tasksData: ItemData[] = [
  {
     title: 'Příprava prezentace',
     description: 'Vytvořit prezentaci pro páteční meeting s klientem.',
     done: true
  },
  
  {
     title: 'Kontrola e-mailů',
     description: 'Projít doručenou poštu a odpovědět na důležité zprávy.',
     done: true
  },
  {
     title: 'Plánování kampaně',
     description: 'Naplánovat marketingovou kampaň na příští měsíc.',
     done: false
  },
  {
     title: 'Testování aplikace',
     description: 'Otestovat nové funkce a nahlásit případné chyby.',
     done: false
  }
];


function App() {
  const [tasks, setTasks] = useState<ItemData[]>(tasksData)



const handleFormSubmit = (newTasks: FormData) => {
  setTasks([
    {
      ...newTasks,
    done: false,
  },
    ...tasks,
  ])

}
 

  return (
    <> 

    {/* <Parent/> */}

    <Form onFormSubmit={handleFormSubmit}/>

     <Item
      title="Uklid kuchyn"
      description='Umyj nadobi, utri stul a povysavej a vytri podlahu'
      done={false}/>
    <Item
      title="Vyper spodni pradlo a rucniky"
      description='Dej spinave pradlo do pracky, nastav ji na 60 stupnu a po vyprani dej pradlo do susicky'
      done={true}/>

    <List title="Nové úkoly" items={tasks} />

   
    
    </>
  )
}

export default App
