using Domain.Common;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Domain.DomainErrors;

public class Error : ValueObject
{
    public string Code { get; set; }
    public string Message { get; set; }
    public Dictionary<string, object?> Details { get; set; }

    internal Error(string code, string message, Dictionary<string, object?>? details = null)
    {
        Code = code;
        Message = message;
        Details = details ?? new Dictionary<string, object?>();
    }

    public string Serialize()
    {
        var jsonSettings = new JsonSerializerSettings()
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver()
        };

        return JsonConvert.SerializeObject(this, jsonSettings);
    }

    public static Error Deserialize(string serialized)
    {
        Error? error = JsonConvert.DeserializeObject<Error>(serialized);
        if (error == null)
        {
            throw new Exception($"Can' deserialize error: {serialized}");
        }

        return error;
    }

    protected override IEnumerable<object?> GetEqualityComponents()
    {
        yield return Code;
    }
}
