<template>
  <div id="navBar">
    <img src="../assets/mainLogo.png" alt="" style="width:50px;height:50px;padding-left:71px">
  </div>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (min-width: 1440px) {
  #navBar {
    overflow: hidden;
    width: 100%;
    height :75px;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    background-color: #000000;
    z-index: 9999;
  }
}


@media screen and (max-width: 768px) and (min-width: 320px) {
  #navBar {
    overflow: hidden;
    width: 100%;
    height :56px;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    background-color: #000000;
    z-index: 9999;
  }
}
/* img {
  position:absolute;
  top:0;
  bottom:0;
  margin:auto;
} */
</style>
