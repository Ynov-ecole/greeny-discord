import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, MessageCircle, Check, RefreshCcw, Trash2 } from "lucide-react";

interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: "facile" | "moyen" | "difficile";
  impact: string;
  tips: string;
}

interface AcceptedChallenge extends Challenge {
  status: "en_cours" | "accompli";
  dateAccepted: Date;
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

const DiscordChallengeCard = ({ 
  challenge, 
  onAccept, 
  onSkip 
}: { 
  challenge: Challenge; 
  onAccept: () => void;
  onSkip: () => void;
}) => {
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
          <div className="mt-4 flex justify-end gap-3">
            <Button 
              variant="outline" 
              className="border-gray-600 hover:bg-[#4f545c] text-gray-300"
              onClick={onSkip}
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              Voir un autre défi
            </Button>
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

const AcceptedChallengeCard = ({ 
  challenge, 
  onComplete, 
  onDelete 
}: { 
  challenge: AcceptedChallenge; 
  onComplete: () => void; 
  onDelete: () => void;
}) => {
  const getEmoji = (difficulty: Challenge["difficulty"]) => {
    const emojiMap = {
      facile: "🍃",
      moyen: "🌱",
      difficile: "🌲",
    };
    return emojiMap[difficulty];
  };
  
  const formattedDate = new Date(challenge.dateAccepted).toLocaleDateString();

  return (
    <div className="flex items-start gap-3 mb-4 bg-[#2f3136] p-3 rounded">
      {challenge.status === "accompli" ? (
        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
          <Check size={14} />
        </div>
      ) : (
        <div className="w-6 h-6 rounded-full bg-greeny-500 flex items-center justify-center text-white">
          <Leaf size={14} />
        </div>
      )}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium text-white">{getEmoji(challenge.difficulty)} {challenge.title}</span>
          <DifficultyBadge difficulty={challenge.difficulty} />
          <span className="text-xs text-gray-400 ml-auto">Accepté le {formattedDate}</span>
        </div>
        <p className="text-sm text-gray-300 mt-1">{challenge.description}</p>
      </div>
      <div className="flex gap-2">
        {challenge.status === "en_cours" && (
          <Button 
            size="sm" 
            variant="outline" 
            className="border-green-600 text-green-500 hover:bg-green-950 hover:text-green-400"
            onClick={onComplete}
          >
            <Check size={16} />
          </Button>
        )}
        <Button 
          size="sm" 
          variant="outline" 
          className="border-red-600 text-red-500 hover:bg-red-950 hover:text-red-400"
          onClick={onDelete}
        >
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  );
};

const DefiPage = () => {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [acceptedChallenges, setAcceptedChallenges] = useState<AcceptedChallenge[]>([]);

  const handleAcceptChallenge = () => {
    const currentChallenge = challenges[currentChallengeIndex];
    
    // Check if challenge is already accepted
    if (!acceptedChallenges.some(c => c.id === currentChallenge.id)) {
      const newAcceptedChallenge: AcceptedChallenge = {
        ...currentChallenge,
        status: "en_cours",
        dateAccepted: new Date()
      };
      
      setAcceptedChallenges([...acceptedChallenges, newAcceptedChallenge]);
    }
    
    // Move to next challenge
    handleNextChallenge();
  };

  const handleNextChallenge = () => {
    if (currentChallengeIndex < challenges.length - 1) {
      setCurrentChallengeIndex(currentChallengeIndex + 1);
    } else {
      // Loop back to start if at the end
      setCurrentChallengeIndex(0);
    }
  };
  
  const handleCompleteChallenge = (id: number) => {
    setAcceptedChallenges(
      acceptedChallenges.map(challenge => 
        challenge.id === id 
          ? { ...challenge, status: "accompli" } 
          : challenge
      )
    );
  };
  
  const handleDeleteChallenge = (id: number) => {
    setAcceptedChallenges(
      acceptedChallenges.filter(challenge => challenge.id !== id)
    );
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
                onSkip={handleNextChallenge}
              />
              
              {/* Accepted Challenges inside the Discord chat */}
              {acceptedChallenges.length > 0 && (
                <div className="mt-8 border-t border-[#4f545c] pt-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-greeny-500 flex items-center justify-center text-white font-bold mr-3">
                      G
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-greeny-400">Greeny</span>
                        <span className="text-xs text-gray-400">BOT</span>
                        <span className="text-xs text-gray-400">Aujourd'hui à 14:35</span>
                      </div>
                      <div className="mt-1 text-gray-300 bg-[#2f3136] p-4 rounded-lg">
                        <p className="font-semibold text-white mb-3">
                          🎯 Tes défis en cours
                        </p>
                        <div className="space-y-3">
                          {acceptedChallenges.map(challenge => (
                            <AcceptedChallengeCard 
                              key={challenge.id} 
                              challenge={challenge}
                              onComplete={() => handleCompleteChallenge(challenge.id)}
                              onDelete={() => handleDeleteChallenge(challenge.id)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Input Area */}
            <div className="bg-[#40444b] p-4">
              <div className="bg-[#2f3136] rounded-lg flex items-center p-2">
                <Button 
                  variant="outline" 
                  onClick={handleNextChallenge}
                  className="border-gray-600 hover:bg-[#4f545c] text-gray-300"
                >
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Voir un autre défi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefiPage;
