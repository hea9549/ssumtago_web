<template>
  <div id="footerSection">
    <span style="font-family: SourceHanSansKR-Normal;font-size: 15px;color: #F8F8F8;letter-spacing: 0;margin-right: 10px;">ⓒ Team LUVPAGO</span>
    <span style="font-family: SourceHanSansKR-Normal;font-size: 15px;color: #9B9DA0;letter-spacing: 0;">2017 All Rights Reserved</span>
  </div>
</template>

<script>
export default {
  name: 'footerSection',
  data () {
    return {
      msg: 'footerSection'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 1440px){
  #footerSection{
    height: 52px;
    min-width: 80rem;
    background: #424242;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}
@media screen and (max-width: 1440px) and (min-width: 768px){
  #footerSection{
    height: 52px;
    background: #424242;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}
@media screen and (max-width: 768px) and (min-width: 320px){
  #footerSection{
    height: 52px;
    background: #424242;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}
</style>
