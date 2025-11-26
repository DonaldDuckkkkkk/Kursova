import { useState } from 'react';
import { motion } from 'framer-motion';
import { events } from '../data/mockEvents';
import EventCard from '../components/EventCard';
import { Trophy, Users, CalendarDays } from 'lucide-react';

export default function Events() {
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Всі події', icon: CalendarDays },
    { id: 'competition', label: 'Змагання', icon: Trophy },
    { id: 'seminar', label: 'Семінари', icon: Users },
    { id: 'festival', label: 'Фестивалі', icon: CalendarDays },
  ];

  const filtered = filter === 'all' ? events : events.filter(e => e.type === filter);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-900 text-white py-32">
        <div className="container-max text-center">
          <motion.h1 initial={{ y: 50 }} animate={{ y: 0 }} className="text-6xl md:text-8xl font-bold mb-6">
            Події та заходи
          </motion.h1>
          <p className="text-2xl opacity-90">Спортивне життя України починається тут</p>
        </div>
      </section>

      <div className="container-max py-16 -mt-10">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(f => (
            <motion.button
              key={f.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(f.id)}
              className={`px-8 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3 transition-all ${
                filter === f.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white ring-4 ring-blue-300'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              <f.icon className="w-6 h-6" />
              {f.label}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}