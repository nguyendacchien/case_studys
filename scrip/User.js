class User { //may bay
    constructor(x, y, w, h, speedu) {
        this.aUser = x;
        this.bUser = y;
        this.speedXu = speedu;
        this.wUser = w;
        this.hUser = h;
    }
    createRect() {
        ctx.beginPath();
        ctx.rect(this.aUser, this.bUser, this.wUser, this.hUser);
        ctx.fill();
        ctx.closePath();
    }
    createUser() {
        let img = new Image();
        img.src = 'img/User.png';
        ctx.drawImage(img, this.aUser, this.bUser, this.wUser, this.hUser);
    }
}








