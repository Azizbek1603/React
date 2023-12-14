import { instance } from '../../api';
const DeletePost = (id) => { 
  let postId = localStorage.getItem("posts").split(",")
  console.log(postId);
  if(id){
    try{
      instance.delete(`api/posts/${id}`)
        .then(response => {
          console.log(response);
          if(response.status === 204){
            alert("this post deleted successfully")
          }
        })
    }
    catch(error){
      console.log(error);
    }
  }
  else{
    // window.location.replace(window.origin + "/")
  }
  
}

export {DeletePost}