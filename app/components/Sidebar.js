"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaTasks, FaUserFriends, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";

const navItems = [
  { label: "Home", icon: <FaHome />, href: "/home" },
  { label: "Stages & Checklist", icon: <FaTasks />, href: "/checklist" },
  { label: "Prospect Leads", icon: <FaUserFriends />, href: "/leads" },
  { label: "Settings", icon: <FaCog />, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Topbar */}
      <div className="flex lg:hidden items-center justify-between p-4 bg-blue-600 text-white">
        <h1 className="text-xl font-bold">Financials & Targets</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      lg:translate-x-0 lg:static transition-transform duration-200 ease-in-out bg-gradient-to-b from-blue-700 to-blue-500 w-64 p-6 text-white z-50`}>
        <div className="flex flex-col justify-between h-full">
          {/* Menu Items */}
          <div>
            <h1 className="text-2xl font-bold mb-10 hidden lg:block">Financials & Targets</h1>
            <ul className="space-y-4">
              {navItems.map(({ label, icon, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)} // close menu on mobile
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                      pathname === href
                        ? "bg-blue-900 text-white font-semibold"
                        : "hover:bg-blue-600"
                    }`}
                  >
                    {icon}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logout Button */}
          <div>
            <button className="flex items-center gap-2 hover:underline text-sm">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Background overlay when mobile menu open */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)} />}
    </>
  );
}
