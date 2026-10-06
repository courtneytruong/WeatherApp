function LoadingScreen({ message }) {
  return (
    <div className="flex justify-center m-4 pt-32">
      <div
        className="flex flex-col items-center gap-4 p-8 w-full max-w-sm
                  bg-linear-to-b from-neutral-900 to-neutral-100/20 rounded-xl
                  text-white text-shadow-lg/50 font-semibold"
      >
        <div className="h-12 w-12 rounded-full border-4 border-white/40 border-t-white animate-spin" />

        <div className="text-xl">{message}</div>
      </div>
    </div>
  );
}

export default LoadingScreen;
