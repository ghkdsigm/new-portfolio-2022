<template>
  <div class="footer">
    <div class="footer_wrap" style="opacity: 1">
      <a href="https://github.com/ghkdsigm" class="gitLink" target="_target"
        ><img
          src="@/assets/images/githubIcon.png"
          alt="깃허브아이콘"
        />Gibhub</a
      >
      This page is optimized for Google Chrome &amp; Microsoft Edge web browser.
      <span class="copy">Copyright(C) 2022. All Rights Reserved.</span>
      <p>
        본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작되었습니다.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gitLink {
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto 35px;
  text-align: center;
  font-size: 12px;
  color: #999;
  &:hover {
    color: #fff;
  }
  img {
    width: 100%;
  }
}
.footer {
  font-family: "Roboto", sans-serif;
  background-color: #262626;
  /* border-top: 1px solid #e1e1e1; */
  font-size: 15px;
  color: #000;
  letter-spacing: 0em;
  .footer_wrap {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    height: auto;
    box-sizing: border-box;
    text-align: center;
    padding: 50px 10px;
    color: #fff;
    .copy {
      display: block;
      font-weight: 400;
      padding: 15px 0 30px;
      color: #fff;
    }
    p {
      font-size: 12px;
      font-weight: 300;
      color: #adadad;
    }
  }
}
</style>
