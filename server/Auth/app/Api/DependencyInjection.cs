using Api.Mappings;
using Serilog;
using Serilog.Debugging;
using Serilog.Events;

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
        SelfLog.Enable(Console.Out);

        host.UseSerilog((ctx, services, lc) =>
        {
            lc.MinimumLevel.Information()
              .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
              .Enrich.FromLogContext();

            if (ctx.HostingEnvironment.IsDevelopment())
            {
                lc.WriteTo.Console();
            }
            else
            {
                lc.WriteTo.Console();
                lc.WriteTo.File(
                    path: "/logs/log-.txt",
                    rollingInterval: RollingInterval.Day
                );
            }
        });
    }
}
