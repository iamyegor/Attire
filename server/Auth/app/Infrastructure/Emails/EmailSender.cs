using System.Collections.Generic;
using brevo_csharp.Api;
using brevo_csharp.Model;
using Microsoft.Extensions.Options;
using Configuration = brevo_csharp.Client.Configuration;

namespace Infrastructure.Emails;

public class EmailSender
{
    private readonly EmailSettings _emailSettings;

    public EmailSender(IOptions<EmailSettings> emailSettings)
    {
        _emailSettings = emailSettings.Value;
    }

    public async System.Threading.Tasks.Task SendAsync(string html, string recipient)
    {
        if (!Configuration.Default.ApiKey.ContainsKey("api-key"))
        {
            Configuration.Default.ApiKey.Add("api-key", _emailSettings.ApiKey);
        }

        var api = new TransactionalEmailsApi();
        var email = new SendSmtpEmail(
            sender: new SendSmtpEmailSender
            {
                Name = _emailSettings.SenderName,
                Email = _emailSettings.SenderEmail,
            },
            to: new List<SendSmtpEmailTo> { new(email: recipient, name: null) },
            subject: "Attire Confirmation Code",
            htmlContent: html
        );

        try
        {
            await api.SendTransacEmailAsync(email);
        }
        catch (MissingMethodException)
        {
            await System.Threading.Tasks.Task.Run(() => api.SendTransacEmail(email));
        }
    }
}
