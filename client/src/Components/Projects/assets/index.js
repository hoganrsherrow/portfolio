// MERN images
import DeepThoughts from "./images/deep-thoughts.png";
import PhotoPort from "./images/photo-port.png";

// AI images
import SelfDrivingCar from "./images/self-driving-car.png";

// Backend images
import ReadMeGenerator from "./images/readme-generator.png";
import EmployeeTracker from "./images/employee-tracker.png";
import TeamProfGen from "./images/team-profile-generator.png";

// Frontend images
import OpenWeather from "./images/open-weather.png";
import DailyPlanner from "./images/daily-planner.png";
import SpaceApp from "./images/spaceapp.png";

export const AiProjects = [
    {
        name: "Self-Driving Car",
        description: "Application written in Javascript that uses a back propagation algorithm to steer through blue car without going off the road or hitting the red cars. All code is rendered in the browser.",
        nextSteps: "Allow more interaction from user.",
        url: "https://hoganrsherrow.github.io/self-driving-car-js/",
        image: SelfDrivingCar
    }
];

export const MernProjects = [
    {
        name: "Deep Thoughts",
        description: "This MERN application is meant to be similar to Twitter. It allows the user to read all thoughts, add thoughts if signed in, and add friends if signed in.",
        nextSteps: "Create a more polished UI.",
        url: "https://hogan-deep-thoughts.herokuapp.com/",
        image: DeepThoughts
    },
    {
        name: "Photographer Portfolio",
        description: "This React app simulates a frontend portfolio build for a photographer.",
        nextSteps: "No next steps have been decided so far. If you have any suggestions, please feel free to drop a new issue in the Github repository!",
        url: "https://hoganrsherrow.github.io/photo-port/",
        image: PhotoPort
    },
    /*{
        name: "Pizza Hunt",
        description: "A MERN app that allows individuals to showcase their favorite pizzas.",
        nextSteps: "Refactor some of the frontend code. A few features are buggy from time to time.",
        url: ""
    }*/
];

export const BackendProjects = [
    {
        name: "README Generator",
        url: "https://github.com/hoganrsherrow/readme-generator",
        image: ReadMeGenerator
    },
    {
        name: "Employee Tracker",
        url: "https://github.com/hoganrsherrow/employee-tracker",
        image: EmployeeTracker
    },
    {
        name: "Team Profile Generator",
        url: "https://github.com/hoganrsherrow/team-profile-generator",
        image: TeamProfGen
    }
];

export const FrontendProjects = [
    {
        name: "Open Weather App",
        url: "https://hoganrsherrow.github.io/open-weather/",
        image: OpenWeather
    },
    {
        name: "Daily Planner",
        url: "https://hoganrsherrow.github.io/daily-planner/",
        image: DailyPlanner
    },
    {
        name: "SpaceApp",
        description:"This was the first of three group projects completed for Vanderbilt's Coding Bootcamp. It is a frontend application that utilizes APIs about Space News to deliver news about both private and government space programs.",
        url: "https://carterwsheppard.github.io/space-app/",
        image: SpaceApp
    }
];