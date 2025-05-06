using System.Text.Json.Serialization;

namespace ecoleIA.Models;

public class Mistral
{
    private string model;
    private static HttpClient httpClient = null!;

    public Mistral(string _cleAPI, string _model)
    {
        model = _model;

        httpClient = new()
        {
            BaseAddress = new("https://api.mistral.ai/v1/chat/completions"),
        };

        httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", _cleAPI);
    }

    public async Task<MistralResponse> GetResponseAsync(string _message)
    {
        var httpResponse = await httpClient.PostAsJsonAsync("", new MistralRequest
        {
            Model = model,
            Messages = [new MistralContentRequest { Role = "user", Content = _message }]
        });

        var mistralResponse = await httpResponse.Content.ReadFromJsonAsync<MistralHttpResponse>();

        return new MistralResponse
        {
            Message = new()
            {
                Text = mistralResponse!.Choices[0].Message.Content
            }
        };
    }
}

#region request
file record MistralRequest
{
    public required string Model { get; init; }
    public required MistralContentRequest[] Messages { get; init; }
}

file record MistralContentRequest
{
    public required string Role { get; init; }
    public required string Content { get; init; }
}
#endregion

file record MistralHttpResponse
{
    public required Choice[] Choices { get; init; } = [];
}

file record Choice
{
    public required Message Message { get; init; }
}

file record Message
{
    public required string Role { get; init; }
    public required string Content { get; init; }
}