<template>
  <div id="promotionSection">
    <div id="container">
      <div id="desc">
        <span id="head">LUVPAGO</span>
        <div id="resultImg2"></div>
        <span id="body" style="">럽파고는 ‘Love’와  ‘알파고’를 결합하여 만든 명칭으로, 수많은 학습 데이터를 기반으로 여러분의 사랑 지수를 예측해줍니다.
        럽파고는 딥러닝 기술을 이용하여 학습 데이터의 패턴을 파악하고 정확도를 높이면서 여러 상황에서 유연하게 정보를 제공합니다.
        <br>
        <br>
        당신의 사랑을 성공시키는 그날을 위해<br>
        럽파고는 쉬지 않고 달리겠습니다.
        </span>
        <button class="default-button" type="button" name="button">
          <img src="../assets/playstore.png" alt="">
          <span>Play Store</span>
        </button>
        <button class="default-button" type="button" name="button">
          <img src="../assets/apple.png" alt="">
          <span>App Store</span>
        </button>
        <button class="default-button" type="button" name="button">
          <img src="../assets/facebook.png" alt="">
          <span>Facebook</span>
        </button>
      </div>
      <div id="resultImg" style="width:700px;height:600px;margin-left:220px;margin-top:100px">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'promotionSection',
  data () {
    return {
      msg: 'Promotion section'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 1440px) {
  #promotionSection{
    height:700px;
    min-width: 100%;
    background-image: url("../assets/promotionSectionBG.jpg");
    position: relative;
    background-size: contain;
  }

  #container{
    width: 1440px;
    margin: auto;
    height: 700px;
    display: flex;
    align-items: left;
    position: relative;
  }

  #desc{
    height: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-left: 120px;
    width: 268px;
  }

  #head {
    font-size: 58px;
    color: #FFFFFF;
    margin-top:102px
  }

  #body{
    margin-top:20px;
    width:358px;
    height:237px;
    display:inline-block;
    padding-left:120px;
    font-family: NanumSquareOTFR;
    font-size: 15px;
    color: #FFFFFF;
    letter-spacing: -0.47px;
    line-height: 25px;
  }

  #resultImg {
    background-image: url("../assets/promotionResult.png");
    background-size: cover;
    width:700px;
    height:600px;
    margin-left:220px;
    margin-top:100px
  }

  #resultImg2{
    width: 0;
    height: 0;
  }

  .default-button{
    border: 1px solid #FFFFFF;
    background-color: Transparent;
    border-radius: 52px;
    color: #FFFFFF;
    letter-spacing: 0.6px;
    position: relative;
    display: block;
    margin-top: 15px;
    padding-bottom: 15px;
    margin-left: 15px;
    left: -10%;
    width:212px;
    height:50px;
    font-size: 18px;
  }

  .default-button:hover {
    opacity: 0.8;
    color: white;
    cursor: pointer;
  }

  .default-button img{
    position: absolute;
    float:left;
    width:11%;
    top: 25%;
    left: 22%;
  }
  .default-button span{
    position: absolute;
    top: 36%;
    left: 41%;
    font-family: NanumSquareOTFB;
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0.6px;
    line-height: 18px;
  }
}
@media screen and (max-width: 1440px) and (min-width: 768px) {
  #promotionSection{
    height:700px;
    min-width: 100%;
    background-image: url("../assets/promotionSectionBG.jpg");
    position: relative;
    background-size: cover;
  }
  
  #container{
    width: 768px;
    margin: auto;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  #head{
    font-family: NanumSquareOTFR;
    font-size: 58px;
    color: #FFFFFF;
    /* margin-top: -40px; */
    margin-bottom: 15px;
  }

  #desc{
    height: 650px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 320px;
  }

  #resultImg {
    background-image: url("../assets/promotionResult2.png");
    background-size: cover;
    width: 280px;
    height: 400px;
    margin-left: 50px !important;
    margin-top: 110px !important;
  }

  #resultImg2{
    width: 0;
    height: 0;
  }

  #body{
    font-family: NanumSquareOTFR;
    font-size: 15px;
    color: #FFFFFF;
    letter-spacing: -0.47px;
    line-height: 25px;
    width: 255px;
    height: 237px;
    display:inline-block;
    margin-bottom: 24px;
  }

  .default-button{
    border: 1px solid #FFFFFF;
    background-color: Transparent;
    border-radius: 52px;
    color: #FFFFFF;
    letter-spacing: 0.6px;
    position: relative;
    display: block;
    margin-top: 15px;
    padding-bottom: 15px;
    width:253px;
    height:45px;
    font-size: 18px;
  }

  .default-button:hover {
    opacity: 0.8;
    color: white;
    cursor: pointer;
  }

  .default-button img{
    position: absolute;
    float:left;
    width:8%;
    top: 25%;
    left: 28%;
  }
  .default-button span{
    position: absolute;
    top: 36%;
    left: 43%;
    font-family: NanumSquareOTFB;
    font-size: 15px;
    color: #FFFFFF;
    letter-spacing: 0.6px;
    line-height: 18px;
  }
}
@media screen and (max-width: 768px) and (min-width: 320px) {

  #promotionSection{
    height:1020px;
    min-width: 100%;
    background-image: url("../assets/promotionSectionBG.jpg");
    position: relative;
    background-size: cover;
  }
  
  #container{
    width: 320px;
    margin: auto;
    height: 1020px;
  }

  #head{
    font-family: NanumSquareOTFR;
    font-size: 25px;
    color: #FFFFFF;
    margin-top: -40px;
    margin-bottom: 15px;
  }

  #desc{
    height: 1020px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 320px;
  }

  #resultImg {
    width: 0;
    height: 0;
  }

  #resultImg2{
    background-image: url("../assets/promotionResult2.png");
    background-size: cover;
    width: 280px;
    height: 400px;
    margin-bottom: 10px;
  }

  #body{
    font-family: NanumSquareOTFR;
    font-size: 15px;
    color: #FFFFFF;
    letter-spacing: -0.47px;
    line-height: 25px;
    width: 254px;
    height: 255px;
    display:inline-block;
    margin-bottom: 24px;
  }

  .default-button{
    border: 1px solid #FFFFFF;
    background-color: Transparent;
    border-radius: 52px;
    color: #FFFFFF;
    letter-spacing: 0.6px;
    position: relative;
    display: block;
    margin-top: 15px;
    padding-bottom: 15px;
    width:253px;
    height:45px;
    font-size: 18px;
  }

  .default-button:hover {
    opacity: 0.8;
    color: white;
    cursor: pointer;
  }

  .default-button img{
    position: absolute;
    float:left;
    width:8%;
    top: 25%;
    left: 28%;
  }
  .default-button span{
    position: absolute;
    top: 36%;
    left: 43%;
    font-family: NanumSquareOTFB;
    font-size: 15px;
    color: #FFFFFF;
    letter-spacing: 0.6px;
    line-height: 18px;
  }
}

</style>
