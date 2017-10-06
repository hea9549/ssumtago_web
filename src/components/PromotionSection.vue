<template>
  <div id="promotionSection">
    <div id="desc" style="width:268px;padding-left:20px">
      <span style="font-size: 58px;color: #FFFFFF;">LUVPAGO</span>
      <span style="padding-left:10px;padding-right:10px;font-family: NanumSquareOTFR;font-size: 15px;color: #FFFFFF;letter-spacing: -0.47px;line-height: 25px;text-align:justify">럽파고는 ‘Love’와  ‘알파고’를 결합하여 만든 명칭으로, 수많은 학습 데이터를 기반으로 여러분의 사랑 지수를 예측해줍니다.
      럽파고는 딥러닝 기술을 이용하여 학습 데이터의 패턴을 파악하고 정확도를 높이면서 여러 상황에서 유연하게 정보를 제공합니다.
      <br>
      <br>
      당신의 사랑을 성공시키는 그날을 위해
      럽파고는 쉬지 않고 달리겠습니다.
      </span>
      <button class="default-button" type="button" name="button" style="width:271px;height:50px;font-size: 18px;">
        <img src="../assets/playstore.png" alt="">
        <span>Play Store에서 보기</span>
      </button>
      <button class="default-button" type="button" name="button" style="width:271px;height:50px;font-size: 18px;">
        <img src="../assets/apple.png" alt="">
        <span>App Store에서 보기</span>
      </button>
      <button class="default-button" type="button" name="button" style="width:271px;height:50px;font-size: 18px;">
        <img src="../assets/facebook.png" alt="">
        <span>Facebook Page로 이동</span>
      </button>
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
#promotionSection{
  height: 600;
  min-width: 80rem;
  background-image: url("../assets/promotionSectionBG.jpeg");
  position: relative;
  background-size: cover;
}

#desc{
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
  left: 8%;
}
.default-button span{
  position: absolute;
  top: 25%;
  left: 23%;
}
</style>
