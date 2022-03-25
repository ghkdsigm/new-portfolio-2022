<template>
  <div>
    <div class="section01 sect" id="top">
      <Headline>
        <a class="Aline" slot="s_title">
          <span class>Portfolio </span>
        </a>
        <span class="Bline ft" slot="s_name">Hwang Seung Hyun</span>
        <h3 class="comment" slot="s_comment">
          Various<br />Work Experiences<br />For your Brand
        </h3>
      </Headline>
      <InfoList />
      <div id="canvas_area">
        <canvas width="983" height="937"></canvas>
      </div>
      <img
        src="@/assets/images/ezgif.gif"
        class="workingImg Nondraggable"
        alt="작업영상"
      />
      <div class="scrollIcon">
        <a href="#footer" class="up"><span></span><span></span></a>
        <a href="#"><span class="line"></span></a>
        <a href="#footer" class="down"><span></span><span></span></a>
      </div>
    </div>
    <div class="section02 sect">
      <PersonalInfo />
    </div>
    <div class="section03 sect">
      <Reprentive />
    </div>
    <div class="section04 sect">
      <Skills />
    </div>
    <div
      class="section05 sect"
      :style="{
        'background-image':
          'url(https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/worksImg.png)',
      }"
    >
      <WorksLink />
    </div>
    <div class="section06">
      <AppFooter />
    </div>
    <a @click="scrollTop" v-show="visible" class="bottom-right"> Top </a>
  </div>
</template>

<script>
import Headline from "@/components/Headline";
import InfoList from "@/components/InfoList";
import PersonalInfo from "@/components/PersonalInfo";
import Reprentive from "@/components/Reprentive";
import Skills from "@/components/Skills";
import WorksLink from "@/components/WorksLink";
import AppFooter from "@/components/common/AppFooter";

