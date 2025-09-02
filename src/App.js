import React, { useState } from "react";
import { Copy } from "lucide-react";
import "./App.css";

/* ================= ChatBot ================= */
function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const commands = {
    hii: "Hi there! How can I assist you today? 😊",
    hello: "Hello! 👋",
    help: "Commands: hello, hii, bye",
    bye: "Goodbye! 👋",
  };

  const sendMessage = () => {
    if (!input) return;
    const reply = commands[input.toLowerCase()] || "I don't understand 😅";
    setMessages((prev) => [
      ...prev,
      { sender: "You", text: input },
      { sender: "Bot", text: reply },
    ]);
    setInput("");
  };

  return (
    <div className="chatbot">
      <h2>Simple Chatbot</h2>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <p key={i}>
            <b>{msg.sender}:</b> {msg.text}
          </p>
        ))}
      </div>
      <div className="controls">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

const chatbotCode = `
import React, { useState } from "react";
import "./App.css";

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const commands = {
    hii: "Hi there! How can I assist you today? 😊",
    hello: "Hello! 👋",
    help: "Commands: hello, hii, bye",
    bye: "Goodbye! 👋",
  };

  const sendMessage = () => {
    if (!input) return;
    const reply = commands[input.toLowerCase()] || "I don't understand 😅";
    setMessages((prev) => [
      ...prev,
      { sender: "You", text: input },
      { sender: "Bot", text: reply },
    ]);
    setInput("");
  };

  return (
    <div className="chatbot">
      <h2>Simple Chatbot</h2>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <p key={i}>
            <b>{msg.sender}:</b> {msg.text}
          </p>
        ))}
      </div>
      <div className="controls">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot;
`;

const chatbotCss = `
.chatbot { max-width: 400px; margin: auto; padding: 1rem; border: 1px solid #ddd; border-radius: 10px; }
.chat-box { background: #f9f9f9; padding: 0.5rem; margin-bottom: 0.5rem; height: 150px; overflow-y: auto; }
.controls { display: flex; gap: 0.5rem; }
.controls input { flex: 1; padding: 0.4rem; }
.controls button { padding: 0.4rem 0.8rem; }
`;

/* ================= Calculator ================= */
function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (op) => {
    const a = Number(num1);
    const b = Number(num2);
    if (op === "add") setResult(a + b);
    if (op === "sub") setResult(a - b);
    if (op === "mul") setResult(a * b);
    if (op === "div") setResult(b === 0 ? "Cannot divide by zero" : a / b);
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <input value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="First number" />
      <input value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Second number" />
      <div className="buttons">
        <button onClick={() => calculate("add")}>Add</button>
        <button onClick={() => calculate("sub")}>Subtract</button>
        <button onClick={() => calculate("mul")}>Multiply</button>
        <button onClick={() => calculate("div")}>Divide</button>
      </div>
      <h3>Result: {result === null ? "--" : result}</h3>
    </div>
  );
}

const calculatorCode = `import React from "react";
import "./App.css";

function App() {
  const [num1, setnum1] = React.useState("");
  const [num2, setnum2] = React.useState("");
  const [result, setresult] = React.useState(null);

  const calculate = (op) => {
    const a = Number(num1);
    const b = Number(num2);

    if (op === "add") setresult(a + b);
    if (op === "sub") setresult(a - b);
    if (op === "mul") setresult(a * b);
    if (op === "div") setresult(b === 0 ? "❌ Cannot divide by zero" : a / b);
  };

  return (
    <div className="cal">
      <h1>🧮 Calculator</h1>

      <span>Enter the first number:</span>
      <input
        type="number"
        value={num1}
        onChange={(e) => setnum1(e.target.value)}
      />

      <span>Enter the second number:</span>
      <input
        type="number"
        value={num2}
        onChange={(e) => setnum2(e.target.value)}
      />

      <div className="btn-group">
        <button onClick={() => calculate("add")}>➕ Add</button>
        <button onClick={() => calculate("sub")}>➖ Sub</button>
        <button onClick={() => calculate("mul")}>✖ Mul</button>
        <button onClick={() => calculate("div")}>➗ Div</button>
      </div>

      <h2>Result: {result === null ? "--" : result}</h2>
    </div>
  );
}

export default App;
`;
const calculatorCss = `/* App.css - centered and simple */

body {
  margin: 0;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* full screen height */
}

.app {
  width: 400px;
  padding: 10px;
  border: 1px solid black;
}

h2 {
  margin-bottom: 10px;
  text-align: center;
}

.chat-box {
  border: 1px solid black;
  height: 200px;
  padding: 5px;
  overflow-y: auto;
}

.controls {
  margin-top: 10px;
  display: flex;
  gap: 5px;
}

.controls input[type="text"] {
  flex: 1;
  padding: 5px;
  border: 1px solid black;
}

.controls button {
  padding: 5px 10px;
  border: 1px solid black;
  background: white;
}


`;

