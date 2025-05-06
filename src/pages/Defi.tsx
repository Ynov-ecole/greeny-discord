
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: "facile" | "moyen" | "difficile";
  impact: string;
  tips: string;
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: "Zéro déchet pendant une journée",
    description: "Essaye de ne produire aucun déchet non recyclable pendant toute une journée.",
    difficulty: "moyen",
    impact: "Réduction des déchets envoyés en décharge",
    tips: "Prépare tes repas à l'avance, utilise des contenants réutilisables et évite les produits suremballés."
  },
  {
    id: 2,
    title: "Douche de 5 minutes",
    description: "Limite tes douches à 5 minutes maximum pendant une semaine.",
    difficulty: "facile",
    impact: "Économie d'eau et d'énergie",
    tips: "Utilise un minuteur et coupe l'eau pendant que tu te savonnes."
  },
  {
    id: 3,
    title: "Une journée sans viande",
    description: "Ne consomme aucun produit d'origine animale pendant une journée entière.",
    difficulty: "moyen",
    impact: "Réduction de l'empreinte carbone liée à l'alimentation",
    tips: "Essaie des alternatives végétales comme les légumineuses, le tofu ou les protéines de soja."
  },
  {
    id: 4,
    title: "Transport écolo",
    description: "Utilise uniquement des moyens de transport écologiques pendant une semaine (marche, vélo, transports en commun).",
    difficulty: "difficile",
    impact: "Réduction des émissions de CO2",
    tips: "Planifie tes déplacements à l'avance et prévois du temps supplémentaire."
  },
  {
    id: 5,
    title: "Chasse aux appareils en veille",
    description: "Identifie et débranche tous les appareils en veille chez toi.",
    difficulty: "facile",
    impact: "Économie d'énergie et réduction de la facture d'électricité",
    tips: "Utilise des multiprises avec interrupteur pour faciliter l'extinction complète."
  }
];

const DifficultyBadge = ({ difficulty }: { difficulty: Challenge["difficulty"] }) => {
  const colorMap = {
    facile: "bg-green-100 text-green-800",
    moyen: "bg-yellow-100 text-yellow-800",
    difficile: "bg-red-100 text-red-800",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorMap[difficulty]}`}>
      {difficulty}
    </span>
  );
};

const ChallengeCard = ({ challenge, onAccept }: { challenge: Challenge; onAccept: () => void }) => {
  return (
    <Card className="w-full shadow-lg border-greeny-100 hover:border-greeny-200 transition-all">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">{challenge.title}</CardTitle>
          <DifficultyBadge difficulty={challenge.difficulty} />
        </div>
        <CardDescription className="text-gray-600">{challenge.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-700">Impact</h4>
            <p className="text-sm text-gray-600">{challenge.impact}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700">Conseils</h4>
            <p className="text-sm text-gray-600">{challenge.tips}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-greeny-500 hover:bg-greeny-600"
          onClick={onAccept}
        >
          Relever ce défi
        </Button>
      </CardFooter>
    </Card>
  );
};

const DefiPage = () => {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [acceptedChallenges, setAcceptedChallenges] = useState<number[]>([]);

  const handleAcceptChallenge = () => {
    setAcceptedChallenges([...acceptedChallenges, challenges[currentChallengeIndex].id]);
    
    // Move to next challenge
    if (currentChallengeIndex < challenges.length - 1) {
      setCurrentChallengeIndex(currentChallengeIndex + 1);
    } else {
      // Loop back to start if at the end
      setCurrentChallengeIndex(0);
    }
  };

  const handleNextChallenge = () => {
    if (currentChallengeIndex < challenges.length - 1) {
      setCurrentChallengeIndex(currentChallengeIndex + 1);
    } else {
      // Loop back to start if at the end
      setCurrentChallengeIndex(0);
    }
  };

  return (
    <div className="min-h-screen bg-greeny-50">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">Défis écologiques</h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Relève des défis quotidiens pour adopter des habitudes plus écologiques et mesurer ton impact sur l'environnement.
            </p>
          </div>

          <div className="mb-8">
            <ChallengeCard 
              challenge={challenges[currentChallengeIndex]} 
              onAccept={handleAcceptChallenge} 
            />
          </div>

          <div className="flex justify-between items-center">
            <Button 
              variant="outline" 
              onClick={handleNextChallenge}
              className="border-greeny-200 hover:bg-greeny-50"
            >
              Voir un autre défi
            </Button>

            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-greeny-500" />
              <span className="text-sm text-gray-600">
                {acceptedChallenges.length} {acceptedChallenges.length === 1 ? "défi relevé" : "défis relevés"}
              </span>
            </div>
          </div>

          {acceptedChallenges.length > 0 && (
            <div className="mt-12 p-6 bg-white rounded-lg shadow-md border border-greeny-100">
              <h2 className="text-xl font-bold mb-4">Mes défis acceptés</h2>
              <ul className="space-y-3">
                {acceptedChallenges.map((id) => {
                  const challenge = challenges.find(c => c.id === id);
                  if (!challenge) return null;
                  
                  return (
                    <li key={id} className="flex items-start gap-2">
                      <Leaf className="h-5 w-5 text-greeny-500 mt-1" />
                      <div>
                        <span className="font-medium">{challenge.title}</span>
                        <p className="text-sm text-gray-600">{challenge.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DefiPage;
