import { Item } from "./Item";
import type { ItemData } from "./Item";


type ListProps = {
  title: string;
  items: ItemData[];
}



export const List = ( {title, items} : ListProps) => {

  return (
    <div>
      <h2>{title}</h2>
      {items.map ((item) => (
        <Item 
        key={item.title}
        title={item.title}
        description={item.description}
        done={item.done ?? false}
        />
      ))}
    </div>
  )

}