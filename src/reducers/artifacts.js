// eslint-disable-next-line import/no-anonymous-default-export
export default (artifacts = [], action) => {
  switch (action.type) {
    case "DELETE":
      return artifacts.filter((artifact)=> artifact._id !== action.payload);
    case "UPDATE":
        return artifacts.map((artifact)=> artifact._id === action.payload._id ? action.payload : artifact);
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...artifacts, action.payload];
    default:
      return artifacts;
  }
};
