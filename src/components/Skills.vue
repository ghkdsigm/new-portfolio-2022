<template>
  <div class="container">
    <div class="innerWrap clearfix">
      <div class="innerWrapper">
        <div class="r_career_top">
          <h5 class="Nondraggable">Skills &amp; Tools</h5>
          <p class="Nondraggable">
            <b>실무에 활용</b>하였고 또 계속해서 <b>배움</b>을
            <b></b>실천하고있는 <b>언어</b>이자 <b>도구들</b>입니다.
            <br />
            사용하고있는 언어 및 기술들과 더불어 <br />나아가 컴퓨터 공학 &
            웹브라우저 & 알고리즘 등<br />
            다양한 <b>지식</b>들의 <b>배움을 꾸준히 실천</b>하여 <br /><br />
            더욱 <b>폭넓게 확장된 업무 수행 능력</b>을 기를것입니다.
          </p>
        </div>
        <!--r_career_top-->
        <div class="r_skill_bottom">
          <div class="img_box">
            <ul class="skills">
              <li>
                <img src="@/assets/images/html5.png" alt="html5 아이콘" />
              </li>
              <li><img src="@/assets/images/css3.png" alt="css3 아이콘" /></li>
              <li>
                <img src="@/assets/images/js.png" alt="javascript 아이콘" />
              </li>
              <li>
                <img src="@/assets/images/vuejs.png" alt="vuejs 아이콘" />
              </li>
              <li>
                <img src="@/assets/images/jquery.png" alt="jquery 아이콘" />
              </li>
              <li><img src="@/assets/images/git.png" alt="git 아이콘" /></li>
              <li>
                <img src="@/assets/images/github.png" alt="github 아이콘" />
              </li>
            </ul>
            <ul class="skills">
              <li>
                <img src="@/assets/images/figma.png" alt="figma 아이콘" />
              </li>
              <li>
                <img src="@/assets/images/zeplin.png" alt="zeplin 아이콘" />
              </li>
              <li>
                <img src="@/assets/images/ps.png" alt="photoshop 아이콘" />
              </li>
              <li>
                <img src="@/assets/images/ai.png" alt="illustrator 아이콘" />
              </li>
            </ul>
          </div>
        </div>
        <!--r_career_bottom-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.innerWrap {
  display: table;
  table-layout: fixed;
  width: 100%;
  position: relative;
  margin: 125px 0;
  .innerWrapper {
    font-size: 0;
    padding: 0 120px;
    .r_career_top {
      text-align: center;
      h5 {
        background-color: #e7e7e7;
        display: inline-block;
        width: 450px;
        text-align: center;
        padding: 15px 20px;
        margin: 0 auto;
        position: relative;
        font-size: 30px;
        color: #000;
        font-weight: bold;
      }
      p {
        color: #000;
        font-weight: 400;
        line-height: 32px;
        padding: 35px 0;
        font-size: 23px;
      }
      b {
        font-weight: bold;
      }
    }
    .skills {
      // display: flex;
      width: 100%;
      height: auto;
      text-align: center;
      padding: 0;
      justify-content: center;
      li {
        margin: 15px 15px 15px;
        width: 90px;
        overflow: hidden;
        display: inline-block;
        box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.267);
        img {
          display: block;
          width: 100%;
        }
        &:hover {
          transform: translateY(-10px);
        }
      }
    }
  }
}
</style>
