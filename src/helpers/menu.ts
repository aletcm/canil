
type Menu = "" | "all" | "dog" | "cat" | "fish"

export const Menu = (active: Menu) => {

    let object = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if (active !== '') {

        object[active] = true
    }

    return object
}
