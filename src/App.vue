<template>
  <div id="app">
    
    <el-container>
      <el-header></el-header>
      <el-main>
        <ListUser />
      </el-main>
    </el-container>
        <router-view></router-view>
    
  </div>
</template>
<script>
import ListUser from "./components/ListUser.vue";
export default {
  name: "App",
  components: { ListUser },
};
</script>

<style>
#app {
  max-width: 1280px;
  margin: auto;
}
</style>
