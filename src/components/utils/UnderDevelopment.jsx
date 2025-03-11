import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

export default function UnderDevelopment() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[300px] p-8 rounded-lg bg-neutral-900/50 border border-neutral-800">
      <div className="flex items-center gap-4 mb-4">
        <SettingsRoundedIcon className="text-[#C8FF88] text-4xl [animation:spin_3s_linear_infinite]" />
        <h2 className="text-3xl font-bold text-white">Under Development</h2>
      </div>
      <div className="text-neutral-400 text-center max-w-md mb-8">
        <p>We're working hard to bring you something amazing.</p>
        <p>This feature will be available soon!</p>
      </div>
      <div className="w-64 h-2 bg-neutral-800 rounded-full overflow-hidden">
        <div
          className="w-1/3 h-full bg-[#C8FF88] rounded-full"
          style={{
            animation: "bounce-lr 1.5s infinite",
          }}
        />
      </div>
      <style jsx>{`
        @keyframes bounce-lr {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(200%);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
