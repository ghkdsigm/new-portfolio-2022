<template>
  <div
    class="seeWorks"
    v-on:mouseover="mouseover"
    v-on:mouseleave="mouseleave"
    ref="addOn"
  >
    <div class="workbtnWrap">
      <!-- <a
        href="/works"
        title="포트폴리오 페이지 바로가기"
        class="workbtn"
        target="_blank"
      >
        <span> 수행 프로젝트 보기 </span>
      </a> -->
      <router-link to="/works" class="workbtn"
        ><span> 수행 프로젝트 보기 </span></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    mouseover: function () {
      this.$refs.addOn.classList.add("on");
    },
    mouseleave: function () {
      this.$refs.addOn.classList.remove("on");
    },
  },
};
</script>
<style lang="scss" scoped>
.seeWorks {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  .workbtn {
    display: none;
  }
}
.on {
  background: #0000005d;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 250px;
    left: 0;
    bottom: 0;
    background: linear-gradient(to top, rgb(0 0 0), rgb(0 0 0 / 0%));
    display: block;
  }
  .workbtnWrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 250px;
    height: 55px;
    background: #0000004f;
    .workbtn {
      color: white;
      border: 1px solid white;
      text-transform: uppercase;
      letter-spacing: 4px;
      position: relative;
      overflow: hidden;
      width: 100%;
      text-decoration: none;
      height: 100%;
      display: block;
      text-align: center;
      &::before {
        transform: translate3d(-100%, 0, 0);
        background-color: #000;
        transition: transform 300ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      &::before,
      &::after {
        content: "";
        position: absolute;
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }
      &:hover {
        transform: translate3d(0, 0, 0);
        background: #000;
      }
      span {
        position: relative;
        z-index: 100;
        line-height: 57px;
        color: #fff;
        font-size: 20px;
        letter-spacing: 1px;
      }
    }
  }
}
</style>
