namespace Domain.DomainErrors;

public static partial class Errors
{
    public static class Login
    {
        public static Error HasInvalidLength => new Error("login.has.invalid.length");
        public static Error HasInvalidSymbols => new Error("login.has.invalid.symbols");
        public static Error IsAlreadyTaken => new Error("login.is.already.taken");
    }
}
