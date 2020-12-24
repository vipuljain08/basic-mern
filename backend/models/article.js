import mongoose from "mongoose"

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    articleText: {
        type: String,
        required: true
    },
    likesCount: {
        type: Number
    }
}, { timestamps: true })

const Article = mongoose.model("Article", articleSchema)
export default Article