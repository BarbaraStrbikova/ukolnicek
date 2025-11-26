import { useState } from 'react';

import { Child } from './Child';

export function Parent() {

  const [hungryChildren, setHungryChildren] = useState<string[]>([])


  const handleHunger = (name: string) => {
    console.log(`${name} ma hlad`)
    setHungryChildren ([
      ...hungryChildren,
      name
    ])
  }

  return (
    <div style={{border: '5px solid dodgerblue', padding: 20}}>
      <h2>Parent</h2>

      <ul>
        {hungryChildren.map((name, index) => <li key={index}>{name}</li>)}
      </ul>

      <Child name="Alenka" onHunger={handleHunger}/>
      <Child name="Jenda" onHunger={handleHunger}/>
    </div>
  )
}