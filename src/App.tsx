import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  NO_GROUP
} from "kbar";
import RenderResults from './RenderResults';

const actions = [
  {
    id: "blog",
    name: "Blog",
    shortcut: ["b"],
    keywords: "writing words",
    perform: () => (window.location.pathname = "blog"),
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email",
    perform: () => (window.location.pathname = "contact"),
  },
]
function App() {
  const searchStyle = {
    padding: '12px 16px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box' as React.CSSProperties['boxSizing'],
    outline: 'none',
    border: 'none',
    background: 'hsl(var(--color-neutral-100))',
    color: 'hsl(var(--color-neutral-700))'
  };
  
  const animatorStyle = {
    maxWidth: '600px',
    width: '100%',
    border: '1px solid black',
    background: 'hsl(var(--color-neutral-100))',
    color: 'var(--foreground)',
    borderRadius: '2px',
    overflow: 'hidden',
    boxShadow: 'var(--shadow)',
    marginTop: '-8px'
  };
  
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner> 
          <KBarAnimator style={animatorStyle}> 
            <KBarSearch style={searchStyle}/>
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Example /> */}
    </div>
    </KBarProvider>
  );
}

export default App;
