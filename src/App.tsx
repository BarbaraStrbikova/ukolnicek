
import { useState } from 'react';
import './App.css'

import  {Item } from './components/Item';
import type{ ItemProps } from './components/Item';

import {List} from './components/List'

function App() {

  const[tasks, setTasks] =  useState<ItemProps[]> ([
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
]);
 

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

    <List title="Nové úkoly" items={tasks}/>

    
    </>
  )
}

export default App
