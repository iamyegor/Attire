using Infrastructure.Auth.Authentication;
using Infrastructure.Auth.VkAuth;
using Infrastructure.Cookies;
using Infrastructure.Data;
using Infrastructure.Data.Dapper;
using Infrastructure.Emails;
using Infrastructure.Utils;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SharedKernel.Auth;
using SharedKernel.Communication.Extensions;

namespace Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructureServices(
        this IServiceCollection services,
        IConfiguration config,
        bool isDevelopment
    )
    {
        ConnectionStringResolver connectionStringResolver = new ConnectionStringResolver(config);
        string connectionString = connectionStringResolver.GetBasedOnEnvironment();

        services
            .AddScoped(_ => new ApplicationContext(connectionString, isDevelopment))
            .AddTransient<DapperConnectionFactory>()
            .AddTransient<HttpClient>()
            .AddTransient<ConnectionStringResolver>()
            .AddUtils()
            .AddEmails(config)
            .AddMassTransit(config);

        services.AddTransient<TokensGenerator>();
        services.AddAuth(config);

        return services;
    }

    private static IServiceCollection AddUtils(this IServiceCollection services)
    {
        services.AddTransient<UserIdExtractor>();
        services.AddTransient<VkAuthTokenManager>();
        services.AddTransient<UserRemover>();

        return services;
    }

    private static IServiceCollection AddEmails(
        this IServiceCollection services,
        IConfiguration config
    )
    {
        services.Configure<EmailSettings>(config.GetSection(nameof(EmailSettings)));
        services.PostConfigure<EmailSettings>(settings =>
        {
            settings.Password = Environment.GetEnvironmentVariable("OUTLOOK_PASSWORD")!;
        });

        services.AddTransient<DomainEmailSender>();
        services.AddTransient<EmailSender>();

        return services;
    }
}
