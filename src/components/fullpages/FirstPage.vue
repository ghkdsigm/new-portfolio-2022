<template>
  <div>
    <span class="skills_html intro">
      <p class="typing-txt" ref="txt">MY WORKS</p>
      <p class="typing" ref="typingtxt"></p>
      <p class="blink">|</p>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
      var tyInt = setInterval(typing, 300); // 반복동작
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
    text-transform: uppercase;
    white-space: nowrap;
    font-size: 70px;
    font-weight: 700;
    overflow: hidden;
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
</style>
