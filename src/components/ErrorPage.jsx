import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <button
          className="bg-white text-blue-500 hover:bg-gray-200 font-medium px-6 py-3 rounded-full shadow-lg"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </button>
      </motion.div>

      <motion.img
        src="https://via.placeholder.com/400x300?text=Lost+in+Space"
        alt="Lost in Space"
        className="mt-10 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />
    </div>
  );
};

export default ErrorPage;
