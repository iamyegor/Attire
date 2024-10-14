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
                        .WithOrigins("http://localhost", "http://localhost:5173")
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                }
            );
        });
    }

    public static void AddSerilog(this ConfigureHostBuilder host)
    {
        string outlookPassword = Environment.GetEnvironmentVariable("SERILOG_EMAIL_PASSWORD")!;

        LoggerConfiguration loggerConfiguration = new LoggerConfiguration();
        loggerConfiguration
            .MinimumLevel.Information()
            .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
            .Enrich.FromLogContext()
            .WriteTo.Console()
            .WriteTo.File(path: "/logs/log-.log", rollingInterval: RollingInterval.Day);

        if (!ApplicationEnvirontment.IsDevelopment())
        {
            loggerConfiguration.WriteTo.Email(
                options: new EmailSinkOptions
                {
                    From = "astery227@gmail.com",
                    To = ["astery227@gmail.com", "yyegor@outlook.com"],
                    Host = "smtp.gmail.com",
                    Port = 587,
                    ConnectionSecurity = SecureSocketOptions.StartTls,
                    Credentials = new NetworkCredential("astery227@gmail.com", outlookPassword),
                    Subject = new MessageTemplateTextFormatter("Error In Attire Auth"),
                    Body = new MessageTemplateTextFormatter(
                        "{Timestamp} [{Level}] {Message}{NewLine}{Exception}"
                    )
                },
                restrictedToMinimumLevel: LogEventLevel.Error
            );
        }

        Log.Logger = loggerConfiguration.CreateLogger();

        Serilog.Debugging.SelfLog.Enable(Console.Out);
        host.UseSerilog();
    }
}
