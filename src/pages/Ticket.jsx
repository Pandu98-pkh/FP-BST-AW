import { useEffect, useRef } from "react";
import { useLocation, Navigate } from "react-router-dom";
import html2canvas from "html2canvas"; // Import html2canvas
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Ticket = () => {
  const location = useLocation();
  const ticketRef = useRef(null); // Referensi untuk elemen tiket

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js';
    script.onload = () => {
      const qrcodeElement = document.getElementById("qrcode");
      qrcodeElement.innerHTML = ""; // Kosongkan konten sebelumnya
      if (location.state) {
        new window.QRCode(qrcodeElement, {
          text: location.state.ticketNumber,
          width: 128,
          height: 128,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [location.state]);

  if (!location.state) {
    return <Navigate to="/" />;
  }

  const { email, namaLengkap, nomorWA, event, ticketNumber } = location.state;

  // Fungsi untuk mendownload tiket keseluruhan
  const downloadTicket = () => {
    html2canvas(ticketRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `Tiket-${ticketNumber}.png`; // Nama file untuk diunduh
      link.click();
    });
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
        <div className="relative container mx-auto py-16 px-4" ref={ticketRef}>
          <h2 className="text-3xl font-semibold text-center mb-8 text-white">Tiket Event</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
            {/* Tempat untuk QR Code di tengah */}
            <div id="qrcode" className="flex justify-center mb-6"></div>
            
            {/* Tabel untuk menampilkan informasi tiket */}
            <table className="min-w-full text-left border-collapse">
                <tr>
                  <th className="p-2 text-lg font-semibold bg-gray-200">Nama Event</th>
                  <td className="border font-semibold p-2">{event}</td>
                </tr>
                <tr>
                  <th className="p-2 text-lg font-semibold bg-gray-200">Nomor Tiket</th>
                  <td className="border p-2">{ticketNumber}</td>
                </tr>
                <tr>
                  <th className="p-2 text-lg font-semibold bg-gray-200">Nama</th>
                  <td className="border p-2">{namaLengkap}</td>
                </tr>
                <tr>
                  <th className="p-2 text-lg font-semibold bg-gray-200">Email</th>
                  <td className="border p-2">{email}</td>
                </tr>
                <tr>
                  <th className="p-2 text-lg font-semibold bg-gray-200">Nomor WA</th>
                  <td className="border p-2">{nomorWA}</td>
                </tr>
            </table>
            {/* Tombol Download Tiket */}
            <div className="text-center mt-6">
              <button 
                onClick={downloadTicket} 
                className="bg-blue-500 text-white p-2 rounded"
              >
                Download Tiket
              </button>
            </div>
            
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Ticket;
