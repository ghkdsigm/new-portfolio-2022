<template>
  <div>
    <FullPageContents />
  </div>
</template>

<script>
import FullPageContents from "@/components/FullPageContents";
export default {
  components: {
    FullPageContents,
  },
};
</script>

<style>
.pg-wrapper {
  overflow: hidden;
}
.pg-pips {
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 100;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pg-pips ul li a span {
  background: #fff;
}

.pg-pips li {
  display: block;
  width: 10px;
  height: 10px;
  margin: 16px;
  position: relative;
}

.pg-pips span:after {
  background: rgba(255, 255, 255, 0.15);
  position: absolute;
  content: "";
  display: block;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  border-radius: 100%;
  transition: 0.3s;
}

.pg-pips li .active span {
  background: #ffb27b;
  position: absolute;
}

.pg-pips li .active span:after {
  top: -6px;
  left: -6px;
  bottom: -6px;
  right: -6px;
}

.pg-pips ul {
  margin: 0;
  padding: 0;
}

.pg-pips ul li {
  display: block;
  width: 14px;
  height: 13px;
  margin: 7px;
  position: relative;
}

.pg-pips ul li a {
  display: block;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
}

.pg-pips ul li a.active span,
.pg-pips ul li:hover a.active span {
  height: 12px;
  width: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 100%;
}

.pg-pips ul li a span {
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  height: 6px;
  width: 6px;
  border: 0;
  background: #ffb27b;
  border: 1px solid #ffbd8f6b;
  left: 50%;
  top: 50%;
  margin: -2px 0 0 -3px;
  transition: all 0.1s ease-in-out;
}

.pg-pips ul li:hover a span {
  width: 10px;
  height: 10px;
  margin: -5px 0px 0px -5px;
}
</style>
