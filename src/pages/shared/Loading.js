import React from "react";

const Loading = () => {
  return (
    <div className="p-28">
      <div className="flex items-center justify-center">
        <div
          className="spinner-border animate-spin inline-block w-56 h-56 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
