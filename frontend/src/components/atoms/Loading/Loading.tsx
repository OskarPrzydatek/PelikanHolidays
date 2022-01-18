export default function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="font-black text-center text-4xl md:text-6xl loading">Loading</h1>

      <style jsx>{`
        @keyframes loading {
          0% {
            content: "";
          }
          25% {
            content: ".";
          }
          50% {
            content: "..";
          }
          75% {
            content: "...";
          }
          100% {
            content: "";
          }
        }
        .loading::after {
          display: inline-block;
          animation: loading steps(1, end) 3s infinite;
          content: "";
        }
      `}</style>
    </div>
  );
}
