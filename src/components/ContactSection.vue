<template>
  <div id="contactSection">
    <h2 style="font-size: 30px;color: #FFFFFF;letter-spacing: 2.14px;margin-bottom:74px">CONTACT</h2>
    <div id="contact-input-list">
      <div class="list-vertical">
        <input type="text" name="" placeholder="문의 제목을 입력해 주세요">
        <input type="text" name="" placeholder="성함을 입력해 주세요">
        <input type="text" name="" placeholder="답장을 받을 이메일 주소를 입력해 주세요">
      </div>
      <div class="list-vertical">
        <input id="bodyinput" style="height:114px" type="text" name="" placeholder="문의 내용을 입력해 주세여(500자)">
        <button type="button" name="button">제출</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactSection',
  data () {
    return {
      msg: 'contactSection'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (min-width: 1440px){
  #contactSection{
    height: 600px;
    min-width: 80rem;
    background-image: url("../assets/contactSectionBG.jpg");
    position: relative;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  #contact-input-list{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .list-vertical{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-right: 16px;
    border: 0;
  }

  .list-vertical input{
    width: 480px;
    height: 48.5px;
    opacity: 0.95;
    background: #FFFFFF;
    border: 1px solid #BDBDBD;
    border-radius: 2px;
    margin-bottom: 16px;
    text-indent: 20px;
    color: #BDBDBD;
    font-size: 15px;
    padding: 0;
  }

  .list-vertical button{
    width: 480px;
    height: 50px;
    background: #FC7055;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.30);
    border-radius: 2px;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 16px;
    padding: 0;
    border: 0;
    margin-bottom: 16px;
  }

  input::placeholder {
    color: #BDBDBD;
    font-size: 15px;
  }
}
@media screen and (max-width: 1440px) and (min-width: 768px){
  #contactSection{
    height: 600px;
    background-image: url("../assets/contactSectionBG.jpg");
    position: relative;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  h2{
    font-family: NanumSquareOTFB;
    font-size: 30px !important;
    color: #FFFFFF;
    letter-spacing: 2.14px;
    font-family: NanumSquareOTFR !important;
    margin-bottom: 71px;
    margin-top:67px;
  }
  .list-vertical{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: 0;
  }

  .list-vertical input{
    width: 513px;
    height: 44px;
    opacity: 0.95;
    background: #FFFFFF;
    border: 1px solid #BDBDBD;
    border-radius: 2px;
    margin-bottom: 8px;
    text-indent: 20px;
    color: #BDBDBD;
    font-size: 15px;
    padding: 0;
  }

  input::placeholder {
    color: #BDBDBD;
    font-size: 15px;
  }

  .list-vertical button{
    width: 256px;
    height: 50px;
    background: #FC7055;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.30);
    border-radius: 2px;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 16px;
    padding: 0;
    border: 0;
    margin-bottom: 16px;
  }

  #bodyinput{
    height: 150px !important;
  }
}

@media screen and (max-width: 768px) and (min-width: 320px){
  #contactSection{
    height: 600px;
    background-image: url("../assets/contactSectionBG.jpg");
    position: relative;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  h2{
    font-family: NanumSquareOTFR !important;
    font-size: 25px !important;
    color: #FFFFFF !important;
    margin-bottom: 26px;
  }
  .list-vertical{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: 0;
  }

  .list-vertical input{
    width: 276px;
    height: 44px;
    opacity: 0.95;
    background: #FFFFFF;
    border: 1px solid #BDBDBD;
    border-radius: 2px;
    margin-bottom: 4px;
    text-indent: 20px;
    color: #BDBDBD;
    font-size: 15px;
    padding: 0;
  }

  input::placeholder {
    color: #BDBDBD;
    font-size: 15px;
  }

  .list-vertical button{
    width: 276px;
    height: 50px;
    background: #FC7055;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.30);
    border-radius: 2px;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 16px;
    padding: 0;
    border: 0;
    margin-bottom: 16px;
  }

  #bodyinput{
    height: 234px !important;
  }

}
</style>
