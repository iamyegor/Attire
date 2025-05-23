using Api.Utils;
using Application;
using DotNetEnv;
using Infrastructure;
using Infrastructure.Utils;

namespace Api;

public static class Startup
{
    private const string CorsPolicy = "myCorsPolicy";

    public static WebApplication ConfigureServices(this WebApplicationBuilder builder)
    {
        builder.Host.AddSerilog();

        builder
            .Services.AddBaseServices(CorsPolicy)
            .AddInfrastructureServices(builder.Configuration, builder.Environment.IsDevelopment())
            .AddApplicationServices(builder.Configuration);

        builder.Services.AddAuthentication();
        builder.Services.AddAuthorization();

        return builder.Build();
    }

    public static WebApplication ConfigureMiddlewares(this WebApplication app)
    {
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseCors(CorsPolicy);
        app.UseMiddleware<ExceptionHandlingMiddleware>();

        app.UseAuthentication();
        app.UseAuthorization();

        app.UseHttpsRedirection();
        app.MapControllers();

        app.UseStaticFiles();

        return app;
    }
}
