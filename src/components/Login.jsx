import { useState } from "react";
import { supabase } from "../supabase";
import Brand from "../components/common/Brand";

function Login({ setConnected, setRole }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  async function login() {

    console.log("📱 Bouton connexion cliqué");

    if (!username || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username.trim())
      .eq("password", password.trim())
      .single();

    console.log("📦 Réponse Supabase :", { data, error });

    setLoading(false);

    if (error || !data) {
      alert("Identifiants incorrects.");
      return;
    }

    console.log(data);

    if (!data.active) {
      alert("Ce compte a été désactivé par le propriétaire.");
      return;
    }

    localStorage.setItem("connected", "true");
    localStorage.setItem("username", data.username);
    localStorage.setItem("fullname", data.fullname || "");
    localStorage.setItem("role", data.role);
    localStorage.setItem("userId", data.id);

    if (setRole) {
      setRole(data.role);
    }

    if (rememberMe) {
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberMe");
    }

    alert("Bienvenue 👋");

    setConnected(true);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      login();
    }
  }
    return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F8F8] via-white to-[#EFEFEF] flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl border border-gray-200 p-10">

        <Brand />

        <div className="mt-10">

          <label className="block mb-2 font-semibold text-gray-700">
            Utilisateur
          </label>

          <input
            className="w-full p-4 rounded-2xl border-2 border-gray-200 outline-none focus:border-[#C41414] transition"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
          />

        </div>

        <div className="mt-6">

          <label className="block mb-2 font-semibold text-gray-700">
            Mot de passe
          </label>

          <div className="relative">

            <input
              className="w-full p-4 rounded-2xl border-2 border-gray-200 outline-none focus:border-[#C41414] transition"
              type={showPassword ? "text" : "password"}
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button
              type="button"
              className="absolute right-4 top-4 text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>

          </div>

        </div>

        <div className="flex justify-between items-center mt-6">

          <label className="flex items-center gap-2 text-sm">

            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />

            Se souvenir de moi

          </label>

          <button
            type="button"
            className="text-[#1F4D2E] font-semibold hover:underline"
          >
            Mot de passe oublié ?
          </button>

        </div>

        <button
          onClick={login}
          disabled={loading}
          className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-[#C41414] to-[#8B0000] text-white font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>

        <div className="mt-8 text-center text-xs text-gray-400">
          © 2026 LE BELDI
        </div>

      </div>

    </div>
  );
  }

export default Login;