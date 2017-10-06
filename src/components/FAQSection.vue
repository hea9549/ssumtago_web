<template>
  <div id="faqSection">
    <h1 style="margin-bottom:60px">FAQ</h1>
    <div class="dropdown-list-vertical">
      <div class="dropdown-item">
        <span class="left-span">Q</span>
        <span>럽파고는 다른 서비스와 어떤 점이 다른가요?</span>
        <img src="../assets/unroll.png" alt="">
      </div>
      <div class="dropdown-item">
        <span class="left-span">Q</span>
        <span>럽파고는 다른 서비스와 어떤 점이 다른가요?</span>
        <img src="../assets/unroll.png" alt="">
      </div>
      <div class="dropdown-item">
        <span class="left-span">Q</span>
        <span>럽파고는 다른 서비스와 어떤 점이 다른가요?</span>
        <img src="../assets/unroll.png" alt="">
      </div>
      <div class="dropdown-item">
        <span class="left-span">Q</span>
        <span>럽파고는 다른 서비스와 어떤 점이 다른가요?</span>
        <img src="../assets/unroll.png" alt="">
      </div>
    </div>
    <button type="button" name="button" style="margin-top:30px">
      <span>Show all FAQ's</span>
    </button>
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
#faqSection{
  height: 746px;
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
  height: 88px;
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
</style>
