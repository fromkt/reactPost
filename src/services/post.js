import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com'
export function getPost(postId){
  return axios.get(`${url}/posts/${postId}`);

}

export function getComments(postId){
  return axios.get(`${url}/posts/${postId}/comments`);
}