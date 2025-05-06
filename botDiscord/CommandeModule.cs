using NetCord.Services.ApplicationCommands;
using NetCord.Rest;
using ecoleIA.Models;
using NetCord;

namespace ecoleIA;

public class CommandeModule(Mistral _chatClient) : ApplicationCommandModule<SlashCommandContext>
{
    [SlashCommand("impact", "estimation impact ecologique")]
    public async Task EstimationImpactEcologique()
    {
        var embed = new EmbedProperties()
        {
            Title = "Estimatimation impact ecologique",
            Color = new Color(0, 255, 0),
            Fields = [
                new() { Value = "Appel audio (1 minute) : Environ 0,2 à 0,4 g CO₂." },
                new() { Value = "Appel vidéo (1 minute) : Environ 0,6 à 1,5 g CO₂, selon la qualité vidéo." },
                new() { Value = "Partage d'écran (1 minute) : Environ 0,5 à 1,0 g CO₂, en fonction de l'activité à l'écran." },
                new() { Value = "Envoi d'une image : Environ 0,05 à 0,2 g CO₂, selon la taille du fichier." },
                new() { Value = "Envoi d'une vidéo : Environ 0,5 à 2,0 g CO₂, selon la durée et la qualité." }
            ]
        };

        await RespondAsync(InteractionCallback.Message(new() { Embeds = [embed] }));
    }

    [SlashCommand("tip", "conseil écologique")]
    public async Task Conseil()
        => await RespondAsync(InteractionCallback.Message(Bd.Bd.ConseilEcolo()));
        
    [SlashCommand("mistral", "dialogue avec mistral")]
    public async Task Generer([SlashCommandParameter(Name = "message")] string _message)
    {
        var respondingTask = RespondAsync(InteractionCallback.DeferredMessage());
        var reponse = await _chatClient.GetResponseAsync(_message);

        await respondingTask;
        await FollowupAsync(reponse.Message.Text);
    }

    [SlashCommand("sondage", "sondage")]
    public async Task GenererSondageAsync(
        string question,
        [SlashCommandParameter(Description = "Réponses séparer par un ;")] string reponse
    )
    {

        List<MessagePollAnswerProperties> listeReponse = question
            .Split(';')
            .Select(x => new MessagePollAnswerProperties(new () { Text = x }))
            .ToList();

        var poll = new MessagePollProperties(
            new MessagePollMediaProperties() { Text = question },
            listeReponse
        )
        .WithDurationInHours(1)
        .WithAllowMultiselect(false);

        await RespondAsync(InteractionCallback.Message(new() { Poll = poll }));
    }
}
