﻿namespace SharedKernel.Communication.Events;

public class UserRegisteredEvent
{
    public UserRegisteredEvent(Guid id, string? name, string email)
    {
        Id = id;
        Name = name;
        Email = email;
    }

    public Guid Id { get; }
    public string? Name { get; }
    public string Email { get; }
}