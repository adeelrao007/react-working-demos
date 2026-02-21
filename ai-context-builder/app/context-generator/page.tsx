"use client"
import { useState } from "react"

export default function ContextGenerator() {
  const [openAIKey, setOpenAIKey] = useState("")

  return (
    <div className="max-w-xl mx-auto py-20">
      <h2 className="text-3xl font-bold mb-6">Enter Your OpenAI API Key</h2>
      <input
        type="password"
        value={openAIKey}
        onChange={e => setOpenAIKey(e.target.value)}
        placeholder="OpenAI API Key"
        className="w-full border rounded-lg px-4 py-3 mb-4 text-lg"
      />
      <button className="btn px-6 py-3 rounded-lg font-semibold" style={{backgroundColor: 'var(--button-main)', color: '#fff'}}>
        Save Key
      </button>
    </div>
  )
}
