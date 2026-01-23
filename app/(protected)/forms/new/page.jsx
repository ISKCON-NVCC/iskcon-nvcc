"use client"
import React, { useState } from 'react'
import QuestionCard from '../../../../components/QuestionCard'

const Icons = {
  Save: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  ),
  Sparkles: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  ),
  Plus: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  ),
  Info: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 16v-4"/>
      <path d="M12 8h.01"/>
    </svg>
  )
}

const CreateFormPage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isQuiz, setIsQuiz] = useState(false)
  const [aiTopic, setAiTopic] = useState('')
  const [questions, setQuestions] = useState([])

  const addQuestion = (type) => {
    const newQuestion = {
      id: Date.now().toString(),
      type,
      label: '',
      required: false,
      // Initialize options only if it's multiple choice
      options: type === 'multiple_choice' ? ['Option 1', 'Option 2', 'Option 3'] : []
    }
    setQuestions([...questions, newQuestion])
  }

  const deleteQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id))
  }

  const updateQuestion = (id, updates) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, ...updates } : q))
  }

  return (
    <div className="min-h-screen bg-[#FDFBF9] p-8 font-sans text-stone-800">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif font-bold text-stone-900">Create Form</h1>
            <p className="text-stone-500 mt-1">Build your form with custom questions</p>
          </div>
          <button className="flex items-center gap-2 bg-[#EE7D22] hover:bg-[#d66e1d] text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
            <Icons.Save />
            Save Form
          </button>
        </div>

        {/* Form Details Card */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-6 space-y-6">
          <h2 className="text-xl font-serif font-bold text-stone-800">Form Details</h2>
          
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="title" className="block text-sm font-medium text-stone-700">Title</label>
              <input 
                type="text" 
                id="title"
                placeholder="Enter form title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EE7D22]/20 focus:border-[#EE7D22] transition-all placeholder:text-stone-400"
              />
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="description" className="block text-sm font-medium text-stone-700">Description</label>
              <textarea 
                id="description"
                placeholder="Describe what this form is for..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EE7D22]/20 focus:border-[#EE7D22] transition-all placeholder:text-stone-400 resize-none"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button 
                onClick={() => setIsQuiz(!isQuiz)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#EE7D22] focus:ring-offset-2 ${isQuiz ? 'bg-[#EE7D22]' : 'bg-stone-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${isQuiz ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
              <span className="text-sm text-stone-700 font-medium cursor-pointer" onClick={() => setIsQuiz(!isQuiz)}>
                This is a quiz (enable auto-scoring)
              </span>
            </div>
          </div>
        </div>

        {/* AI Suggestions Card */}
        <div className="bg-[#FFF8F3] rounded-xl border border-[#FCDCC3] p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-[#EE7D22]">
              <Icons.Sparkles />
            </div>
            <h2 className="text-xl font-serif font-bold text-[#3F2E23]">AI Question Suggestions</h2>
          </div>
          <p className="text-[#8C6B55] text-sm mb-4">Enter a topic to get AI-generated question ideas</p>
          
          <div className="flex gap-3">
            <input 
              type="text" 
              placeholder="e.g., Bhagavad Gita basics, Volunteer rules..."
              value={aiTopic}
              onChange={(e) => setAiTopic(e.target.value)}
              className="flex-1 px-4 py-3 bg-white border border-[#FCDCC3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EE7D22]/20 focus:border-[#EE7D22] placeholder:text-[#BCAAA0]"
            />
            <button className="bg-[#EE7D22] hover:bg-[#d66e1d] text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm">
              Generate
            </button>
          </div>
        </div>

        {/* Questions Card */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-8 min-h-[300px]">
          <div className="space-y-1 mb-8">
             <h2 className="text-xl font-serif font-bold text-stone-800">Questions</h2>
             <p className="text-stone-500 text-sm">Add and configure your form questions</p>
          </div>

          <div className="flex gap-3 mb-8">
            <button 
              onClick={() => addQuestion('text')}
              className="flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-lg hover:bg-stone-50 text-stone-700 text-sm font-medium transition-colors bg-white shadow-sm"
            >
              <Icons.Plus /> Text
            </button>
            <button 
              onClick={() => addQuestion('number')}
              className="flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-lg hover:bg-stone-50 text-stone-700 text-sm font-medium transition-colors bg-white shadow-sm"
            >
              <Icons.Plus /> Number
            </button>
            <button 
              onClick={() => addQuestion('multiple_choice')}
              className="flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-lg hover:bg-stone-50 text-stone-700 text-sm font-medium transition-colors bg-white shadow-sm"
            >
              <Icons.Plus /> Multiple Choice
            </button>
          </div>

          {questions.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-12 text-stone-400">
               <p>No questions yet. Add your first question above!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {questions.map((question, index) => (
                <QuestionCard 
                  key={question.id}
                  question={question}
                  index={index}
                  onUpdate={updateQuestion}
                  onDelete={deleteQuestion}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default CreateFormPage