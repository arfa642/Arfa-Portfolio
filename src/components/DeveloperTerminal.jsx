import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, CornerDownLeft, Play } from 'lucide-react';
import { personalData, skillsData } from '../data/portfolioData';

const initialOutput = [
  { type: 'system', text: 'Muhammad Arfa v2.5 Interactive Terminal [GCU-Lahore Edition]' },
  { type: 'system', text: 'Type a command or click a quick shortcut below to inspect architecture.' },
  { type: 'prompt', cmd: 'cat summary.json' },
  { type: 'json', text: JSON.stringify({
      developer: "Muhammad Arfa",
      role: "Frontend Developer & Software Engineer",
      institution: "Government College University, Lahore",
      cgpa: 3.42,
      latest_sgpa: 3.57,
      leadership: "Joint Secretary @ GCU Computer Science Society",
      focus: "Enterprise Systems & React Frontend",
      internship: "ParkView City Head Office (LAN Asset Tracker)"
    }, null, 2)
  }
];

export default function DeveloperTerminal() {
  const [history, setHistory] = useState(initialOutput);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    let newHistory = [...history, { type: 'prompt', cmd: cmdStr }];

    switch(cmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `Available commands:
  • cat bio.md       - Read background & education narrative
  • cat skills.json  - List core languages & frameworks
  • get-cgpa         - Verified academic GPA records
  • leadership       - Computer Science Society GCU impact
  • clear            - Clear terminal display`
        });
        break;
      case 'cat bio.md':
        newHistory.push({
          type: 'response',
          text: `Muhammad Arfa is a BS Computer Science student at GC University Lahore (Roll: 182-BSCS-24). Ex-ParkView City Head Office intern where he deployed an Enterprise Asset Tracking System on corporate LAN.`
        });
        break;
      case 'cat skills.json':
        newHistory.push({
          type: 'json',
          text: JSON.stringify({
            frontend: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Bootstrap 5", "HTML5/CSS3"],
            programming_and_cs: ["C++", "Python", "SQL", "C", "Data Structures", "OOP"],
            systems_and_tools: ["Git", "GitHub", "Firebase", "JSON Server", "VS Code", "Vercel", "MS SQL Server"]
          }, null, 2)
        });
        break;
      case 'get-cgpa':
        newHistory.push({
          type: 'response',
          text: `🎓 GC University Lahore BSCS:
  Cumulative CGPA: 3.42 / 4.00
  Latest SGPA: 3.57 / 4.00
  Punjab Group of Colleges: 937 / 1200 (78%)
  Beaconhouse School System: 911 / 1100 (83%)`
        });
        break;
      case 'leadership':
        newHistory.push({
          type: 'response',
          text: `🏛️ GCU Computer Science Society:
  • Joint Secretary (2026 - Present): Executive coordination, event logistics, registrations.
  • Finance Manager (2025 - 2026): Budgeting for Glowingsoft Tech Hackathon & PureLogics Tour.`
        });
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        newHistory.push({
          type: 'error',
          text: `command not found: "${cmdStr}". Type 'help' for available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleCopy = () => {
    const rawText = history.map(h => h.cmd ? `$ ${h.cmd}` : h.text).join('\n');
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="terminal-window" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      
      {/* Terminal Titlebar */}
      <div className="terminal-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="terminal-dots">
            <span className="terminal-dot dot-red" />
            <span className="terminal-dot dot-yellow" />
            <span className="terminal-dot dot-green" />
          </div>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Terminal size={13} color="#38bdf8" />
            <span>arfa@gcu-workstation: ~</span>
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            onClick={handleCopy}
            title="Copy terminal session"
            style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.6875rem' }}
          >
            {copied ? <Check size={12} color="#4ade80" /> : <Copy size={12} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Quick Action Command Chips */}
      <div style={{
        padding: '0.5rem 1rem',
        background: '#131e36',
        borderBottom: '1px solid #1e293b',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.4rem',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '0.6875rem', color: '#64748b', fontWeight: 600 }}>Try:</span>
        {['cat bio.md', 'cat skills.json', 'get-cgpa', 'leadership', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            style={{
              padding: '0.2rem 0.5rem',
              borderRadius: '4px',
              background: '#1e293b',
              color: '#38bdf8',
              fontSize: '0.6875rem',
              border: '1px solid #334155',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1e293b';
              e.currentTarget.style.color = '#38bdf8';
            }}
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Screen Body */}
      <div className="terminal-body" style={{ flexGrow: 1 }}>
        {history.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '0.5rem' }}>
            {item.type === 'prompt' && (
              <div style={{ color: '#38bdf8' }}>
                <span style={{ color: '#4ade80' }}>muhammad-arfa@gcu:~$ </span>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>{item.cmd}</span>
              </div>
            )}
            {item.type === 'system' && (
              <div style={{ color: '#94a3b8', fontStyle: 'italic', fontSize: '0.78125rem' }}>{item.text}</div>
            )}
            {item.type === 'response' && (
              <pre style={{ color: '#e2e8f0', whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>{item.text}</pre>
            )}
            {item.type === 'json' && (
              <pre style={{ color: '#fde047', whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: '0.78125rem' }}>{item.text}</pre>
            )}
            {item.type === 'error' && (
              <div style={{ color: '#f87171' }}>{item.text}</div>
            )}
          </div>
        ))}

        {/* Input line */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            if (inputVal.trim()) handleCommand(inputVal);
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.5rem' }}
        >
          <span style={{ color: '#4ade80' }}>muhammad-arfa@gcu:~$ </span>
          <input 
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help'..."
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              flexGrow: 1
            }}
          />
        </form>
      </div>

    </div>
  );
}
