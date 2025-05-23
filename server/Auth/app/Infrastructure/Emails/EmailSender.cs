using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;

namespace Infrastructure.Emails;

public class EmailSender
{
    private readonly EmailSettings _emailSettings;

    public EmailSender(IOptions<EmailSettings> emailSettings)
    {
        _emailSettings = emailSettings.Value;
    }

    public async Task SendAsync(string html, string recipient)
    {
        MimeMessage email = new();
        email.From.Add(new MailboxAddress(_emailSettings.SenderName, _emailSettings.SenderEmail));
        email.To.Add(MailboxAddress.Parse(recipient));
        email.Subject = "Attire Confirmation Code";

        BodyBuilder bodyBuilder = new() { HtmlBody = html };
        email.Body = bodyBuilder.ToMessageBody();

        using SmtpClient client = new();
        client.Timeout = 45000; // 45 seconds

        try
        {

            await client.ConnectAsync(
                _emailSettings.MailServer,
                _emailSettings.MailPort,
                SecureSocketOptions.StartTls
            );
            await client.AuthenticateAsync(_emailSettings.Username, _emailSettings.Password);
            await client.SendAsync(email);

            await client.DisconnectAsync(true);
        }
        finally
        {
            if (client.IsConnected)
                await client.DisconnectAsync(true);
        }
    }
}
