const Post = require("../models/Post");

model.exports = resolvers  {
    Query: {
        async getPosts(){
            try{
                const posts = await Post.find();
                return posts;
            } catch (err) {
                throw new Error(err);
            }
        }
    }
};