/* ================= Voting System ================= */
function VotingSystem() {
  const [votesA, setVotesA] = useState(0);
  const [votesB, setVotesB] = useState(0);

  return (
    <div className="voting">
      <h2>Voting System</h2>
      <p>person1: {votesA} votes</p>
      <p>Person2: {votesB} votes</p>
      <button onClick={() => setVotesA(votesA + 1)}>Vote Person1</button>
      <button onClick={() => setVotesB(votesB + 1)}>Vote Person2</button>
      <p>{votesA > votesB ? "🏆 person1 leading!" : votesB > votesA ? "🏆 person2 leading!" : "🤝 Tie"}</p>
    </div>
  );
}

const votingCode = `// VotingSystem.jsx
import React, { useState } from "react";
import "./App.css";

function VotingSystem() {
  const [votesA, setVotesA] = useState(0);
  const [votesB, setVotesB] = useState(0);

  return (
    <div className="voting-container">
      <h1>Voting System</h1>

      <h2>person1: {votesA} votes</h2>
      <h2>person2 {votesB} votes</h2>

      <button onClick={() => setVotesA(votesA + 1)}>Vote for A</button>
      <button onClick={() => setVotesB(votesB + 1)}>Vote for B</button>

      <h3>
        {votesA > votesB
          ? "🏆 Person1 is leading!"
          : votesB > votesA
          ? "🏆 Person2 is leading!"
          : "🤝 It's a tie!"}
      </h3>
    </div>
  );
}

export default VotingSystem;  `;
const votingCss = `/* App.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
}

.voting-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.voting-container h1 {
  margin-bottom: 20px;
  color: #333;
}

.voting-container h2 {
  margin: 10px 0;
  color: #444;
}

button {
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  transition: 0.3s;
}

button:hover {
  background-color: #0056b3;
}

h3 {
  margin-top: 20px;
  color: #222;
  font-weight: bold;
}
`;

/* ================= Login Form ================= */
function LoginForm() {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="password" placeholder="Password" />
        <input type="number" placeholder="Phone Number" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const loginCode = `import React from "react";
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Login Form</h1>
      <form>
        <label>
          First Name:
          <input type="text" name="fname" />
        </label>
        
        <label>
          Last Name:
          <input type="text" name="lname" />
        </label>
        
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        
        <label>
          Phone Number:
          <input type="number" name="phno" />
        </label>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
`;
const loginCss = `/* App.css */
body {
  font-family: Arial, sans-serif;
  background: #f0f2f5;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 400px;
  margin: 80px auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  margin: 10px 0 5px;
  font-weight: bold;
  color: #444;
}

input[type="text"],
input[type="password"],
input[type="number"] {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  font-size: 14px;
}

input[type="submit"] {
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

input[type="submit"]:hover {
  background: #0056b3;
}
`;

/* ================= Sections ================= */
const sections = [
  { title: "ChatBot", component: <ChatBot />, code: chatbotCode, css: chatbotCss },
  { title: "Calculator", component: <Calculator />, code: calculatorCode, css: calculatorCss },
  { title: "Voting System", component: <VotingSystem />, code: votingCode, css: votingCss },
  { title: "Login Form", component: <LoginForm />, code: loginCode, css: loginCss },
];

export default function App() {
  const [openSection, setOpenSection] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="container">
      <h1 className="title">React Programs</h1>
      {sections.map((sec, i) => (
        <div key={i} className="section">
          <div className="section-header">
            <button onClick={() => setOpenSection(openSection === i ? null : i)} className="toggle-btn">
              {sec.title}
            </button>
            <div className="btn-group">
              <button onClick={() => copyToClipboard(sec.code)} className="copy-btn"><Copy size={16}/> App.js</button>
              <button onClick={() => copyToClipboard(sec.css)} className="copy-btn secondary"><Copy size={16}/> CSS</button>
            </div>
            <span>{openSection === i ? "▲" : "▼"}</span>
          </div>
          {openSection === i && (
            <div className="preview-and-code">
              <div className="preview-box">{sec.component}</div>
              <div className="code-box"><pre>{sec.code}</pre></div>
              <div className="code-box light"><pre>{sec.css}</pre></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
