
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-greeny-50">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="hover:bg-greeny-100">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 text-greeny-600" />
              <span className="text-greeny-600">Retour à l'accueil</span>
            </Link>
          </Button>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Mentions légales
          </h1>
          
          <div className="space-y-6">
            <Card className="border-greeny-100 shadow-md">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-greeny-700">1. Éditeur du site</h2>
                <p className="mb-2 text-gray-600">
                  Le site Greeny est édité par [Nom de votre entreprise], [forme juridique], au capital de [montant] euros.
                </p>
                <p className="mb-2 text-gray-600">SIRET : [Numéro SIRET]</p>
                <p className="mb-2 text-gray-600">Siège social : [Adresse complète]</p>
                <p className="mb-2 text-gray-600">Téléphone : [Numéro de téléphone]</p>
                <p className="mb-2 text-gray-600">Email : [Adresse email]</p>
                <p className="mb-2 text-gray-600">Directeur de la publication : [Nom du directeur]</p>
              </CardContent>
            </Card>
            
            <Card className="border-greeny-100 shadow-md">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-greeny-700">2. Hébergement</h2>
                <p className="mb-2 text-gray-600">
                  Ce site est hébergé par [Nom de l'hébergeur], [forme juridique], au capital de [montant] euros.
                </p>
                <p className="mb-2 text-gray-600">SIRET : [Numéro SIRET de l'hébergeur]</p>
                <p className="mb-2 text-gray-600">Siège social : [Adresse complète de l'hébergeur]</p>
                <p className="mb-2 text-gray-600">Téléphone : [Numéro de téléphone de l'hébergeur]</p>
              </CardContent>
            </Card>
            
            <Card className="border-greeny-100 shadow-md">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-greeny-700">3. Propriété intellectuelle</h2>
                <p className="mb-2 text-gray-600">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris les représentations iconographiques et photographiques.
                </p>
                <p className="mb-2 text-gray-600">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-greeny-100 shadow-md">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-greeny-700">4. RGPD et données personnelles</h2>
                <p className="mb-2 text-gray-600">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données personnelles.
                </p>
                <p className="mb-2 text-gray-600">
                  Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez nous contacter par email à : [adresse email dédiée RGPD].
                </p>
                <p className="mb-2 text-gray-600">
                  Les informations recueillies sont enregistrées dans un fichier informatisé par [Nom de l'entreprise] pour [finalité du traitement]. Elles sont conservées pendant [durée de conservation] et sont destinées à [destinataires des données].
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-greeny-100 shadow-md">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-greeny-700">5. Cookies</h2>
                <p className="mb-2 text-gray-600">
                  Notre site utilise des cookies à des fins de statistiques de visite et d'amélioration de nos services. Vous pouvez à tout moment désactiver les cookies en paramétrant votre navigateur.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-greeny-100 shadow-md">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-greeny-700">6. Loi applicable</h2>
                <p className="mb-2 text-gray-600">
                  Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront compétents.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 text-sm text-gray-500 text-center">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
