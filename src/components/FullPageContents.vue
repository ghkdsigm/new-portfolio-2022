<template>
  <div>
    <div class="pg-wrapper">
      <div class="anchors"><ul></ul></div>
      <div id="container" class="pg-container">
        <!-- pages -->
        <section data-anchor="Page 1">
          <Headline>
            <a class="Aline Aline_away" slot="s_title">
              <span class>Portfolio </span>
            </a>
            <span class="Bline Bline_away ft" slot="s_name"
              >Hwang Seung Hyun</span
            >
            <h3 class="comment comment_away" slot="s_comment">
              Various<br />Work Experiences<br />For your Brand
            </h3>
          </Headline>
          <FirstPage />
        </section>
        <section data-anchor="Page 2">
          <div class="text">
            <SecondPage />
          </div>
        </section>
        <section data-anchor="Page 3">
          <div class="text">
            <ThirdPage />
          </div>
        </section>
        <section data-anchor="Page 4">
          <div class="text">
            <FourthPage />
          </div>
        </section>
        <section data-anchor="Page 5">
          <div class="text">
            <FifthPage />
          </div>
        </section>
        <section data-anchor="Page 6">
          <div class="text">
            <SixthPage />
          </div>
        </section>
      </div>
      <!-- pips will go here -->
    </div>
  </div>
</template>

<script>
import Pageable from "pageable";
import Headline from "./Headline";
import FirstPage from "./fullpages/FirstPage";
import SecondPage from "./fullpages/SecondPage";
import ThirdPage from "./fullpages/ThirdPage";
import FourthPage from "./fullpages/FourthPage";
import FifthPage from "./fullpages/FifthPage";
import SixthPage from "./fullpages/SixthPage";
export default {
  components: {
    Headline,
    FirstPage,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
    SixthPage,
  },
  mounted() {
    new Pageable("#container", {
      childSelector: "[data-anchor]", // CSS3 selector string for the pages
      anchors: [], // define the page anchors
      pips: true, // display the pips
      //animation: 400, // the duration in ms of the scroll animation
      delay: 100, // the delay in ms before the scroll animation starts
      throttle: 50, // the interval in ms that the resize callback is fired
      orientation: "vertical", // or horizontal
      swipeThreshold: 200, // swipe / mouse drag distance (px) before firing the page change event
      freeScroll: true, // allow manual scrolling when dragging instead of automatically moving to next page
      navPrevEl: true, // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
      navNextEl: true, // define an element to use to scroll to the next page (CSS3 selector string or Element reference)
      infinite: true, // enable infinite scrolling (from 0.4.0)
      // slideshow: { // enable slideshow that cycles through your pages automatically (from 0.4.0)
      //     interval: 3000, // time in ms between page change,
      //     delay: 0 // delay in ms after the interval has ended and before changing page
      // },
      events: {
        wheel: true, // enable / disable mousewheel scrolling
        mouse: false, // enable / disable mouse drag scrolling
        touch: true, // enable / disable touch / swipe scrolling
        keydown: true, // enable / disable keyboard navigation
      },
      easing: function (currentTime, startPos, endPos, interval) {
        // the easing function used for the scroll animation
        return (
          -endPos * (currentTime /= interval) * (currentTime - 2) + startPos
        );
      },
      onInit: function () {
        // do something when the instance is ready
        return (document.body.style.overflow = "auto");
      },
      onUpdate: function () {
        // do something when the instance updates
      },
      onBeforeStart: function () {
        // do something before scrolling begins
        // eslint-disable-next-line no-unused-vars
        var windowWidth = window.matchMedia("screen and (max-width: 768px)");
        if (windowWidth.matches) {
          //screen and (max-width: 768px)에 해당한다.
          this.pages.forEach((page, i) => {
            //page.classList.add("pg-active");
          });
        } else {
          //screen and (max-width: 768px)에 해당하지 않는다.
          this.pages.forEach((page, i) => {
            page.classList.remove("pg-active");
          });
        }
      },
      onStart: function () {
        // do something when scrolling begins
      },
      onScroll: function () {
        // do something during scroll
      },
      onFinish: function () {
        // do something when scrolling ends
        const linkSel1 = document.querySelector(".router-link-active");
        const linkSel2 = document.querySelector(".router-link-exact-active");
        if (this.index == 4 || this.index == 5) {
          linkSel1.style.color = "#ccc";
          linkSel2.style.color = "#ccc";
        } else {
          linkSel1.style.color = "#000";
          linkSel2.style.color = "#000";
        }
        return;
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.pg-wrapper {
  background: #2a2a2a;
  overflow: hidden;
}

pre {
  background-color: #3a3a3a;
  padding: 20px;
  border-radius: 5px;
}

.token.string,
.token.number,
.token.comment,
.token.keyword,
.token.attr-value {
  opacity: 0.6;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  color: #fff;
  position: relative;
}
.text {
  overflow: hidden;
}
#page-1 {
  background: linear-gradient(-45deg, #ffffff, #c6d2ddf8, #ffffff, #ffffff);
  background-size: 400% 400%;
  -webkit-animation: gradient 10s infinite;
  animation: gradient 10s infinite;
  height: 100vh;
}
// #page-1 .text,
// #page-1-clone .text {
// }
#page-2 .text {
  background-color: #fff;
  overflow: hidden;
}
#page-3 .text {
  background-color: #fff;
}
#page-4 .text {
  background-color: #fff;
}
#page-5 .text {
  background-color: #1b1d20;
}
#page-6 .text,
#page-6-clone .text {
  background-color: #af4c5d;
}

