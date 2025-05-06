namespace ecoleIA.Models;

public class MistralResponse
{
    public required Message Message { get; init; }
}
public record Message
{
    public required string Text { get; init; }
}
