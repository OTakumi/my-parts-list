import React from 'react'
import CharacterList, { Character } from './components/CharacterList'
import './theme/tailwind.css'

const App: React.FC = () => {
    const characters: Character[] = [
        {
            id: 1,
            name: '桜木花道',
            grade: 1,
            height: 189.2,
        },
        {
            id: 2,
            name: '流川 楓',
            grade: 1,
            height: 187,
        },
    ]

    return (
        <div className="m-10">
            <header className="App-header">
                <CharacterList school="湘北" characters={characters} />
            </header>
        </div>
    )
}

export default App
