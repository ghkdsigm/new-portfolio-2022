<template>
  <div class="headlineTxt on">
    <p class="inner Nondraggable">
      <a class="Aline">
        <span class>Portfolio </span>
      </a>
      <span class="Bline ft">Hwang Seung Hyun</span>
    </p>
    <h3 class="comment">Various<br />Work Experiences<br />For your Brand</h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.headlineTxt {
  position: absolute;
  left: 120px;
  top: 130px;
  z-index: 3;
  .comment {
    font-family: "Noto Sans KR";
    font-weight: 900;
    font-size: 50px;
    letter-spacing: 0px;
    line-height: 70px;
    -webkit-transition: all 1.7s ease 0.61s;
    transition: all 1.7s ease 0.61s;
    font-family: "Exo", sans-serif;
    &::before {
      content: "";
      transition: left 0.2s cubic-bezier(0.47, 0, 0.745, 0.715),
        width 0.15s cubic-bezier(0.47, 0, 0.745, 0.715),
        opacity 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      height: 1px;
      position: absolute;
      bottom: -20px;
      width: 0;
      height: 0.14em;
      bottom: 0;
      left: 0;
      opacity: 0.5;
    }
  }
  .inner {
    .Aline {
      display: inline-block;
      position: relative;
      font-family: "Noto Sans KR";
      font-weight: 300;
      font-size: 44px;
      color: #888;
      padding-right: 20px;
      text-decoration: none;
      vertical-align: middle;
      &::after {
        content: "";
        width: 2px;
        height: 32px;
        position: absolute;
        right: -2px;
        top: 18px;

        span {
          font-family: inherit;
          font-weight: inherit;
          font-size: inherit;
        }
      }
    }
    .Bline {
      display: inline-block;
      font-family: "Noto Sans KR";
      font-weight: 100;
      font-size: 20px;
      padding-left: 20px;
      vertical-align: middle;
      top: 4px;
      position: relative;
    }
  }
}

.section01 {
  .comment {
    color: #fff;
  }
  .Aline {
    &::after {
      background: rgba(255, 255, 255, 0.5);
    }
  }
  .Bline {
    color: #fff;
  }
}
.subContents {
  .comment {
    color: #000;
  }
  .Aline {
    &::after {
      background: #b4b4b4;
    }
  }
  .Bline {
    color: #000;
  }
}
</style>
