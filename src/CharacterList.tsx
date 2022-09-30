import React from 'react'

export type Character = {
    id: number
    name: string
    grade: number
    height?: number
}

type Props = {
    school: string
    characters: Character[]
}

const CharacterList: React.FC<Props> = (props) => {
    const { school, characters } = props

    return (
        <>
            <header className="h2">{school}</header>
            <body>
                {characters.map((character) => (
                    <ul className="list-disc">
                        <li>{character.name}</li>
                        <li>{character.grade}年生</li>
                        <li>{character.height ? character.height : '???'}</li>
                    </ul>
                ))}
            </body>
        </>
    )
}

export default CharacterList
