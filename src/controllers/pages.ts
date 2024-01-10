import { Request, Response } from "express"
import { Menu } from "../helpers/menu"
import { Pet } from "../models/Pet"

export const Home = (req: Request, res: Response) => {
    let list = Pet.getAll()

    res.render('main/home', {
        menu: Menu('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg' 
        },
        list
    })
}

export const Dogs = (req: Request, res: Response) => {
    let list = Pet.getSpecimen('dog')

    res.render('main/home', {
        menu: Menu('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg' 
        },
        list
    })
}

export const Cats = (req: Request, res: Response) => {
    let list = Pet.getSpecimen('cat')

    res.render('main/home', {
        menu: Menu('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg' 
        },
        list
    })
}

export const Fishes = (req: Request, res: Response) => {
    let list = Pet.getSpecimen('fish')

    res.render('main/home', {
        menu: Menu('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg' 
        },
        list
    })
}
