<template>
    <svg class="icon" :style="{fill:color?color:''}">
        <use :xlink:href="'#icon-'+name"/>
    </svg>
</template>

<script>
export default {
 props:{
     name:String,
     color:{
         type:String,
         deafult:null
     }
 }
}
</script>

<style lang="scss" scoped>
 .icon{
   @include fill;
 }
</style>