import { NavLink } from 'react-router-dom';
import { Trophy } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { to: '/', label: 'Головна' },
    { to: '/about', label: 'Про нас' },
    { to: '/events', label: 'Події' },
    { to: '/contact', label: 'Контакти' },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 text-white shadow-2xl sticky top-0 z-50">
      <div className="container-max flex items-center justify-between py-5">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-4 rounded-full">
            <Trophy className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Управління фізичної культури і спорту</h1>
            <p className="text-sm opacity-90">Міністерство Оборони України</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-6 py-3 rounded-xl font-medium transition-all ${
                  isActive
                    ? 'bg-white/25 text-white shadow-lg'
                    : 'hover:bg-white/10'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}