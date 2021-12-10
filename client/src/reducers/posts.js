
const reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.posts;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
export default reducer