FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["migrator/Migrator/Migrator.csproj", "Migrator/"]
RUN dotnet restore Migrator/Migrator.csproj

COPY . .
COPY ["app/Infrastructure/Data/Migrations/", "Migrator/Migrations/"]
RUN find Migrator/Migrations -type f -name "*.cs" -exec sed -i 's/using Infrastructure.Data;/using Migrator;/g' {} +

WORKDIR /src/Migrator
RUN dotnet publish Migrator.csproj -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/runtime:8.0
WORKDIR /app

COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "Migrator.dll"]
