
import { cn } from "@/lib/utils";

interface DiscordPreviewProps {
  className?: string;
}

const DiscordPreview: React.FC<DiscordPreviewProps> = ({ className }) => {
  return (
    <div className={cn("bg-[#36393f] rounded-lg shadow-lg overflow-hidden max-w-md w-full", className)}>
      {/* Discord Header */}
      <div className="bg-[#2f3136] p-3 flex items-center">
        <div className="text-white font-medium"># écologie-et-astuces</div>
      </div>
      
      {/* Messages Container */}
      <div className="p-4 space-y-4">
        {/* Bot Message */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-greeny-500 flex items-center justify-center text-white font-bold">
            G
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-greeny-400">Greeny</span>
              <span className="text-xs text-gray-400">BOT</span>
              <span className="text-xs text-gray-400">Aujourd'hui à 14:30</span>
            </div>
            <div className="mt-1 text-gray-300 bg-[#2f3136] p-3 rounded-lg">
              <p className="font-semibold text-white">🌱 Défi quotidien !</p>
              <p className="mt-2">Aujourd'hui, essaie de réduire ta consommation d'électricité ! Éteins tes appareils en veille quand tu ne les utilises pas.</p>
              <div className="mt-3 bg-[#4f545c] rounded p-2 text-sm">
                <p>💡 Savais-tu que les appareils en veille peuvent représenter jusqu'à 10% de ta facture d'électricité ?</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* User Message */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            U
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Utilisateur</span>
              <span className="text-xs text-gray-400">Aujourd'hui à 14:32</span>
            </div>
            <div className="mt-1 text-gray-300">
              <p>/tip économiser eau</p>
            </div>
          </div>
        </div>
        
        {/* Bot Response */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-greeny-500 flex items-center justify-center text-white font-bold">
            G
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-greeny-400">Greeny</span>
              <span className="text-xs text-gray-400">BOT</span>
              <span className="text-xs text-gray-400">Aujourd'hui à 14:32</span>
            </div>
            <div className="mt-1 text-gray-300 bg-[#2f3136] p-3 rounded-lg">
              <p className="font-semibold text-white">💧 Conseils pour économiser l'eau</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Prends des douches plus courtes (5 min max)</li>
                <li>Installe un économiseur d'eau sur tes robinets</li>
                <li>Réutilise l'eau de cuisson pour arroser les plantes</li>
                <li>Ferme le robinet pendant que tu te brosses les dents</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Input Area */}
      <div className="bg-[#40444b] p-4">
        <div className="bg-[#2f3136] rounded-lg flex items-center p-2">
          <div className="bg-greeny-500 text-white p-1 rounded text-xs mr-2">/</div>
          <div className="text-gray-400 text-sm">Message #écologie-et-astuces</div>
        </div>
      </div>
    </div>
  );
};

export default DiscordPreview;
