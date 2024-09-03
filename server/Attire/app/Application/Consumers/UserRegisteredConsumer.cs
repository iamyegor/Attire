using Domain.User;
using Domain.User.ValueObject;
using Infrastructure.Data;
using MassTransit;
using SharedKernel.Communication.Events;

namespace Application.Consumers;

public class UserRegisteredConsumer : IConsumer<UserRegisteredEvent>
{
    private readonly ApplicationContext _context;

    public UserRegisteredConsumer(ApplicationContext context)
    {
        _context = context;
    }

    public async Task Consume(ConsumeContext<UserRegisteredEvent> consumeContext)
    {
        Email email = Email.Create(consumeContext.Message.Email);

        User user = User.Create(
            id: consumeContext.Message.Id,
            firstName: consumeContext.Message.Name,
            email: email
        );

        _context.Users.Add(user);
        await _context.SaveChangesAsync();
    }
}
