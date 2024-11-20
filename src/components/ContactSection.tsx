import React, { useState } from "react";
import { motion } from "framer-motion";
import { animationVariants } from "./data/constants";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add form submission logic here
        console.log(formData);
    };

    return (
        <div id="contact" className="container max-w-screen-xl mx-auto mt-40 px-4">
            <motion.h1
                variants={animationVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
            >
                Contáctame
            </motion.h1>

            <div className="w-full mt-20 border-2 border-primary bg-white/30 p-8 rounded-3xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-white mb-2">Nombre</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-white/20 text-white border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-white mb-2">Correo Electrónico</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-white/20 text-white border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-white mb-2">Mensaje</label>
                        <textarea 
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full p-3 rounded-lg bg-white/20 text-white border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button 
                            type="submit" 
                            className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/80 transition-colors duration-300"
                        >
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;