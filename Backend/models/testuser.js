import {Schema, model} from "mongoose";

const schema = Schema({
  email: {
    required: true,
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

export default model("TestUser", schema)