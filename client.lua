RegisterNetEvent('buzzer-deathScreen:client:toggle', function(status)
    SendNUIMessage({
        action = 'toggle',
        toggle = status
    })
end)

RegisterNetEvent('buzzer-deathScreen:client:press', function(status)
    SendNUIMessage({
        action = 'press',
        toggle = status
    })
end)

RegisterNetEvent('buzzer-deathScreen:client:respawn', function(status)
    SendNUIMessage({
        action = 'respawn',
        toggle = status
    })
end)

RegisterNetEvent('buzzer-deathScreen:client:time', function(number)
    SendNUIMessage({
        action = 'time',
        time = number
    })
end)