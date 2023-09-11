/*

Random position
Xshape & Yshape - asymetrical
Xshape & Yshape - symetrical
Hue rotate, Opacity & red value

*/
var pval;

var particles = [];
var bdy;
var button,
    button1, button2, button3, splash, crosshairs;
var mouseclick;
var mouse;
var that;
var mousedown = false;
var opasity = .3;
var redValue = 0;
var blueValue = 128;
var canvas;
var indexOne = 0;
var indexTwo = 0;
var Xshape = .5; // PB values for different shapes 1, 3, 4, 5, 6, 7
var Yshape = 0.075;
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
mouseclick = {
    x: 0,
    y: 0
}
window.onload = function () {
    //    'use strict ';
    //    if ('serviceWorker' in navigator) {
    //        navigator.serviceWorker
    //            .register('./sw.js');
    //    }
    splash = document.querySelector('splash');
    //    splash.hidden = true;
    splash.onmousedown = function (e) {
        e.stopPropagation();
        splash.hidden = true;
    }
    crosshairs = document.querySelector('crosshairs');
    crosshairs.hidden = true;
    button = document.querySelector('button');
    button1 = document.querySelector('button1');
    button2 = document.querySelector('button2');
    button3 = document.querySelector('button3');
    bdy = document.getElementById('body');

    button.onmousedown = function (e) {
        e.stopPropagation();
        Action(1);
    }
    button1.onmousedown = function (e) {
        e.stopPropagation();
        Action(2);
    }
    button2.onmousedown = function (e) {
        e.stopPropagation();
        Action(3);
    }
    button3.onmousedown = function (e) {
        e.stopPropagation();
        Action(4);
    }
    new p5(schetch);
}


var player;
var player1;
var player2;

function PlaySound(i) {
    try {
        switch (i) {
            case 1:
                if (player == undefined) {
                    player = document.getElementById('audio');
                    player.loop = false;
                }
                player.load();
                player.play();
                break;
            case 2:
                if (player1 == undefined) {
                    player1 = document.getElementById('audio1');
                }
                player1.load();
                player1.play();
                break;
            case 3:
                if (player2 == undefined) {
                    player2 = document.getElementById('audio2');
                }
                player2.load();
                player2.play();
                break;
        }
    } catch (e) {};
}

function toggleButtons() {
    button.hidden = !button.hidden;
    button1.hidden = !button1.hidden;
    button2.hidden = !button2.hidden;
    button3.hidden = !button3.hidden;
}

var tmr;

function randomClick() {
    mouseclick.x = (Math.random() * window.innerWidth) * .8 + window.innerWidth / 10;
    mouseclick.y = (Math.random() * window.innerHeight) * .8 + window.innerWidth / 10;
    mousedown = true;
    try {
        clearTimeout(tmr);
    } catch (e) {};
    tmr = setTimeout(function () {
        mousedown = false;
    }, 5000);
}

var huecount = 0;
var invert = false;

