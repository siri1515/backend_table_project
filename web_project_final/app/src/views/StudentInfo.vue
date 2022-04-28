<template>
  <div>
    <br>
    <br>
    <h1 class="head">Information Table:</h1>

    <table border="1" class="table">
      <tr><th>Student Id</th><th>First Name</th><th>Last Name</th><th>Grade</th><th>Major</th><th>space to write remark</th><tr>

      <tr v-for="(student, index) in students" v-bind:key="student._id">
        <td>{{ student.student_id  }}</td><td>{{ student.first_name  }}</td><td>{{  student.last_name  }}</td><td>{{  student.grade  }}</td>
        <td>{{  student.major  }}</td>
        <td><input type="text"/></td>
        <td><input type="text" placeholder="edit grade" v-model="student.grade">
        <button @click = "editStudent(student, index)">Edit</button></td>
        <td><button @click = "deleteStudent(student, index)">delete</button></td>
      </tr>
    </table>


    <br>
    <p1>if you want to add new student:</p1>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>id</label>
          <input type="text" class="form-control" placeholder="id" v-model="new_student.student_id">
        </div>
        <div class="form-group col-md-6">
          <label>first name</label>
          <input type="text" class="form-control" placeholder="first name" v-model="new_student.first_name">
        </div>
        <div class="form-group col-md-6">
          <label>last name</label>
          <input type="text" class="form-control" placeholder="last name" v-model="new_student.last_name">
        </div>
        <div class="form-group col-md-6">
          <label>major</label>
          <input type="text" class="form-control" placeholder="major" v-model="new_student.major">
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">grade</label>
        <input type="text" class="form-control" placeholder="grade" v-model="new_student.grade">
      </div>

      <br>
      <button type="submit" class="btn btn-primary" @click = "addStudent()">Add new student</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";




export default{
  name: "StudentInfo",
  data(){
    return{
      students: [],
      new_student: {student_id: "", first_name: "", last_name: "", grade: "", major: ""},
    }
  },
  methods:{
    getStudents: function() {
      var url = "http://localhost:8080/api/students/";
      axios.get(url,{})
        .then((response) => {
          this.students = response.data;
        })

    },

    deleteStudent: function(student, index) {
      console.log(index);
      console.log(student);
      var url = "http://localhost:8080/api/students/" + student._id;
      axios.delete(url, {
        headers: {},
        data: {}
      })
      .then((response) => {
        console.log(response);
        this.$delete(this.students, index);
      }, (error) => {
        console.log(error);
      });
    },
  
    addStudent: function() {

      var url = "http://localhost:8080/api/students/";
      alert("information update");
      console.log(this.new_student);
      axios.post(url, {
        student_id: this.new_student.student_id,
        first_name: this.new_student.first_name,
        last_name: this.new_student.last_name,
        grade:this.new_student.grade,
        major: this.new_student.major
      },
      {
        headers: { }
      })
      .then((response) => {
        this.students.push(response.data)
      }, (error) => {
        alert("error");
        console.log(error);
      });
    },

    editStudent: function(student, index){
      var url = "http://localhost:8080/api/students/" + student._id;
      axios.post(url, {
        grade:this.student.grade
      },
      {
        headers: { }
      })
      .then((response) => {
        console.log(response);
        this.students.post(student.grade, index)
      }, (error) => {
        console.log(error);
      });
    }
    

  },
  mounted()
  {
    this.getStudents();
  }
}
</script>

<style scoped>

.table{
  background-color: #A2CAF5;
  margin-left: auto;
  margin-right: auto;
}

.head{
  color: #3934D3;
  font-size: 30px;
}
</style>


