<template>
  <div>
    <span class="skills_html">
      <p>My Works</p>
      <span>|</span>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.skills_html {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #222;
    font-family: "Montserrat";
    text-transform: uppercase;
    white-space: nowrap;
    font-size: 70px;
    font-weight: 700;
    overflow: hidden;
  }
  span {
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
