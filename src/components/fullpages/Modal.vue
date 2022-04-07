<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
          <div class="border">
            <div class="modal-body">
              <slot name="body">default body</slot>
            </div>
          </div>
          <div class="modal-footer">
            <slot name="footer" class="footercont"> </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/images/overlaybg.png");
  background-repeat: repeat;

  /* opacity: 0.95; */
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 1300px;
  margin: 0px auto;
  padding: 15px;
  background-color: #1d1d1d;
  border-radius: 15px;

  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33); */
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;

  .border {
    padding: 20px;
    border: 3px solid #fff;
    border-radius: 15px;
  }
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px auto;
}

.modal-default-button {
  float: right;
}

.modal-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #2b2b2b;
  left: 0;

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
    background: #ffbd8f;

    a {
      color: #000;
    }
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
