// import store from "./store/index.js";

class Sketch {
  constructor() {
    this.p5 = null;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.DEBUG = false;
    this.NO_LOOP = false;
    this.x = 0;
    this.y = 0;
    this.px = 0;
    this.py = 0;
    this.easing = 0.15;
    this.grayscale = null;
    this.colored = null;
    this.maskBrush = null;
    this.mask = null;
  }

  setP5Ref(p5ref) {
    this.p5 = p5ref;
    this.p5.setup = this.setup.bind(this);
    this.p5.draw = this.draw.bind(this);
    this.p5.preload = this.preload.bind(this);
    this.p5.windowResized = this.windowResized.bind(this);
  }

  preload() {
    console.log("sketch: preload");
    this.colored = this.p5.loadImage("/photos/sGochman_colored copy.jpg");
    this.grayscale = this.p5.loadImage("/photos/sGochman copy.jpg");
    this.maskBrush = this.p5.loadImage("/photos/mask.png");
    // this.colors = [
    //   this.p5.color("#FF8CD1"),
    //   this.p5.color("#7EEF00"),
    //   this.p5.color("#0111D0")
    // ];
    // store.commit("set_ready_to_play", true);
    // console.log("sketch: sent set_ready_to_play to store");
  }

  setup() {
    this.p5.pixelDensity(1);
    console.log("viz: setup()");
    this.calcDimensions();
    this.p5.createCanvas(this.canvasWidth, this.canvasHeight, this.p5.P2D);
    // this.p5.frameRate(30);
    this.p5.strokeWeight(40);
    this.p5.background(220);

    this.mask = this.p5.createGraphics(this.p5.width, this.p5.height);
    this.maskedColor = this.colored.get();
    this.maskedColor.mask(this.mask.get());
    this.mask.imageMode(this.p5.CENTER);
    this.p5.image(this.grayscale, 0, 0, this.canvasWidth, this.canvasHeight);

    this.p5.tint(255, 220);
  }

  draw() {
    // if (!this.dataLoaded) return;
    this.p5.image(this.grayscale, 0, 0, this.canvasWidth, this.canvasHeight);
    // this.p5.clear();

    this.calcDimensions();
    this.p5.image(this.maskedColor, 0, 0, this.canvasWidth, this.canvasHeight);

    if (
      this.p5.mouseX >= 0 &&
      this.p5.mouseX <= this.canvasWidth &&
      this.p5.mouseY >= 0 &&
      this.p5.mouseY <= this.canvasHeight
    ) {
      //   this.x += (this.p5.mouseX - this.x) * this.easing;
      //   this.y += (this.p5.mouseY - this.y) * this.easing;
      //   this.p5.line(this.x, this.y, this.px, this.py);

      this.mask.image(this.maskBrush, this.p5.mouseX, this.p5.mouseY, 100, 100);
      this.maskedColor = this.colored.get();
      this.maskedColor.mask(this.mask.get());

      //   this.px = this.x;
      //   this.py = this.y;
    }

    if (this.DEBUG) {
      var fr = this.p5.frameRate();
      this.p5.text(fr, this.canvasWidth * 0.1, this.canvasWidth * 0.1);
      this.p5.text(
        this.p5.millis(),
        this.canvasWidth * 0.1,
        this.canvasWidth * 0.2
      );
    }
  }

  //   mousePressed() {
  //     this.p5.background(220);
  //     console.log("mousepressed");
  //   }

  calcDimensions() {
    this.canvasWidth = this.p5.windowWidth >= 426 ? 600 : this.p5.windowWidth;
    this.canvasHeight = this.canvasWidth * 1.3;
  }

  windowResized() {
    this.calcDimensions();
    this.p5.resizeCanvas(this.canvasWidth, this.canvasHeight);
    console.log("resize");
  }

  stopAndCleanup() {
    console.log("viz: this.stopAndCleanup()");
    // this.brushes = [];
    // this.ellipses = [];
    // this.squiggles = [];
    // this.dataLoaded = false;
    // this.snapSaved = false;
  }
}

export default Sketch;
