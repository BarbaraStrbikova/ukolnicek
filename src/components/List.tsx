import { Item } from "./Item";
import type { ItemProps } from "./Item";


export interface ListProps {
  title: string;
  items: ItemProps[];
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
        done={item.done}
        />
      ))}
    </div>
  )

}