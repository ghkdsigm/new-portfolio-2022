<template>
  <div class="wrapper">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      class="movie-swiper"
      navigation
    >
      <swiper-slide
        class="swiper-img"
        v-for="(portfolio, index) in this.$store.state.frontworks"
        :key="index"
      >
        <div class="img_box">
          <div class="img_box_bg"></div>
          <img :src="portfolio.image" alt="" />
          <div class="img_box_text">
            <h2>
              {{ portfolio.title }}
            </h2>
            <p>참여도 : {{ portfolio.party }}</p>
            <div class="joinArea">
              <span>{{ portfolio.tag }}</span>
            </div>
            <a class="linkbt" target="_blank" :href="`${portfolio.url}`"
              >사이트 바로가기</a
            >
            <a
              class="linkbt"
              href="javascript:;"
              id="modalAA"
              @click="clickModal(portfolio.title)"
            >
              자세히보기
            </a>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <Modal v-if="modalShow">
      <div slot="header"></div>
      <div slot="body" class="modal-body-container">
        <div class="modal-header-close-button" @click="closeModal">x</div>
        <div class="modal-header-item modal-header-title-wrapper">
          {{ modalData.title }}
          <p style="color: #fff; font-size: 15px; font-weight: 100">
            {{ modalData.sub }}
          </p>
        </div>
        <div class="modal-header-image-wrapper">
          <img :src="modalData.innerImage" />
        </div>
        <div class="modal-header-item modal-header-content-wrapper m-contents">
          <p><b>참 여 도 :</b>{{ modalData.party }}</p>
          <p><b>기간 :</b>{{ modalData.time }}</p>
          <p><b>사용언어 :</b>{{ modalData.language }}</p>
          <p><b class="blockB">과업내용 :</b>{{ modalData.content }}</p>
        </div>
      </div>
      <div slot="footer" class="footerLink">
        <a :href="modalData.url" target="_blank">사이트 바로가기</a>
      </div>
    </Modal>

    <h1 class="Mh1" style="color: #222">프론트엔드 프로젝트</h1>
    <h2 class="Mh2" style="color: #222">FRONTEND.</h2>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Modal from "./Modal";
export default {
  name: "HomeSwiper",
  components: {
    swiper,
    swiperSlide,
    Modal,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 50,
        freeMode: true,
        freeModeSticky: false,
        scrollbar: ".sw-scroll1",
        scrollbarHide: true,
        scrollbarDraggable: true,
        grabCursor: true,
        loop: false,
        pagination: {
          type: "progressbar",
          el: ".swiper-pagination",
        },
        slidesOffsetBefore: 0, // slidesOffsetBefore는 첫번째 슬라이드의 시작점에 대한 변경할 때 사용
        slidesOffsetAfter: 0, // slidesOffsetAfter는 마지막 슬라이드 시작점 + 마지막 슬라이드 너비에 해당하는 위치의 변경이 필요할 때 사용
        centerInsufficientSlides: false, // 컨텐츠의 수량에 따라 중앙정렬 여부를 결정함
        breakpoints: {
          375: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
      },

      // portfolios: [
      //   {
      //     title: "대한탁구협회 홈페이지 유지보수1",
      //     image: require("@/assets/images/works/img01_1.png"),
      //     innerImage: require("@/assets/images/webs/e01.gif"),
      //     sub: `서브제목`,
      //     url: "http://www.koreatta.or.kr/servlets/org/Main",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "대한탁구협회 홈페이지 유지보수2",
      //     image: require("@/assets/images/works/img01_1.png"),
      //     innerImage: require("@/assets/images/webs/e01.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "대한탁구협회 홈페이지 유지보수3",
      //     image: require("@/assets/images/works/img01_1.png"),
      //     innerImage: require("@/assets/images/webs/e01.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "대한탁구협회 홈페이지 유지보수3",
      //     image: require("@/assets/images/works/img01_1.png"),
      //     innerImage: require("@/assets/images/webs/e01.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "대한탁구협회 홈페이지 유지보수3",
      //     image: require("@/assets/images/works/img01_1.png"),
      //     innerImage: require("@/assets/images/webs/e01.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "대한탁구협회 홈페이지 유지보수13",
      //     image: require("@/assets/images/works/img01_1.png"),
      //     innerImage: require("@/assets/images/webs/e01.gif"),
      //     sub: `서브제목`,
      //     url: "https://amazing-jepsen-0b0d0e.netlify.app/",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      // ],
      modalData: "",
      modalShow: false,
    };
  },
  methods: {
    clickModal(title) {
      this.modalShow = true;
      this.modalData = this.$store.state.frontworks.filter(
        portfolio => portfolio.title === title,
      )[0];
    },
    closeModal() {
      this.modalShow = false;
    },
  },
  created() {
    return this.$store.dispatch("FECTH_MYFRONT");
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-body-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.modal-header-close-button {
  width: 30px;
  margin-left: auto;
  font-size: 60px;
  cursor: pointer;
  color: #fff;
  position: absolute;
  right: -10vh;
  top: -4vh;
}

.modal-header-image-wrapper {
  width: 70%;
  height: 45vh;
  text-align: center;
  position: relative;
  background: #2b2b2b;
  overflow: auto;
  > img {
    width: 100% !important;
    width: inherit;
  }
}

.modal-header-title-wrapper {
  margin-bottom: 20px;
  text-align: center;
  font-size: 27px;
  font-weight: bold;
}

.modal-header-item {
  color: #ffbd8f;
  width: 100%;
}

.m-contents p {
  text-align: left;
  color: #fff;
  margin-bottom: 15px;
  font-weight: 100;

  b {
    display: inline-block;
    font-weight: 400;
    color: #ffb27b;
    margin-right: 5px;

    &.blockB {
      display: block;
    }
  }
}

.modal-header-content-wrapper {
  margin-top: 20px;
  width: 30%;
  text-align: center;
  color: #bbbbbb;
  font-size: 16px;
  padding: 0 25px;
}

.modal-header-github-wrapper {
  margin-top: 40px;
  text-align: center;
  display: flex;
  align-items: center;
}

.modal-header-blog-wrapper {
  margin-top: 10px;
  text-align: center;
  display: flex;
  align-items: center;
}

.modal-header-item-title {
  width: 80px;
  margin-right: 30px;
  font-size: 18px;
  color: #bbbbbb;
}

.modal-headet-item-content {
  color: #f8f8f8f8;
  font-size: 22px;
}

.footerLink {
  width: 100%;
  height: 100%;
  a {
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
    position: relative;
    padding: 15px 0;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
  }
  &:hover {
    a {
      color: #000;
    }
  }
}
</style>
