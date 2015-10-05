function createService(container) {
    if (isDockerComposeContainer(container)) {
        var name = removeSlash(container.Name).split('_');

        return {
            Environment: name.shift(),
            Instance: name.pop(),
            Service: name.join('_'),
            Host: container.NetworkSettings.IpAddress,
            Port: getDefaultPort(container),
            TTL: defaultTTL,
        };
    } else {
        return {
            Service: removeSlash(container.Name),
            Instance: removeSlash(container.Name),
            Host: container.NetworkSettings.IpAddress,
            Port: getDefaultPort(container),
            Environment: defaultEnvironment,
            TTL: defaultTTL,
        };
    }
}

function isDockerComposeContainer(container) {
    return removeSlash(container.Name).match(/^\w+_\w+_\d+$/);
}

// this is ported from skydock core:
// https://github.com/crosbymichael/skydock/blob/3a5125fc2a1fcffa42d577817d8b6e2d019dd55c/plugins/default.js
function getDefaultPort(container) {
    // if we have any exposed ports use those
    var port = 0;
    var ports = container.NetworkSettings.Ports;
    if (Object.keys(ports).length > 0) {
        for (var key in ports) {
            var value = ports[key];
            if (value !== null && value.length > 0) {
                for (var i = 0; i < value.length; i++) {
                    var hp = parseInt(value[i].HostPort);
                    if (port === 0 || hp < port) {
                        port = hp;
                    }
                }
            } else if (port === 0) {
                // just grab the key value
                var expose = parseInt(key.split("/")[0]);
                port = expose;
            }
        }
    }

    if (port === 0) {
        port = 80;
    }
    return port;
}