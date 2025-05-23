﻿using System.Reflection;
using Infrastructure.Utils;
using MassTransit;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace SharedKernel.Communication.Extensions;

public static class MassTransitServicesExtensions
{
    public static IServiceCollection AddMassTransit(
        this IServiceCollection services,
        IConfiguration config,
        Assembly? assembly = null
    )
    {
        services.AddMassTransit(busConfigurator =>
        {
            busConfigurator.SetKebabCaseEndpointNameFormatter();

            if (assembly != null)
            {
                busConfigurator.AddConsumers(assembly);
            }

            busConfigurator.UsingRabbitMq(
                (context, configurator) =>
                {
                    string host = config["RabbitMq:Host"]!;
                    string username = config["RabbitMq:Username"]!;
                    string password = config["RabbitMq:Password"]!;
                    if (!ApplicationEnvirontment.IsDevelopment())
                    {
                        Console.WriteLine($"Using RabbitMq host: {host}");
                        Console.WriteLine($"Using RabbitMq username: {username}");
                        Console.WriteLine($"Using RabbitMq password: {password}");
                    }

                    configurator.Host(
                        new Uri(host),
                        hostConfigurator =>
                        {
                            hostConfigurator.Username(username);
                            hostConfigurator.Password(password);
                        }
                    );

                    configurator.ConfigureEndpoints(context);
                }
            );
        });

        return services;
    }
}
