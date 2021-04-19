
# Holistic


Community Hub for Fitness Professionals to manage client relationships, sessions and track progress. 

### Current Deployment
- Firebase Hosting: https://holistic-a123b.web.app/

### Prototype
- Figma URL: https://www.figma.com/file/DDcPEAlTdy4opssiQI0kzo/Holistic_Prototype?node-id=0%3A1 

### Use Case Diagram
- Figma URL: https://www.figma.com/file/jYLDC6JpT4DJkwuSXKsnmG/Holistic_UseCaseDiagram?node-id=0%3A1

### Installation
1. Clone project to local:
```
$ git clone https://github.com/BCIT-SSD-2020-21/passion-project-veeepi.git
```
2. Install node modules
```
// navigate to project directory
$ cd passion-project-veeepi
// install 
$ npm install 
// or 
$ yarn
```
3. Create a file named 'config.json' in the project's '/src' folder
```
$ cd src
$ touch config.json
```
4. Setup Firebase Project (Web)

5. Find the firebaseConfig data from Firebase Project Settings

6. Copy the firebaseConfig data into 'config.json' 

### Functional requirements:
- manage connections with other users (add/remove connections )
- view connection's profiles, which contain user data relevant to the Coach (userType)
- Coaches can create/edit Sessions with a client; client can view on their Dashboard
- Coaches can Start a Session, which enables Completion; disables ability to Start new Sessions while a Session is 'in progress' status
- create/edit Actions within a Session at any stage, other than 'cancelled' and 'completed'
- search through the list of a user's Sessions by substring
- search through the list of a user's User Connections by substring
- update database in realtime, using Firebase onSnapshot() 

---
---
---
# Passion Project
[GitHub Assignment Link](https://classroom.github.com/a/iu7cOFBC)
## Overview
The goal of the Passion Project module is to provide each student with an opportunity to individually explore and expand their abilities within a hands-on project-based setting.

The student will perform all roles including:
* Product Owner
* Product Designer/Planner
* Project Manager
* Designer
* Dev Ops
* Developer

Students are encouraged to work independantly (or in small groups of 2 or 3 if there is a shared passion). 

Students are able to use the tech stack of their choice. 

## Outcomes
Leading up to this point in our program you were asked to plan, design, and start to develop a product of your choosing. Given your increased experience with web and mobile technologies, you will be provided with class time to perform the tasks necessary to result in the following:

* A deployed main branch of any web based project assets.
* A clearly defined document with installation instructions as well as links and descriptions for all project assets.
* A project board that shows all of your build activitites (GitHub Project, Trello, etc.)
* A 5 minute presentation of the primary use cases for your application.

## Process
* Review your original product plan and design.
* Make changes to your plan/design where necessary to ensure that you can have a completed product for the Passion project demo day.
* Set specific milestones for your project, this will help to ensure that primary use cases are built in priority sequence and functional to a required minimum. (Not all milestones need to be completed...)
* All commits are to be done on a branch other than main and connected to a GitHub "issue". If working alone you can review and merge your own pull requests.

## Essential Features
These are really based on the design of your application and up to you...The only requirements are that each application has:
* some form persistant data that requires a database
* an implementation of a user interface that appropriately ties the app to the persisted data.

All other features should be included on an as needed basis for your application.

## Due Date and Grading
Presentations will take place 1pm-4pm PST April 16th, 2021.

The due date for graded code to be on GitHub is 11:59pm April 18th, 2021.

The passion project accounts for 20% of your SSDP5001 mark. 

**SSDP5001 Weighting**
* Career Success Series (13.33%)
* Passion Project (20%)
* Industry Project (66.67%)

---
