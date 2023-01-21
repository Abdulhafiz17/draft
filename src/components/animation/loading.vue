<template>
  <div class="PAGE">
    <div class="LOADER">
      <div class="OUTER">
        <div class="TOP"></div>
        <div class="RIGHT"></div>
        <div class="ROUND"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "isloading",
  // data() {
  //   return {
  //     isloading: false
  //   }
  // },
  mounted() {},
};
</script>

<style scoped>
.PAGE {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(3px);
  background: rgb(0, 0, 0, 0.3);
  z-index: 10000;
  cursor: progress;
}

.LOADER {
  position: absolute;
  display: flex;
  justify-content: end;
  align-items: top;
  width: 140px;
  height: 140px;
  animation: spin 1s linear infinite;
}

.OUTER {
  position: relative;
  width: 100px;
  height: 100px;
}

.OUTER > .TOP,
.OUTER > .RIGHT,
.OUTER > .ROUND {
  position: absolute;
}

.OUTER > .TOP {
  top: 0;
  left: 0;
  height: 30px;
  width: 100%;
  border-radius: 10px;
  background: rgb(160, 0, 0);
}

.OUTER > .RIGHT {
  top: 0;
  right: 0;
  width: 30px;
  height: 100%;
  border-radius: 10px;
  background: rgb(160, 0, 0);
}

.OUTER > .ROUND {
  left: 0;
  bottom: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: black;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
