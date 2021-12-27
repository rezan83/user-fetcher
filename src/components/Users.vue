<template>
  <div class="users-list">
    <div v-for="user in users" class="user-container" :key="user.login.uuid">
      <button class="danger-btn" @click="removeUser(user.login.uuid)">🗑</button>
      <User :user="user" />
    </div>
  </div>
</template>

<script>
import User from './User.vue'
export default {
  name: 'Users',

  props: {
    users: Array
  },
  components: {
    User
  },

  methods: {
    removeUser(id) {
      this.$emit("removeUser", id)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users-list {
  display: grid;
  place-items: center;
  width: 100%;
}
.user-container {
  position: relative;
  width: calc(90% + 40px);
  background-color: rgb(0, 0, 63);
  border: darkcyan solid 1px;
  margin: 10px 0;
}

.user-container:hover {
  opacity: 0.9;
}
.danger-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #af4c9e;
  padding: 5px;
}
</style>
