const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

class Employee {
    Constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

class Manager extends Employee {
    Constructor(officeNumber, managerRole) {
        super(officeNumber, managerRole);
        this.officeNumber = officeNumber;
        this.managerRole = managerRole;
    }
}
class Engineer extends Employee {
    Constructor(gitUserName, engineerRole) {
        super(gitUserName, engineerRole);
        this.gitUserName = gitUserName;
        this.engineerRole = engineerRole;
    }
}
class Intern extends Employee {
    Constructor(school, internRole) {
        super(school, internRole);
        this.school = school;
        this.internRole = internRole;
    }
}


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const Manager = [
    {
        type: "input",
        name: "name",
        message: "Please provide employee's full name."
    },
    {
        type: "input",
        name: "role",
        message: "Please provide employee's role."
    },
    {
        type: "input",
        name: "id",
        message: "Please provide employee ID number."
    },
    {
        type: "input",
        name: "email",
        message: "Please provide employee email address."
    },
]

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
