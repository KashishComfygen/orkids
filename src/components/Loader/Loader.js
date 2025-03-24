import React from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loader({ loading }) {
  return (
    <div>
      {loading && (
        <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
      )}
      <div className={`absolute inset-0 flex justify-center whitespace-nowrap items-center ${loading ? 'z-50' : 'z-[-10]'}`}>
        <PacmanLoader
          color={"#D8231B"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}
