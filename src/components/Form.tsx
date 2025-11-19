import { useState } from 'react';

type FormData = {
  title: string;
  description: string;
}


export function Form () {
 const [formData, setFormData] = useState<FormData>({
  title: '',
  description: '',
})

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log('odeslano', formData)
  
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
  setFormData({
    ...formData,
    [e.target.name] : e.target.value,
     })
     console.log(formData)
}


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Zadej nazev úkolu</label>
      <input value={formData.title} type="text" id='title' name="title" onChange={handleChange}/>
      <label htmlFor="description">Zadej popis  úkolu</label>
      <textarea value={formData.description} id='description' name="description" onChange={handleChange} /> 
      <button type="submit">Přidat</button>

    </form>
  )
}