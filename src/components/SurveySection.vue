<template>
  <div id="surveySection">
    <div id="container">
      <h1>LOVE, ALPHAGO<br>LUVPAGO IN YOUR HAND</h1>
      <span>럽파고는 기존의 단순한 점수합산 혹은 조건문으로 사랑지수를 표현하는 방법과 달리 실제 20
      대의 데이터를 수집하고 썸에서 부터 연인이 되는 패턴을 학습하여 그 결과를 예측하는 서비스
      로, 짝사랑을 하고 있는 분, 썸 타고 계신 분, 언제 고백하는 것이 좋을지 감을 못 잡는 분, 내 애
      인과의 사랑 지수가 궁금한 분들에게 도움을 드리기 위한 서비스입니다.</span>
      <button type="button">지금 바로 참여하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'surveySection',
  data () {
    return {
      msg: 'surveySection'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 1440px) {
  #container h1{
    font-family: NanumSquareOTFB;
    font-size: 45px;
    color: #FFFFFF;
    line-height: 68px;
    padding-left: 120px;
    padding-top: 159px;
    width: 569px;
    height: 136px;
    margin-top: 0px;
    margin-bottom: 30px;
  }
  #container span{
    font-family: NanumSquareOTFR;
    font-size: 15px;
    color: #DCDCDC;
    line-height: 25px;
    padding-left: 120px;
    height: 100px;
    width: 566px;
    display:inline-block
  }
  #surveySection{
    opacity: 1.5;
    height: 675px;
    width: 100%;
    background-image: url("../assets/surveySectionBG.png");
    background-size: cover;
    padding: 0;
    margin: 0;
  }
  #container{
    width: 1440px;
    margin: auto;
    height: 675px;
    display: flex;
    align-items: left;
    flex-direction: column;
  }
  button{
    background: #FC7055;
    border-radius: 89px;
    color: white;
    border: none;
    width:359px;
    height:50px;
    font-size: 20px;
    margin-left: 120px;
    margin-top: 105px;
  }
  button:hover {
    opacity: 0.8;
    color: white;
    cursor: pointer;
  }
}

@media screen and (max-width: 1440px) and (min-width: 768px) {
  #container h1{
    font-family: NanumSquareOTFB;
    font-size: 38px;
    color: #FFFFFF;
    line-height: 45px;
    display:inline-block;
    height: 90px;
    width: 449px;
    margin-top: 166px;
    text-align: left;
  }
  #container span{
    font-family: NanumSquareOTFR;
    font-size: 15px;
    color: #DCDCDC;
    line-height: 25px;
    display:inline-block;
    height: 125px;
    width: 448px;
  }

  #surveySection{
    opacity: 1.5;
    height: 570px;
    width: 100%;
    background-image: url("../assets/surveySectionBG.png");
    background-size: cover;
    padding: 0;
    margin: 0;
  }
  
  #container{
    width: 768px;
    margin: auto;
    height: 570px;
    display: flex;
    align-items: left;
    flex-direction: column;
  }

  button{
    background: #FC886E;;
    border-radius: 89px;
    color: white;
    border: none;
    width:192px;
    height:40px;
    font-size: 20px;
    margin-top: 61px;
    font-family: NanumSquareOTFB;
    font-size: 15px;
    color: #FFFFFF;
  }
  button:hover {
    opacity: 0.8;
    color: white;
    cursor: pointer;
  }
}

@media screen and (max-width: 768px) and (min-width: 320px) {
  #container h1{
    font-family: NanumSquareOTFB;
    font-size: 23px;
    color: #FFFFFF;
    line-height: 35px;
    display:inline-block;
    height: 70px;
    width: 276px;
    margin-top: 116px;
    text-align: center;
  }
  #container span{
    font-family: NanumSquareOTFR;
    font-size: 13px;
    color: #DCDCDC;
    line-height: 22px;
    display:inline-block;
    height: 70px;
    width: 276px;
  }

  #surveySection{
    opacity: 1.5;
    height: 450px;
    width: 100%;
    background-image: url("../assets/surveySectionBG.png");
    background-size: cover;
    padding: 0;
    margin: 0;
  }
  
  #container{
    width: 320px;
    margin: auto;
    height: 450px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  button{
    background: #FC7055;
    border-radius: 89px;
    color: white;
    border: none;
    width:230px;
    height:40px;
    font-size: 20px;
    margin-top: 105px;
    font-family: NanumSquareOTFB;
    font-size: 15px;
    color: #FFFFFF;
  }
  button:hover {
    opacity: 0.8;
    color: white;
    cursor: pointer;
  }
}

</style>
