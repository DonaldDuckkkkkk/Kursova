// src/pages/Home.jsx
import { useState } from 'react'; // <--- 1. Додано імпорт useState
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Users, School, Target, CalendarDays, MapPin, Heart } from 'lucide-react';
import { events } from '../data/mockEvents';

export default function Home() {
  // <--- 2. Додано стан для секретної кнопки
  const [showSecret, setShowSecret] = useState(false);

  const oldStats = [
    { title: "1000+", desc: "спортивних заходів щороку" },
    { title: "250 тис.", desc: "студенти беруть участь" },
    { title: "85%", desc: "заклади мають сучасні спортзали" }
  ];

  const stats = [
    { value: "1 250 000+", label: "студенти залучено до спорту", icon: Users },
    { value: "48 000+", label: "спортивних секцій", icon: Trophy },
    { value: "92%", label: "заклади мають спортзали", icon: School },
    { value: "850+", label: "міжнародних нагород 2024–2025", icon: Target },
  ];

  const upcomingEvents = events.slice(0, 3);

  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="container-max relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Вітаємо в системі управління</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">Розвиток фізичної культури та спорту в закладах освіти України</p>
          
          <div className="flex flex-col items-center gap-6 mt-10">
            <Link to="/events" className="btn-primary text-xl px-12 py-5 shadow-xl shadow-indigo-900/50">Переглянути події</Link>

            {/* <--- 3. ПОЧАТОК: СЕКРЕТНА КНОПКА ---> */}
            <div className="mt-8 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 min-w-[300px]">
              {!showSecret ? (
                <button 
                  onClick={() => setShowSecret(true)}
                  className="text-yellow-300 font-bold hover:text-yellow-400 transition-colors underline decoration-dashed underline-offset-4 text-lg"
                >
                  ✨ Підвищення оцінки ✨
                </button>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <p className="text-lg font-semibold mb-4 text-white">Ви точно хочете отримати 66? 🤨</p>
                  <div className="flex justify-center gap-4">
                    <button 
                      onClick={() => alert("Домовились! Оцінка 66 твоя! 😎")}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-transform hover:scale-105"
                    >
                      Так, дуже)
                    </button>
                    <button 
                      onClick={() => setShowSecret(false)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-transform hover:scale-105"
                    >
                      Ні, байдуже
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
            {/* <--- КІНЕЦЬ: СЕКРЕТНА КНОПКА ---> */}
            
          </div>
        </motion.div>
      </section>

      <section className="container-max -mt-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {oldStats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="card p-10 text-center shadow-xl">
              <div className="text-6xl font-bold text-indigo-600 mb-4">{stat.title}</div>
              <p className="text-xl text-gray-700">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-max py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="card p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
              <stat.icon className="w-14 h-14 mx-auto mb-4 text-indigo-600" />
              <div className="text-4xl font-bold text-gray-800">{stat.value}</div>
              <p className="text-gray-600 mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-20">
        <div className="container-max">
          <div className="text-center mb-12"><h2 className="text-4xl font-bold text-gray-800">Найближчі події</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, i) => (
              <motion.div key={event.id} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} className="card group hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 text-center">
                  <div className="text-5xl font-bold">{new Date(event.date).getDate()}</div>
                  <div className="text-lg">{new Date(event.date).toLocaleDateString('uk-UA', { month: 'long' })}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg group-hover:text-indigo-600 transition">{event.title}</h3>
                  <p className="text-gray-600 mt-2 flex items-center gap-2"><MapPin className="w-4 h-4" /> {event.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/events" className="text-indigo-600 font-bold text-xl hover:underline flex items-center justify-center gap-2">Всі події <span className="text-2xl">→</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-24">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Гордість України — 2025</h2>
            <p className="text-xl text-gray-600">Наші студенти на міжнародній арені</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Дарина Снігур", age: "17 років, м. Київ", achievement: "Золото Юнацької Олімпіади", sport: "Бокс", medal: "1st" },
              { name: "Максим Галіцький", age: "16 років, Львівська обл.", achievement: "Срібло Чемпіонату Європи", sport: "Багатоборство", medal: "2nd" },
              { name: "Команда «Динамо-Юніор»", age: "U-18, м. Харків", achievement: "Чемпіони Європи з футболу", sport: "Футбол", medal: "1st" }
            ].map((hero, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.2 }} className="card group relative overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-4 right-4 text-6xl opacity-20 rotate-12">{hero.medal}</div>
                <div className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-6xl shadow-xl text-white font-serif">{hero.medal === '1st' ? '🥇' : '🥈'}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{hero.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{hero.age}</p>
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 px-6 rounded-full font-bold inline-block mb-4 shadow-md">{hero.achievement}</div>
                  <p className="text-gray-700 font-medium text-lg">{hero.sport}</p>
                  <div className="flex justify-center gap-2 mt-6 text-3xl">🇺🇦</div>
                </div>
                <div className="h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* НОВИЙ БЛОК: На BMW X6M */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black py-32 relative overflow-hidden">
        {/* Додаємо трохи ефектів фону */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="container-max text-center relative z-10"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight">
              На <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500">ЗСУ</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light">
              Наближаємо перемогу разом!
            </p>

            <div className="flex flex-col items-center gap-8">
              <a
                href="https://send.monobank.ua/jar/26GZAe7esd"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
                <div className="relative bg-black border border-gray-800 rounded-3xl px-12 py-8 flex items-center gap-6 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-full p-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Monobank_logo.svg" alt="Mono" className="w-12 h-12" />
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-bold text-white">monobank</div>
                    <div className="text-lg text-pink-400 font-semibold">Розбити банку 🔨</div>
                  </div>
                  <Heart className="w-12 h-12 text-red-500 animate-pulse ml-4" />
                </div>
              </a>

              <p className="text-xl text-gray-400 max-w-2xl mt-4">
                Кожна гривня — це крок до перемоги 🇺🇦<br />
                <span className="text-indigo-400 font-bold">Дякуємо за підтримку!</span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}