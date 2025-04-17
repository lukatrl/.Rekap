"use client";
import Nav from '@/components/Nav/nav';
import { Button } from "@/components/ui/button";
import { FileText, Users, Signature, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { supabase } from '../lib/supabase';
import { useEffect, useState } from 'react';


function Home() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };




  useEffect(() => {

  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Navigation */}
      <Nav />



      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="container mx-auto px-4 py-24 text-center"
      >
        <motion.h1
          variants={fadeIn}
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Transformez la Gestion de Votre Entreprise
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Rekap : Partagez des fichiers, signez des contrats et collaborez efficacement avec une plateforme intuitive.
        </motion.p>
        <motion.div variants={fadeIn} className="flex justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300">
            <Link href="/signup">Commencer Gratuitement</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300"
          >
            <Link href="/pro">Découvrir les Fonctionnalités</Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="container mx-auto px-4 py-16"
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl font-bold text-center mb-12"
        >
          Fonctionnalités Clés de Rekap
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FileText className="h-12 w-12 text-blue-600 mb-4" />,
              title: "Gestion de Documents",
              desc: "Stockez, organisez et partagez vos fichiers en toute sécurité.",
            },
            {
              icon: <Signature className="h-12 w-12 text-blue-600 mb-4" />,
              title: "Signatures Électroniques",
              desc: "Signez vos contrats rapidement avec une validité légale.",
            },
            {
              icon: <Users className="h-12 w-12 text-blue-600 mb-4" />,
              title: "Collaboration",
              desc: "Travaillez en équipe en temps réel avec des outils modernes.",
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Rekap en Chiffres</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "10K+", label: "Utilisateurs Actifs" },
              { value: "500K+", label: "Documents Signés" },
              { value: "99.9%", label: "Temps de Disponibilité" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
        <p>© 2025 Rekap. Tous droits réservés.</p>
        <div className="mt-2">
          <Link href="/terms" className="mr-4 hover:underline">Conditions</Link>
          <Link href="/privacy" className="mr-4 hover:underline">Confidentialité</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
