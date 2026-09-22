
import { useEffect, useState } from 'react'
import './App.css'
import Card, { type IEmoji } from './components/card.tsx'
import { getEmojis } from './api/emojiApi'
function App() {
  const [emojis, setEmojis] = useState<IEmoji[]>(
    []
  )
  const [input, setInput] = useState('')




  useEffect(() => {
    fetchData()
  }, [input])
async function fetchData(){
  try {
    const data = await getEmojis(input)
    setEmojis(data)
  } catch (error) {
    console.error('Ошибка при загрузке эмодзи:', error)
    setEmojis([])
  }
}



  return (
    <>
    <div className="blue_head">
      <div className="glav_text">
        <h1 className="emoji">Emoji Finder</h1>
        <p className="find">find emoji by keywords</p>
      </div>
    </div>
    <div className="input_menu">
      <input
      type="text"
      className="input"
      placeholder='Enter text....'
      value={input}
      onInput={(e) => setInput(e.currentTarget.value) }
      />
    </div>
<main>
  <div className="cards-container">
    {emojis && emojis.map((el) => (
      <Card
        key={el.title}
        emoji={el.emoji}
        title={el.title}
        keywords={el.keywords}
      />
    ))}
  </div>
</main>

    </>
  )
}

export default App