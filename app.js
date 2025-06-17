import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
  const [content, setContent] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    socket.on('edit', (newContent) => {
      setContent(newContent);
    });

    return () => {
      socket.off('edit');
    };
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setContent(newValue);
    socket.emit('edit', newValue);
  };

  return (
    <div style={{ maxWidth: 600, margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Collaborative Text Editor</h2>
      <textarea
        ref={textareaRef}
        value={content}
        onChange={handleChange}
        rows={15}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        placeholder="Start typing here..."
      />
    </div>
  );
}

export default App;