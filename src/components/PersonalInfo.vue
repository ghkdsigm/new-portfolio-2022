<template>
  <div class="container">
    <div class="innerWrap">
      <div class="Info_picture">
        <div class="P_img">
          <img src="@/assets/images/face.png" alt="황승현의 프로필 사진" />
        </div>
        <div class="P_basic">
          <div class="p_basic_inner">
            <h3>황 승 현</h3>
            <p class="ft Nondraggable">HWANG SEUNG HYUN</p>
            <ul>
              <li>1990.01.13. Yangcheon-gu, Seoul, Republic of Korea</li>
              <li>ghkdsigm3@naver.com / ghkdsigm3@gmail.com</li>
              <li>010-9406-3935</li>
            </ul>
          </div>
        </div>
      </div>
      <ul class="Info_list">
        <div class="P_basic">
          <div class="p_info_inner">
            <h4 class="Nondraggable">
              <b>'적자생존은 만고불변의 진리' </b> 주어진 어떠한 환경과
              역할에서도 동료와 함께 더 나은 길을 만들어 나아가는 사람이 되고자
              합니다.
            </h4>
            <div class="career">
              <h5>Educations</h5>
              <ul>
                <li><span>2008.03.</span><span>서울양정고등학교 졸업</span></li>
                <li>
                  <span>2016.01.</span><span>경기대학교 경영학과 졸업</span>
                </li>
                <li>
                  <span>2016.12.</span
                  ><span
                    >NCS 기반 반응형 디지털웹(웹표준&amp;웹접근성) 과정
                    수료</span
                  >
                </li>
                <li>
                  <span>2022.01.</span
                  ><span
                    >패스트캠퍼스 프론트엔드 초격차 패키지 온라인 교육 과정
                    수료</span
                  >
                </li>
              </ul>
            </div>
            <div class="career">
              <h5>Experience / Licenses</h5>
              <ul>
                <li>
                  <span>2008.08.</span><span>자동차1종보통면허 취득</span>
                </li>
                <li><span>2012.03.</span><span>텔레마케팅관리사 취득</span></li>
                <li>
                  <span>2016.01.</span><span>한국사능력검정 1급 취득</span>
                </li>
                <li><span>2019.08.</span><span>정보처리기사 취득</span></li>
              </ul>
            </div>
            <div class="career">
              <h5>Skills / Tools</h5>
              <ul class="mytools">
                <li>
                  <span>Html5 / Css3 / Scss / Tailwind.css</span>
                </li>
                <li>
                  <span>Javascript / Jquery / Vue2,3 / Nuxt.js / Firebase</span>
                </li>
                <li>
                  <span>Git / Github / Svn / Netlify / Heroku </span>
                </li>
                <li>
                  <span
                    >Eclipse / VSCode / Powerpoint / Excel / Photoshop /
                    Illustrator / Figma / Atom
                  </span>
                </li>
              </ul>
            </div>
            <!--career-->
          </div>
          <!--p_info_inner-->
        </div>
        <!--P_basic-->
      </ul>
    </div>
    <!--innerWrap-->
  </div>
</template>

<style lang="scss" scoped>
.innerWrap {
  display: flex;
  width: 100%;
  position: relative;
  margin: 125px 0;
  .Info_picture {
    width: 45%;
    vertical-align: top;
    text-align: center;
    img {
      max-width: 500px;
    }
    .p_basic_inner {
      text-align: left;
      padding: 3.8rem 0 0 7rem;
      h3 {
        font-size: 40px;
        letter-spacing: 5px;
        color: #000;
        font-weight: 300;
      }
      p {
        font-size: 23px;
        color: #000;
        padding: 0px 0 10px;
        font-family: "Exo", sans-serif;
      }
      ul {
        padding: 0;
        li {
          font-size: 16px;
          line-height: 36px;
          font-weight: 300;
          letter-spacing: 0.3px;
        }
      }
    }
  }
  .Info_list {
    width: 55%;
    vertical-align: middle;
    padding-left: 22px;
    vertical-align: top;
    .P_basic {
      padding: 0 0 0 50px;
      h4 {
        font-size: 25px;
        color: #000;
        line-height: 38px;
        padding: 0 0 50px 0;
        font-weight: 300;
        &:before {
          content: "<h2>";
          font-family: "La Belle Aurore", cursive;
          color: #bababa;
          font-size: 1.5rem;
          position: absolute;
          display: block;
          top: -40px;
        }
        &:after {
          content: "</h2>";
          font-family: "La Belle Aurore", cursive;
          color: #bababa;
          font-size: 1.5rem;
          position: absolute;
          display: block;
        }
        b {
          font-size: 30px;
          color: #000;
          font-weight: 500;
        }
      }
      .career {
        padding: 15px 0 15px;
        h5 {
          font-size: 25px;
          color: #2262ad;
          font-weight: bold;
        }
        ul {
          padding: 0;
          li {
            padding: 10px 0 0;
            &:first-child {
              padding: 15px 0 0;
            }
            span {
              color: #000;
              font-weight: 300;
              font-size: 18px;
              &:first-child {
                padding-right: 20px;
                font-weight: 500;
              }
            }
          }
        }
        .mytools {
          li {
            span {
              color: #000;
              font-weight: 400 !important;
            }
          }
        }
      }
    }
  }
}
</style>
