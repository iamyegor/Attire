using System.Reflection;
using Domain.Product;
using Domain.User;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Serilog;

namespace Infrastructure.Data;

public class ApplicationContext : DbContext
{
    public DbSet<User> Users => Set<User>();
    public DbSet<Product> Products => Set<Product>();

    private readonly string _connectionString;
    private readonly bool _useLogger;

    public ApplicationContext() { }

    public ApplicationContext(string connectionString, bool useLogger)
    {
        _connectionString = connectionString;
        _useLogger = useLogger;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseLazyLoadingProxies().UseNpgsql(_connectionString);

        if (_useLogger)
        {
            optionsBuilder
                .UseLoggerFactory(LoggerFactory.Create(builder => builder.AddSerilog()))
                .EnableSensitiveDataLogging();
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}
