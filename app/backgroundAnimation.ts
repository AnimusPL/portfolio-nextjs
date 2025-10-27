interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface BackgroundAnimation {
  canvas: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  width: number;
  height: number;
  points: Point[];
  pointCount: number;
  init: () => void;
  resizeCanvas: () => void;
  initializePoints: () => void;
  animate: () => void;
}

const backgroundAnimation: BackgroundAnimation = {
  canvas: null,
  ctx: null,
  width: 0,
  height: 0,
  points: [],
  pointCount: 200,

  init() {
    this.canvas = document.getElementById("background") as HTMLCanvasElement | null;
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    if (!this.ctx) return;

    this.resizeCanvas();
    window.addEventListener("resize", this.resizeCanvas.bind(this));
    this.initializePoints();
    this.animate();
  },

  resizeCanvas() {
    if (!this.canvas) return;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  },

  initializePoints() {
    this.points = [];
    for (let i = 0; i < this.pointCount; i++) {
      this.points.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
  },

  animate() {
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.pointCount; i++) {
      const p = this.points[i];

      // Ruch punktów
      p.x += p.vx;
      p.y += p.vy;

      // Odbicie od krawędzi
      if (p.x <= 0 || p.x >= this.width) p.vx *= -1;
      if (p.y <= 0 || p.y >= this.height) p.vy *= -1;

      // Rysowanie punktu
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      this.ctx.fillStyle = "rgb(0, 0, 0)";
      this.ctx.fill();

      // Łączenie linii między punktami
      for (let j = i + 1; j < this.pointCount; j++) {
        const p2 = this.points[j];
        const distance = Math.hypot(p.x - p2.x, p.y - p2.y);

        if (distance < 100) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(0, 0, 0, ${1 - distance / 100})`;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(this.animate.bind(this));
  },
};

export default backgroundAnimation;
