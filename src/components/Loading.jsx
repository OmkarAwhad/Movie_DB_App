import React from 'react';

function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center" style={{ backgroundColor: '#1F1E24' }}>
      <div className="spinner"></div>
      <style jsx>{`
        .spinner {
          width: 80px;
          height: 80px;
          position: relative;
        }

        .spinner::before,
        .spinner::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 6px solid transparent;
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.6s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        }

        .spinner::after {
          border: 6px solid transparent;
          border-bottom-color: #ffffff;
          animation-direction: reverse;
          animation-duration: 0.8s;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .spinner::before {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

export default Loading;