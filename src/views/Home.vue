<template>
  <div>
    <div class="section01 sect">
      <Headline />
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
</style>
