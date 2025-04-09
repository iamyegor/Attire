using System.Net;
using Api.Mappings;
using Infrastructure.Utils;
using MailKit.Security;
using Serilog;
using Serilog.Events;
using Serilog.Formatting.Display;
using Serilog.Sinks.Email;

namespace Api;

public static class DependencyInjection
{
    public static IServiceCollection AddBaseServices(
        this IServiceCollection services,
        string corsPolicy
    )
    {
        services.AddControllers();
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
        services.AddCors(corsPolicy);
        services.RegisterMappings();

        return services;
    }

    private static void AddCors(this IServiceCollection services, string corsPolicy)
    {
        services.AddCors(options =>
        {
            options.AddPolicy(
                corsPolicy,
                policy =>
                {
                    policy
                        .WithOrigins("http://localhost")
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                }
            );
        });
    }

    public static void AddSerilog(this ConfigureHostBuilder host)
    {
        LoggerConfiguration loggerConfiguration = new();
        loggerConfiguration
            .MinimumLevel.Information()
            .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
            .Enrich.FromLogContext();

        if (ApplicationEnvirontment.IsDevelopment())
            loggerConfiguration.WriteTo.Async(writeTo => writeTo.Console());

        Log.Logger = loggerConfiguration.CreateLogger();

        Serilog.Debugging.SelfLog.Enable(Console.Out);
        host.UseSerilog();
    }
}
