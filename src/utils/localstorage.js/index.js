const KEY = "SKEY";
const getData = () => {
  return JSON.parse(localStorage.getItem(KEY));
};
const addData = (data) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};
export const storeDataToLocalStorage = (data) => {
  addData(data);
};
export const getDataFromLocalStorage = (data) => {
  return getData();
};
export const storeComments = (id, newComments) => {
  let { comments, posts } = getData();
  comments[id] = newComments;
  addData({ comments: comments, posts: posts });
};
export const storePosts = (code) => {
  let { comments, posts } = getData();
  let index = posts.findIndex((post) => post.code === code);
  if (index >= 0) posts[index].likes++;
  addData({ comments: comments, posts: posts });
};
