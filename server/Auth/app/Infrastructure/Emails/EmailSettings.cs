namespace Infrastructure.Emails;

public class EmailSettings
{
    public string SenderName { get; set; } = null!;
    public string SenderEmail { get; set; } = null!;
    public string ApiKey { get; set; } = null!;
}
