<template>
  <el-row>
    <!-- <router-view ></router-view> -->
    <!-- <div>{{ dataUser }}</div> -->
    <div class="row-search">
      <div class="row-searchBar">
        <el-input
          v-model="search"
          placeholder="Search by name"
          @change="handleSearch"
          @keydown="handleSearch"
        >
        </el-input>
        <i class="el-icon-search"></i>
      </div>
      <el-button type="success" @click="handleAdd('add')">Add user</el-button>
    </div>
    <!-- <el-icon-search/> -->
    <el-table :data="pagedTableData" v-loading="loading">
      <el-table-column label="#" type="index" :index="indexMethod">
      </el-table-column>
      <el-table-column label="User" prop="name">
        <template slot-scope="sc">
          <div class="row-user">
            <!-- <el-avatar :size="50" :src="JSON.stringtify(sc.row.avatar)"></el-avatar> -->
            {{ sc.row.name }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Position" prop="position"> </el-table-column>
      <el-table-column label="Unit" prop="unit"> </el-table-column>
      <el-table-column label="Action">
        <template slot-scope="scope">
          <el-button type="danger" @click="handleDelete(scope.row)"
            >Delete</el-button
          >
          <el-button type="primary" @click="handleEdit(scope.row, '')"
            >Edit</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="list.length"
      :current-page="1"
      @current-change="setPage"
      layout="prev, pager, next"
    ></el-pagination>
    <el-dialog title="Edit user" :visible.sync="dialogVisible" width="30%">
      <el-form :model="form">
        <el-form-item label="Name">
          <el-input v-model="form.name" placeholder="please enter name" />
        </el-form-item>
        <el-form-item label="Position">
          <el-input v-model="form.position" placeholder="position" />
        </el-form-item>
        <el-form-item label="Unit">
          <el-input v-model="form.unit" placeholder="unit" />
        </el-form-item>
      </el-form>
      <!-- <span>This is a message</span> -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleSave">Save</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ListUser",
  props: {},
  data() {
    return {
      tableData: [],
      page: 1,
      pageSize: 10,
      search: "",
      dialogVisible: false,
      type: "",
      form: {
        id: "",
        name: "",
        avatar: "",
        position: "",
        unit: "",
      },
    };
  },
  created() {
    this.getAllUser();
  },

  computed: {
    ...mapGetters(["list", "loading"]),
    pagedTableData() {
      return this.list.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
  },
  methods: {
    ...mapActions([
      "getAllUser",
      "deleteUser",
      "updateUser",
      "addUser",
      "searchUserByName",
    ]),
    // renderList(){
    //    return JSON.parse(this.listUser.listUser)
    // }
    handleSearch() {
      this.searchUserByName(this.search);
    },
    setPage(val) {
      this.page = val;
    },
    handleDelete(row) {
      this.deleteUser(row.id);
    },
    indexMethod(index) {
      return (index + 1);
    },
    handleEdit(row, type) {
      console.log(row);
      this.type = type;
      this.dialogVisible = true;

      this.form = {
        id: row.id,
        name: row.name,
        position: row.position,
        unit: row.unit,
      };
    },
    handleSave() {
      this.dialogVisible = false;
      if (this.type == "add") {
        let dataAdd = this.form;

        this.addUser(dataAdd);
      } else {
        this.updateUser(this.form);
      }
      this.form = {
        id: "",
        name: "",
        position: "",
        unit: "",
      };
    },

    handleAdd(type) {
      this.dialogVisible = true;
      this.type = type;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.row-search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.row-searchBar {
  display: flex;

  position: relative;
  /* margin-bottom: 10px; */
}
.row-searchBar > i {
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0.5;
}
.row-user {
  display: flex;
  align-items: center;
}
.row-user > span {
  margin-right: 10px;
}
</style>
