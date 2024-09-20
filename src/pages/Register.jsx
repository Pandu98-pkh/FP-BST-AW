import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    namaLengkap: "",
    nomorWA: "",
    event: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  // Basis nomor untuk setiap event
  const eventBaseNumbers = {
    "#64 : ITS Music Concert": 10000,
    "Event 2": 20000,
    "Event 3": 30000,
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    const baseNumber = eventBaseNumbers[formData.event] || 0; // Dapatkan basis nomor untuk event yang dipilih
    const savedCount = localStorage.getItem(`ticketCount-${formData.event}`);
    const newCount = savedCount ? parseInt(savedCount, 10) + 1 : 1; // Tambah 1 jika ada, jika tidak mulai dari 1

    // Simpan nomor tiket baru ke localStorage
    localStorage.setItem(`ticketCount-${formData.event}`, newCount);

    // Buat nomor tiket dengan format TKT-10001, TKT-20001, dst.
    const ticketNumber = `TKT-${baseNumber + newCount}`;

    // Pindah ke halaman tiket dengan data pendaftaran dan nomor tiket
    navigate("/ticket", { state: { ...formData, ticketNumber } });
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

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
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">Daftar Event</h2>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="namaLengkap">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="namaLengkap"
              id="namaLengkap"
              value={formData.namaLengkap}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="nomorWA">
              Nomor WA
            </label>
            <input
              type="text"
              name="nomorWA"
              id="nomorWA"
              value={formData.nomorWA}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="event">
              Pilih Event
            </label>
            <select
              name="event"
              id="event"
              value={formData.event}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Pilih Event</option>
              <option value="#64 : ITS Music Concert">#64 : ITS Music Concert</option>
              <option value="Event 2">Event 2</option>
              <option value="Event 3">Event 3</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
        </div>

        {showConfirmation && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h3 className="text-xl font-semibold mb-4">Yakin dengan data yang diisi?</h3>
              <div className="flex justify-between">
              <button
                  onClick={handleCancel}
                  className="bg-red-500 text-white py-2 px-4 rounded"
                >
                  Batal
                </button>
                <button
                  onClick={handleConfirm}
                  className="bg-green-500 text-white py-2 px-4 rounded"
                >
                  Iya
                </button>
                
              </div>
            </div>
          </div>

        )}
      </section>
      <Footer />
    </div>
  );
};

export default Register;
