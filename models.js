const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const postSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['draft','published'],
        default:'draft'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
const Post=mongoose.model('Post', postSchema);
module.exports=Post;