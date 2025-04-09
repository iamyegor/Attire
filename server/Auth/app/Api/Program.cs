using Api;
using Application;
using DotNetEnv;
using Infrastructure.Data.Dapper;
using Infrastructure.Utils;

if (ApplicationEnvirontment.IsDevelopment())
    Env.Load(".env.asp");

DapperConfiguration.ConfigureSnakeCaseMapping(typeof(IApplication).Assembly);
WebApplication.CreateBuilder(args).ConfigureServices().ConfigureMiddlewares().Run();

namespace Api
{
    public class Program { }
}
