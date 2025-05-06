import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MessageSquare, Leaf, Droplets, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Tips = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Tips data organized by categories
  const tipCategories = {
    water: {
      icon: <Droplets className="h-5 w-5 text-blue-500" />,
      title: "Économie d'eau",
      tips: [
        {
          title: "Douches courtes",
          description: "Prends des douches de 5 minutes maximum pour économiser jusqu'à 70 litres d'eau."
        },
        {
          title: "Robinet fermé",
          description: "Ferme le robinet pendant que tu te brosses les dents pour économiser jusqu'à 12 litres d'eau."
        },
        {
          title: "Eau de pluie",
          description: "Récupère l'eau de pluie pour arroser tes plantes et ton jardin."
        }
      ]
    },
    energy: {
      icon: <Zap className="h-5 w-5 text-yellow-500" />,
      title: "Économie d'énergie",
      tips: [
        {
          title: "Appareils en veille",
          description: "Débranche les appareils électroniques en veille pour économiser jusqu'à 10% de ta facture d'électricité."
        },
        {
          title: "Lumières éteintes",
          description: "N'oublie pas d'éteindre les lumières quand tu quittes une pièce."
        },
        {
          title: "Ampoules LED",
          description: "Utilise des ampoules LED qui consomment jusqu'à 80% moins d'électricité que les ampoules traditionnelles."
        }
      ]
    },
    waste: {
      icon: <Leaf className="h-5 w-5 text-greeny-500" />,
      title: "Réduction des déchets",
      tips: [
        {
          title: "Compostage",
          description: "Composte tes déchets organiques pour réduire jusqu'à 30% de tes poubelles."
        },
        {
          title: "Produits réutilisables",
          description: "Utilise des sacs réutilisables, des gourdes et des contenants alimentaires réutilisables."
        },
        {
          title: "Achats en vrac",
          description: "Privilégie les achats en vrac pour réduire les emballages inutiles."
        }
      ]
    }
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
              Conseils Écologiques
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvre des conseils pratiques pour adopter un mode de vie plus écologique au quotidien !
            </p>
          </div>
        </div>
      </section>

      {/* Discord Tips Preview Section */}
      <section className="section py-12 bg-white">
        <div className="container max-w-5xl">
          {/* Removed search bar */}
          
          <div className="bg-[#36393f] rounded-lg shadow-xl overflow-hidden">
            {/* Discord Header */}
            <div className="bg-[#2f3136] p-3 flex items-center">
              <div className="text-white font-medium"># écologie-et-astuces</div>
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
                    <p className="font-semibold text-white">🌿 Conseils écologiques</p>
                    <p className="mt-2">Tu peux me demander des conseils sur différents sujets liés à l'écologie :</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {Object.entries(tipCategories).map(([key, category]) => (
                        <button
                          key={key}
                          onClick={() => setSelectedCategory(prevCategory => prevCategory === key ? null : key)}
                          className={`flex items-center gap-1 px-3 py-1 rounded-md transition-all ${
                            selectedCategory === key 
                              ? "bg-greeny-500 text-white" 
                              : "bg-[#4f545c] hover:bg-[#5d6269] text-gray-200"
                          }`}
                        >
                          {category.icon}
                          {category.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* User Message - Only show if a category is selected */}
              {selectedCategory && (
                <div className="flex items-start gap-3 animate-fade-in-up">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    U
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">Utilisateur</span>
                      <span className="text-xs text-gray-400">Aujourd'hui à 14:32</span>
                    </div>
                    <div className="mt-1 text-gray-300">
                      <p>/tip {tipCategories[selectedCategory as keyof typeof tipCategories].title.toLowerCase()}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Bot Response - Show tips for selected category */}
              {selectedCategory && (
                <div className="flex items-start gap-3 animate-fade-in-up">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-greeny-500 flex items-center justify-center text-white font-bold">
                    G
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-greeny-400">Greeny</span>
                      <span className="text-xs text-gray-400">BOT</span>
                      <span className="text-xs text-gray-400">Aujourd'hui à 14:32</span>
                    </div>
                    <div className="mt-1 text-gray-300 bg-[#2f3136] p-3 rounded-lg">
                      <div className="flex items-center gap-2 font-semibold text-white">
                        {tipCategories[selectedCategory as keyof typeof tipCategories].icon}
                        <span>Conseils pour {tipCategories[selectedCategory as keyof typeof tipCategories].title.toLowerCase()}</span>
                      </div>
                      
                      <ul className="mt-2 space-y-3">
                        {tipCategories[selectedCategory as keyof typeof tipCategories].tips.map((tip, index) => (
                          <li key={index} className="bg-[#40444b] p-3 rounded-md">
                            <p className="font-semibold text-white">{tip.title}</p>
                            <p className="text-gray-300 mt-1">{tip.description}</p>
                          </li>
                        ))}
                      </ul>
                      
                      <p className="mt-4 text-greeny-300 text-sm">
                        Tu peux aussi demander des conseils sur d'autres sujets comme la mobilité durable, l'alimentation responsable, etc.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Removed search results section */}

              {/* Default message when no category is selected */}
              {!selectedCategory && (
                <div className="flex items-start gap-3 animate-fade-in-up">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-greeny-500 flex items-center justify-center text-white font-bold">
                    G
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-greeny-400">Greeny</span>
                      <span className="text-xs text-gray-400">BOT</span>
                      <span className="text-xs text-gray-400">Aujourd'hui à 14:33</span>
                    </div>
                    <div className="mt-1 text-gray-300 bg-[#2f3136] p-3 rounded-lg">
                      <p className="text-white">
                        Clique sur une catégorie ci-dessus pour voir des conseils.
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
                <div className="text-gray-400 text-sm">Message #écologie-et-astuces</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gradient-to-br from-greeny-50 to-greeny-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Des conseils adaptés à tes besoins
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Greeny te propose des conseils écologiques personnalisés pour t'aider à adopter un mode de vie plus durable et respectueux de l'environnement.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 bg-white border-greeny-100">
                <div className="h-12 w-12 bg-greeny-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-greeny-500" />
                </div>
                <h3 className="font-semibold mb-2">Conseils quotidiens</h3>
                <p className="text-gray-600">Reçois chaque jour un nouveau conseil pour réduire ton impact écologique.</p>
              </Card>
              
              <Card className="p-6 bg-white border-greeny-100">
                <div className="h-12 w-12 bg-greeny-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-greeny-500" />
                </div>
                <h3 className="font-semibold mb-2">Conseils thématiques</h3>
                <p className="text-gray-600">Des conseils organisés par thèmes pour t'aider dans tous les aspects de ta vie quotidienne.</p>
              </Card>
              
              <Card className="p-6 bg-white border-greeny-100">
                <div className="h-12 w-12 bg-greeny-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-greeny-500" />
                </div>
                <h3 className="font-semibold mb-2">Recherche intelligente</h3>
                <p className="text-gray-600">Trouve rapidement des conseils spécifiques grâce à notre moteur de recherche intégré.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Prêt à rendre ton quotidien plus écologique ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ajoute Greeny à ton serveur Discord et commence à recevoir des conseils écologiques personnalisés pour toi et ta communauté.
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
                <MessageSquare className="h-5 w-5 mr-2 text-greeny-400" />
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

export default Tips;
