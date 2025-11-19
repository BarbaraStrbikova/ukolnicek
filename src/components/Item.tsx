import './Item.css';

export interface ItemProps {
  title: string;
  description: string;
  done: boolean;

}

export const Item = ( {title, description, done} : ItemProps) => {
  return (
    <div className={`works ${done ? "done" : ""}`}>
      <h2><strong>{title}</strong></h2>
      <p> {description} </p>
      
    </div>
  )
}