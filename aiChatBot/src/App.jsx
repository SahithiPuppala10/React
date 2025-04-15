import './App.css'
import { useState } from "react"
import React from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
function App ()
{
  const [input, setInput] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  let dummy = [];
  const handleSend = async () =>
  {
    if (input.trim() != '')
    {
       const genAI = new GoogleGenerativeAI(
       "AIzaSyCnlxZOdRYgjpXh9nUIFqfthg0qJUYMMQw",
				)
				const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

				const prompt = "Hi, your name is Prasad and you are afull stack web developer "+input
				const result = await model.generateContent(prompt)
      console.log(result.response.text())
      dummy.push({
				userText: input,
				aiText: result.response.text(),
			})
      setChatHistory([...chatHistory,...dummy])
      setInput('')
     }

  }

  return (
    <div>
      {
        chatHistory.map((val,i) =>
        (
          <div key={i}>
            {console.log(val,val.userText)}
						<p>{val.userText}</p>
						<h2>{val.aiText}</h2>
					</div>
        ))
      }
      <input type="text" value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message" />
      <button onClick={handleSend}>send</button>
    </div>
  )
}

export default App