// Chatbot.jsx — FINAL VERSION (AI 100% UNCHANGED | Only Display Fixed)
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import prof from './things/profile.jpg';

// YOUR API KEY — EXACTLY SAME
const genAI = new GoogleGenerativeAI("AIzaSyCgTLCpFIccSdja2eZcii9S0DXKTiidE78");

const Chatbot = ({ isOpen, toggleChatbot }) => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hey! I'm Pragateesh AI — your personal assistant. Ask me about my projects, skills, LeetCode, internships, or how we can work together!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        generationConfig: {
          temperature: 0.9,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
        ],
      });

      const prompt = `
You are Pragateesh G — a passionate, friendly, and skilled B.Tech AI & Data Science student from Sri Eshwar College of Engineering (2022–2026, CGPA 7.87).
Speak naturally in first person. Be enthusiastic and professional and expect output must be like short summary not to length do not add to much of greetings.
Key facts about me:
Profile Overview
Pragateesh G is a B.Tech (AI & DS) student at Sri Eshwar College of Engineering (2022–2026) with a CGPA of 7.87. He specializes in Artificial Intelligence, Machine Learning, Data Science, and Full-Stack Development, with experience in building intelligent, production-ready AI applications and scalable web platforms.
Projects
SMART REPORT AI: A Multi-Agent System for Intelligent Report Analysis and Personalized Insights 2025
Smart AI uses four agents—Identifier, Insightor, Suggestor, and Goal-Specified Agent—to extract data from PDFs, generate insights, and provide recommendations. Content is stored in a vector database, and a RAG-powered chatbot delivers accurate, real-time responses through an interactive interface.
Tech Stack: React Js, FastAPI, LLM
JOBTRACK AI: AI-Powered Job Application & Guidance Hub 2025
JobTrack AI streamlines job applications and supports career planning. It analyzes resumes to suggest suitable roles, generates tailored cover letters, and provides personalized interview tips. Users receive real-time guidance and resume-based insights through an intuitive dashboard.
Tech Stack: MERN Stack, Flask API, LLM
LEXILINGUA: AI Powered Legal Document Analyzer and Bot 2025
Analyzes legal documents in multiple Indian languages, identifies risks and compliance issues, provides severity scores and mitigation strategies, and supports voice/text chat.
Tech Stack: Streamlit, GROQ (LLAMA 3 70B), Python Libraries (Sound recognizer, pymuPDF)
LEETSCRAPER: Personalized LeetCode Dashboard & Analysis Tool 2025
A dashboard that scrapes and analyzes LeetCode profiles to track coding progress, contest rankings, and optimization trends.
Tech Stack: React Js, Flask API, GROQ (LLAMA 3 70B)
VOICE TIDE: Ride with the Wave of News 2024
A voice-enabled news app providing real-time news updates with multilingual support and dual interaction modes (voice and manual input).
Tech Stack: Streamlit, Speech Recognition, Google Translate, News.org API
TYPE GAME: Adventure Typing Improvement Game
A web-based game improving typing accuracy and speed with themes, performance metrics, and leaderboards.
Tech Stack: React.js, Node.js, MongoDB, Express
WEB EXTRACT IQ
An AI-based web content extractor that summarizes large-scale data and creates a searchable knowledge base using GROQ Llama AI and BeautifulSoup.
Tech Stack: Streamlit, GROQ Llama AI, Python, BS4, Requests
Skills
Programming: Python, JavaScript, Java, C, Basic C++
Frontend Development: HTML, CSS, React.js, Streamlit
Backend Development: Node.js, Express.js, Flask API
Databases: MongoDB, MySQL
AI/ML & GenAI Tools: Gen AI, Machine Learning, Data Science, ChromaDB, Sentence Transformers, RAG Pipelines, Prompt Engineering
Core Concepts: Data Structures & Algorithms, OOP, RESTful API Design
Developer Tools: VS Code, PyCharm, Git/GitHub, Google Colab, Figma, Canva
Internships
Gen AI Developer – Global Knowledge (2024): Developed a real-time AI document analysis system using Gemini LLM, RAG architecture, and ChromaDB.
MERN Stack Developer – RV TechLearn (2024): Built a student performance dashboard using React, Node.js, MongoDB, and analytics integration.
Certifications
Python for Data Science – NPTEL
Crash Course on Python – Coursera (Google)
Java Programming – Udemy
Databricks Academy Accreditation – Databricks (2024)
Introduction to MongoDB – ICT Academy
SQL Intermediate – HackerRank
Master in DSA using C & C++ – Udemy
Achievements
LeetCode: Expert | Max contest rating 1630 | 541+ problems solved
CodeChef: Specialist | Rating 1244 | 200+ problems solved
HackerRank: 3⭐ Python | 2⭐ Java, C, SQL
Postman: API Fundamentals Student Expert
SAP National Hackathon: Shortlisted twice for offline rounds
Education
Sri Eshwar College of Engineering, Coimbatore
B.Tech in AI & DS | CGPA: 7.87 (up to 5th Semester) | 2022–2026
SS Government Boys Hr. Sec. School
HSC – 85.17% (2020–2022)
SSLC – 87% (2019–2020)
Contact Details
Phone: +91 7010441464
Email: pragateesh.g2022ai-ds@sece.ac.in
GitHub: https://github.com/Pragatees
LinkedIn: https://www.linkedin.com/in/pragateesh-g-42b703259/
Location: Coimbatore, Tamil Nadu, India (open to relocation & remote roles)
Now reply to the user in a natural, short, and engaging way:
User: "${userMessage}"
Reply:
      `;

      const result = await model.generateContent(prompt);
      const response = result.response;
      const botReply = response.text().trim();

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, {
        sender: 'bot',
        text: "Sorry! I'm having a small glitch. Please try again in a moment!"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-24 right-8 w-full max-w-md h-[580px] bg-gradient-to-br from-slate-950 via-slate-900 to-black rounded-3xl shadow-2xl border border-emerald-500/30 overflow-hidden z-50"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-emerald-600/20 to-teal-700/20 backdrop-blur-xl border-b border-emerald-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={prof} alt="Pragateesh" className="w-14 h-14 rounded-full ring-4 ring-emerald-400/50 shadow-lg object-cover" />
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-emerald-400 rounded-full animate-pulse ring-4 ring-black"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Pragateesh AI</h3>
                    <p className="text-xs text-emerald-300">Online • Ready to help!</p>
                  </div>
                </div>
                <button onClick={toggleChatbot} className="p-2 hover:bg-white/10 rounded-full transition-all">
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Messages Area - ONLY THIS PART CHANGED */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5 scrollbar-thin scrollbar-thumb-emerald-600 scrollbar-track-slate-800">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} gap-3`}
                >
                  {msg.sender === 'bot' && (
                    <img src={prof} alt="AI" className="w-9 h-9 rounded-full border-2 border-emerald-400/50 self-end" />
                  )}

                  <div className={`max-w-[82%] px-5 py-3.5 rounded-2xl shadow-lg text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
                      : 'bg-slate-800/90 text-gray-100 border border-emerald-500/30'
                  }`}>
                    {msg.sender === 'user' ? (
                      <div className="whitespace-pre-wrap">{msg.text}</div>
                    ) : (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                              <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div" {...props}>
                                {String(children).replace(/\n$/, '')}
                              </SyntaxHighlighter>
                            ) : (
                              <code className="bg-black/40 px-2 py-1 rounded text-xs font-mono text-emerald-300" {...props}>
                                {children}
                              </code>
                            );
                          },
                          strong: ({ children }) => <strong className="font-bold text-emerald-300">{children}</strong>,
                          em: ({ children }) => <em className="italic text-emerald-200">{children}</em>,
                          ul: ({ children }) => <ul className="list-disc list-inside ml-2 space-y-1">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal list-inside ml-2 space-y-1">{children}</ol>,
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    )}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex justify-start gap-3">
                  <img src={prof} alt="AI" className="w-9 h-9 rounded-full border-2 border-emerald-400/50 self-end" />
                  <div className="bg-slate-800/90 px-5 py-3.5 rounded-2xl border border-emerald-500/30">
                    <div className="flex gap-2">
                      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-emerald-400 rounded-full" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-5 bg-slate-900/80 border-t border-emerald-500/20">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-6 py-4 bg-slate-800/70 border border-emerald-500/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-all duration-300 font-medium text-sm"
                  disabled={isLoading}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full disabled:opacity-50 shadow-xl"
                >
                  <Send className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;