
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [answerSelected, setAnswerSelected] = useState<number | null>(null);

  // Quiz data
  const quiz = {
    title: "Quiz Écologique",
    description: "Teste tes connaissances sur l'écologie et le développement durable !",
    questions: [
      {
        question: "Quelle quantité d'eau économise-t-on en fermant le robinet pendant qu'on se brosse les dents ?",
        options: [
          "Environ 5 litres",
          "Environ 12 litres", 
          "Environ 25 litres", 
          "Environ 50 litres"
        ],
        correctAnswer: 1
      },
      {
        question: "Laquelle de ces actions réduit le plus votre empreinte carbone ?",
        options: [
          "Utiliser des ampoules LED", 
          "Réduire sa consommation de viande", 
          "Éteindre les appareils en veille", 
          "Faire du covoiturage"
        ],
        correctAnswer: 1
      },
      {
        question: "Combien de temps met un sac plastique à se dégrader dans la nature ?",
        options: [
          "10 ans", 
          "100 ans", 
          "400 ans", 
          "1000 ans"
        ],
        correctAnswer: 2
      }
    ]
  };

  const handleAnswer = (answerIndex: number) => {
    if (answerSelected !== null) return; // Empêche de choisir plusieurs réponses

    // Marque la réponse comme sélectionnée
    setAnswerSelected(answerIndex);
    
    const newAnswers = [...userAnswers];
    newAnswers[currentStep] = String(answerIndex);
    setUserAnswers(newAnswers);
    
    // Attend un moment pour montrer si la réponse est correcte avant de passer à la question suivante
    setTimeout(() => {
      if (currentStep < quiz.questions.length - 1) {
        setCurrentStep(currentStep + 1);
        setAnswerSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const getScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return Number(answer) === quiz.questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setUserAnswers([]);
    setShowResult(false);
    setAnswerSelected(null);
  };

  const isAnswerCorrect = (questionIndex: number, answerIndex: number) => {
    return quiz.questions[questionIndex].correctAnswer === answerIndex;
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
              Quiz Écologique
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvre nos quiz écologiques pour sensibiliser ta communauté tout en t'amusant !
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Preview Section */}
      <section className="section py-12 bg-white">
        <div className="container max-w-5xl">
          <div className="bg-[#36393f] rounded-lg shadow-xl overflow-hidden">
            {/* Discord Header */}
            <div className="bg-[#2f3136] p-3 flex items-center">
              <div className="text-white font-medium"># quiz-écologique</div>
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
                    <p className="font-semibold text-white">🌿 {quiz.title}</p>
                    <p className="mt-2">{quiz.description}</p>
                    <p className="mt-2">Le quiz va commencer ! Prêt(e) ?</p>
                  </div>
                </div>
              </div>

              {/* Quiz Content */}
              {!showResult && currentStep < quiz.questions.length && (
                <>
                  {/* Question */}
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
                        <p className="font-semibold text-white">Question {currentStep + 1}/{quiz.questions.length}</p>
                        <p className="mt-2">{quiz.questions[currentStep].question}</p>
                      </div>
                    </div>
                  </div>

                  {/* Answer Options */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 opacity-0"> {/* Invisible spacer */}
                    </div>
                    <div className="w-full">
                      <div className="grid grid-cols-1 gap-2 w-full">
                        {quiz.questions[currentStep].options.map((option, index) => {
                          const isSelected = answerSelected === index;
                          const isCorrect = isAnswerCorrect(currentStep, index);
                          
                          let buttonClass = "w-full text-left p-3 rounded-md bg-[#4f545c] hover:bg-[#5d6269] text-gray-200 transition-colors";
                          
                          if (isSelected) {
                            buttonClass = isCorrect 
                              ? "w-full text-left p-3 rounded-md bg-green-700 hover:bg-green-700 text-white transition-colors" 
                              : "w-full text-left p-3 rounded-md bg-red-700 hover:bg-red-700 text-white transition-colors";
                          }
                          
                          return (
                            <button
                              key={index}
                              className={buttonClass}
                              onClick={() => handleAnswer(index)}
                              disabled={answerSelected !== null}
                            >
                              {String.fromCharCode(65 + index)}. {option}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Results */}
              {showResult && (
                <>
                  <div className="flex items-start gap-3 animate-fade-in-up">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-greeny-500 flex items-center justify-center text-white font-bold">
                      G
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-greeny-400">Greeny</span>
                        <span className="text-xs text-gray-400">BOT</span>
                        <span className="text-xs text-gray-400">Aujourd'hui à 14:35</span>
                      </div>
                      <div className="mt-1 text-gray-300 bg-[#2f3136] p-3 rounded-lg">
                        <p className="font-semibold text-white">📊 Résultats</p>
                        <p className="mt-2">
                          Tu as obtenu <span className="font-bold text-greeny-400">{getScore()}/{quiz.questions.length}</span> réponses correctes !
                        </p>
                        <p className="mt-2">
                          {getScore() === quiz.questions.length ? 
                            "🏆 Félicitations ! Tu es un(e) vrai(e) champion(ne) de l'écologie !" : 
                            getScore() >= quiz.questions.length / 2 ? 
                            "👍 Pas mal ! Tu as de bonnes connaissances en écologie." : 
                            "🌱 Continue d'apprendre sur l'écologie pour améliorer ton score."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Afficher les réponses correctes */}
                  <div className="flex items-start gap-3 animate-fade-in-up">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-greeny-500 flex items-center justify-center text-white font-bold">
                      G
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-greeny-400">Greeny</span>
                        <span className="text-xs text-gray-400">BOT</span>
                        <span className="text-xs text-gray-400">Aujourd'hui à 14:36</span>
                      </div>
                      <div className="mt-1 text-gray-300 bg-[#2f3136] p-3 rounded-lg">
                        <p className="font-semibold text-white">📝 Récapitulatif des bonnes réponses</p>
                        
                        <div className="mt-4 space-y-4">
                          {quiz.questions.map((q, qIndex) => (
                            <div key={qIndex} className="pb-3 border-b border-gray-600">
                              <p className="font-medium text-white">Question {qIndex + 1}: {q.question}</p>
                              
                              <div className="mt-2 space-y-1">
                                {q.options.map((option, oIndex) => {
                                  const isCorrect = q.correctAnswer === oIndex;
                                  const userSelected = Number(userAnswers[qIndex]) === oIndex;
                                  
                                  let optionClass = "px-2 py-1 rounded";
                                  
                                  if (isCorrect) {
                                    optionClass += " bg-green-800/30 text-green-400 border border-green-700";
                                  } else if (userSelected) {
                                    optionClass += " bg-red-800/30 text-red-400 border border-red-700";
                                  }
                                  
                                  return (
                                    <div key={oIndex} className={optionClass}>
                                      {String.fromCharCode(65 + oIndex)}. {option}
                                      {isCorrect && <span className="ml-2 text-green-400">✓</span>}
                                      {!isCorrect && userSelected && <span className="ml-2 text-red-400">✗</span>}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <button 
                          className="mt-6 bg-greeny-500 hover:bg-greeny-600 text-white px-4 py-2 rounded-md text-sm"
                          onClick={resetQuiz}
                        >
                          Refaire le quiz
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            
            {/* Input Area */}
            <div className="bg-[#40444b] p-4">
              <div className="bg-[#2f3136] rounded-lg flex items-center p-2">
                <div className="bg-greeny-500 text-white p-1 rounded text-xs mr-2">/</div>
                <div className="text-gray-400 text-sm">Message #quiz-écologique</div>
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
              Sensibiliser en s'amusant
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Les quiz écologiques de Greeny sont conçus pour être ludiques et éducatifs. Ils permettent à ta communauté d'apprendre sur l'environnement tout en s'amusant.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 bg-white border-greeny-100">
                <div className="h-12 w-12 bg-greeny-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-greeny-500" />
                </div>
                <h3 className="font-semibold mb-2">Quiz personnalisés</h3>
                <p className="text-gray-600">Des questions adaptées à tous les niveaux de connaissances en écologie.</p>
              </Card>
              
              <Card className="p-6 bg-white border-greeny-100">
                <div className="h-12 w-12 bg-greeny-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-greeny-500" />
                </div>
                <h3 className="font-semibold mb-2">Sujets variés</h3>
                <p className="text-gray-600">De la biodiversité aux économies d'énergie, tous les thèmes écologiques sont abordés.</p>
              </Card>
              
              <Card className="p-6 bg-white border-greeny-100">
                <div className="h-12 w-12 bg-greeny-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-greeny-500" />
                </div>
                <h3 className="font-semibold mb-2">Système de points</h3>
                <p className="text-gray-600">Gagne des points pour ton serveur et débloque des récompenses écologiques virtuelles.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Prêt à tester tes connaissances écologiques ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ajoute Greeny à ton serveur Discord et commence à sensibiliser ta communauté avec des quiz amusants et éducatifs.
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

export default Quiz;
