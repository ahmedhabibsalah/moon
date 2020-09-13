let
    g = .15, //Gravity
    wind_resistance = .0001,
    tryAgainBtn = document.getElementById("tryAgain"),
    nextLevelBtn = document.getElementById("nextLevel"),
    tryAgainWindow = document.getElementsByClassName("try-again-window")[0],
    winWindow = document.getElementsByClassName("win-window")[0],
    currentLevel = parseInt(location.search.substring(1)) ? parseInt(location.search.substring(1)) : 1,
    canvas = document.getElementById("GameArea"),
    gameArea = canvas.getContext('2d'),
    back = document.getElementsByClassName("back")[0],
    birds_obj = {
        "bird1": new Bird(gameArea, 220, 320, 70, 70, "assets/media/imgs/objects/birds/Untitled (1).png"),
        "bird2": new Bird(gameArea, 78, 505, 70, 70, "assets/media/imgs/objects/birds/Untitled (1).png"),
        "bird3": new Bird(gameArea, 132, 505, 70, 70, "assets/media/imgs/objects/birds/Untitled (1).png"),
        "bird4": new Bird(gameArea, 200, 525, 90, 95, "assets/media/imgs/objects/birds/Untitled (6).png"),
        "bird5": new Bird(gameArea, 255, 525, 80, 95, "assets/media/imgs/objects/birds/Untitled (6).png"),

    },
    pigs_obj = {
        "pig1": new Pig(gameArea, 240, 340, 80, 80, "assets/media/imgs/objects/pigs/Untitled1.png"),
        "pig2": new Pig(gameArea, 280, 380, 80,80, "assets/media/imgs/objects/pigs/Untitled (2).png"),
        "pig3": new Pig(gameArea, 280, 380, 80, 80, "assets/media/imgs/objects/pigs/Untitled (2).png"),
        "pig4": new Pig(gameArea, 240, 340, 80, 80, "assets/media/imgs/objects/pigs/Untitled1.png"),
        "pig5": new Pig(gameArea, 240, 340, 80, 80, "assets/media/imgs/objects/pigs/Untitled1.png"),
    },
    obstacles_obj = {
        "obstcale1": new Obstacle(gameArea, 850, 250, 100, 120, "assets/media/imgs/obstacles/brick_1.png"),
        "obstcale2": new Obstacle(gameArea, 1230, 270, 70, 90, "assets/media/imgs/obstacles/brick_1.png"),
        "obstcale3": new Obstacle(gameArea, 620, 330, 70, 100, "assets/media/imgs/obstacles/brick_1.png"),
        "obstcale4": new Obstacle(gameArea, 530, 430, 70, 90, "assets/media/imgs/obstacles/brick_1.png"),
        "obstcale5": new Obstacle(gameArea, 620, 130, 70, 90, "assets/media/imgs/obstacles/brick_1.png")
    },
    sounds = {
        startSound: new Audio('assets/media/sounds/go.mp3'),
        failedSound: new Audio('assets/media/sounds/fail.mp3'),
        winSound: new Audio('assets/media/sounds/wining.mp3'),
    }

document.getElementsByTagName("title")[0].innerText = "MOON SHOT - Level " + currentLevel