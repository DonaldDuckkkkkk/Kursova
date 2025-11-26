import { motion } from 'framer-motion';
import { MapPin, Users, Calendar } from 'lucide-react';

export default function EventCard({ event, index }) {
  const typeColors = {
    competition: "from-orange-500 to-red-600",
    seminar: "from-green-500 to-emerald-600",
    festival: "from-purple-500 to-pink-600",
    holiday: "from-yellow-500 to-amber-600",
    conference: "from-blue-600 to-indigo-700",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="card h-full"
    >
      <div className={`bg-gradient-to-br ${typeColors[event.type] || 'from-blue-600 to-indigo-700'} text-white p-8 text-center`}>
        <div className="text-6xl font-bold">{new Date(event.date).getDate()}</div>
        <div className="text-xl">{new Date(event.date).toLocaleDateString('uk-UA', { month: 'long', year: 'numeric' })}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{event.title}</h3>
        <div className="space-y-3 text-gray-600">
          <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-indigo-500" /> {event.location}</p>
          <p className="flex items-center gap-2"><Users className="w-5 h-5 text-green-500" /> {event.participants} учасників</p>
        </div>
        <button className="mt-6 w-full btn-primary text-center">
          Детальніше →
        </button>
      </div>
    </motion.div>
  );
}