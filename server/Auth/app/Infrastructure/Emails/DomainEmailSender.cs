using System.Reflection;
using System.Text;
using Domain.User.ValueObjects;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace Infrastructure.Emails;

public class DomainEmailSender
{
    private readonly EmailSender _emailSender;

    private readonly IWebHostEnvironment _env;

    private readonly string _htmlFolderPath = Path.Combine(
        Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)!,
        "Emails",
        "ui"
    );

    public DomainEmailSender(EmailSender emailSender, IWebHostEnvironment env)
    {
        _emailSender = emailSender;
        _env = env;
    }

    public async Task SendEmailVerificationCode(string email, int code)
    {
        string html = await File.ReadAllTextAsync(
            Path.Combine(_htmlFolderPath, "confirm-email.html")
        );

        string formattedHtml = html.Replace("code", code.ToString());
        await _emailSender.SendAsync(formattedHtml, email);
    }

    public async Task SendPasswordReset(PasswordResetToken token, string email)
    {
        string htmlContent = await File.ReadAllTextAsync(
            Path.Combine(_htmlFolderPath, "password-reset.html")
        );

        string address = _env.IsDevelopment()
            ? "http://localhost:80"
            : Environment.GetEnvironmentVariable("SITE_URL")!;

        StringBuilder htmlBuilder = new StringBuilder(htmlContent);
        htmlBuilder.Replace("{address}", address);
        htmlBuilder.Replace("{token}", token.Value.ToString());

        string emailBody = htmlBuilder.ToString();
        await _emailSender.SendAsync(emailBody, email);
    }
}
