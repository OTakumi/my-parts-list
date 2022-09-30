import React from 'react'
import './App.css'
import CharacterList, { Character } from './CharacterList'

const App: React.FC = () => {
    const characters: Character[] = [
        {
            id: 1,
            name: '桜木花道',
            grade: 1,
            height: 189.2,
        },
    ]

    return (
        <div className="container">
            <header className="App-header">
                <CharacterList school="湘北" characters={characters} />
            </header>
        </div>
    )
}

export default App
