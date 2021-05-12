<template>
  <div id="app">
    <!-- <el-container>
      <el-header></el-header>
      <el-main> -->
    <!-- <ListUser /> -->
    <router-view />

    <!-- </el-main>
    </el-container> -->
  </div>
</template>
<script>
// import ListUser from "./components/ListUser.vue";
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  max-width: 1280px;
  margin: auto;
  padding-top: 100px;
}
</style>
