<template>
  <div class = introduction>
    <h1>welcome to introduction page!</h1>
    <p1>click the button to check the introduction</p1>
    <br>
    <br>
    <br>
    <button @click="ShowInformation()" class = button>check</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  methods: {
    ShowInformation: function() {
      alert("this is a project help users manage students' information including name, grade, student id, major. users can add new students and delete student's information");
      console.log("message showed");
      //this.message = "this is a project help users manage students' information including name, grade, student id, major. users can add new student and delete student's information";
    }
  },
  props: {
    msg: String
  }
}
</script>


<style scoped>
.button{
  background-color: #71AEE9;
  color: white;
  padding: 10px 25px;
  text-align: center;
  font-size: 18px;
}
</style>