<template>
  <div id="surveySection">
  	<button type="button">지금 바로 참여해보기</button>
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
#surveySection{
  height: 37.5rem;
  min-width: 80rem;
  background-image: url("../assets/surveySectionBG.jpg");
  background-size: cover;
  right:0;
}
button{
  background: #FC7055;
  border-radius: 89px;
  color: white;
  border: none;
  width:22.94rem;
  height:4.5rem;
  font-size: 20px;
  position: relative;
  left: 4.56rem;
  top: 26.5rem;
}
button:hover {
  opacity: 0.8;
  color: white;
  cursor: pointer;
}
</style>
