using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Options;

namespace Infrastructure.Emails;

public class EmailSender
{
    private readonly EmailSettings _emailSettings;

    public EmailSender(IOptions<EmailSettings> emailSettings)
    {
        _emailSettings = emailSettings.Value;
    }

    public async Task SendAsync(string html, string recepient)
    {
        SmtpClient client = new SmtpClient(_emailSettings.MailServer, _emailSettings.MailPort)
        {
            Credentials = new NetworkCredential(_emailSettings.Username, _emailSettings.Password),
            EnableSsl = true
        };

        MailMessage mailMessage = new MailMessage
        {
            From = new MailAddress(_emailSettings.SenderEmail, _emailSettings.SenderName),
            Subject = "Код подтверждения Attire",
            Body = html,
            IsBodyHtml = true
        };
        mailMessage.To.Add(recepient);

        await client.SendMailAsync(mailMessage);
    }
}
