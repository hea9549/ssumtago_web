<template>
  <div id="teamMemberSection">
    <div id="container">
      <h2 style="padding-bottom:81px;font-size: 30px;color: #000000;letter-spacing: 2.14px;margin:0">TEAM</h2>
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
@media screen and (min-width: 1440px) {
  #teamMemberSection{
    height: 503px;
    min-width: 80rem;
    background: #F8F8F8;
  }

  #container{
    width: 1440px;
    margin: auto;
    height: 503px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 150px;
  }

  h2 {
    padding-bottom:81px;
    font-size: 30px;
    color: #000000;
    letter-spacing: 2.14px;
    margin:0
  }

  .img-list-horizontal{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: 20px;
  }
  .img-item{
    height: 190px;
    width: 170px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 20px;
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
}
@media screen and (max-width: 1440px) and (min-width: 768px){
  #teamMemberSection{
    height: 503px;
    min-width: 768px;
    background: #F8F8F8;
  }

  #container{
    width: 768px;
    margin: auto;
    height: 503px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 150px;
  }

  h2 {
    padding-bottom:81px;
    font-size: 30px;
    color: #000000;
    letter-spacing: 2.14px;
    margin:0
  }

  .img-list-horizontal{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: 20px;
  }
  .img-item{
    height: 190px;
    width: 170px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 20px;
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
}
@media screen and (max-width: 768px) and (min-width: 320px){
  #teamMemberSection{
    height: 1100px;
    background: #F8F8F8;
  }

  #container{
    width: 320px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    font-family: NanumSquareOTFR !important;
    font-size: 25px !important;
    color: #424242 !important;
    margin-top: 50px !important;
    margin-bottom: 40px !important;
  }

  .img-list-horizontal{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
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
    bottom: 32px;
    margin: 0 auto;
  }
}
</style>
