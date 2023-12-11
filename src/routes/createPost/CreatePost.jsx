import React from 'react'
import { useEffect, useState } from 'react'
import GetCategory from './../../helpers/hooks/GetCategory';
import { instance } from '../../api';
import { toast } from 'react-toastify';

const CreatePost = () => {

  const [name, setName] = useState("")
  const [img, setImg] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("")

  const handleCreatePost = (e) => {
    e.preventDefault();
    instance.post("/api/posts/",
     {
        "title" : name,
        "image" : img,
        "description" : desc,
        "category" : category
      })
      .then(response => {
        if(response.status === 201){
          toast.success('You registered succesfully');
          console.log(response);
        }
      })
      .catch(error => {
       console.log(error);
       toast.error(error.response.data.message)
      })

  }
  return (
    <>
      <div className="create__post">
        <h2>Create New Post</h2>
        <hr />
        <form onSubmit={handleCreatePost}>
          <label htmlFor="title"> Post Title</label>
          <input type="text" required name='title' value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="image">Post Image Link</label>
          <div>
            <input type="url" required name='image' value={img} onChange={(e) => setImg(e.target.value)} />
            <select defaultValue={0} onChange={(e) => setCategory(e.target.value)}>
              <option value="0"  disabled hidden>Select Post Category</option>
              <GetCategory />
            </select>
          </div>
          <label htmlFor="desc">Description</label>
          <textarea name='desc' required value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
          <button type='submit'>Create Post</button>
        </form>
      </div>
    </>
  )
}

export default CreatePost