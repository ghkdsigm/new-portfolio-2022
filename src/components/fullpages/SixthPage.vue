<template>
  <div>
    <h2>Contact</h2>
    <p>
      문의글이나 관심글은 아래 입력란에 작성 후 보내주시면 감사하겠습니다. :)
    </p>
    <form id="myform" ref="form" @submit.prevent="sendEmail">
      <div class="formGroup">
        <label>Name</label>
        <input type="text" name="user_name" />
      </div>
      <div class="formGroup">
        <label>Email</label>
        <input type="email" name="user_email" />
      </div>
      <div class="formGroup">
        <label>Message</label>
        <textarea name="message"></textarea>
      </div>
      <input type="submit" value="Send" class="button" />
    </form>
    <div class="contact_info">
      <span
        ><svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"
            ></path>
          </g></svg
        >010-9406-3935</span
      >
      <span
        ><svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"
            ></path>
          </g></svg
        >ghkdsigm3@gmail.com</span
      >
    </div>
    <h1 class="Mh1" style="color: #fff">문의 하기</h1>
    <h2 class="Mh2" style="color: #fff">Contact.</h2>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      service_id: process.env.VUE_APP_SERVICE_ID,
      template_id: process.env.VUE_APP_TEMPLATE_ID,
      user_id: process.env.VUE_APP_USER_ID,
      template_params: {
        username: "James",
        "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
      },
    };
  },
  methods: {
    sendEmail(e) {
      e.preventDefault();
      emailjs
        .sendForm(
          this.service_id,
          this.template_id,
          this.$refs.form,
          this.user_id,
        )
        .then(
          result => {
            console.log("SUCCESS!", result.text);
          },
          error => {
            console.log("FAILED...", error.text);
          },
        );
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 35px;
  font-weight: bold;
}
p {
  font-weight: 100;
  font-size: 20px;
}
.contact_info {
  margin-top: 45px;
  text-align: center;
  span {
    padding: 0 15px;
    font-weight: 300;
    font-size: 18px;
    svg {
      margin-right: 5px;
      display: inline-block;
      position: relative;
      top: 3px;
    }
  }
}
.formGroup {
  padding: 15px 0;
  &:first-child {
    margin-top: 35px;
  }
  label {
    color: #fff;
    display: block;
  }
  input {
    outline: none;
    border: none;
    border-bottom: 1px solid #c3c3c3;
    background-color: unset;
    color: #fff;
    font-size: 1em;
    width: 50%;
    font-weight: 300;
    &::placeholder {
      color: #ccc;
      font-size: 1em;
      position: absolute;
      bottom: 5px;
    }
  }
  textarea {
    outline: none;
    border: none;
    border-bottom: 1px solid #c3c3c3;
    background-color: unset;
    color: #fff;
    font-size: 1em;
    width: 100%;
    font-weight: 300;
    &::placeholder {
      color: #ccc;
      font-size: 1em;
      position: absolute;
      bottom: 8px;
    }
  }
}
.button {
  background-color: unset;
  border-radius: 20px;
  border: 1px solid #c3c3c3;
  color: #c3c3c3;
  margin-top: 40px;
  font-size: 1em;
  padding: 10px 20px;
  transition: all 0.6s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #1b1d20;
  }
}
</style>
