export default class Paddle{

  constructor(gameW, gameH) {

    this.w = 150;
    this.h = 20;

    this.pos = {
      x: gameW / 2 - this.w / 2,
      y: gameH - this.h - 10
    }

  }

  draw(ctx) {
    ctx.fillStyle = '#0ff';
    ctx.fillRect(this.pos.x, this.pos.y, this.w, this.h);
  }

  update(deltaTime) {
    if (!deltaTime) return;

    this.pos.x += 5 / deltaTime;
  }
}