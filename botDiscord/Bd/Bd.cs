namespace ecoleIA.Bd;

public static class Bd
{
    private static string[] ListeConseil = [
        "Débranche les chargeurs de téléphone et autres appareils lorsqu'ils ne chargent pas.",
        "Utilise le sèche-linge avec modération et privilégie l'étendage.",
        "Prends des douches plus courtes plutôt que des bains.",
        "Utilise le programme éco de ton lave-vaisselle et de ta machine à laver.",
        "Récupère l'eau de pluie pour arroser les plantes.",
        "Utilise des produits ménagers naturels comme le vinaigre blanc, le bicarbonate de soude, le savon noir.",
        "Marche ou fais du vélo pour les courtes distances.",
        "Envisage le covoiturage pour les trajets plus longs.",
        "Si tu dois prendre la voiture, adopte une conduite souple pour réduire ta consommation.",
        "Renseigne-toi sur l'origine des produits que tu achètes.",
        "Favorise les produits locaux et de saison.",
        "Achète moins mais mieux, en privilégiant la qualité et la durabilité.",
        "Réduis ta consommation de viande, surtout la viande rouge.",
        "Privilégie les fruits et légumes de saison et locaux.",
        "Évite le gaspillage alimentaire en planifiant tes repas et en conservant bien les aliments.",
        "Achète des vêtements de qualité qui durent longtemps.",
        "Privilégie les matières naturelles et biologiques.",
        "Entretiens bien tes vêtements pour les conserver plus longtemps.",
        "Utilise des méthodes de jardinage biologique (pas de pesticides ni d'engrais chimiques)."
    ];

    public static string ConseilEcolo()
    {
        Random.Shared.Shuffle(ListeConseil);
        int index = Random.Shared.Next(0, ListeConseil.Length);

        return ListeConseil[index];
    }
}