function Action(i) {
    if (!splash.hidden) {
        splash.hidden = true;
        return;
    }
    switch (i) {
        case 1: // button 1: change colours
            randomClick();
            PlaySound(1);
            break;
        case 3: // button 3:
            PlaySound(2);
            indexOne++;
            if (indexOne > 9)
                indexOne = 0;
            switch (indexOne) {
                case 0:
                    Xshape = .5;
                    Yshape = .075;
                    break;
                case 1:
                    Xshape = 1.1;
                    Yshape = .062;
                    break;
                case 2:
                    Xshape = 1.1;
                    Yshape = .62;
                    break;
                case 3:
                    Xshape = 2.1;
                    Yshape = .62;
                    break;
                case 4:
                    Xshape = 2.15;
                    Yshape = .182;
                    break;
                case 5:
                    Xshape = 3.13;
                    Yshape = .087;
                    break;
                case 6:
                    Xshape = 2;
                    Yshape = 3;
                    break;
                case 7:
                    Xshape = 4;
                    Yshape = 3;
                    break;
                case 8:
                    Xshape = 5;
                    Yshape = 4;
                    break;
                case 9:
                    Xshape = 6;
                    Yshape = 8;
                    break;
            }
            pval.windowResized();
            break;
        case 2: // button 2: 
            indexTwo++;
            if (indexTwo > 12)
                indexTwo = 0;
            switch (indexTwo) {
                case 0:
                    Xshape = 1;
                    Yshape = 1;
                    break;
                case 1:
                    Xshape = 1;
                    Yshape = 2;
                    break;
                case 2:
                    Xshape = 3;
                    Yshape = 3;
                    break;
                case 3:
                    Xshape = 4;
                    Yshape = 4;
                    break;
                case 4:
                    Xshape = 4;
                    Yshape = 5;
                    break;
                case 5:
                    Xshape = 4;
                    Yshape = 6;
                    break;
                case 6:
                    Xshape = 4;
                    Yshape = 8;
                    break;
                case 7:
                    Xshape = 4;
                    Yshape = 10;
                    break;
                case 8:
                    Xshape = 10;
                    Yshape = 5;
                    break;
                case 9:
                    Xshape = 10;
                    Yshape = 4;
                    break;
                case 10:
                    Xshape = 10;
                    Yshape = 8;
                    break;
                case 11:
                    Xshape = 6;
                    Yshape = 6;
                    break;
                case 12:
                    Xshape = 6;
                    Yshape = 12;
                    break;
            }
            PlaySound(3);
            pval.windowResized();
            break;
        case 4: // button 4: speed
            PlaySound(3);
            huecount++;
            if (huecount > 6) {
                huecount = 0;
                if (opasity == .3)
                    opasity = .1;
                else if (opasity == .1) {
                    opasity = .8;
                } else if (opasity == .8) {
                    opasity = .3;
                    invert = !invert;
                }
            }
            var s = "";
            if (invert) {
                s = "invert(100%) ";
            }
            button.style.filter = button1.style.filter = button2.style.filter = button3.style.filter = s;
            if (huecount == 6)
                bdy.style.filter = s + "grayscale(100%)";
            else
                bdy.style.filter = s + "hue-rotate(" + (huecount * 60) + "deg)";
            PlaySound(1);
            break;
    }
}


