const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeMembers = [];
const idArray = [];

class Employee {
    Constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
class Manager extends Employee {
    Constructor(officeNumber, getRole){
        super(officeNumber, getRole);
        this.officeNumber = officeNumber;
        this.getRole = getRole;
    }
}
class Engineer extends Employee {
    Constructor(engineerGithub, getRole){
        super(engineerGithub, getRole);
        this.engineerGithub = engineerGithub;
        this.getRole = getRole;
    }
}
class Intern extends Employee {
    Constructor(internSchool, getRole){
        super(internSchool, getRole);
        this.internSchool = internSchool;
        this.getRole = getRole;
    }
}


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function team () {
    inquirer.prompt([
        {
            type: "list",
            name: "teamMembers",
            message: "Which role would you like to add?"
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "I have no more team members I wish to add to the list."
            ]
        }
    ]).then(memberChoice => {
        switch(memberChoice.teamMembers){
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    })
}
const Manager = [
    {
        type: "input",
        name: "managerName",
        message: "Please provide the Manager's full name."
    },
    {
        type: "input",
        name: "managerId",
        message: "Please provide the Manager's ID number."
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Please provide the Manager's email address."
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please provide Manager's office number."
    }
].then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
    employeeMembers.push(manager);
    idArray.push(answers.managerId);
    team();
  });


const Engineer = [
    {
        type: "input",
        name: "engineerName",
        message: "Please provide the Engineer's full name."
    },
    {
        type: "input",
        name: "engineerId",
        message: "Please provide the Engineer's ID number."
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Please provide the Engineer's email address."
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "Please provide Engineer's gitHub username."
    }
].then(answers => {
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    employeeMembers.push(engineer);
    idArray.push(answers.engineerId);
    team();
  });

const Intern = [
    {
        type: "input",
        name: "internName",
        message: "Please provide the Intern's full name."
    },
    {
        type: "input",
        name: "internId",
        message: "Please provide the Intern's ID number."
    },
    {
        type: "input",
        name: "internEmail",
        message: "Please provide the Intern's email address."
    },
    {
        type: "input",
        name: "internSchool",
        message: "Please provide Intern's school name."
    }
].then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    employeeMembers.push(intern);
    idArray.push(answers.internId);
    team();
  });

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employeeMembers), "utf-8");
  }


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
