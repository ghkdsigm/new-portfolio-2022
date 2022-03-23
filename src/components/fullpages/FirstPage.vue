<template>
  <div>
    <span class="skills_html intro">
      <p class="typing-txt" ref="txt">&lt;h1&gt; MY WORKS &lt;/h1&gt;</p>
      <p class="typing" ref="typingtxt"></p>
      <p class="blink">|</p>
    </span>
    <div orientation="right" class="side_Styled">
      <div class="emailStyled">
        <a href="javascript:;">ghkdsigm3@gmail.com</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ss: this.$route,
    };
  },
  mounted() {
    var typingBool = false;
    var typingIdx = 0;
    const maintxt = this.$refs.txt;
    const createtxt = this.$refs.typingtxt;

    // 타이핑될 텍스트를 가져온다
    var typingTxt = maintxt.textContent;

    typingTxt = typingTxt.split(""); // 한글자씩 자른다.

    if (typingBool == false) {
      // 타이핑이 진행되지 않았다면
      typingBool = true;
      var tyInt = setInterval(typing, 200); // 반복동작
    }

    function typing() {
      if (typingIdx < typingTxt.length) {
        // 타이핑될 텍스트 길이만큼 반복
        createtxt.append(typingTxt[typingIdx]);
        // 한글자씩 이어준다.
        typingIdx++;
      } else {
        //끝나면 반복종료
        clearInterval(tyInt);
      }
    }
    console.log(this.ss);
  },
};
</script>

<style lang="scss" scoped>
.skills_html {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .typing-txt {
    display: none;
  }
  .typing {
    color: #222;
    font-family: "Montserrat";
    // text-transform: uppercase;
    white-space: nowrap;
    font-size: 70px;
    font-weight: 700;
    overflow: hidden;
    color: hsla(0, 0%, 95%, 0.01);
    -webkit-text-stroke: 2px #000;
    text-stroke: 2px #000;
  }
  .text {
    display: inline;
    vertical-align: middle;
    animation: cursor 0.2s ease infinite;
  }
  .blink {
    font-size: 70px;
    font-weight: 700;
    color: #222;
    -webkit-animation: blink 1s infinite;
    -moz-animation: blink 1s infinite;
    -o-animation: blink 1s infinite;
    animation: blink 1s infinite;
  }
}
.side_Styled {
  width: 40px;
  position: absolute;
  bottom: 0px;
  left: auto;
  right: 120px;
  z-index: 10;
  color: var(--light-slate);
  .emailStyled {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    a {
      margin: 20px auto;
      padding: 10px;
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: var(--fz-lg);
      letter-spacing: 0.1em;
      -webkit-writing-mode: vertical-rl;
      writing-mode: vertical-rl;
      font-size: 14px;
      &::after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: var(--light-slate);
      }
    }
  }
}
</style>
