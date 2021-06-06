<template>
  <div class="home">
    <p class="title">Hello world</p>
    <Icon name="trash"/><!-- 使用图标 -->
    <button @click="updateTheme()">默认主题</button>
    <button @click="updateTheme('theme1')">主题1</button>
    <button @click="updateTheme('theme2')">主题2</button>
  </div>
</template>
<script>
import Icon from "@/components/Icon/index";
export default {
    components:{
        Icon
    },
    methods: {
        updateTheme(name){
            if(name == null){ // 采用默认主题
                document.documentElement.removeAttribute("data-theme");
            }else{
                document.documentElement.setAttribute("data-theme",name);
            }
        } 
    },
}
</script>
<style scoped lang="scss">
.home{
    height: 100%;
    @include backgroudColor;
}
.title{
  @include color;
}
</style>