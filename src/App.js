import React, { useState, useEffect } from "react";
import { Copy } from "lucide-react";
import $ from "jquery";
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

/* ================= Password Checker ================= */
function PasswordChecker() {
  useEffect(() => {
    // Handle keyup event
    const handleKeyUp = () => {
      const pwd = $("#password").val();
      const $strength = $("#strength");
      $strength.removeClass("weak medium strong");

      if (!pwd) {
        $strength.text("");
      } else if (pwd.length < 6) {
        $strength.text("Weak Password 😞").addClass("weak");
      } else if (pwd.length < 10) {
        $strength.text("Medium Password 😐").addClass("medium");
      } else {
        $strength.text("Strong Password 💪").addClass("strong");
      }
    };

    // Bind event
    $("#password").on("keyup", handleKeyUp);

    // Cleanup
    return () => $("#password").off("keyup", handleKeyUp);
  }, []);

  return (
    <div className="container">
      <h2>Password Strength Checker 🔐</h2>
      <input
        type="password"
        id="password"
        placeholder="Enter Password"
        className="password-input"
      />
      <p id="strength" className="strength-text"></p>
    </div>
  );
}

/* ================= Star Rating ================= */
function StarRating() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleClick = function () {
      const value = parseInt($(this).data("value"));
      // Simple if conditions for messages
      if (value === 1) setMessage("Bad 😞");
      else if (value === 2) setMessage("Not Good 😕");
      else if (value === 3) setMessage("Average 😐");
      else if (value === 4) setMessage("Good 🙂");
      else if (value === 5) setMessage("Excellent 🤩");

      // Fill stars based on selected rating
      $(".star").each(function () {
        const starValue = parseInt($(this).data("value"));
        $(this).toggleClass("filled", starValue <= value);
      });
    };

    $(".star").on("click", handleClick);

    // Cleanup
    return () => $(".star").off("click", handleClick);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Rate Us!</h2>
      <div style={{ fontSize: "40px", cursor: "pointer" }}>
        <span className="star" data-value="1">★</span>
        <span className="star" data-value="2">★</span>
        <span className="star" data-value="3">★</span>
        <span className="star" data-value="4">★</span>
        <span className="star" data-value="5">★</span>
      </div>
      <p style={{ marginTop: "10px", fontSize: "20px" }}>{message}</p>
      <style>{`
        .star {
          color: gray;
          transition: color 0.2s;
        }
        .star.filled {
          color: gold;
        }
      `}</style>
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

const passwordCheckerCode = `import { useEffect } from "react";
import $ from "jquery"; // ✅ Import jQuery
import "./App.css";

function PasswordChecker() {
  useEffect(() => {
    // Handle keyup event
    const handleKeyUp = () => {
      const pwd = $("#password").val();
      const $strength = $("#strength");
      $strength.removeClass("weak medium strong");

      if (!pwd) {
        $strength.text("");
      } else if (pwd.length < 6) {
        $strength.text("Weak Password 😞").addClass("weak");
      } else if (pwd.length < 10) {
        $strength.text("Medium Password 😐").addClass("medium");
      } else {
        $strength.text("Strong Password 💪").addClass("strong");
      }
    };

    // Bind event
    $("#password").on("keyup", handleKeyUp);

    // Cleanup
    return () => $("#password").off("keyup", handleKeyUp);
  }, []);

  return (
    <div className="container">
      <h2>Password Strength Checker 🔐</h2>
      <input
        type="password"
        id="password"
        placeholder="Enter Password"
        className="password-input"
      />
      <p id="strength" className="strength-text"></p>
    </div>
  );
}

export default PasswordChecker;
`;

const passwordCheckerCss = `.container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.password-input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

.strength-text {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}

.strength-text.weak {
  color: #e74c3c;
}

.strength-text.medium {
  color: #f39c12;
}

.strength-text.strong {
  color: #27ae60;
}
`;

const starRatingCode = `import React, { useEffect, useState } from "react";
import $ from "jquery";

function StarRating() {
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    $(".star").on("click", function () {
      const value = parseInt($(this).data("value"));
      // Simple if conditions for messages
      if (value === 1) setMessage("Bad 😞");
      else if (value === 2) setMessage("Not Good 😕");
      else if (value === 3) setMessage("Average 😐");
      else if (value === 4) setMessage("Good 🙂");
      else if (value === 5) setMessage("Excellent 🤩");

      // Fill stars based on selected rating
      $(".star").each(function () {
        const starValue = parseInt($(this).data("value"));
        $(this).toggleClass("filled", starValue <= value);
      });
    });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Rate Us!</h2>
      <div style={{ fontSize: "40px", cursor: "pointer" }}>
        <span className="star" data-value="1">★</span>
        <span className="star" data-value="2">★</span>
        <span className="star" data-value="3">★</span>
        <span className="star" data-value="4">★</span>
        <span className="star" data-value="5">★</span>
      </div>
      <p style={{ marginTop: "10px", fontSize: "20px" }}>{message}</p>
      <style>{\`
        .star {
          color: gray;
          transition: color 0.2s;
        }
        .star.filled {
          color: gold;
        }
      \`}</style>
    </div>
  );
}

export default StarRating;
`;

