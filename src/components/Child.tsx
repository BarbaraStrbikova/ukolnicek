type ChildProps = {
  name:string;
  onHunger: (name: string) => void;
}


export function Child({name, onHunger}: ChildProps) {
  return (
    <div style={{border: '5px solid red', padding: 20, marginBlock: 10}}>
      <h2>Child: {name}</h2>

      <button onClick={() => {onHunger(name)}}>Mam hlad</button>

    </div>
  )
}