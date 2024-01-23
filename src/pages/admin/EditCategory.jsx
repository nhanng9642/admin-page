import React, {useState, useEffect} from 'react'
import {CategoryForm} from '../../components/CategoryForm'

export function EditCategory() {
  const [categoryID, setCategoryID] = useState(null);

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    setCategoryID(id);
}, [])

  return (
    <CategoryForm categoryID={categoryID}/>
  )
}

export default EditCategory