const starRatingCss = `/* Star Rating Styles */
.star {
  color: gray;
  transition: color 0.2s;
  cursor: pointer;
  font-size: 40px;
}

.star.filled {
  color: gold;
}
`;

/* ================= Drag & Drop Page Builder ================= */
function DragAndDropPageBuilder() {
  useEffect(() => {
    const draggables = document.querySelectorAll(".draggable");
    const dropZone = document.getElementById("dropZone");

    // Allow drop
    const handleDragOver = (e) => {
      e.preventDefault();
      dropZone.style.background = "#eef";
    };

    const handleDragLeave = () => {
      dropZone.style.background = "transparent";
    };

    // Drop action
    const handleDrop = (e) => {
      e.preventDefault();
      dropZone.style.background = "transparent";
      const type = e.dataTransfer.getData("type");
      let newElement;

      if (type === "text") {
        newElement = document.createElement("div");
        newElement.className = "element";
        newElement.contentEditable = true;
        newElement.innerText = "Editable Text";
      } else if (type === "image1") {
        newElement = document.createElement("img");
        newElement.className = "element image-option";
        newElement.src = "https://via.placeholder.com/200x150/00796b/ffffff?text=Image+1";
        newElement.alt = "Sample Image 1";
      } else if (type === "image2") {
        newElement = document.createElement("img");
        newElement.className = "element image-option";
        newElement.src = "https://via.placeholder.com/200x150/4caf50/ffffff?text=Image+2";
        newElement.alt = "Sample Image 2";
      } else if (type === "button") {
        newElement = document.createElement("button");
        newElement.className = "element";
        newElement.innerText = "Click Me";
      }

      if (newElement) {
        if (e.target.classList.contains('drop-zone')) {
          e.target.appendChild(newElement);
        } else {
          const targetElement = e.target.closest('.element');
          if (targetElement) {
            dropZone.insertBefore(newElement, targetElement);
          } else {
            dropZone.appendChild(newElement);
          }
        }
      }
    };

    // Store which type is being dragged
    const handleDragStart = (e) => {
      e.dataTransfer.setData("type", e.target.dataset.type);
    };

    dropZone.addEventListener("dragover", handleDragOver);
    dropZone.addEventListener("dragleave", handleDragLeave);
    dropZone.addEventListener("drop", handleDrop);

    draggables.forEach(el => {
      el.addEventListener("dragstart", handleDragStart);
    });

    // Cleanup
    return () => {
      dropZone.removeEventListener("dragover", handleDragOver);
      dropZone.removeEventListener("dragleave", handleDragLeave);
      dropZone.removeEventListener("drop", handleDrop);
      draggables.forEach(el => {
        el.removeEventListener("dragstart", handleDragStart);
      });
    };
  }, []);

  return (
    <div style={{ display: "flex", height: "500px", margin: "0" }}>
      <div id="sidebar" style={{
        width: "200px",
        background: "#f4f4f4",
        borderRight: "2px solid #ccc",
        padding: "10px"
      }}>
        <h3>Elements</h3>
        <div className="draggable" draggable="true" data-type="text">Text</div>
        <div className="draggable" draggable="true" data-type="image1">Image Option 1</div>
        <div className="draggable" draggable="true" data-type="image2">Image Option 2</div>
        <div className="draggable" draggable="true" data-type="button">Button</div>
      </div>
      <div id="canvas" style={{
        flex: "1",
        background: "#fafafa",
        padding: "20px",
        borderLeft: "2px solid #ccc",
        overflow: "auto"
      }}>
        <h3>Page Canvas</h3>
        <div className="drop-zone" id="dropZone" style={{
          minHeight: "400px",
          border: "2px dashed #aaa",
          padding: "20px",
          textAlign: "center",
          color: "#888"
        }}>
          Drag elements here
        </div>
      </div>
      <style>{`
        .draggable {
          padding: 10px;
          margin: 10px 0;
          background: #fff;
          border: 1px solid #888;
          cursor: grab;
          text-align: center;
        }
        .element {
          padding: 10px;
          margin: 10px 0;
          background: #e0f7fa;
          border: 1px solid #00796b;
        }
        .image-option {
          width: 200px;
          height: auto;
          border: none;
        }
      `}</style>
    </div>
  );
}

