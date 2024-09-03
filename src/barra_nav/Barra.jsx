import './Barra.css'
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';

export function Barra() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex-auto text-center text-3xm text-white bg-black">
                <h1>envios gratis a todo la provincia de neuque</h1>
            </div>
            <nav className="bg-gray-800 p-2">
                <div className="container mx-auto flex justify-between items-center">
                    <NavLink to="/" className="text-white text-lg font-semibold">
                        <img id='logo' src="/img/logo.png" alt="The world gamer" />
                    </NavLink>
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white">
                            Inicio
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Servicios
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Acerca de
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Contacto
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-gray-300 hover:text-white focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <a href="#" className="block px-2 py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
                            Inicio
                        </a>
                        <a href="#" className="block px-2 py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
                            Servicios
                        </a>
                        <a href="#" className="block px-2 py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
                            Acerca de
                        </a>
                        <a href="#" className="block px-2 py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
                            Contacto
                        </a>
                    </div>
                )}
            </nav>

        </>
    )
}