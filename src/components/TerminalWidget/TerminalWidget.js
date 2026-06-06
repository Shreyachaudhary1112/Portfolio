import React, {useState, useRef, useEffect} from "react";
import "./TerminalWidget.scss";

export default function TerminalWidget() {
  const [history, setHistory] = useState([
    {text: "Welcome to Shreya's Portfolio CLI v1.0.0", type: "info"},
    {text: "Type 'help' to see all available commands.", type: "info"}
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = e => {
    if (e.key === "Enter") {
      const trimmedInput = input.trim();
      const command = trimmedInput.toLowerCase();

      const newHistory = [
        ...history,
        {text: `shreya-portfolio ~ % ${trimmedInput}`, type: "command"}
      ];

      if (command) {
        switch (command) {
          case "help":
            newHistory.push({
              text: "Available commands:\n  bio        - Learn more about me\n  skills     - View my tech stack\n  education  - Check my academic background\n  contact    - Get my contact details\n  clear      - Clear the console screen",
              type: "output"
            });
            break;
          case "bio":
            newHistory.push({
              text: "Hi, I'm Shreya Chaudhary! I am a Software Engineer currently pursuing my Master of Science in Computer Science at the University of Illinois Urbana-Champaign (UIUC). I love building scalable systems, agentic AI workflows, and secure decentralized platforms.",
              type: "output"
            });
            break;
          case "skills":
            newHistory.push({
              text: "Core Skills:\n  • Languages: C++, Python, JavaScript, TypeScript, SQL, Solidity, Java\n  • Frameworks: React, Node, Express, FastAPI, Flask, Flutter\n  • Platforms & Cloud: Docker, Git, MySQL, AWS, GCP, Postman, Hardhat\n  • Engineering: Data Structures, Algorithms, System Design, Testing",
              type: "output"
            });
            break;
          case "education":
            newHistory.push({
              text: "Education Profile:\n  • University of Illinois Urbana-Champaign (UIUC)\n    MS in Computer Science | Aug 2023 - Dec 2024\n  • Pune Institute Of Computer Technology (PICT)\n    BS in Computer Science | Aug 2019 - May 2023",
              type: "output"
            });
            break;
          case "contact":
            newHistory.push({
              text: "Let's connect!\n  • Phone: 9527915300\n  • Email: shreyuchaudhary@gmail.com\n  • GitHub: github.com/Shreyachaudhary1112\n  • LinkedIn: linkedin.com/in/shreya-chaudhary1101",
              type: "output"
            });
            break;
          case "clear":
            setHistory([]);
            setInput("");
            return;
          default:
            newHistory.push({
              text: `zsh: command not found: ${trimmedInput}. Type 'help' for options.`,
              type: "error"
            });
            break;
        }
      }

      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <div className="terminal-container" onClick={focusInput}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-title">zsh - shreya@uiuc</div>
      </div>
      <div className="terminal-body" ref={terminalBodyRef}>
        {history.map((line, index) => (
          <div key={index} className={`terminal-line ${line.type}`}>
            {line.text}
          </div>
        ))}
        <div className="terminal-input-line">
          <span className="terminal-prompt">shreya-portfolio ~ %</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="terminal-input"
            style={{
              fontSize: "18px",
              fontFamily: '"Fira Code", Menlo, Monaco, Consolas, "Courier New", monospace',
              transform: "none"
            }}
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
}
