// Write your solution in this file!
const employee ={
    name:'Sammi' ,
     streetAddress:'9 Broadway'
};
console.log(employee)
/*const employee ={};
    employee.name ="Sam";// or employee["name"] = "Sam";
    employee.streetAddress ="11 Broadway";*/

    
    function updateEmployeeWithKeyAndValue(employee , key ,value){
        const newEmployee = {...employee, name:"Sam", streetAddress:"11 Broadway"};
        return newEmployee;
    }
    //console.log(updateEmployeeWithKeyAndValue())

    
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value; 
      
        return employee;
      }
      const employee1 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name" ,"momo");
      //console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee1))

      
      function deleteFromEmployeeByKey(employee , key ){
        const employee2 = {...employee[key]};
        delete employee2[key];
        return employee2;
    }

    function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key];
        return employee;
      }
      
   

    
    
    