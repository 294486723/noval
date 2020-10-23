<template>
  <div class="index">
      <top></top>
      <rotation></rotation>
      <navline></navline>
      <record></record>
      <router-view></router-view>
      <foot></foot>
  </div>
</template>

<script>
import top from '../components/Top'
import rotation from '../components/Rotation'
import navline from '../components/Navline'
import record from '../components/Record'
import foot from '../components/Foot'

export default {
name:'index',
components:{
    top,
    rotation,
    navline,
    record,
    foot
}
}
</script>

<style>

</style>