import { supabase } from "./supabaseCLient"

export const handleGoogleSignup = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: `${window.location.origin}/dashboard` },
  });
  if (error) {
    console.error("Google sign-in error: ", error.message);
    alert("Une erreur est survenue lors de la connexion avec Google.");
  }
};

export const handleMicrosoftSignup = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "azure",
    options: { redirectTo: `${window.location.origin}/dashboard` },
  });
  if (error) {
    console.error("Microsoft sign-in error: ", error.message);
    alert("Une erreur est survenue lors de la connexion avec Microsoft.");
  }
};
