import React, { useEffect, useState } from 'react'
import { getAllCategory } from '../../../api/category'
import { ICategory } from '../../../interface/category'

type Props = {}

const CategoryPage = (props: Props) => {
  const [category, setCategory] = useState<ICategory[]>([])
  useEffect(()=>{
    getAllCategory().then(({data})=> setCategory(data))
  },[])
  // const onClickCat = (id: number|string) =>{
  //   for (let btn of btns) {
  //     btn.addEventListener("click", function () {
  //         const id = btn.dataset._id;
  //         onClick(id);
  //     });
  // }
  // }
  return (

    <div>
      {category.map((item: ICategory) =>(
        <button onClick={()=>console.log(item._id)}>{item.name}</button>
      ))}
    </div>
  )
}
export default CategoryPage