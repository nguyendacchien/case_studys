class Enemy { //doi thu
    constructor(x, y, radius, speed) {
        this.xEnemy = x;
        this.yEnemy = y;
        this.speedX = speed;
        this.speedY = speed;
        this.radius = radius;
    }

    createRects() {
        // let ctx = document.getElementById('game').getContext('2d');
        ctx.beginPath();
        ctx.rect(this.xEnemy, this.yEnemy, this.radius, this.radius);
        ctx.fill();
        ctx.closePath()
    }

    createEnemy() {
        let img = new Image();
        img.src = 'img/ruoi.png';
        ctx.drawImage(img, this.xEnemy, this.yEnemy, this.radius, this.radius)
    }

}

