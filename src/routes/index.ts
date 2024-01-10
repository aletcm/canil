import { Router } from "express"
import * as Pages from "../controllers/pages"
import { Search } from "../controllers/search"

const router = Router()

router.get('/', Pages.Home)
router.get('/dogs', Pages.Dogs)
router.get('/cats', Pages.Cats)
router.get('/fishes', Pages.Fishes)

router.get('/search', Search)

export default router
