<template>
  <div>
    <img src="@/assets/images/earth.gif" alt="구 이미지" />

    <enlargeable-image
      src="https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/design/d01.gif"
      src_large="https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/design/d01.gif"
      trigger="hover"
      class="p01 p"
    >
      <span>팀K리그 vs 유벤투스 전광판운영사업</span>
    </enlargeable-image>
    <enlargeable-image
      src="https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/design/d04.jpg"
      src_large="https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/design/d04.jpg"
      trigger="hover"
      class="p02 p"
    >
      <span>대한체육회 100주년 공모전 포스터 제작</span>
    </enlargeable-image>
    <enlargeable-image
      src="https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/design/d03.gif"
      src_large="https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/design/d03.gif"
      trigger="hover"
      class="p03 p"
    >
      <span>스카이워커 배구단 전광판운영사업</span>
    </enlargeable-image>
    <enlargeable-image
      src="https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/design/d06.png"
      src_large="https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/design/d06.png"
      trigger="hover"
      class="p04 p"
    >
      <span>경기도시장상권진흥원 리플렛 제작</span>
    </enlargeable-image>
    <enlargeable-image
      src="https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/design/d05.jpg"
      src_large="https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/design/d05.jpg"
      trigger="hover"
      class="p05 p"
    >
      <span>스포츠영웅 후보자 추천</span>
    </enlargeable-image>
    <enlargeable-image
      src="https://dane-iracleous-portfolio.s3-us-west-2.amazonaws.com/stock/demo1_small.jpg"
      src_large="https://dane-iracleous-portfolio.s3-us-west-2.amazonaws.com/stock/demo1_large.jpg"
      trigger="hover"
      class="p06 p"
    >
      <span>스카이워커 배구단 전광판운영사업</span>
    </enlargeable-image>

    <div class="particle">
      <x-particles
        class="particles-background"
        :config="config[currentConfig]"
        v-if="isShow"
      ></x-particles>
    </div>
    <h1 class="Mh1" style="color: #c3c3c3">디자인 작업</h1>
    <h2 class="Mh2" style="color: #c3c3c3">Design.</h2>
  </div>
</template>

<script>
import EnlargeableImage from "@diracleo/vue-enlargeable-image";
import defConfig from "./config/default.js";
export default {
  data() {
    return {
      config: {
        default: defConfig,
      },
      currentConfig: "default",
      isShow: true,
    };
  },
  methods: {
    switchConfig: function (type) {
      let _t = this;
      _t.isShow = false;
      _t.$nextTick(function () {
        _t.currentConfig = type || "default";
        _t.isShow = true;
      });
    },
  },
  components: {
    EnlargeableImage,
  },
};
</script>

<style scoped>
.particle {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.particles-background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: transparent;
  width: 100vh;
  height: 100vh;
  opacity: 0.25;
  margin: 0 auto;
}
img {
  mix-blend-mode: exclusion;
}
.enlargeable-image .enlargeable-image-slot {
  display: inline-block;
  z-index: 10;
}
.enlargeable-image .enlargeable-image-slot > img {
  max-width: 100%;
}
.enlargeable-image > .enlargeable-image-slot {
  max-width: 100%;
  max-height: 100%;
  cursor: zoom-in;
}
.enlargeable-image > .enlargeable-image-slot.active {
  opacity: 0.3;
  filter: grayscale(100%);
}
.enlargeable-image .enlargeable-image-full {
  cursor: zoom-out;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 2000;
  display: none;
}
.enlargeable-image .enlargeable-image-full > img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.enlargeable-image .enlargeable-image-full.enlarging {
  display: flex;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  cursor: zoom-out;
}
.enlargeable-image .enlargeable-image-full.delarging {
  display: flex;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  cursor: zoom-in;
}
.enlargeable-image .enlargeable-image-full.enlarged {
  display: flex;
}
.p {
  font-size: 15px;
  color: #fff;
}
.p01 {
  position: absolute;
  top: 200px;
  left: 500px;
}
.p02 {
  position: absolute;
  bottom: 120px;
  left: 500px;
}
.p03 {
  position: absolute;
  top: 400px;
  right: 500px;
}
.p04 {
  position: absolute;
  right: 250px;
  bottom: 300px;
}
.p05 {
  position: absolute;
  top: 150px;
  right: 200px;
}
.p06 {
  position: absolute;
  left: 200px;
  bottom: 510px;
}
</style>
