<template>
  <div id="contactSection">
    <h2 style="font-size: 30px;color: #FFFFFF;letter-spacing: 2.14px;margin-bottom:74px">1:1 문의</h2>
    <div id="contact-input-list">
      <div class="list-vertical">
        <input type="text" name="" placeholder="제목을 입력해 주세요">
        <input type="text" name="" placeholder="성함을 입력해 주세요">
        <input type="text" name="" placeholder="답장을 받을 이메일 주소를 입력해 주세요">
      </div>
      <div class="list-vertical">
        <input style="height:131px" type="text" name="" placeholder="문의 내용을 입력해 주세여(500자)">
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
  height: 58.5px;
  opacity: 0.95;
  background: #FFFFFF;
  border: 1px solid #BDBDBD;
  border-radius: 2px;
  margin-bottom: 11px;
  text-indent: 20px;
  color: #BDBDBD;
  font-size: 15px;
  padding: 0;
}

.list-vertical button{
  width: 480px;
  height: 60px;
  background: #FC7055;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.30);
  border-radius: 2px;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 16px;
  padding: 0;
  border: 0;
  margin-bottom: 11px;
}

input::placeholder {
  color: #BDBDBD;
  font-size: 15px;
}




</style>