var schetch = function (p) {
    pval = p;
    var particleNum = 250;
    var particle;
    var pixels = [];
    var img;
    let stars = [];
    var scale = 1.8;
    var scaleCanvas = 1;

    class Star {
        constructor(tx, ty, tc, tf, td) {
            this.x = tx;
            this.y = ty;
            this.c = tc;
            this.f = tf;
            this.down = td;
        }

        showStar() {
            p.stroke(this.c)
            p.point(this.x, this.y);
        }

        twinkle() {
            if (this.c >= 255) {
                this.down = true;
            }
            if (this.c <= 0) {
                this.down = false;
            }

            if (this.down) {
                this.c -= this.f
            } else {
                this.c += this.f
            }
        }
    }
    var Particle = function (pos, v, d, c) {
        this.p = pos;
        this.temp_p = this.p.copy();
        this.defaultPos = this.p.copy();
        this.v = v;
        this.a = p.createVector(0, 0);
        this.d = d;
        this.r = d / 2;
        this.color = c;
        this.mass = this.r * 0.2;
        this.noise_x = p.random(1000);
        this.noise_y = p.random(1000);
    }
    Particle.prototype.addForce = function (f) {
        this.a.add(f);
        this.a.div(this.mass);
    }
    Particle.prototype.update = function () {
        this.v.add(this.a);
        this.p.add(this.v);
        this.a.mult(0);
    }
    Particle.prototype.walk = function () {
        this.noise_x += 0.01;
        this.noise_y += 0.01;
        var force = p.createVector(0, 0);
        var to = p.createVector(p.noise(this.noise_x) * this.d * 2 - this.d, p.noise(this.noise_y) * this.d * 2 - this.d);
        this.temp_p = p5.Vector.add(this.p, to);
        var toTempPos = p5.Vector.sub(this.temp_p, this.p);
        force = p5.Vector.mult(toTempPos, 0.02);
        this.addForce(force);
    }

    Particle.prototype.towardsCursor = function () {
        var radius = 800;
        var dist = p5.Vector.dist(mouse, this.p);
        if (dist > 0) { //} && dist < radius) {
            var force = p.createVector(0, 0);
            var toMouse = p5.Vector.sub(mouse, this.p);
            toMouse.normalize();
            var s = dist / radius;
            var amp = 0.08;
            var strength = 15; // 60
            if (isChrome)
                strength = 5;
            var power = (1 / p.pow(s, 0.5 * amp)) - 1;
            power *= strength;
            force = p5.Vector.mult(toMouse, power);
            this.addForce(force);
        }
    }

    Particle.prototype.attract = function () {
        if (mousedown)
            mouse = p.createVector(mouseclick.x, mouseclick.y);
        else if (p.touchIsDown) {
            mouse = p.createVector(p.touchX, p.touchY);
        } else {
            mouse = p.createVector(p.mouseX, p.mouseY);
        }
        this.towardsCursor();
    }
    Particle.prototype.returnPos = function () {
        var force = p.createVector(0, 0);
        var toDefault = p5.Vector.sub(this.defaultPos, this.p);
        force = p5.Vector.mult(toDefault, 0.003); // 0.03
        this.addForce(force);
    }

    Particle.prototype.draw = function () {
        p.noStroke();
        //gradation

        var grad = p.drawingContext.createRadialGradient(this.p.x, this.p.y, 0, this.p.x, this.p.y, this.r);
        var s = 'rgba(' + redValue + ', 0,' + blueValue + ',' + opasity + ')';
        grad.addColorStop(1, s); // PB change colour 1.0 .. 0.1
        grad.addColorStop(0, 'rgba(' + this.color.levels[0] + ',' + this.color.levels[1] + ',' + this.color.levels[2] + ',' + this.color.levels[3] + ')');
        p.drawingContext.fillStyle = grad;
        //p.fill(this.color);
        p.ellipse(this.p.x, this.p.y, this.d * scale, this.d * scale);
    }

    p.setup = function () {
        //        p.background(0);
        init();
    }

    p.preload = function () {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        ctx = canvas.drawingContext;
        p.blendMode(p.ADD);
    }
    p.draw = function () {
        p.clear();
        for (let i = 0; i < stars.length; i++) {
            stars[i].twinkle();
            stars[i].showStar();
        }
        //        p.background(0);
        for (var i = 0; i < particles.length; i++) {
            particles[i].walk();
            if (p.mouseIsPressed || p.touchIsDown || mousedown) {
                particles[i].attract();
            } else {
                particles[i].returnPos();
            }
            particles[i].v.mult(0.9);

            particles[i].update();
            particles[i].draw();
        }
    }
    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        particles = [];
        init();
    }
    p.keyPressed = function () {
        switch (p.keyCode) {
            case 32:
            case 49:
                Action(1);
                break;
            case 50:
                Action(3);
                break;
            case 13:
            case 51:
                Action(2);
                break;
            case 52:
                Action(4);
                break;
            case 53:
                toggleButtons();
                break;
        }
    }

    function init() {
        var radius;
        var firsttime = true;
        if (p.windowWidth > p.windowHeight) {
            radius = p.windowHeight * 0.4;
        } else {
            radius = p.windowWidth * 0.4;
        }
        if (particles.length > 1)
            firsttime = false;
        var aspect = p.windowWidth / p.windowHeight;
        for (var i = 0; i < particleNum; i++) {
            var t = p.map(i, 0, particleNum, 0, p.TWO_PI);
            var x = p.sin(t * 2 + p.radians(90)) * p.cos(t * Xshape) * (radius * aspect) + p.windowWidth / 2;
            var y = p.sin(t * 2 + p.radians(0)) * p.cos(t * Yshape) * (radius) + p.windowHeight / 2;
            var pos = p.createVector(x, y);
            var randompos = p.createVector(p.random(-10, 10), p.random(-10, 10));
            pos.add(randompos);
            var v = p.createVector(0, 0);
            var c = p.color(p.random(50, 255), p.random(50, 255), p.random(50, 255), 255);
            var size = p.random(6, 40);
            var particle = new Particle(pos, v, size, c);
            if (firsttime)
                particles.push(particle);
            else {
                particles[i].x = particle.x;
                particles[i].y = particle.y;
            }
        }

        for (let i = 0; i < 100; i++) {
            stars[i] = new Star(p.random(p.width), p.random(p.height), p.random(255), p.random(0.1, 3), p.random(1));
        }
        p.strokeWeight(3);
    }

    var mouseX;
    var mouseY;

    function MouseClick() {
        var s; //        
        var elements = document.elementsFromPoint(crosshairs.offsetLeft + (crosshairs.offsetWidth) / 2, crosshairs.offsetTop + (crosshairs.offsetHeight) / 2);
        try {
            if (elements[0].id == "defaultCanvas0") {
                mousedown = true;
            } else {
                switch (elements[0].nodeName) {
                    case 'BUTTON':
                        Action(1);
                        break;
                    case 'BUTTON1':
                        Action(2);
                        break;
                    case 'BUTTON2':
                        Action(3);
                        break;
                    case 'BUTTON3':
                        Action(4);
                        break;
                }
            }
        } catch (e) {}
    }

    function MoveMouse(xm, ym) {
        crosshairs.hidden = false;
        try {
            mouseX = crosshairs.offsetLeft + (crosshairs.offsetWidth) / 2;
            mouseY = crosshairs.offsetTop + (crosshairs.offsetHeight) / 2;
            console.log('Moving: ', xm, ym);
            mouseX += xm;
            mouseY += ym;
            if (mouseX < 10)
                mouseX = 10;
            if (mouseY < 10)
                mouseY = 10;
            if (mouseX >= window.innerWidth - 10)
                mouseX = window.innerWidth - 10;
            if (mouseY >= window.innerHeight - 10)
                mouseY = window.innerHeight - 10;
            console.log('MoveTo: ', mouseX, mouseY);
            crosshairs.style.left = mouseX - crosshairs.offsetWidth / 2 + "px";
            crosshairs.style.top = mouseY - crosshairs.offsetHeight / 2 + "px";
            //            mouseX /= canvas.width;
            //            mouseY /= canvas.height;
            mouseclick.x = mouseX;
            mouseclick.y = mouseY;
        } catch {}
    }

    function JoystickMoveTo(jy, jx) {
        if (splash.hidden) {
            if (Math.abs(jx) < .1 && Math.abs(jy) < .1) {
                try {
                    if (gpad.getButton(14).value > 0) // dpad left
                        MoveMouse(-5, 0);
                    if (gpad.getButton(12).value > 0) // dup
                        MoveMouse(0, -3);
                    if (gpad.getButton(13).value > 0) // ddown
                        MoveMouse(0, 3);
                    if (gpad.getButton(15).value > 0) // dright
                        MoveMouse(5, 0);
                } catch {}
                return;
            }
            if (Math.abs(jx) < .1)
                jx = 0;
            if (Math.abs(jy) < .1)
                jy = 0;
            if (jx == 0 && jy == 0)
                return;
            MoveMouse(jx * 10, jy * 10);
        }
    }

    var currentButton = 0;

    function showPressedButton(index) {
        if (!splash.hidden) { // splash screen
            splash.hidden = true;
        } else {
            switch (index) {
                case 0: // A
                    if (crosshairs.hidden) {
                        Action(1);
                    } else {
                        MouseClick();
                    }
                    break;
                case 1: // B - 
                    Action(2);
                    break;
                case 2: // X
                    Action(3);
                    break;
                case 3: // Y
                    Action(4);
                    break;
                case 4: // LT
                case 5:
                    Action(1);
                    break;
                case 6:
                case 7:
                    break;
                case 8:
                    toggleButtons();
                    break
                case 9:
                case 10: // XBox
                    break;
                case 12: // dpad handled by timer elsewhere
                case 13:
                case 14:
                case 15:
                    break;
                default:
            }
        }
    }

    function removePressedButton(index) {
        if (!crosshairs.hidden)
            mousedown = false;
        console.log("Releasd: ", index);
    }

    function moveJoystick(values, isLeft) {
        if (splash.hidden)
            JoystickMoveTo(values[1], values[0]);
    }

    var gpad;

    function getAxes() {
        //       console.log('Axis', gpad.getAxis(0), gpad.getAxis(1), gpad.getButton(14).value);

        if (splash.hidden) {
            JoystickMoveTo(gpad.getAxis(1), gpad.getAxis(0));
            JoystickMoveTo(gpad.getAxis(3), gpad.getAxis(2));
        }
        setTimeout(function () {
            getAxes();
        }, 50);
    }

    gamepads.addEventListener('connect', e => {
        console.log('Gamepad connected:');
        console.log(e.gamepad);
        gpad = e.gamepad;
        e.gamepad.addEventListener('buttonpress', e => showPressedButton(e.index));
        e.gamepad.addEventListener('buttonrelease', e => removePressedButton(e.index));
        //       e.gamepad.addEventListener('joystickmove', e => moveJoystick(e.values, true),
        //            StandardMapping.Axis.JOYSTICK_LEFT);
        //        e.gamepad.addEventListener('joystickmove', e => moveJoystick(e.values, false),
        //            StandardMapping.Axis.JOYSTICK_RIGHT);
        setTimeout(function () {
            getAxes();
        }, 50);
    });

    gamepads.addEventListener('disconnect', e => {
        console.log('Gamepad disconnected:');
        console.log(e.gamepad);
    });

    gamepads.start();
}
