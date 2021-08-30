//using arrow function

var student = {
  name: 'Sarah',
  hobbies: ['swim', 'cook', 'watch cricket'],
  showHobbies() {
    this.hobbies.forEach((hobby) => {
      console.log(this.name + "'s hobby is to " + hobby);
    });  
  }
};

student.showHobbies();
