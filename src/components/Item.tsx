import './Item.css';

export type ItemData = {
  title: string;
  description: string;
  done: boolean;

}

type ItemProps = ItemData

export const Item = ( {title, description, done} : ItemProps) => {
  return (
    <div className={`works ${done ? "done" : ""}`}>
      <h2><strong>{title}</strong></h2>
      <p> {description} </p>
      
    </div>
  )
}