export default {
  components: {
    Headline,
    InfoList,
    PersonalInfo,
    Reprentive,
    Skills,
    WorksLink,
    AppFooter,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 5);
    },
    scrollListener(e) {
      this.visible = window.scrollY > 1000;
    },
  },
  mounted() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    var time = 0,
      velocity = 0.1,
      velocityTarget = 0.1,
      width,
      height,
      lastX,
      lastY;

    var MAX_OFFSET = 400;
    var SPACING = 4;
    var POINTS = MAX_OFFSET / SPACING;
    var PEAK = MAX_OFFSET * 0.25;
    var POINTS_PER_LAP = 6;
    var SHADOW_STRENGTH = 6;

    setup();

    function setup() {
      resize();
      step();

      window.addEventListener("resize", resize);
      window.addEventListener("mousedown", onMouseDown);
      document.addEventListener("touchstart", onTouchStart);
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function step() {
      time += velocity;
      velocity += (velocityTarget - velocity) * 0.3;

      clear();
      render();

      requestAnimationFrame(step);
    }

    function clear() {
      context.clearRect(0, 0, width, height);
    }

    function render() {
      var x,
        y,
        cx = width / 2,
        cy = height / 2;

      context.globalCompositeOperation = "lighter";
      context.strokeStyle = "#fff";
      context.shadowColor = "#fff";
      context.lineWidth = 2;
      context.beginPath();

      for (var i = POINTS; i > 0; i--) {
        var value = i * SPACING + (time % SPACING);

        var ax = Math.sin(value / POINTS_PER_LAP) * Math.PI,
          ay = Math.cos(value / POINTS_PER_LAP) * Math.PI;

        (x = ax * value), (y = ay * value * 0.35);

        var o = 1 - Math.min(value, PEAK) / PEAK;

        y -= Math.pow(o, 2) * 200;
        y += (200 * value) / MAX_OFFSET;
        y += (x / cx) * width * 0.1;

        context.globalAlpha = 1 - value / MAX_OFFSET;
        context.shadowBlur = SHADOW_STRENGTH * o;

        context.lineTo(cx + x, cy + y);
        context.stroke();

        context.beginPath();
        context.moveTo(cx + x, cy + y);
      }

      context.lineTo(cx, cy - 200);
      context.lineTo(cx, 0);
      context.stroke();
    }

    function onMouseDown(event) {
      lastX = event.clientX;
      lastY = event.clientY;

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }

    function onMouseMove(event) {
      var vx = (event.clientX - lastX) / 100;
      var vy = (event.clientY - lastY) / 100;

      if (event.clientY < height / 2) vx *= -1;
      if (event.clientX > width / 2) vy *= -1;

      velocityTarget = vx + vy;

      lastX = event.clientX;
      lastY = event.clientY;
    }

    function onMouseUp(event) {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    function onTouchStart(event) {
      event.preventDefault();

      lastX = event.touches[0].clientX;
      lastY = event.touches[0].clientY;

      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);
    }

    function onTouchMove(event) {
      var vx = (event.touches[0].clientX - lastX) / 100;
      var vy = (event.touches[0].clientY - lastY) / 100;

      if (event.touches[0].clientY < height / 2) vx *= -1;
      if (event.touches[0].clientX > width / 2) vy *= -1;

      velocityTarget = vx + vy;

      lastX = event.touches[0].clientX;
      lastY = event.touches[0].clientY;
    }

    function onTouchEnd(event) {
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style lang="scss" scoped>
.sect {
  display: flex;
  justify-content: center;
}
.section01 {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: black;
  .workingImg {
    position: absolute;
    width: 550px;
    bottom: 30px !important;
    top: auto;
    right: 0;
    z-index: 1;
  }
  .scrollIcon {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    width: 50px;
    height: 80px;
    .line {
      width: 10px;
      height: 2px;
      background: #fff;
      position: absolute;
      left: 50%;
      top: 32px;
      text-align: center;
      margin-left: -8px;
    }
    .up {
      span {
        position: absolute;
        top: 5px;
        left: 50%;
        width: 18px;
        height: 18px;
        margin-left: -12px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
        -webkit-animation: sdb 3s infinite;
        animation: sdb 3s infinite;
        opacity: 0;
        box-sizing: border-box;
        &:nth-of-type(1) {
          -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
        }
        &:nth-of-type(2) {
          top: 18px;
          -webkit-animation-delay: 0s;
          animation-delay: 0s;
        }
      }
    }
    .down {
      span {
        position: absolute;
        top: 0;
        left: 50%;
        width: 18px;
        height: 18px;
        margin-left: -12px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-animation: sdb 3s infinite;
        animation: sdb 3s infinite;
        opacity: 0;
        box-sizing: border-box;
        &:nth-of-type(1) {
          top: 30px;
          -webkit-animation-delay: 0s;
          animation-delay: 0s;
        }
        &:nth-of-type(2) {
          top: 42px;
          -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
        }
      }
    }
  }
  #canvas_area {
    position: absolute;
    z-index: 2;
    width: 50%;
    height: 50%;
    margin: auto;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    text-align: center;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 30px;
      left: 0;
      bottom: 0;
      /* background: linear-gradient(to top,rgb(0 0 0),rgb(0 0 0 / 45%)); */
      display: block;
    }
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 230px;
      left: 0;
      top: 0;
      // background: linear-gradient(to bottom, rgb(0 0 0) 10%, rgba(0, 0, 0, 0));
      display: block;
    }
    canvas {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}

.section03 {
  background: url(https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/backPoint.png);
  background-color: #161616;
  background-position: center 900px;
  background-repeat: no-repeat;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.2;
    background: url(https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/square-bg.png)
      repeat 0 0;
    -webkit-animation: bg-scrolling-reverse 10s infinite;
    animation: bg-scrolling-reverse 10s infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
  }
}

.section05 {
  height: 100vh;
  //background-image: url("@/assets/images/worksImg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}

.bottom-right {
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 9999;
  background: #000;
  color: #fff;
  padding: 20px;
  border-radius: 55%;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  border: 1px solid #fff;
  &:hover {
    border: 1px solid #3fc1c9;
  }
}
</style>
