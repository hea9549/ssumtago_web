<template>
  <div id="app">
    <navBar></navBar>
    <surveySection></surveySection>
    <promotionSection></promotionSection>
    <teamMemberSection></teamMemberSection>
    <faqSection></faqSection>
    <contactSection></contactSection>
    <footerSection></footerSection>
  </div>
</template>

<script>
import navBar from './components/NavBar.vue'
import surveySection from './components/SurveySection.vue'
import promotionSection from './components/PromotionSection.vue'
import teamMemberSection from './components/TeamMemberSection.vue'
import faqSection from './components/FAQSection.vue'
import contactSection from './components/ContactSection.vue'
import footerSection from './components/Footer.vue'

export default {
  name: 'app',
  components: { navBar, surveySection, promotionSection, teamMemberSection, faqSection, contactSection, footerSection }
}
</script>

<style>
#app {
  margin: 0px
}
</style>
