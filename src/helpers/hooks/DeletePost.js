import { instance } from '../../api';

const DeletePost = (id) => { 
  if(id){
    try{
      instance.delete(`api/posts/${id}`)
        .then(response => {
          console.log(response);
        })
    }
    catch(error){
      console.log(error);
    }
  }
  else{
    window.location.replace(window.origin + "/")
  }
  
}

export {DeletePost}