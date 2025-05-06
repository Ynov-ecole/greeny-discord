
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Defi = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [acceptedChallenges, setAcceptedChallenges] = useState<Array<{id: number, completed: boolean}>>([]);

  // Liste des défis écologiques
  const challenges = [
    {
      id: 1,
      title: "Journée sans viande",
      description: "Passe une journée entière sans consommer de viande pour réduire ton empreinte carbone.",
      impact: "Une journée sans viande peut économiser jusqu'à 1.5 kg de CO2.",
      difficulty: "Facile"
    },
    {
      id: 2,
      title: "Zéro déchet alimentaire",
      description: "Ne jette aucun reste alimentaire aujourd'hui. Conserve, congèle ou composte tout ce qui reste.",
      impact: "Réduction des déchets et économie de ressources.",
      difficulty: "Moyen"
    },
    {
      id: 3,
      title: "Douche de 5 minutes",
      description: "Limite tes douches à 5 minutes maximum pendant une semaine.",
      impact: "Économise jusqu'à 100 litres d'eau par douche!",
      difficulty: "Moyen"
    },
    {
      id: 4,
      title: "Transport écologique",
      description: "Utilise uniquement des moyens de transport écologiques (marche, vélo, transports en commun) pendant 3 jours.",
      impact: "Réduit significativement ton empreinte carbone journalière.",
      difficulty: "Difficile"
    },
    {
      id: 5,
      title: "Chasse aux veilles",
      description: "Identifie et débranche tous les appareils en veille chez toi pendant 24h.",
      impact: "Peut réduire ta consommation électrique de 10%.",
      difficulty: "Facile"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Facile": return "text-green-500";
      case "Moyen": return "text-yellow-500";
      case "Difficile": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  const nextChallenge = () => {
    setCurrentChallenge((prev) => (prev + 1) % challenges.length);
  };

  const acceptChallenge = () => {
    const newChallenge = { 
      id: challenges[currentChallenge].id, 
      completed: false 
    };
    
    // Vérifier si le défi n'est pas déjà accepté
    if (!acceptedChallenges.some(challenge => challenge.id === newChallenge.id)) {
      setAcceptedChallenges([...acceptedChallenges, newChallenge]);
    }
  };

  const completeChallenge = (id: number) => {
    setAcceptedChallenges(acceptedChallenges.map(challenge => 
      challenge.id === id ? { ...challenge, completed: true } : challenge
    ));
  };

  const deleteChallenge = (id: number) => {
    setAcceptedChallenges(acceptedChallenges.filter(challenge => challenge.id !== id));
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
            <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
              Défis Écologiques
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Relève des défis quotidiens pour adopter des habitudes plus écologiques et partage tes réussites avec ta communauté !
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Preview Section */}
      <section className="section py-12 bg-white">
        <div className="container max-w-5xl">
          <div className="bg-[#36393f] rounded-lg shadow-xl overflow-hidden">
            {/* Discord Header */}
            <div className="bg-[#2f3136] p-3 flex items-center">
              <div className="text-white font-medium"># défis-écologiques</div>
            </div>
            
            {/* Messages Container */}
            <div className="p-4 space-y-4 min-h-[400px]">
              {/* Bot Introduction */}
              <div className="flex items-start gap-3 animate-fade-in-up">
                <div className="w-10 h-10 shrink-0 rounded-full bg-greeny-500 flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-greeny-400">Greeny</span>
                    <span className="text-xs text-gray-400">BOT</span>
                    <span className="text-xs text-gray-400">Aujourd'hui à 14:30</span>
                  </div>
                  <div className="mt-1 text-gray-300 bg-[#2f3136] p-3 rounded-lg">
                    <p className="font-semibold text-white">🌱 Défi écologique du jour</p>
                    <p className="mt-2">Bonjour ! Voici un nouveau défi écologique pour toi aujourd'hui.</p>
                  </div>
                </div>
              </div>

              {/* Challenge Details */}
              <div className="flex items-start gap-3 animate-fade-in-up">
                <div className="w-10 h-10 shrink-0 rounded-full bg-greeny-500 flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-greeny-400">Greeny</span>
                    <span className="text-xs text-gray-400">BOT</span>
                    <span className="text-xs text-gray-400">Aujourd'hui à 14:31</span>
                  </div>
                  <div className="mt-1 text-gray-300 bg-[#2f3136] p-3 rounded-lg">
                    <p className="font-semibold text-white">{challenges[currentChallenge].title}</p>
                    <div className="mt-2">
                      <p>{challenges[currentChallenge].description}</p>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center">
                          <span className="font-semibold text-sm mr-2">Impact:</span>
                          <span className="text-sm text-greeny-400">{challenges[currentChallenge].impact}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-semibold text-sm mr-2">Difficulté:</span>
                          <span className={`text-sm ${getDifficultyColor(challenges[currentChallenge].difficulty)}`}>
                            {challenges[currentChallenge].difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <Button 
                        className="bg-greeny-500 hover:bg-greeny-600 text-white px-4 py-2 rounded-md text-sm"
                        onClick={acceptChallenge}
                      >
                        Relever ce défi
                      </Button>
                      <Button 
                        className="bg-[#4f545c] hover:bg-[#5d6269] text-white px-4 py-2 rounded-md text-sm"
                        onClick={nextChallenge}
                      >
                        Voir un autre défi
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accepted Challenges */}
              {acceptedChallenges.length > 0 && (
                <div className="flex items-start gap-3 animate-fade-in-up">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    U
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">Utilisateur</span>
                      <span className="text-xs text-gray-400">Aujourd'hui à 14:35</span>
                    </div>
                    <div className="mt-1 text-gray-300">
                      <p>J'ai accepté les défis suivants :</p>
                      <div className="mt-2 space-y-2">
                        {acceptedChallenges.map((acceptedChallenge) => {
                          const challenge = challenges.find(c => c.id === acceptedChallenge.id);
                          return challenge ? (
                            <div 
                              key={challenge.id} 
                              className={`p-2 rounded-md ${
                                acceptedChallenge.completed ? "bg-green-900/30 border border-green-700" : "bg-[#2f3136]"
                              }`}
                            >
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  {acceptedChallenge.completed && (
                                    <span className="text-green-400">✓</span>
                                  )}
                                  <span>{challenge.title}</span>
                                </div>
                                <div className="flex gap-2">
                                  {!acceptedChallenge.completed && (
                                    <button 
                                      className="text-xs bg-green-700 hover:bg-green-600 text-white px-2 py-1 rounded"
                                      onClick={() => completeChallenge(challenge.id)}
                                    >
                                      Terminé
                                    </button>
                                  )}
                                  <button 
                                    className="text-xs bg-red-700 hover:bg-red-600 text-white px-2 py-1 rounded"
                                    onClick={() => deleteChallenge(challenge.id)}
                                  >
                                    Supprimer
                                  </button>
                                </div>
                              </div>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bot Response to Challenges */}
              {acceptedChallenges.some(c => c.completed) && (
                <div className="flex items-start gap-3 animate-fade-in-up">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-greeny-500 flex items-center justify-center text-white font-bold">
                    G
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-greeny-400">Greeny</span>
                      <span className="text-xs text-gray-400">BOT</span>
                      <span className="text-xs text-gray-400">Aujourd'hui à 14:40</span>
                    </div>
                    <div className="mt-1 text-gray-300 bg-[#2f3136] p-3 rounded-lg">
                      <p className="font-semibold text-white">🎉 Félicitations !</p>
                      <p className="mt-2">
                        Super travail ! Tu as complété {acceptedChallenges.filter(c => c.completed).length} défi(s).
                        Continue comme ça pour gagner plus de points écologiques !
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Input Area */}
            <div className="bg-[#40444b] p-4">
              <div className="bg-[#2f3136] rounded-lg flex items-center p-2">
                <div className="bg-greeny-500 text-white p-1 rounded text-xs mr-2">/</div>
                <div className="text-gray-400 text-sm">Message #défis-écologiques</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Info Section */}
      <section className="section bg-gradient-to-br from-greeny-50 to-greeny-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Pourquoi relever des défis écologiques ?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Les petites actions quotidiennes peuvent avoir un impact significatif sur l'environnement. Nos défis te permettent de développer des habitudes plus écologiques de façon ludique et motivante.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 bg-white border-greeny-100">
                <div className="h-12 w-12 bg-greeny-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-greeny-500" />
                </div>
                <h3 className="font-semibold mb-2">Adaptés à ton quotidien</h3>
                <p className="text-gray-600">Des défis conçus pour s'intégrer facilement dans ta vie de tous les jours.</p>
              </Card>
              
              <Card className="p-6 bg-white border-greeny-100">
                <div className="h-12 w-12 bg-greeny-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-greeny-500" />
                </div>
                <h3 className="font-semibold mb-2">Impact mesurable</h3>
                <p className="text-gray-600">Chaque défi est accompagné d'informations sur son impact écologique réel.</p>
              </Card>
              
              <Card className="p-6 bg-white border-greeny-100">
                <div className="h-12 w-12 bg-greeny-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-greeny-500" />
                </div>
                <h3 className="font-semibold mb-2">Communauté motivante</h3>
                <p className="text-gray-600">Partage tes réussites avec ta communauté Discord et motivez-vous mutuellement.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Prêt à passer à l'action pour la planète ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ajoute Greeny à ton serveur Discord et commence à relever des défis écologiques avec ta communauté.
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
                <Leaf className="h-5 w-5 mr-2 text-greeny-400" />
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

export default Defi;
