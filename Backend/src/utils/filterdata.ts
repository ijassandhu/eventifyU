import jwt from "jsonwebtoken";

export const userFilter = (user: {
  id: string,
  username: string;
  email: string;
  userpassword: string;
  rollno?: number;
  phoneno?: string;
  userclass?: string;
}) => {
  // delete user['userpassword'];
  const { userpassword: string, ...FilteredUser } = user;
  FilteredUser['id'] = jwt.sign(user.id, process.env.authSecret as string);
  return FilteredUser;
};
