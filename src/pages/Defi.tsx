
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, MessageCircle } from "lucide-react";

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

const DiscordChallengeCard = ({ challenge, onAccept }: { challenge: Challenge; onAccept: () => void }) => {
  const getEmoji = (difficulty: Challenge["difficulty"]) => {
    const emojiMap = {
      facile: "🍃",
      moyen: "🌱",
      difficile: "🌲",
    };
    return emojiMap[difficulty];
  };

  return (
    <div className="flex items-start gap-3 mb-6">
      <div className="w-10 h-10 rounded-full bg-greeny-500 flex items-center justify-center text-white font-bold">
        G
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-greeny-400">Greeny</span>
          <span className="text-xs text-gray-400">BOT</span>
          <span className="text-xs text-gray-400">Aujourd'hui à 14:30</span>
        </div>
        <div className="mt-1 text-gray-300 bg-[#2f3136] p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-white">
              {getEmoji(challenge.difficulty)} Défi: {challenge.title}
            </p>
            <DifficultyBadge difficulty={challenge.difficulty} />
          </div>
          <p className="mt-2 text-gray-300">{challenge.description}</p>
          <div className="mt-3 bg-[#4f545c] rounded p-2 text-sm">
            <p className="font-semibold mb-1">💡 Impact:</p>
            <p>{challenge.impact}</p>
          </div>
          <div className="mt-3 bg-[#4f545c] rounded p-2 text-sm">
            <p className="font-semibold mb-1">✨ Conseils:</p>
            <p>{challenge.tips}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <Button 
              className="bg-greeny-500 hover:bg-greeny-600"
              onClick={onAccept}
            >
              Relever ce défi
            </Button>
          </div>
        </div>
      </div>
    </div>
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
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold gradient-text mb-4">Défis écologiques</h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Relève des défis quotidiens pour adopter des habitudes plus écologiques et mesurer ton impact sur l'environnement.
            </p>
          </div>

          <div className="bg-[#36393f] rounded-lg shadow-lg overflow-hidden mb-8">
            {/* Discord Header */}
            <div className="bg-[#2f3136] p-3 flex items-center">
              <MessageCircle className="h-5 w-5 text-gray-400 mr-2" />
              <div className="text-white font-medium"># défis-écologiques</div>
            </div>
            
            {/* Messages Container */}
            <div className="p-4 space-y-2">
              <DiscordChallengeCard
                challenge={challenges[currentChallengeIndex]}
                onAccept={handleAcceptChallenge}
              />
            </div>
            
            {/* Input Area */}
            <div className="bg-[#40444b] p-4">
              <div className="bg-[#2f3136] rounded-lg flex items-center p-2">
                <Button 
                  variant="outline" 
                  onClick={handleNextChallenge}
                  className="border-gray-600 hover:bg-[#4f545c] text-gray-300"
                >
                  Voir un autre défi
                </Button>
              </div>
            </div>
          </div>

          {acceptedChallenges.length > 0 && (
            <div className="bg-[#36393f] rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#2f3136] p-3">
                <div className="text-white font-medium flex items-center">
                  <Leaf className="h-5 w-5 text-greeny-500 mr-2" />
                  Défis acceptés ({acceptedChallenges.length})
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                {acceptedChallenges.map((id) => {
                  const challenge = challenges.find(c => c.id === id);
                  if (!challenge) return null;
                  
                  return (
                    <div key={id} className="flex items-start gap-2 bg-[#2f3136] p-3 rounded">
                      <Leaf className="h-5 w-5 text-greeny-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-white">{challenge.title}</span>
                        <p className="text-sm text-gray-400">{challenge.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DefiPage;
