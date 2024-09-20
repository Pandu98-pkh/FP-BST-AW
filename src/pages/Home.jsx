import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Home = () => {
  const navigate = useNavigate();
  const eventHistory = useSelector((state) => state.events.history.slice(0, 2));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[92vh] flex items-center mt-20">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.its.ac.id/diesnatalis/wp-content/uploads/sites/105/2024/05/video-logo.mp4"
        />
        <div className="absolute inset-0 flex items-center pl-10 bg-black bg-opacity-50">
          <div className="p-6 rounded-lg text-left max-w-lg">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Dies Natalis ke 64 ITS
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              #64 : ITS Music Concert
            </p>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded transition"
              onClick={() => navigate("/register")}
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-100 flex-grow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            History Event
          </h2>
          <div className="flex flex-col items-center gap-8">
            {eventHistory.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-3/4 lg:w-1/2"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <p className="text-gray-500">
                    <strong>Tahun:</strong> {event.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
              onClick={() => navigate("/history")}
            >
              Show All
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
