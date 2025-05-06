using NetCord.Services.ComponentInteractions;

namespace ecoleIA;

public class ButtonModule: ComponentInteractionModule<ButtonInteractionContext>
{
    [ComponentInteraction("button_quizz")]
    public static string Button() => "You clicked a button!";
}
