<template>
  <header class="header">
    <div class="navigations">
      <!--2-->
      <template>
        <div>
          <router-link
            to="/home"
            :style="[$route.name === 'home' ? whiteObject : blackObject]"
            >Home</router-link
          >
          <router-link
            to="/works"
            :style="[$route.name === 'work' ? blackObject : whiteObject]"
            >Works</router-link
          >
        </div>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      blackObject: {
        color: "#000",
        textShadow: "0 0 3px #fff",
      },
      whiteObject: {
        color: "#fff",
      },
      overFlow: {
        overflow: "auto",
      },
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  left: 120px;
  bottom: 130px;
  opacity: 1;
  z-index: 1;
  transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s,
    margin 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  .navigations {
    z-index: 12;
    font-weight: 300;
    div {
      .nav-link {
        font-family: "NATSRegular" !important;
        font-size: 27px;
        font-weight: 100;
        letter-spacing: -1px;
        color: #fff;
        padding: 0 1.5rem 0 0;
      }
      .nav-link.active {
        font-weight: bold;
      }
      a {
        font-size: 1.6rem;
        &:first-child {
          margin-right: 15px;
        }
        &:hover {
          font-weight: 500;
        }
      }
    }
  }
  .router-link-active {
    font-weight: bold;
  }
}
</style>
