// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Phone, Mail, MapPin, Clock, Building2, Heart } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function Contact() {
  const position = [50.4489, 30.4572];

  // SVG-иконка BMW X6 M (чёрно-белая, стильная)
  const BMWIcon = () => (
    <svg width="88" height="88" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V12M2 7l10 5 10-5M2 17l10-5 10 5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="10" r="1.5"/>
      <circle cx="16" cy="10" r="1.5"/>
      <path d="M6 14h12" strokeLinecap="round"/>
      <path d="M8 17h8" strokeLinecap="round"/>
    </svg>
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-900 text-white py-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="container-max relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Контакти</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Ми завжди відкриті до співпраці та готові відповісти на ваші запитання
          </p>
        </motion.div>
      </section>

      {/* Блок "На BMW X6M" — теперь аккуратный и стильный */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="container-max text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            На BMW X6M
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Допоможи начальнику управління здійснити мрію 2026 року
          </p>

          <a
            href="https://send.monobank.ua/jar/26GZAe7esd"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-6 bg-black border-4 border-white rounded-3xl px-12 py-8 shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {/* Градиентный блик */}
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-700"></div>

            {/* Текст */}
            <div className="relative z-10 text-left">
              <div className="text-4xl font-bold text-white leading-tight">monobank</div>
              <div className="text-lg text-pink-400 font-semibold">· збір відкрито ·</div>
            </div>

            {/* Пульсирующее сердце */}
            <Heart className="w-12 h-12 text-red-500 animate-pulse relative z-10" />
          </a>

          <p className="text-lg text-gray-400 mt-8 max-w-2xl mx-auto">
            Кожна гривня наближає до <span className="text-pink-400 font-bold">Перемоги</span><br />
            Дякуємо за підтримку!
          </p>
        </motion.div>
      </section>

      {/* Остальные контакты и карта — без изменений */}
      <div className="container-max py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Зв’яжіться з нами</h2>
            <div className="space-y-8">
              <div className="card p-8 flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Building2 className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Адреса</h3>
                  <p className="text-gray-700 mt-2">03057, м. Київ,<br />проспект Берестейський (Перемоги), 10</p>
                </div>
              </div>
              <div className="card p-8 flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Phone className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Телефон</h3>
                  <p className="text-gray-700 mt-2">+38 (044) 481-32-11<br />+38 (044) 481-47-92</p>
                </div>
              </div>
              <div className="card p-8 flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                  <Mail className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Електронна пошта</h3>
                  <p className="text-gray-700 mt-2">sport@mon.gov.ua<br />fizkultura@mon.gov.ua</p>
                </div>
              </div>
              <div className="card p-8 flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                  <Clock className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Графік роботи</h3>
                  <p className="text-gray-700 mt-2">Пн–Пт: 09:00–18:00 (обід 13:00–13:45)<br />Вихідні: субота, неділя</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full min-h-96">
            <div className="card p-0 overflow-hidden h-full shadow-2xl">
              <MapContainer center={position} zoom={16} style={{ height: '100%', minHeight: '600px' }}>
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={customIcon}>
                  <Popup>
                    <div className="text-center font-semibold">
                      Міністерство Оборони України<br />
                      Управління фізичної культури і спорту
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}