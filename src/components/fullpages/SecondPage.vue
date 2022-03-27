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
        v-for="(portfolio, index) in this.$store.state.datas"
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
        </div>
        <div class="modal-header-image-wrapper">
          <img :src="modalData.innerImage" />
        </div>
        <div class="modal-header-item modal-header-content-wrapper m-contents">
          <p><b class="blockB">과업내용 :</b>{{ modalData.content }}</p>
          <p><b>참 여 도 :</b>{{ modalData.party }}</p>
        </div>
      </div>
      <div slot="footer" class="footerLink">
        <a :href="modalData.url" target="_blank">사이트 바로가기</a>
      </div>
    </Modal>

    <h1 class="Mh1" style="color: #222">신규 구축 &amp; 운영</h1>
    <h2 class="Mh2" style="color: #222">Works.</h2>
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
        // 반응형 breakpoints
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
      //     title: "한국프로스포츠협회 정보광장포털 개선사업",
      //     image: require("@/assets/images/works/img04_1.png"),
      //     innerImage: require("@/assets/images/webs/e00.gif"),
      //     sub: `서브제목`,
      //     url: "http://www.koreatta.or.kr/servlets/org/Main",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "한국도핑방지위원회 검사관교육시스템 구축",
      //     image: require("@/assets/images/works/img08_1.png"),
      //     innerImage: require("@/assets/images/webs/e02.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "한국프로스포츠협회 홈페이지 구축",
      //     image: require("@/assets/images/works/img02_1.png"),
      //     innerImage: require("@/assets/images/webs/e03.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title:
      //       "대한체육회 스포츠영웅 국민지지도 조사 사이트 구축 (2016~2021)",
      //     image: require("@/assets/images/works/img01_1.png"),
      //     innerImage: require("@/assets/images/webs/e04.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "한국프로축구연맹(KLEAGUE) 심판관리시스템(KRMS) 구축",
      //     image: require("@/assets/images/works/img09_1.png"),
      //     innerImage: require("@/assets/images/webs/e04.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "대한체육회 100주년 기념홈페이지 구축",
      //     image: require("@/assets/images/works/img05_1.png"),
      //     innerImage: require("@/assets/images/webs/e07.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title:
      //       "제주유나이티드 스마트-스타디움 내손안의전광판 모바일웹앱 구축",
      //     image: require("@/assets/images/works/img10_1.png"),
      //     innerImage: require("@/assets/images/webs/e07.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "경찰청 홈페이지 고도화 사업",
      //     image: require("@/assets/images/works/img06_1.png"),
      //     innerImage: require("@/assets/images/webs/e07.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "경남체육회 온오프라인 스포츠한마당 앱제작",
      //     image: require("@/assets/images/works/img07_1.png"),
      //     innerImage: require("@/assets/images/webs/e07.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "K리그 아카이브 시스템 구축",
      //     image: require("@/assets/images/works/img12_1.png"),
      //     innerImage: require("@/assets/images/webs/e07.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "국가대표선수촌 방문예약시스템 구축",
      //     image: require("@/assets/images/works/img11_1.png"),
      //     innerImage: require("@/assets/images/webs/e07.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "대한체육회 대회경기영상 사이트 고도화",
      //     image: require("@/assets/images/works/img14_1.png"),
      //     innerImage: require("@/assets/images/webs/e07.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "대한체육회 한국체육을 빛낸 100인 후보자 추천 접수 제작",
      //     image: require("@/assets/images/works/img15_1.png"),
      //     innerImage: require("@/assets/images/webs/e07.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
      //     tag: "#publising #design",
      //     party: `100%`,
      //     content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
      //     부동산 중개 플랫폼 구해방`,
      //   },
      //   {
      //     title: "한국 프로스포츠협회 온라인 암표신고 사이트 구축",
      //     image: require("@/assets/images/works/img13_1.png"),
      //     innerImage: require("@/assets/images/webs/e07.gif"),
      //     sub: `서브제목`,
      //     url: "https://github.com/loy124/ProjectRoom",
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
      this.modalData = this.$store.state.datas.filter(
        portfolio => portfolio.title === title,
      )[0];
    },
    closeModal() {
      this.modalShow = false;
    },
  },
  created() {
    return this.$store.dispatch("FETCH_INFO");
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
  height: 45vh;
  text-align: center;
  position: relative;
  background: #2b2b2b;
  > img {
    height: 100%;
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
}

.m-contents p {
  text-align: left;
  color: #fff;
  margin-bottom: 15px;
  font-weight: 100;

  b {
    display: inline-block;
    font-weight: 600;
    color: #ffb27b;
    margin-right: 5px;
    font-size: 18px;

    &.blockB {
      display: block;
    }
  }
}

.modal-header-content-wrapper {
  margin-top: 20px;
  text-align: center;
  color: #bbbbbb;
  font-size: 16px;
  padding: 0 85px;
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
