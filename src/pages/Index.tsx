import { Button } from "@/components/ui/button";
import { Leaf, MessageSquare, Calendar, Users, BarChart } from "lucide-react";
import GreenyMascot from "@/components/GreenyMascot";
import FeatureCard from "@/components/FeatureCard";
import DiscordPreview from "@/components/DiscordPreview";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-greeny-50">
      {/* Hero Section */}
      <section className="section min-h-[9vh] flex items-center">
        <div className="container grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-text">
                Touche de l'herbe, pas seulement ton clavier.
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Greeny est un bot Discord qui sensibilise à l'écologie, un
                message à la fois.
              </p>
              <Button
                size="lg"
                className="bg-greeny-500 hover:bg-greeny-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Ajouter Greeny à mon serveur
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <GreenyMascot className="w-full max-w-md animate-float" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Fonctionnalités clés
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvre comment Greeny peut rendre ton serveur Discord plus écolo
              et sensibiliser ta communauté.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <FeatureCard
              title="/impact"
              description="Mesure ton empreinte écologique et ton impact sur Discord en temps réel."
              icon={<BarChart className="h-6 w-6 text-greeny-500" />}
              className="animate-fade-in-up"
              linkTo="/impact"
            />
            <FeatureCard
              title="/tip"
              description="Conseils IA personnalisés pour adopter de bons gestes écologiques au quotidien."
              icon={<Calendar className="h-6 w-6 text-greeny-500" />}
              className="animate-fade-in-up"
              linkTo="/tips"
            />

            <FeatureCard
              title="/quiz"
              description="Quiz interactifs pour tester et améliorer les connaissances écologiques de ton serveur."
              icon={<MessageSquare className="h-6 w-6 text-greeny-500" />}
              className="animate-fade-in-up"
              linkTo="/quiz"
            />
            <FeatureCard
              title="/défi"
              description="Défis écologiques quotidiens pour sensibiliser ta communauté aux gestes verts."
              icon={<Leaf className="h-6 w-6 text-greeny-500" />}
              className="animate-fade-in-up"
              linkTo="/defi"
            />
            <FeatureCard
              title="Système de points"
              description="Récompense ta communauté avec des points et des rôles pour leurs actions écologiques."
              icon={<Users className="h-6 w-6 text-greeny-500" />}
              className="animate-fade-in-up"
            />
          </div>
        </div>
      </section>

      {/* Why Greeny Section & CTA Section */}
      <section className="section bg-gradient-to-br from-greeny-50 to-greeny-100">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Pourquoi Greeny ?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-greeny-500 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      IA intelligente
                    </h3>
                    <p className="text-gray-600">
                      Contenu dynamique, quiz générés et conseils variés grâce à
                      l'intelligence artificielle.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-greeny-500 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Disponible 24/7
                    </h3>
                    <p className="text-gray-600">
                      Toujours disponible pour répondre aux questions et donner
                      des conseils à ta communauté.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-greeny-500 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Approche ludique
                    </h3>
                    <p className="text-gray-600">
                      Sensibilisation positive à travers des défis et des jeux
                      pour motiver et non culpabiliser.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <DiscordPreview className="shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Prêt à rendre ton serveur plus vert ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoins des milliers d'utilisateurs qui sensibilisent leur
            communauté à l'écologie grâce à Greeny.
          </p>
          <Button
            size="lg"
            className="bg-greeny-500 hover:bg-greeny-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Inviter Greeny sur Discord
          </Button>
          <div className="mt-12 flex flex-wrap justify-center gap-4 items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-greeny-500 rounded-full"></div>
              <span className="text-gray-600">Entièrement gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-greeny-500 rounded-full"></div>
              <span className="text-gray-600">Installation en 1 minute</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-greeny-500 rounded-full"></div>
              <span className="text-gray-600">Sans publicité</span>
            </div>
          </div>
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
                Un bot Discord pour sensibiliser à l'écologie, un message à la
                fois.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liens</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/orgs/Ynov-ecole/repositories"
                    className="text-gray-400 hover:text-greeny-400 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-greeny-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mentions-legales"
                    className="text-gray-400 hover:text-greeny-400 transition-colors"
                  >
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

export default Index;
