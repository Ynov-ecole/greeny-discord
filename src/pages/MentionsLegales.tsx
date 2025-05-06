
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const MentionsLegales = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </Button>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Mentions légales</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Éditeur du site</h2>
            <p className="mb-2">
              Le site Greeny est édité par [Nom de votre entreprise], [forme juridique], au capital de [montant] euros.
            </p>
            <p className="mb-2">SIRET : [Numéro SIRET]</p>
            <p className="mb-2">Siège social : [Adresse complète]</p>
            <p className="mb-2">Téléphone : [Numéro de téléphone]</p>
            <p className="mb-2">Email : [Adresse email]</p>
            <p className="mb-2">Directeur de la publication : [Nom du directeur]</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
            <p className="mb-2">
              Ce site est hébergé par [Nom de l'hébergeur], [forme juridique], au capital de [montant] euros.
            </p>
            <p className="mb-2">SIRET : [Numéro SIRET de l'hébergeur]</p>
            <p className="mb-2">Siège social : [Adresse complète de l'hébergeur]</p>
            <p className="mb-2">Téléphone : [Numéro de téléphone de l'hébergeur]</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
            <p className="mb-2">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris les représentations iconographiques et photographiques.
            </p>
            <p className="mb-2">
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. RGPD et données personnelles</h2>
            <p className="mb-2">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données personnelles.
            </p>
            <p className="mb-2">
              Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez nous contacter par email à : [adresse email dédiée RGPD].
            </p>
            <p className="mb-2">
              Les informations recueillies sont enregistrées dans un fichier informatisé par [Nom de l'entreprise] pour [finalité du traitement]. Elles sont conservées pendant [durée de conservation] et sont destinées à [destinataires des données].
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
            <p className="mb-2">
              Notre site utilise des cookies à des fins de statistiques de visite et d'amélioration de nos services. Vous pouvez à tout moment désactiver les cookies en paramétrant votre navigateur.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Loi applicable</h2>
            <p className="mb-2">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront compétents.
            </p>
          </section>
        </div>
        
        <div className="mt-10 text-sm text-gray-500">
          <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
