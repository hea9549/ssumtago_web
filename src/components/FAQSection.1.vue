<template>
  <div id="faqSection">
    <h1 style="margin-bottom:60px;margin-top:0">FAQ</h1>
    <div class="dropdown-list-vertical">
      <div class="dropdown-item">
        <span class="left-span">Q</span>
        <span>준비 중 입니다.</span>
        <img src="../assets/unroll.png" alt="">
      </div>
      <div class="dropdown-item">
        <span class="left-span">Q</span>
        <span>준비 중 입니다.</span>
        <img src="../assets/unroll.png" alt="">
      </div>
      <div class="dropdown-item">
        <span class="left-span">Q</span>
        <span>준비 중 입니다.</span>
        <img src="../assets/unroll.png" alt="">
      </div>
      <div class="dropdown-item">
        <span class="left-span">Q</span>
        <span>준비 중 입니다.</span>
        <img src="../assets/unroll.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'faqSection',
  data () {
    return {
      msg: 'faq section'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 1440px){
  #faqSection{
    height: 667px;
    min-width: 80rem;
    background-image: url("../assets/faqrSectionBG.jpg");
    position: relative;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .dropdown-list-vertical{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 866px;
  }
  .dropdown-item{
    width: 100%;
    height: 80px;
    margin-bottom: 20px;
    position: relative;
    display:flex;
    align-items: center; /* Vertical center alignment */
    justify-content: center; /* Horizontal center alignment */
    background-color: #ffffff;
    border-radius: 8px;
  }

  .dropdown-item span{
    position: absolute;
    font-size: 22px;
    color: rgba(0,0,0,0.54);
    letter-spacing: 0;
    line-height: 22px;
    left:12%;
  }

  .dropdown-item img{
    position: absolute;
    width: 4%;
    left:92%;
  }

  .dropdown-item .left-span{
    position: absolute;
    float:left;
    font-size: 30px;
    color: #FC7055;
    letter-spacing: 2.14px;
    line-height: 30px;
    left:5%;
  }

  button{
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    background-color: Transparent;
    width:188px;
    height:50px
  }
  button:hover {
    opacity: 0.8;
    color: white;
    cursor: pointer;
  }
  button span{
    font-family: NanumSquareOTFR;
    font-size: 15px;
    color: #FFFFFF;
    letter-spacing: 0.5px;
    line-height: 15px;
  }
}

@media screen and (max-width: 768px) and (min-width: 320px){
  #faqSection{
    background-image: url("../assets/faqrSectionBG.jpg");
    position: relative;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 50px;
  }

  h1{
    margin-top: 50px !important;
    margin-bottom: 24px !important;
    font-family: NanumSquareOTFR !important;
    font-size: 25px !important; 
    color: #424242 !important;
  }

  .dropdown-list-vertical{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 276px;
  }

  .dropdown-item{
    width: 100%;
    min-height: 70px;
    margin-bottom: 20px;
    position: relative;
    display:flex;
    align-items: center; /* Vertical center alignment */
    justify-content: center; /* Horizontal center alignment */
    background-color: #ffffff;
    border-radius: 8px;
  }

  .dropdown-item span{
    font-family: NanumSquareOTFR;
    font-size: 15px;
    color: rgba(0,0,0,0.54);
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    left:35%;
  }

  .dropdown-item img{
    position: absolute;
    width: 0%;
    left:92%;
  }

  .dropdown-item .left-span{
    position: absolute;
    float:left;
    font-family: NanumSquareOTFR;
    font-size: 30px;
    color: #FC7055;
    letter-spacing: 2.14px;
    line-height: 30px;
    left:7%;
  }
}
</style>
