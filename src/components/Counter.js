import React, { useState } from "react";
import "../assets/css/counter.css";
function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="counter-container border-0 p-3 counter-bg d-flex justify-content-between align-items-center">
        <button onClick={handleDecrement} className="border-0 bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M22.7153 0H9.30063C3.47373 0 0 3.472 0 9.296V22.688C0 28.528 3.47373 32 9.30063 32H22.6993C28.5262 32 31.9999 28.528 31.9999 22.704V9.296C32.016 3.472 28.5422 0 22.7153 0Z"
              fill="#79AA00"
            />
            <path
              d="M22.412 17.1998H9.60563C8.9493 17.1998 8.40503 16.6558 8.40503 15.9998C8.40503 15.3438 8.9493 14.7998 9.60563 14.7998H22.412C23.0683 14.7998 23.6126 15.3438 23.6126 15.9998C23.6126 16.6558 23.0683 17.1998 22.412 17.1998Z"
              fill="#79AA00"
            />
          </svg>
        </button>
        <span className="counter">{count}</span>
        <button onClick={handleIncrement} className="border-0 bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M22.7153 0H9.30063C3.47373 0 0 3.472 0 9.296V22.688C0 28.528 3.47373 32 9.30063 32H22.6993C28.5262 32 31.9999 28.528 31.9999 22.704V9.296C32.016 3.472 28.5422 0 22.7153 0Z"
              fill="#79AA00"
            />
            <path
              d="M22.412 14.7999H17.2094V9.5999C17.2094 8.9439 16.6651 8.3999 16.0088 8.3999C15.3525 8.3999 14.8082 8.9439 14.8082 9.5999V14.7999H9.60563C8.9493 14.7999 8.40503 15.3439 8.40503 15.9999C8.40503 16.6559 8.9493 17.1999 9.60563 17.1999H14.8082V22.3999C14.8082 23.0559 15.3525 23.5999 16.0088 23.5999C16.6651 23.5999 17.2094 23.0559 17.2094 22.3999V17.1999H22.412C23.0683 17.1999 23.6126 16.6559 23.6126 15.9999C23.6126 15.3439 23.0683 14.7999 22.412 14.7999Z"
              fill="#79AA00"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Counter;
