import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center relative">
        <h1 className="text-9xl font-bold text-purple-600">404</h1>
        <div className="bg-purple-600 px-2 text-sm rounded rotate-12 absolute top-[20px] left-[50%] translate-x-[-50%]">
          Page Not Found
        </div>
        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-4">
            Looks like you've found the doorway to the great nothing
          </h3>
          <p className="text-gray-400 text-sm mb-8">
            Sorry about that! Please visit our homepage to get where you need to
            go.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 inline-block"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
