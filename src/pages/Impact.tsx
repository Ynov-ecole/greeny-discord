
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Impact = () => {
  const [username, setUsername] = useState("EcoWarrior42");
  const [messageCount, setMessageCount] = useState(325);
  const [fileCount, setFileCount] = useState(12);
  const [energyUsage, setEnergyUsage] = useState(0.87);
  const [carbonFootprint, setCarbonFootprint] = useState(0.42);

  const handleRefresh = () => {
    // Dans une vraie app, cette fonction ferait un appel API
    // Ici on simule juste une mise à jour des données
    setMessageCount(Math.floor(Math.random() * 500) + 100);
    setFileCount(Math.floor(Math.random() * 30) + 5);
    setEnergyUsage(parseFloat((Math.random() * 1.5 + 0.5).toFixed(2)));
    setCarbonFootprint(parseFloat((Math.random() * 0.8 + 0.2).toFixed(2)));
  };

  // Calculer un score d'éco-responsabilité de 0 à 100
  const ecoScore = Math.max(0, Math.min(100, Math.floor(100 - (carbonFootprint * 100))));
  
  // Déterminer la classe de couleur basée sur le score
  const getScoreColorClass = () => {
    if (ecoScore >= 80) return "text-green-500";
    if (ecoScore >= 60) return "text-green-400";
    if (ecoScore >= 40) return "text-yellow-500";
    if (ecoScore >= 20) return "text-orange-500";
    return "text-red-500";
  };

  // Obtenir un message basé sur le score
  const getScoreMessage = () => {
    if (ecoScore >= 80) return "Excellent ! Tu es un véritable éco-guerrier !";
    if (ecoScore >= 60) return "Très bien ! Ton impact est assez faible.";
    if (ecoScore >= 40) return "Pas mal, mais il y a encore place à amélioration.";
    if (ecoScore >= 20) return "Attention, ton empreinte commence à être élevée.";
    return "Alerte ! Ton empreinte écologique est très élevée.";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-greeny-50">
      {/* Header Section */}
      <section className="section pt-16 pb-8">
        <div className="container">
          <div className="flex items-center mb-6">
            <Link to="/" className="flex items-center text-gray-600 hover:text-greeny-500 transition-colors">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Retour à l'accueil
            </Link>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl/normal font-bold gradient-text mb-4">
              Analyse d'Impact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvre ton empreinte écologique sur Discord et comment tes habitudes numériques affectent l'environnement.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Preview Section */}
      <section className="section py-12 bg-white">
        <div className="container max-w-5xl">
          <div className="bg-[#36393f] rounded-lg shadow-xl overflow-hidden">
            {/* Discord Header */}
            <div className="bg-[#2f3136] p-3 flex items-center">
              <div className="text-white font-medium"># impact-écologique</div>
            </div>
            
            {/* Messages Container */}
            <div className="p-4 space-y-4 min-h-[400px]">
              {/* User Command */}
              <div className="flex items-start gap-3 animate-fade-in-up">
                <div className="w-10 h-10 shrink-0 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  {username.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{username}</span>
                    <span className="text-xs text-gray-400">Aujourd'hui à 15:22</span>
                  </div>
                  <div className="mt-1 text-white bg-[#4f545c] py-1 px-2 rounded inline-block">
                    /impact
                  </div>
                </div>
              </div>

              {/* Bot Response */}
              <div className="flex items-start gap-3 animate-fade-in-up delay-150">
                <div className="w-10 h-10 shrink-0 rounded-full bg-greeny-500 flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div className="flex-1 max-w-full overflow-hidden">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-greeny-400">Greeny</span>
                    <span className="text-xs text-gray-400">BOT</span>
                    <span className="text-xs text-gray-400">Aujourd'hui à 15:22</span>
                  </div>
                  <div className="mt-1 text-gray-300 bg-[#2f3136] p-4 rounded-lg max-w-full overflow-x-auto">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">🌿 Ton Impact Écologique sur Discord</h3>
                        <p>Voici un résumé de ton empreinte numérique sur notre serveur, {username} :</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#40444b] p-4 rounded-lg">
                          <h4 className="font-medium text-greeny-300 mb-2">Activité</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                              <span>Messages envoyés :</span>
                              <span className="font-semibold text-white">{messageCount}</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Fichiers partagés :</span>
                              <span className="font-semibold text-white">{fileCount}</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-[#40444b] p-4 rounded-lg">
                          <h4 className="font-medium text-greeny-300 mb-2">Impact Environnemental</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                              <span>Consommation d'énergie :</span>
                              <span className="font-semibold text-white">{energyUsage} kWh</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Empreinte carbone :</span>
                              <span className="font-semibold text-white">{carbonFootprint} kg CO₂</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-[#40444b] p-4 rounded-lg">
                        <h4 className="font-medium text-greeny-300 mb-2">Éco-Score</h4>
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl font-bold flex-shrink-0 w-16 h-16 rounded-full bg-[#2f3136] flex items-center justify-center">
                            <span className={getScoreColorClass()}>{ecoScore}</span>
                          </div>
                          <div>
                            <p className={`font-medium ${getScoreColorClass()}`}>
                              {getScoreMessage()}
                            </p>
                            <p className="text-sm mt-1">Basé sur ton activité et ta consommation énergétique sur Discord.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-white mb-2">Conseils pour améliorer</h4>
                        <ul className="space-y-2 text-sm list-disc pl-5">
                          <li>Partage des liens plutôt que des fichiers quand c'est possible.</li>
                          <li>Utilise des formats d'image compressés (.webp) au lieu de PNG ou JPEG.</li>
                          <li>Réduis le temps passé en chat vocal ou avec la caméra allumée.</li>
                          <li>Supprime régulièrement les messages et fichiers inutiles.</li>
                        </ul>
                      </div>
                      
                      <div className="text-sm text-gray-400">
                        <p>Cette analyse est basée sur des données estimées et peut varier. Chaque action compte pour réduire notre impact collectif !</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Input Area */}
            <div className="bg-[#40444b] p-4">
              <div className="bg-[#2f3136] rounded-lg flex items-center p-2">
                <div className="bg-greeny-500 text-white p-1 rounded text-xs mr-2">/</div>
                <div className="text-gray-400 text-sm">Message #impact-écologique</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="section bg-gradient-to-br from-greeny-50 to-greeny-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Simule ton Impact
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Essaie notre démo interactive pour comprendre comment ton activité sur Discord affecte ton empreinte écologique.
            </p>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Nom d'utilisateur</label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-greeny-500 focus:border-greeny-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="messages" className="block text-sm font-medium text-gray-700 mb-1">Nombre de messages</label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        id="messages"
                        min="0"
                        max="1000"
                        value={messageCount}
                        onChange={(e) => setMessageCount(parseInt(e.target.value))}
                        className="flex-grow mr-4"
                      />
                      <span className="w-12 text-center">{messageCount}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-1">Fichiers partagés</label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        id="files"
                        min="0"
                        max="50"
                        value={fileCount}
                        onChange={(e) => setFileCount(parseInt(e.target.value))}
                        className="flex-grow mr-4"
                      />
                      <span className="w-12 text-center">{fileCount}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleRefresh}
                    className="w-full bg-greeny-500 hover:bg-greeny-600 text-white"
                  >
                    Calculer mon impact
                  </Button>
                </div>
                
                <div className="bg-[#2f3136] rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4 text-greeny-400">Résultats</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>Consommation d'énergie</span>
                        <span>{energyUsage} kWh</span>
                      </div>
                      <div className="w-full bg-[#40444b] rounded-full h-2.5">
                        <div 
                          className="bg-greeny-500 h-2.5 rounded-full" 
                          style={{ width: `${Math.min(100, (energyUsage / 2) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>Empreinte carbone</span>
                        <span>{carbonFootprint} kg CO₂</span>
                      </div>
                      <div className="w-full bg-[#40444b] rounded-full h-2.5">
                        <div 
                          className="bg-greeny-500 h-2.5 rounded-full" 
                          style={{ width: `${Math.min(100, (carbonFootprint / 1) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>Éco-Score</span>
                        <span className={getScoreColorClass()}>{ecoScore}/100</span>
                      </div>
                      <div className="w-full bg-[#40444b] rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            ecoScore >= 80 ? "bg-green-500" :
                            ecoScore >= 60 ? "bg-green-400" :
                            ecoScore >= 40 ? "bg-yellow-500" :
                            ecoScore >= 20 ? "bg-orange-500" : "bg-red-500"
                          }`}
                          style={{ width: `${ecoScore}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="text-sm border-t border-[#40444b] pt-4 mt-4">
                      <p className={getScoreColorClass()}>{getScoreMessage()}</p>
                      <p className="text-gray-300 mt-2">
                        {ecoScore < 50 
                          ? "Essaie de réduire ton impact en limitant le partage de fichiers volumineux."
                          : "Continue sur cette voie pour un Discord plus écologique !"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Info Cards Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Pourquoi mesurer ton impact ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprendre ton empreinte numérique est la première étape vers des pratiques plus durables.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border-greeny-100 hover:bg-greeny-50 hover:-translate-y-2 hover:border-greeny-300 transition-all duration-300">
              <div className="h-12 w-12 bg-greeny-100 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-greeny-500" />
              </div>
              <h3 className="font-semibold mb-2">Sensibilisation</h3>
              <p className="text-gray-600">Prendre conscience de l'impact environnemental de nos activités numériques quotidiennes.</p>
            </Card>
            
            <Card className="p-6 bg-white border-greeny-100 hover:bg-greeny-50 hover:-translate-y-2 hover:border-greeny-300 transition-all duration-300">
              <div className="h-12 w-12 bg-greeny-100 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-greeny-500" />
              </div>
              <h3 className="font-semibold mb-2">Action collective</h3>
              <p className="text-gray-600">Encourager toute la communauté à adopter des comportements plus responsables en ligne.</p>
            </Card>
            
            <Card className="p-6 bg-white border-greeny-100 hover:bg-greeny-50 hover:-translate-y-2 hover:border-greeny-300 transition-all duration-300">
              <div className="h-12 w-12 bg-greeny-100 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-greeny-500" />
              </div>
              <h3 className="font-semibold mb-2">Progrès mesurable</h3>
              <p className="text-gray-600">Suivre l'évolution de ton empreinte écologique au fil du temps et célébrer tes améliorations.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-greeny-50 to-greeny-100">
        <div className="container text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Prêt à mesurer ton impact écologique ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ajoute Greeny à ton serveur Discord et commence dès maintenant à sensibiliser ta communauté à l'écologie.
          </p>
          <Button size="lg" className="bg-greeny-500 hover:bg-greeny-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
            Inviter Greeny sur Discord
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-greeny-400" />
                Greeny
              </h3>
              <p className="text-gray-400">
                Un bot Discord pour sensibiliser à l'écologie, un message à la fois.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liens</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/orgs/Ynov-ecole/repositories" className="text-gray-400 hover:text-greeny-400 transition-colors">GitHub</a></li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-greeny-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/mentions-legales" className="text-gray-400 hover:text-greeny-400 transition-colors">
                    Mentions légales
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Projet</h3>
              <p className="text-gray-400">
                Projet réalisé lors d'un hackathon IA – mai 2025
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Greeny Bot. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Impact;
