import express from "express"
const router = express.Router()

import articleController from '../controllers/article.js'

router.get('/', articleController.loadArticles)
router.post('/create-article', articleController.createArticle)
// router.post('/:id/act', articleController.handleLikes)
router.put('/like', articleController.handleLikes)

export default router