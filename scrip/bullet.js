class Bullet {
    constructor(x, y, radius) {
        this.bultX = x;
        this.bultY = y
        this.bultRadius = radius
    }
    createBullet() {
        ctx.beginPath();
        ctx.rect(this.bultX, this.bultY, this.bultRadius, this.bultRadius);
        ctx.fill();
        ctx.closePath()
    }
}
