using ecoleIA.Models;
using Microsoft.Extensions.AI;
using NetCord;
using NetCord.Hosting.Gateway;
using NetCord.Hosting.Services;
using NetCord.Hosting.Services.ApplicationCommands;
using NetCord.Services.ApplicationCommands;
using NetCord.Services.ComponentInteractions;

var builder = Host.CreateDefaultBuilder(args)
    .UseApplicationCommands<SlashCommandInteraction, SlashCommandContext>()
    .UseDiscordGateway();

builder.ConfigureServices(x =>
{
    x.AddScoped(y => new Mistral(
        y.GetRequiredService<IConfiguration>().GetValue<string>("Token")!,
        "mistral-small-latest"
    ));
});

var host = builder.Build()
    .AddModules(typeof(Program).Assembly)
    .UseGatewayEventHandlers();

await host.RunAsync();