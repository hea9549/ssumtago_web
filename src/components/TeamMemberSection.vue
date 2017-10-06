<template>
  <div id="teamMemberSection">
    <h2 style="padding-bottom:120px;font-size: 30px;color: #000000;letter-spacing: 2.14px;">Our team</h2>
    <div class="img-list-horizontal">
      <div class="img-item">
        <img src="../assets/team1.png" alt="">
        <span>Developer.Snay</span>
      </div>
      <div class="img-item">
        <img src="../assets/team2.png" alt="">
        <span>Developer.Rocket</span>
      </div>
      <div class="img-item">
        <img src="../assets/team3.png" alt="">
        <span>Developer.Teemotti</span>
      </div>
      <div class="img-item">
        <img src="../assets/team4.png" alt="">
        <span>Developer.YJ</span>
      </div>
      <div class="img-item">
        <img src="../assets/team5.png" alt="">
        <span>Designer.Omeng</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teamMemberSection',
  data () {
    return {
      msg: 'teamMember Section'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#teamMemberSection{
  height: 503px;
  min-width: 80rem;
  background: #F8F8F8;
  right:0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 150px;
}

.img-list-horizontal{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.img-item{
  height: 190px;
  width: 170px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.img-item img{
  position: absolute;
  width:80%;
  top: 0%;
}

.img-item span{
  position: absolute;
  bottom: 15px;
  margin: 0 auto;
}
</style>
