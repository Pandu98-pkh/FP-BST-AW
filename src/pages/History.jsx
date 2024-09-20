import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const History = () => {
  // Mengambil data history dari Redux store
  const eventHistory = useSelector((state) => state.events.history);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section
        className="flex-grow relative w-full h-full mt-20"
        style={{
          backgroundImage: `url(https://www.its.ac.id/news/wp-content/uploads/sites/2/2022/08/Gedung-Rektorat-Institut-Teknologi-Sepuluh-Nopember-ITS.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" /> {/* Overlay Gelap */}
        <div className="relative container mx-auto py-16 px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-white">History Event</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {eventHistory.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-1/2 md:w-1/3"
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default History;
