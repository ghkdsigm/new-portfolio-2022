<template>
  <div class="wrapper">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      class="movie-swiper"
      navigation
    >
      <swiper-slide class="swiper-img">
        <div class="img_box">
          <div class="img_box_bg"></div>
          <img src="@/assets/images/works/img01_1.png" alt="" />
          <div class="img_box_text">
            <h2>
              대한탁구협회 <br />
              홈페이지 유지보수
            </h2>
            <p>참여율 100%</p>
            <div class="joinArea">
              <span>#Web Design</span><span>#Publishing</span
              ><span>#Frontend</span>
            </div>
            <button
              type="button"
              class="siteLink"
              onclick="window.open('http://www.koreatta.or.kr/servlets/org/Main')"
            >
              사이트 바로가기
            </button>
            <button
              type="button"
              id="modalAA"
              class="modalOpenBtn"
              onclick="openModal('modalAA')"
            >
              자세히보기
            </button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-img">
        <div class="img_box">
          <div class="img_box_bg"></div>
          <img src="@/assets/images/works/img01_1.png" alt="" />
          <div class="img_box_text">
            <h2>
              대한탁구협회 <br />
              홈페이지 유지보수
            </h2>
            <p>참여율 100%</p>
            <div class="joinArea">
              <span>#Web Design</span><span>#Publishing</span
              ><span>#Frontend</span>
            </div>
            <button
              type="button"
              class="siteLink"
              onclick="window.open('http://www.koreatta.or.kr/servlets/org/Main')"
            >
              사이트 바로가기
            </button>
            <button
              type="button"
              id="modalAA"
              class="modalOpenBtn"
              onclick="openModal('modalAA')"
            >
              자세히보기
            </button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-img">
        <div class="img_box">
          <div class="img_box_bg"></div>
          <img src="@/assets/images/works/img01_1.png" alt="" />
          <div class="img_box_text">
            <h2>
              대한탁구협회 <br />
              홈페이지 유지보수
            </h2>
            <p>참여율 100%</p>
            <div class="joinArea">
              <span>#Web Design</span><span>#Publishing</span
              ><span>#Frontend</span>
            </div>
            <button
              type="button"
              class="siteLink"
              onclick="window.open('http://www.koreatta.or.kr/servlets/org/Main')"
            >
              사이트 바로가기
            </button>
            <button
              type="button"
              id="modalAA"
              class="modalOpenBtn"
              onclick="openModal('modalAA')"
            >
              자세히보기
            </button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-img">
        <div class="img_box">
          <div class="img_box_bg"></div>
          <img src="@/assets/images/works/img01_1.png" alt="" />
          <div class="img_box_text">
            <h2>
              대한탁구협회 <br />
              홈페이지 유지보수
            </h2>
            <p>참여율 100%</p>
            <div class="joinArea">
              <span>#Web Design</span><span>#Publishing</span
              ><span>#Frontend</span>
            </div>
            <button
              type="button"
              class="siteLink"
              onclick="window.open('http://www.koreatta.or.kr/servlets/org/Main')"
            >
              사이트 바로가기
            </button>
            <button
              type="button"
              id="modalAA"
              class="modalOpenBtn"
              onclick="openModal('modalAA')"
            >
              자세히보기
            </button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-img">
        <div class="img_box">
          <div class="img_box_bg"></div>
          <img src="@/assets/images/works/img01_1.png" alt="" />
          <div class="img_box_text">
            <h2>
              대한탁구협회 <br />
              홈페이지 유지보수
            </h2>
            <p>참여율 100%</p>
            <div class="joinArea">
              <span>#Web Design</span><span>#Publishing</span
              ><span>#Frontend</span>
            </div>
            <button
              type="button"
              class="siteLink"
              onclick="window.open('http://www.koreatta.or.kr/servlets/org/Main')"
            >
              사이트 바로가기
            </button>
            <button
              type="button"
              id="modalAA"
              class="modalOpenBtn"
              onclick="openModal('modalAA')"
            >
              자세히보기
            </button>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <h1 class="Mh1" style="color: #222">운영 &amp; 유지보수</h1>
    <h2 class="Mh2" style="color: #222">Works.</h2>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "HomeSwiper",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 50,
        freeMode: false,
        loop: false,
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        pagination: {
          type: "progressbar",
          el: ".swiper-pagination",
        },
        slidesOffsetBefore: 0, // slidesOffsetBefore는 첫번째 슬라이드의 시작점에 대한 변경할 때 사용
        slidesOffsetAfter: 0, // slidesOffsetAfter는 마지막 슬라이드 시작점 + 마지막 슬라이드 너비에 해당하는 위치의 변경이 필요할 때 사용
        centerInsufficientSlides: false, // 컨텐츠의 수량에 따라 중앙정렬 여부를 결정함
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  width: 100%;
  margin-left: 13%;
  .swiper-container {
    display: flex;
    margin: auto;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 400px;
    .swiper-slide {
      flex-shrink: inherit;
      .img_box {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        position: relative;
        transition: 0.5s;
        overflow: hidden;
        border: 1px solid #eee;
        &:hover {
          .img_box_bg {
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgb(0 0 0), rgb(0 0 0 / 80%));
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
          }
          img {
            transform: scale(1.1);
            transition: 0.5s;
          }
        }
        .img_box img {
          display: block;
          transition: all 0.4s ease-out 0s;
        }
        .img_box_text {
          position: absolute;
          top: 50%;
          text-align: center;
          z-index: 10;
          transform: translateY(-35%);
          transition: 0.3s;
          opacity: 0;
          width: 100%;
          height: 100%;
          &:hover {
            opacity: 1;
          }
          h2 {
            font-size: 30px;
            margin-bottom: 20px;
            margin-top: 20px;
            color: #fff;
            letter-spacing: -2px;
            line-height: 35px;
          }
          p {
            font-size: 15px;
            width: 100%;
            color: #ffb27b;
            margin-bottom: 15px;
          }
          .joinArea {
            margin-bottom: 15px;
            span {
              color: #cccc;
              padding: 0 5px;
              display: inline-block;
              font-size: 16px;
            }
          }
          button {
            background: transparent;
            border-radius: 30px;
            border: 2px solid #666666;
            color: #ccc;
            padding: 10px 15px;
            margin: 10px 10px 0;
            min-width: 150px;
            font-size: 16px;
            background: transparent;
            &:hover {
              border: 2px solid #fff;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
