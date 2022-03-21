<template>
  <div class="txt_info">
    <div class="personal">
      <ul class="personal__links">
        <li class="personal__item">
          <a class="ft">ABILLTYS</a>
        </li>
        <li class="personal__item">
          <span>UI · UX Design</span>
        </li>
        <li class="personal__item">
          <span>UI · UX Development</span>
        </li>
        <li class="personal__item">
          <span>Front-end Development</span>
        </li>
        <li class="personal__item">
          <span>Making Proposal</span>
        </li>
        <li class="personal__item">
          <span>Service Communication</span>
        </li>
      </ul>
      <ul class="personal__links">
        <li class="personal__item">
          <a class="ft">CONTACT</a>
        </li>
        <li class="personal__item">
          <span>HWANG SEUNG HYUN</span>
        </li>
        <li class="personal__item">
          <span>+82 10.9406.3935</span>
        </li>
        <li class="personal__item">
          <span>ghkdsigm3@naver.com</span>
        </li>
        <li class="personal__item">
          <span>Yangcheoin-gu, Seoul</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.personal {
  display: flex;
  position: absolute;
  right: 120px;
  bottom: 130px;
  opacity: 1;
  z-index: 2;
  transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s,
    margin 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  .personal__links {
    vertical-align: top;
    margin: 0;
    .personal__item {
      position: relative;
      padding-right: 21px;
      font-size: 14px;
      font-weight: 700;
      text-align: right;
      margin: 2px 0 0 0;
      a {
        position: relative;
        display: inline-block;
        color: #fff;
        padding: 0 0 5px 0;
        letter-spacing: 1px;
        font-size: 21px;
        text-decoration: none;
        letter-spacing: 0.5px;
        font-family: "Exo", sans-serif;
      }
      span {
        font-weight: 400;
        font-size: 16px;
        padding: 5px 0 0;
        display: inline-block;
        color: #c1c1c1;
        letter-spacing: -0.5px;
      }
    }
  }
}
</style>
