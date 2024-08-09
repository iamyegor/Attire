using Domain.Category.ValueObject;
using Domain.DomainErrors;
using XResults;
using Errors = Domain.Category.Errors.Errors;

namespace Infrastructure.Services;

public class GenderConverter
{
    public static Result<Gender, Error> Convert(string gender)
    {
        if (string.IsNullOrWhiteSpace(gender))
        {
            return Errors.Gender.IsInvalid(gender);
        }

        gender = gender.Trim().ToLower();

        if (gender == "male")
        {
            return Gender.Male;
        }

        if (gender == "female")
        {
            return Gender.Female;
        }

        return Errors.Gender.IsInvalid(gender);
    }
}
