export const register = async (req, res) => {
   const {
    userName,
    email,
    password
   } = req.body;
   res.status(200).json({userName,email,password})
};
