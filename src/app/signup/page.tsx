"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
// import { supabase } from "../../lib/supabase";
import Nav from "@/components/Nav/nav";

const Signup = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.2 } },
    };

    // State for inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle signup with email/password
    // const handleSignup = async (e: any) => {
    //     e.preventDefault();
    //     if (password !== confirmPassword) {
    //         console.error("Les mots de passe ne correspondent pas.");
    //         return;
    //     }
    //     setLoading(true);
    //     const { error } = await supabase.auth.signUp({
    //         email,
    //         password,
    //         options: { emailRedirectTo: `${window.location.origin}/dashboard` },
    //     });
    //     if (error) {
    //         console.error("Erreur d'inscription:", error.message);
    //     } else {
    //         window.location.href = "/dashboard";
    //     }
    //     setLoading(false);
    // };

    // Signup with Google
    // const handleGoogleSignup = async () => {
    //     await supabase.auth.signInWithOAuth({
    //         provider: "google",
    //         options: { redirectTo: `${window.location.origin}/dashboard` },
    //     });
    // };

    // Signup with Microsoft
    // const handleMicrosoftSignup = async () => {
    //     await supabase.auth.signInWithOAuth({
    //         provider: "azure",
    //         options: { redirectTo: `${window.location.origin}/dashboard` },
    //     });
    // };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex flex-col">
            <Nav />
            <div className="flex-1 flex items-center justify-center p-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md"
                >
                    {/* Title */}
                    <motion.h1
                        variants={fadeIn}
                        className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                    >
                        Inscription à Rekap
                    </motion.h1>

                    {/* Form */}
                    <form>
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

                            {/* Password */}
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

                            {/* Confirm Password */}
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Input
                                    type="password"
                                    placeholder="Confirmer le mot de passe"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="pl-10 w-full"
                                    required
                                />
                            </div>

                            {/* Signup Button */}
                            <Button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                                disabled={loading}
                            >
                                {loading ? "Inscription..." : "S'inscrire"}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.div>
                    </form>

                    {/* Separator */}
                    <motion.div
                        variants={fadeIn}
                        className="my-6 flex items-center justify-center"
                    >
                        <div className="h-px bg-gray-300 dark:bg-gray-600 w-full"></div>
                        <span className="px-3 text-gray-500 dark:text-gray-400">ou</span>
                        <div className="h-px bg-gray-300 dark:bg-gray-600 w-full"></div>
                    </motion.div>

                    {/* Google/Microsoft Signup */}
                    <motion.div variants={fadeIn} className="space-y-3">
                        <Button
                            variant="outline"
                            className="w-full flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                            // onClick={handleGoogleSignup}
                        >
                            <Image src="/google-logo.svg" alt="Google" width={20} height={20} />
                            S'inscrire avec Google
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                            // onClick={handleMicrosoftSignup}
                        >
                            <Image
                                src="/microsoft-logo.svg"
                                alt="Microsoft"
                                width={20}
                                height={20}
                            />
                            S'inscrire avec Microsoft
                        </Button>
                    </motion.div>

                    {/* Login Link */}
                    <motion.p
                        variants={fadeIn}
                        className="text-center mt-6 text-gray-600 dark:text-gray-300"
                    >
                        Déjà un compte ?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline">
                            Se connecter
                        </Link>
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
};

export default Signup;