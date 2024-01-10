
type Species = "dog" | "cat" | "fish"

type Pet = {
    specimen: Species,
    image: string,
    kind: string,
    color: string,
    sex: 'Masculino' | 'Feminino' 
}

const pets: Pet[] = [
    {   specimen: 'dog',
        image: 'pastor-alemao.jpg',
        kind: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {   specimen: 'dog',
        image: 'labrador.jpg',
        kind: 'Labrador-retriever',
        color: 'Branco',
        sex: 'Masculino'
    },
    {   specimen: 'dog',
        image: 'zwergspitz.jpg',
        kind: 'Zwergspitz',
        color: 'Amarelo',
        sex: 'Feminino'
    },
    {   specimen: 'dog',
        image: 'husky.jpg',
        kind: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Masculino'
    },
    {   specimen: 'dog',
        image: 'golden.jpg',
        kind: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {   specimen: 'dog',
        image: 'poodle.jpg',
        kind: 'Poodle',
        color: 'Branco',
        sex: 'Feminino'
    },
    {   specimen: 'dog',
        image: 'bulldog.jpg',
        kind: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'Masculino'
    },
    {   specimen: 'cat',
        image: 'persa.jpg',
        kind: 'Persa',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {   specimen: 'cat',
        image: 'mainecoon.jpg',
        kind: 'Maine Coon',
        color: 'Preto e Branco',
        sex: 'Masculino'
    },
    {   specimen: 'cat',
        image: 'bengal.jpg',
        kind: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        sex: 'Feminino'
    },
    {   specimen: 'cat',
        image: 'siames.jpg',
        kind: 'Siamês',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {   specimen: 'cat',
        image: 'sphynx.jpg',
        kind: 'Sphynx',
        color: 'Branco',
        sex: 'Masculino'
    },
    {   specimen: 'fish',
        image: 'neon.jpg',
        kind: 'Tetra Neon',
        color: 'Vermelho e Azul',
        sex: 'Masculino'
    },
    {   specimen: 'fish',
        image: 'matogrosso.jpg',
        kind: 'Mato Grosso',
        color: 'Laranja',
        sex: 'Masculino'
    },
    {   specimen: 'fish',
        image: 'limpavidro.jpg',
        kind: 'Limpa Vidro',
        color: 'Verde e Branco',
        sex: 'Masculino'
    },
    {   specimen: 'fish',
        image: 'tanictis.jpg',
        kind: 'Tanictis',
        color: 'Vermelho',
        sex: 'Masculino'
    },
    {   specimen: 'fish',
        image: 'acara.jpg',
        kind: 'Acará Bandeira',
        color: 'Preto',
        sex: 'Masculino'
    }
]

export const Pet = {
    getAll: (): Pet[] => {
        return pets
    },
    getSpecimen: (inserted: Species): Pet[] => {
        return pets.filter(item => item.specimen === inserted)
    },
    getKind: (inserted: string): Pet[] => {
        return pets.filter(
            item => item.kind.toLowerCase().indexOf(inserted.toLowerCase()) > -1
        )
    }
}
