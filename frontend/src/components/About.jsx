// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Target, Trophy, Users, School, HeartHandshake, Globe, Award, CalendarCheck } from 'lucide-react';

export default function About() {
  const goals = [
    { icon: Target, title: "Мета", text: "Формування здорового способу життя учнівської та студентської молоді" },
    { icon: Trophy, title: "Завдання", text: "Організація та проведення всеукраїнських спортивних змагань" },
    { icon: Users, title: "Розвиток", text: "Підвищення кваліфікації викладачів фізичної культури" },
    { icon: School, title: "Інфраструктура", text: "Модернізація спортивних майданчиків у вищих закладах освіти" },
  ];

  const team = [
    { name: "Олена Василівна Ковальчук", position: "Начальник управління", desc: "Кандидат наук з фізичного виховання, 20+ років досвіду" },
    { name: "Ігор Петрович Сидоренко", position: "Заступник начальника", desc: "Майстер спорту України з легкої атлетики" },
    { name: "Марія Олександрівна Литвин", position: "Головний спеціаліст", desc: "Координатор програми «Здорова Україна»" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-900 text-white py-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="container-max relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Про управління
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Ми відповідаємо за розвиток фізичної культури і спорту в усіх закладах освіти України
          </p>
        </motion.div>
      </section>

      {/* Основна інформація */}
      <section className="container-max py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Управління фізичної культури і спорту<br />
              Міністерства освіти і науки України
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Створено у 2015 році як структурний підрозділ МОН України. Ми координуємо спортивне життя у понад <strong>16 000 шкіл</strong>, 
              <strong> 700 ПТНЗ</strong> та <strong>500 вищих навчальних закладах</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Наша діяльність охоплює організацію всеукраїнських і регіональних змагань, розвиток програм фізичного виховання, 
              модернізацію спортивної інфраструктури та підготовку педагогічних кадрів.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "2015", label: "рік створення" },
              { value: "16 000+", label: "закладів під наглядом" },
              { value: "1.5 млн", label: "учасників щороку" },
              { value: "42", label: "види спорту" },
            ].map((item, i) => (
              <div key={i} className="card p-8 text-center">
                <div className="text-5xl font-bold text-indigo-600 mb-2">{item.value}</div>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Мета та завдання */}
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-20">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Мета та основні завдання
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 text-center group hover:shadow-2xl transition-all"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <goal.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{goal.title}</h3>
                <p className="text-gray-600">{goal.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Керівництво */}
      <section className="container-max py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Керівництво управління
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="card text-center group"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-5xl font-bold shadow-xl">
                {person.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{person.name}</h3>
              <p className="text-indigo-600 font-semibold mt-2">{person.position}</p>
              <p className="text-gray-600 text-sm mt-3">{person.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Досягнення */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Наші досягнення за 2024–2025 роки
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, value: "850+", label: "міжнародних нагород" },
              { icon: Globe, value: "42", label: "країни-учасниці змагань" },
              { icon: CalendarCheck, value: "1200+", label: "проведених заходів" },
            ].map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="card p-10 text-center"
              >
                <ach.icon className="w-16 h-16 mx-auto mb-6 text-amber-600" />
                <div className="text-5xl font-bold text-gray-800 mb-2">{ach.value}</div>
                <p className="text-lg text-gray-700">{ach.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}