.scroller {
  position: absolute;
  bottom: 20px;
  left: 50%;
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
  width: 40px;
  height: 65px;
  border: 4px solid #fff;
  border-radius: 30px;
}
.scroller::after {
  position: absolute;
  top: 12px;
  left: 50%;
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #fff;
  -webkit-animation: 1200ms ease 0ms forwards infinite scroll;
  animation: 1200ms ease 0ms forwards infinite scroll;
  content: "";
}
.scroller small {
  position: absolute;
  width: 174px;
  left: -64px;
  top: -34px;
}

@-webkit-keyframes scroll {
  from {
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
  to {
    -webkit-transform: translate3d(-50%, 10px, 0);
    transform: translate3d(-50%, 10px, 0);
    opacity: 0;
  }
}

@keyframes scroll {
  from {
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
  to {
    -webkit-transform: translate3d(-50%, 10px, 0);
    transform: translate3d(-50%, 10px, 0);
    opacity: 0;
  }
}
.anchors {
  position: fixed;
  top: 25px;
  right: 50px;
  z-index: 100;
}
.anchors ul {
  margin: 0;
  padding: 0;
}
.anchors ul li {
  float: left;
  list-style: none;
}
.anchors ul li a {
  padding: 12px;
  color: #fff;
  text-decoration: none;
  position: relative;
}
.anchors ul li a.active::after {
  position: absolute;
  bottom: 0px;
  left: 10%;
  width: 80%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  content: "";
}

.text {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}

#settings-open {
  color: #fff;
  font-size: 35px;
  position: absolute;
  right: -60px;
  top: 10px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#settings-open span {
  line-height: 0;
}
#settings-open span::before {
  content: "\F8BA";
}

#settings {
  position: fixed;
  left: 10px;
  top: 10px;
  width: 250px;
  font-family: "Inconsolata";
  font-size: 14px;
  -webkit-transform: translate3d(-265px, 0, 0);
  transform: translate3d(-265px, 0, 0);
  transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
#settings.active {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
#settings.active #settings-open span::before {
  content: "\F5AD";
}
#settings .settings-inner {
  border: 3px solid #fff;
  border-radius: 4px;
  padding: 15px;
}
#settings h4 {
  margin: 10px 0 5px 0;
  padding: 6px 15px;
  color: #fff;
  text-transform: uppercase;
}
#settings button,
#settings select {
  border: 3px solid #fff;
  border-radius: 4px;
  background-color: transparent;
  padding: 6px 12px;
  font-family: "Inconsolata";
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  width: 125px;
}
#settings button:hover,
#settings select:hover {
  background-color: #fff;
  color: #000;
}
#settings button {
  float: left;
  width: 75px;
  margin: 0 10px 15px 0;
}
#settings select {
  display: block;
  margin-top: 5px;
}
#settings label {
  color: #fff;
  font-weight: bold;
}
#settings .setting {
  padding: 6px 12px;
}
#settings .output {
  float: right;
}