/* ================= Shopping Cart ================= */
function ShoppingCart() {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Headphones', price: 150 },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="app-container">
      <h1 className="title">🛍️ Product List</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <span>
              <strong>{product.name}</strong> - ${product.price}
            </span>
            <button className="add-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <hr className="divider" />
      <h2 className="title">🛒 Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <span>
                {item.name} (${item.price}) × {item.quantity}
              </span>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <style>{`
        .app-container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .product-list, .cart-list {
          list-style: none;
          padding: 0;
        }
        .product-item, .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          margin: 10px 0;
          background: #f5f5f5;
          border-radius: 5px;
        }
        .add-button, .remove-button {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        .add-button {
          background: #4caf50;
          color: white;
        }
        .remove-button {
          background: #f44336;
          color: white;
        }
        .divider {
          margin: 20px 0;
          border: 1px solid #ddd;
        }
        .empty-cart {
          color: #888;
          text-align: center;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}

/* ================= Bootstrap Example ================= */
function BootstrapExample() {
  useEffect(() => {
    // Load Bootstrap CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css";
    document.head.appendChild(link);

    // Load Bootstrap JS
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      <div className="container p-4">
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-header bg-primary text-white">
                <h5>Card One</h5>
              </div>
              <img
                src="https://via.placeholder.com/300x200/007bff/ffffff?text=Image+1"
                className="card-img-top"
                alt="Card One"
              />
              <div className="card-body">
                <button className="btn btn-primary">Click Me</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-header bg-success text-white">
                <h5>Card Two</h5>
              </div>
              <img
                src="https://via.placeholder.com/300x200/28a745/ffffff?text=Image+2"
                className="card-img-top"
                alt="Card Two"
              />
              <div className="card-body">
                <button className="btn btn-success">Click Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            My Website
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <p className="mb-0">© 2025 My Website | All Rights Reserved</p>
      </footer>
    </div>
  );
}

const dragAndDropCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simple Drag & Drop Page Builder</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      height: 100vh;
      margin: 0;
    }
    #sidebar {
      width: 200px;
      background: #f4f4f4;
      border-right: 2px solid #ccc;
      padding: 10px;
    }
    .draggable {
      padding: 10px;
      margin: 10px 0;
      background: #fff;
      border: 1px solid #888;
      cursor: grab;
      text-align: center;
    }
    #canvas {
      flex: 1;
      background: #fafafa;
      padding: 20px;
      border-left: 2px solid #ccc;
      overflow: auto;
    }
    .drop-zone {
      min-height: 400px;
      border: 2px dashed #aaa;
      padding: 20px;
      text-align: center;
      color: #888;
    }
    .element {
      padding: 10px;
      margin: 10px 0;
      background: #e0f7fa;
      border: 1px solid #00796b;
    }
    .image-option {
      width: 200px;
      height: auto;
      border: none;
    }
  </style>
</head>
<body>
  <div id="sidebar">
    <h3>Elements</h3>
    <div class="draggable" draggable="true" data-type="text">Text</div>
    <div class="draggable" draggable="true" data-type="image1">Image Option 1</div>
    <div class="draggable" draggable="true" data-type="image2">Image Option 2</div>
    <div class="draggable" draggable="true" data-type="button">Button</div>
  </div>
  <div id="canvas">
    <h3>Page Canvas</h3>
    <div class="drop-zone" id="dropZone">
      Drag elements here
    </div>
  </div>
  <script>
    const draggables = document.querySelectorAll(".draggable");
    const dropZone = document.getElementById("dropZone");

    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZone.style.background = "#eef";
    });

    dropZone.addEventListener("dragleave", () => {
      dropZone.style.background = "transparent";
    });

    dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropZone.style.background = "transparent";
      const type = e.dataTransfer.getData("type");
      let newElement;

      if (type === "text") {
        newElement = document.createElement("div");
        newElement.className = "element";
        newElement.contentEditable = true;
        newElement.innerText = "Editable Text";
      } else if (type === "image1") {
        newElement = document.createElement("img");
        newElement.className = "element image-option";
        newElement.src = "sample1.jpg";
      } else if (type === "image2") {
        newElement = document.createElement("img");
        newElement.className = "element image-option";
        newElement.src = "sample2.jpg";
      } else if (type === "button") {
        newElement = document.createElement("button");
        newElement.className = "element";
        newElement.innerText = "Click Me";
      }

      if (newElement) {
        if (e.target.classList.contains('drop-zone')) {
          e.target.appendChild(newElement);
        } else {
          const targetElement = e.target.closest('.element');
          if (targetElement) {
            dropZone.insertBefore(newElement, targetElement);
          }
        }
      }
    });

    draggables.forEach(el => {
      el.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("type", el.dataset.type);
      });
    });
  </script>
</body>
</html>
`;

const dragAndDropCss = `body {
  font-family: Arial, sans-serif;
  display: flex;
  height: 100vh;
  margin: 0;
}

#sidebar {
  width: 200px;
  background: #f4f4f4;
  border-right: 2px solid #ccc;
  padding: 10px;
}

.draggable {
  padding: 10px;
  margin: 10px 0;
  background: #fff;
  border: 1px solid #888;
  cursor: grab;
  text-align: center;
}

#canvas {
  flex: 1;
  background: #fafafa;
  padding: 20px;
  border-left: 2px solid #ccc;
  overflow: auto;
}

.drop-zone {
  min-height: 400px;
  border: 2px dashed #aaa;
  padding: 20px;
  text-align: center;
  color: #888;
}

.element {
  padding: 10px;
  margin: 10px 0;
  background: #e0f7fa;
  border: 1px solid #00796b;
}

.image-option {
  width: 200px;
  height: auto;
  border: none;
}
`;

/* eslint-disable */
const shoppingCartCode = `import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Headphones', price: 150 },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="app-container">
      <h1 className="title">🛍️ Product List</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <span>
              <strong>{product.name}</strong> - \${product.price}
            </span>
            <button className="add-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <hr className="divider" />
      <h2 className="title">🛒 Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <span>
                {item.name} (\${item.price}) × {item.quantity}
              </span>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
`;
/* eslint-enable */

const shoppingCartCss = `.app-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.product-list, .cart-list {
  list-style: none;
  padding: 0;
}

.product-item, .cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  background: #f5f5f5;
  border-radius: 5px;
}

.add-button, .remove-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.add-button {
  background: #4caf50;
  color: white;
}

.remove-button {
  background: #f44336;
  color: white;
}

.divider {
  margin: 20px 0;
  border: 1px solid #ddd;
}

.empty-cart {
  color: #888;
  text-align: center;
  padding: 20px;
}
`;

const bootstrapExampleCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Example</title>
  <link 
    rel="stylesheet" 
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body>
  <div class="container p-4">
    <div class="row text-center">
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-header bg-primary text-white">
            <h5>Card One</h5>
          </div>
          <img src="image1.jpg" class="card-img-top" alt="Image 1">
          <div class="card-body">
            <button class="btn btn-primary">Click Me</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-header bg-success text-white">
            <h5>Card Two</h5>
          </div>
          <img src="image2.jpg" class="card-img-top" alt="Image 2">
          <div class="card-body">
            <button class="btn btn-success">Click Me</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">My Website</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <footer class="bg-dark text-white text-center py-3 mt-4">
    <p class="mb-0">© 2025 My Website | All Rights Reserved</p>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`;

const bootstrapExampleCss = `/* Bootstrap CDN is included in the HTML head */
/* Add Bootstrap CSS: https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css */
/* Bootstrap provides all the styling for navbar, cards, buttons, etc. */
`;

/* ================= Book Management System ================= */
function BookManagementSystem() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [menu, setMenu] = useState("main"); // main, add, view, exit

  const addBook = () => {
    if (title.trim() && author.trim()) {
      const bookTitle = title;
      const bookAuthor = author;
      setBooks([...books, { title: bookTitle, author: bookAuthor }]);
      setTitle("");
      setAuthor("");
      alert(`Book "${bookTitle}" by ${bookAuthor} added.`);
      setMenu("main");
    } else {
      alert("Please enter both title and author");
    }
  };

  const renderMenu = () => {
    if (menu === "exit") {
      return (
        <div>
          <h2>👋 Thank you for using Book Management System!</h2>
          <button onClick={() => setMenu("main")}>Restart</button>
        </div>
      );
    }

    if (menu === "main") {
      return (
        <div>
          <h2>=== Book Management System ===</h2>
          <div style={{ marginTop: "10px" }}>
            <button onClick={() => setMenu("add")}>1. Add Book</button>
            <button onClick={() => setMenu("view")} style={{ marginLeft: "10px" }}>
              2. View Books
            </button>
            <button onClick={() => setMenu("exit")} style={{ marginLeft: "10px" }}>
              3. Exit
            </button>
          </div>
        </div>
      );
    }

    if (menu === "add") {
      return (
        <div>
          <h3>Add Book</h3>
          <input
            type="text"
            placeholder="Enter Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
          <div style={{ marginTop: "10px" }}>
            <button onClick={addBook}>Add</button>
            <button onClick={() => setMenu("main")} style={{ marginLeft: "10px" }}>
              Back
            </button>
          </div>
        </div>
      );
    }

    if (menu === "view") {
      return (
        <div>
          <h3>All Books</h3>
          {books.length === 0 ? (
            <p>No books available.</p>
          ) : (
            <ul>
              {books.map((b, i) => (
                <li key={i}>
                  {i + 1}. {b.title} by {b.author}
                </li>
              ))}
            </ul>
          )}
          <button onClick={() => setMenu("main")}>Back</button>
        </div>
      );
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px", fontFamily: "Arial" }}>
      {renderMenu()}
    </div>
  );
}

const bookManagementCode = `import React, { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [menu, setMenu] = useState("main"); // main, add, view, exit

  const addBook = () => {
    if (title.trim() && author.trim()) {
      const bookTitle = title;
      const bookAuthor = author;
      setBooks([...books, { title: bookTitle, author: bookAuthor }]);
      setTitle("");
      setAuthor("");
      alert(\`Book "\${bookTitle}" by \${bookAuthor} added.\`);
      setMenu("main");
    } else {
      alert("Please enter both title and author");
    }
  };

  const renderMenu = () => {
    if (menu === "exit") {
      return (
        <div>
          <h2>👋 Thank you for using Book Management System!</h2>
          <button onClick={() => setMenu("main")}>Restart</button>
        </div>
      );
    }

    if (menu === "main") {
      return (
        <div>
          <h2>=== Book Management System ===</h2>
          <div style={{ marginTop: "10px" }}>
            <button onClick={() => setMenu("add")}>1. Add Book</button>
            <button onClick={() => setMenu("view")} style={{ marginLeft: "10px" }}>
              2. View Books
            </button>
            <button onClick={() => setMenu("exit")} style={{ marginLeft: "10px" }}>
              3. Exit
            </button>
          </div>
        </div>
      );
    }

    if (menu === "add") {
      return (
        <div>
          <h3>Add Book</h3>
          <input
            type="text"
            placeholder="Enter Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
          <div style={{ marginTop: "10px" }}>
            <button onClick={addBook}>Add</button>
            <button onClick={() => setMenu("main")} style={{ marginLeft: "10px" }}>
              Back
            </button>
          </div>
        </div>
      );
    }

    if (menu === "view") {
      return (
        <div>
          <h3>All Books</h3>
          {books.length === 0 ? (
            <p>No books available.</p>
          ) : (
            <ul>
              {books.map((b, i) => (
                <li key={i}>
                  {i + 1}. {b.title} by {b.author}
                </li>
              ))}
            </ul>
          )}
          <button onClick={() => setMenu("main")}>Back</button>
        </div>
      );
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px", fontFamily: "Arial" }}>
      {renderMenu()}
    </div>
  );
}

export default App;
`;

const bookManagementCss = `/* Basic styling - mostly inline styles used in the component */
/* You can add additional CSS here if needed */

div {
  font-family: Arial, sans-serif;
}

button {
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  margin: 5px 0;
  background-color: #f9f9f9;
  border-radius: 4px;
}
`;

/* ================= Sections ================= */
const sections = [
  { title: "ChatBot", component: <ChatBot />, code: chatbotCode, css: chatbotCss },
  { title: "Calculator", component: <Calculator />, code: calculatorCode, css: calculatorCss },
  { title: "Voting System", component: <VotingSystem />, code: votingCode, css: votingCss },
  { title: "Login Form", component: <LoginForm />, code: loginCode, css: loginCss },
  { title: "Password Checker", component: <PasswordChecker />, code: passwordCheckerCode, css: passwordCheckerCss },
  { title: "Star Rating", component: <StarRating />, code: starRatingCode, css: starRatingCss },
  { title: "Drag & Drop Page Builder", component: <DragAndDropPageBuilder />, code: dragAndDropCode, css: dragAndDropCss },
  { title: "Shopping Cart", component: <ShoppingCart />, code: shoppingCartCode, css: shoppingCartCss },
  { title: "Bootstrap Example", component: <BootstrapExample />, code: bootstrapExampleCode, css: bootstrapExampleCss },
  { title: "Book Management System", component: <BookManagementSystem />, code: bookManagementCode, css: bookManagementCss },
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
