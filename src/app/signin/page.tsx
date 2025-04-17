"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { supabase } from "../../lib/supabase";
import Nav from "@/components/Nav/nav";

const Login = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.2 } },
    };

    // State pour les inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // Gestion de la connexion avec email/mot de passe
    // const handleLogin = async (e: any) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     const { error } = await supabase.auth.signInWithPassword({
    //         email,
    //         password,
    //     });
    //     if (error) {
    //         console.error("Erreur de connexion:", error.message);
    //     } else {
    //         window.location.href = "/dashboard";
    //     }
    //     setLoading(false);
    // };

    // Connexion avec Google
    // const handleGoogleLogin = async () => {
    //     await supabase.auth.signInWithOAuth({
    //         provider: "google",
    //         options: { redirectTo: `${window.location.origin}/dashboard` },
    //     });
    // };

    // Connexion avec Microsoft
    // const handleMicrosoftLogin = async () => {
    //     await supabase.auth.signInWithOAuth({
    //         provider: "azure",
    //         options: { redirectTo: `${window.location.origin}/dashboard` },
    //     });
    // };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex flex-col ">
            <Nav />
            <div className="flex-1 flex items-center justify-center p-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md"
                >
                    {/* Titre */}
                    <motion.h1
                        variants={fadeIn}
                        className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                    >
                        Connexion à Rekap
                    </motion.h1>

                    {/* Formulaire */}
                    <form >
                        <motion.div variants={fadeIn} className="space-y-4">
                            {/* Email */}
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Input
                                    type="email"
                                    placeholder="Adresse email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-10 w-full"
                                    required
                                />
                            </div>

                            {/* Mot de passe */}
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Input
                                    type="password"
                                    placeholder="Mot de passe"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-10 w-full"
                                    required
                                />
                            </div>

                            {/* Lien mot de passe oublié */}
                            <Link
                                href="/forgot-password"
                                className="text-sm text-blue-600 hover:underline block text-right"
                            >
                                Mot de passe oublié ?
                            </Link>

                            {/* Bouton connexion */}
                            <Button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                                disabled={loading}
                            >
                                {loading ? "Connexion..." : "Se connecter"}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.div>
                    </form>

                    {/* Séparateur */}
                    <motion.div
                        variants={fadeIn}
                        className="my-6 flex items-center justify-center"
                    >
                        <div className="h-px bg-gray-300 dark:bg-gray-600 w-full"></div>
                        <span className="px-3 text-gray-500 dark:text-gray-400">ou</span>
                        <div className="h-px bg-gray-300 dark:bg-gray-600 w-full"></div>
                    </motion.div>

                    {/* Connexion avec Google/Microsoft */}
                    <motion.div variants={fadeIn} className="space-y-3">
                        <Button
                            variant="outline"
                            className="w-full flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                            // onClick={handleGoogleLogin}
                        >
                            <Image src="/google-logo.svg" alt="Google" width={20} height={20} />
                            Continuer avec Google
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                            // onClick={handleMicrosoftLogin}
                        >
                            <Image
                                src="/microsoft-logo.svg"
                                alt="Microsoft"
                                width={20}
                                height={20}
                            />
                            Continuer avec Microsoft
                        </Button>
                    </motion.div>

                    {/* Lien inscription */}
                    <motion.p
                        variants={fadeIn}
                        className="text-center mt-6 text-gray-600 dark:text-gray-300"
                    >
                        Pas de compte ?{" "}
                        <Link href="/signup" className="text-blue-600 hover:underline">
                            S'inscrire
                        </Link>
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;