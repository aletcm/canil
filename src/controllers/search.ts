import { Request, Response } from "express"
import { Menu } from "../helpers/menu"
import { Pet } from "../models/Pet"

export const Search = (req: Request, res: Response) => {
    let search: string = req.query.details as string

    if (!search) {
        res.redirect('/')
        return
    }

    let list = Pet.getKind(search)

    res.render('main/home', {
        menu: Menu(''),
        list,
        search
    })
}
