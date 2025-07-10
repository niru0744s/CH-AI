const mongoose = require("mongoose");
const newSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
     profilePic: {
      type: String,
      default: '',
    },
     status: {
      type: String,
      enum: ['online', 'offline', 'busy'],
      default: 'offline',
    },
    socketId: {
      type: String,
      default: '',
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String,
        default:""
    }
},{
    timestamps:true
});

module.exports = mongoose.model("User",newSchema);

