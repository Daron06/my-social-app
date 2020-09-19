export const addPosts = (posts) => ({
  type: 'ADD_POSTS',
  payload: posts,
});

export const deletePosts = (index) => ({
  type: 'DELETE_POSTS',
  payload: index,
});