.mb-bar {
  background-color: #fff;
}

.mb-track-y {
  width: 5px;
  background-color: rgba(255, 255, 255, 0.2);
}

#scroll {
  height: 90vh;
}

#listeners {
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
}
#listeners li {
  list-style: none;
  border: 3px solid #fff;
  border-radius: 3px;
  color: #fff;
  padding: 6px 12px;
  margin: 0 10px 10px 0;
  font-weight: bold;
}
#listeners li.active {
  background-color: #fff;
  color: #000;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: transparent;
  border: 3px solid #fff;
}

code {
  font-weight: bold;
  font-family: Inconsolata;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
  to {
    -webkit-transform: rotate3d(0, 0, 1, 360deg);
    transform: rotate3d(0, 0, 1, 360deg);
  }
}

@keyframes spin {
  from {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
  to {
    -webkit-transform: rotate3d(0, 0, 1, 360deg);
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
.checkbox,
.radio {
  align-items: center;
  display: flex;
  min-height: 35px;
  position: relative;
}

.radio input,
.checkbox input {
  border: 0 none !important;
  clip: rect(0px, 0px, 0px, 0px) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
}

.radio > input + label,
.checkbox > input + label {
  cursor: pointer;
  padding: 3px 0 0 30px;
  position: relative;
  color: #fff;
}

.radio > input:disabled + label,
.checkbox > input:disabled + label {
  opacity: 0.6;
  cursor: not-allowed;
}

.radio > input + label::before,
.radio > input + label::after,
.checkbox > input + label::before,
.checkbox > input + label::after {
  font-family: "Material Design Icons";
  font-size: 21px;
  height: 25px;
  left: 0;
  position: absolute;
  text-align: center;
  top: 0px;
  width: 25px;
  font-weight: normal;
}

.checkbox > input + label::after {
  content: "";
}

.checkbox > input:checked + label::after {
  content: "";
}

.radio > input + label::after {
  content: "";
}

.radio > input:checked + label::after {
  content: "";
}

.rangeable-container {
  margin: 20px 0 20px 0;
}

.rangeable-handle {
  border-color: transparent;
  width: 18px;
  height: 18px;
}

.rangeable-progress {
  height: 2px;
  background-color: #fff;
}

.rangeable-tooltip {
  background-color: transparent;
}
.rangeable-tooltip::before {
  border-color: transparent;
}

.rangeable-track {
  height: 8px;
  width: 100%;
  border-radius: 4px;
  border: 3px solid #fff;
  box-sizing: border-box;
  background-color: transparent;
}

.selectr-selected {
  background-color: transparent;
  border: 3px solid #fff;
  color: #fff;
  font-weight: bold;
  padding: 7px 28px 7px 18px;
}
.selectr-selected::before {
  border-color: #fff transparent transparent;
}

.selectr-options {
  padding: 8px;
  overflow: hidden;
}

.selectr-option {
  border-radius: 2px;
  padding: 6px 10px;
}

.selectr-container.native-open .selectr-selected::before,
.selectr-container.open .selectr-selected::before {
  border-color: transparent transparent #000;
}

.selectr-container.open .selectr-selected {
  color: #000;
  background-color: #fff;
  border-color: #fff #fff transparent;
}

.selectr-options-container {
  border-width: 0 3px 3px;
  border-color: transparent #fff #fff;
}

.progress {
  position: fixed;
  top: 10px;
  left: 10px;
  width: calc(100vw - 20px);
  height: 5px;
}
.progress .bar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
  -webkit-transform-origin: 0 0 0;
  transform-origin: 0 0 0;
  background-color: #fff;
}

.page-progress {
  width: 40px;
  height: 40px;
  position: fixed;
  left: 10px;
  top: 20px;
}

svg {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

circle {
  stroke: #fff;
  fill: transparent;
  stroke-dasharray: 87.9645943005 87.9645943005;
  stroke-dashoffset: 87.9645943005;
}

/**딜레이**/
.text {
  -webkit-transform: scale(0.9, 0.9);
  transform: scale(0.9, 0.9);
  transition: all 500ms;
}
.pg-active .text {
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
}
</style>
