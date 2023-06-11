export const createPost = async (req, res) => {
  try {
    console.log(req.body);
    res.json("i have recieved your data");
  } catch (error) {
    console.log(error);
  }
};
