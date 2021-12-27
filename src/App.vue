<template>
  <Navbar @addUser="addUser" />
  <Users :users="users" @removeUser="removeUser" />
</template>

<script>
import Users from './components/Users.vue'
import Navbar from './components/Navbar.vue'
import axios from "axios"

import { tenUsersUrl, oneUserUrl } from './API'
export default {
  name: 'App',
  components: {
    Users,
    Navbar
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    // populate data with 10 users initially or adds one when add button pressed
    getData(URL) {
      axios.get(URL)
        .then(resp => resp.data.results)
        .then(data => this.users = [...data, ...this.users])
        .catch(e => console.log(e))
    },

    removeUser(id) {
      this.users = this.users.filter(user => user.login.uuid !== id)
    },
    // adds one user
    addUser() {
      this.getData(oneUserUrl)
      window.scrollTo(0, 0)

    }
  },
  mounted() {
    // populate data with 10 users
    this.getData(tenUsersUrl)
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 150px;
}
button {
  background-color: #4caf50;
  border: none;
  border-radius: 2px;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
</style>
