import React, { useState, useRef, useEffect } from 'react';

export default function ChatInput({ onGetMessage }) {
  const [userChat, setUserChat] = useState('');
  const inputEl = useRef(null);

  const handleChange = e => {
    setUserChat(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      onGetMessage(userChat);
      setUserChat('');
    }
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div className="ChatInputContainer">
      <textarea
        ref={inputEl}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </div>
  );
}
