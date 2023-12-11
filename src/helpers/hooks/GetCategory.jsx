import React from 'react'
import { instance } from '../../api'
import { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
const GetCategory = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        const data = async () =>{
          try{
            const response = await instance("api/categories");
            setCategory(response.data.data);
           }
           catch(error){
            console.log(error);
           }
        }  
        data()  
    }, [])
  return (
    <>
        {
            category.map(categories => 
                <option id={categories._id} key={categories._id} value={categories._id}>{categories.title}</option>
            )
        }
    </>
  )
}

export default GetCategory