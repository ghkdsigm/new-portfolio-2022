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
        v-for="(portfolio, index) in portfolios"
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
      <div slot="footer">
        <a :href="modalData.url" target="_blank">사이트 바로가기</a>
      </div>
    </Modal>

    <h1 class="Mh1" style="color: #222">프론트엔드 &amp; 프로젝트</h1>
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
        freeMode: false,
        loop: false,
        pagination: {
          type: "progressbar",
          el: ".swiper-pagination",
        },
        slidesOffsetBefore: 0, // slidesOffsetBefore는 첫번째 슬라이드의 시작점에 대한 변경할 때 사용
        slidesOffsetAfter: 0, // slidesOffsetAfter는 마지막 슬라이드 시작점 + 마지막 슬라이드 너비에 해당하는 위치의 변경이 필요할 때 사용
        centerInsufficientSlides: false, // 컨텐츠의 수량에 따라 중앙정렬 여부를 결정함
      },

      portfolios: [
        {
          title: "대한탁구협회 홈페이지 유지보수1",
          image: require("@/assets/images/works/img01_1.png"),
          innerImage: require("@/assets/images/webs/e01.gif"),
          sub: `서브제목`,
          url: "http://www.koreatta.or.kr/servlets/org/Main",
          tag: "#publising #design",
          party: `100%`,
          content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
          부동산 중개 플랫폼 구해방`,
        },
        {
          title: "대한탁구협회 홈페이지 유지보수2",
          image: require("@/assets/images/works/img01_1.png"),
          innerImage: require("@/assets/images/webs/e01.gif"),
          sub: `서브제목`,
          url: "https://github.com/loy124/ProjectRoom",
          tag: "#publising #design",
          party: `100%`,
          content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
          부동산 중개 플랫폼 구해방`,
        },
        {
          title: "대한탁구협회 홈페이지 유지보수3",
          image: require("@/assets/images/works/img01_1.png"),
          innerImage: require("@/assets/images/webs/e01.gif"),
          sub: `서브제목`,
          url: "https://github.com/loy124/ProjectRoom",
          tag: "#publising #design",
          party: `100%`,
          content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
          부동산 중개 플랫폼 구해방`,
        },
        {
          title: "대한탁구협회 홈페이지 유지보수3",
          image: require("@/assets/images/works/img01_1.png"),
          innerImage: require("@/assets/images/webs/e01.gif"),
          sub: `서브제목`,
          url: "https://github.com/loy124/ProjectRoom",
          tag: "#publising #design",
          party: `100%`,
          content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
          부동산 중개 플랫폼 구해방`,
        },
        {
          title: "대한탁구협회 홈페이지 유지보수3",
          image: require("@/assets/images/works/img01_1.png"),
          innerImage: require("@/assets/images/webs/e01.gif"),
          sub: `서브제목`,
          url: "https://github.com/loy124/ProjectRoom",
          tag: "#publising #design",
          party: `100%`,
          content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
          부동산 중개 플랫폼 구해방`,
        },
        {
          title: "대한탁구협회 홈페이지 유지보수3",
          image: require("@/assets/images/works/img01_1.png"),
          innerImage: require("@/assets/images/webs/e01.gif"),
          sub: `서브제목`,
          url: "https://github.com/loy124/ProjectRoom",
          tag: "#publising #design",
          party: `100%`,
          content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
          부동산 중개 플랫폼 구해방`,
        },
      ],
      modalData: "",
      modalShow: false,
    };
  },
  methods: {
    clickModal(title) {
      this.modalShow = true;
      this.modalData = this.portfolios.filter(
        portfolio => portfolio.title === title,
      )[0];
    },
    closeModal() {
      this.modalShow = false;
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
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
            font-size: 18px;
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
              font-size: 18px;
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
          .linkbt {
            background: transparent;
            border-radius: 30px;
            border: 2px solid #666666;
            color: #ccc;
            padding: 10px 15px;
            margin: 10px 10px 0;
            min-width: 150px;
            display: inline-block;
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
</style>
