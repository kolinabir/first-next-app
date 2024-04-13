"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-4xl text-center text-red-400">Error Page</h1>
      <div>
        {/* add stuy;es */}
        <h2 className="text-2xl text-center text-red-400">{error.message}</h2>
        <button
          onClick={reset}
          className="bg-red-400 text-white p-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
