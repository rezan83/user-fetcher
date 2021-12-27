<template>
    <nav>
        <h1>UserFetcher</h1>
        <button @click="addUser"><span>ADD A USER</span> ＋</button>
    </nav>
</template>

<script>
export default {
 methods: {
    addUser() {
      this.$emit("addUser")
    }
  },
}
</script>

<style>
nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(10, 0, 77);
    color: white;
    width: 100vw;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}
nav h1{
    font-size: calc(15px + 3vw);
}
 nav button{
   font-size: calc(8px + 1vw);
 }
 /* make add button circle with only plus sign */
 @media only screen and (max-width: 600px) {
   nav button span{
     display: none;
   }
   nav button{
     border-radius: 50px;
     width: 50px;
     height: 50px;
     margin-bottom: -80px;
   }
 }
</style>