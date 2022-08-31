red = [0, 100, 63];
orange = [40, 100, 60];
green = [75, 100, 40];
blue = [196, 77, 55];
purple = [280, 50, 60];
letterColors = [red, orange, green, blue, purple];

mouseResponseThreshold = 10;

friction = 0.15;

rotationForce = 0.7;

message = 'Change the physics!';

drawName(message, letterColors);
bounceBubbles();
