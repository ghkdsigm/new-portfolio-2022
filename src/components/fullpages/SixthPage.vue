<template>
  <div>
    <h2>Contact</h2>
    <p>
      안녕하세요. 문의글이나 관심글은 아래 입력란에 작성 후 보내주시면
      감사하겠습니다. :)
    </p>
    <form action="">
      <div class="formGroup">
        <label for="name"></label>
        <input type="text" id="name" placeholder="Name" />
      </div>
      <div class="formGroup">
        <label for="email"></label>
        <input type="text" id="email" placeholder="Email" />
      </div>
      <div class="formGroup">
        <label for="context"></label>
        <textarea type="text" id="context" placeholder="Message" />
      </div>
      <button type="button">Send</button>
    </form>
    <h1 class="Mh1" style="color: #fff">글 보내기</h1>
    <h2 class="Mh2" style="color: #fff">Contact.</h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 35px;
  font-weight: bold;
}
p {
  font-weight: 300;
}
.formGroup {
  margin-top: 25px;
  &:first-child {
    margin-top: 55px;
  }
  label {
    color: #fff;
  }
  input {
    outline: none;
    border: none;
    border-bottom: 1px solid #c3c3c3;
    background-color: unset;
    color: #fff;
    font-size: 1.125em;
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
    font-size: 1.125em;
    width: 100%;
    font-weight: 300;
    &::placeholder {
      color: #ccc;
      font-size: 1em;
      position: absolute;
      bottom: 15px;
    }
  }
}
button {
  background-color: unset;
  border-radius: 20px;
  border: 1px solid #c3c3c3;
  color: #c3c3c3;
  margin-top: 40px;
  font-size: 1.125em;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
}
</style>
