# Assessment for Unit 3

Being a developer requires an acute attention to detail. The expectation of this assessment is that all instructions are read carefully and followed completely.

A good developer will ask clarifying questions when a task is unclear and use all the resources at their disposal.

The step-by-step instructions [here](https://github.com/LEARNAcademy/Syllabus/blob/main/github/assessments.md) breakdown the git and GitHub process for this assessment.

Assessment should be accessed through the GitHub Classroom link provided to you in Slack.

PRs should be posted _before_ class begins on Tuesday, January 2, 2024.

#### Process

- Accept the assignment via GitHub Classroom link shared with you in Slack
- `cd` into an appropriate location on your local, we recommend the Desktop
- Clone the assessment repository
- `cd` into the assessment
- Create a branch with the unit and your name, e.g `unit-3-sarah-proctor`
- Run $ `yarn` to install the React dependencies
- Run $ `yarn start` to start the server
- Complete all assessment tasks
- Git add files, commit, push to your branch
- Create a pull request and leave the branch open for review!

---

### React Challenge

1. React Debugging: The Card Draw React application has three (3) errors that need to be fixed. Use the console and error messages to guide you to the solution. 

2. React Feature: Add functionality to the `Return Cards and Shuffle Deck` button using the `shuffle` function to reset the Card Draw application to its original state.

3. React Concepts: Add comments to the sever (7) notations in the `drawCard` function describing in detail the functionality of the following line of code.

4. STRETCH (optional): Add stylings of your choice to the application. Ensure the styling does not interfere with the card draw functionality.

### Interview Practice Questions

1. What are three (3) syntax difference between HTML and JSX?
    1A. Class vs. ClassName: In HTML, we use the 'class' attribute to define a class for an element. In JSX, we use 'className' instead to define a class for an element because 'class' is reserved for JavaScript. 
    1B. Inline Styles: In HTML, we typically define styles by using the 'styles' attribute and a string. In JSX, we define styles using a JavaScript object within curly braces. 
    1C. Self-Closing Tags: In HTML, certain tags can be self-closed with a forward slash '/' at the end. In JSX, the self-closing format is used without the forward slash '/' at the end. 

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?
    - Yarn is a package manager for JavaScript that was developed by Facebook, Google, Exponent, and Tilde. It is an alternative to Node Package Manager used to manage project dependencies. It is faster and more reliable for package installations by using a deterministic dependsancy resolution algorithm and parallelizing operations. The files that are modified when you run the command 'yarn' in your terminal are: node_modules, yarn.lock, and package.json.

3. What is the difference between state values and props in React?
    - State is a built-in object that belongs to a component. It represents the internal data of the component that can change over time. State is mutable and can be modified using the setState method. When state changes, React re-renders the component to reflect the updated state. State is local to the component where it is defined. It cannot be accessed or modified from outside the component.
    
    - Props (properties) are data passed to a component from its parent component. They are immutable and are used to configure a component with external data. Props are immutable, meaning they cannot be changed within the component. Any change in props should be handled by the parent component.  Props are received by the component and can be accessed using this.props. They are set by the parent component and remain constant throughout the component's lifecycle.

4. STRETCH (optional): What is the difference between a div tag and a span tag?
    - <div> is a block-level container used for structuring and styling larger sections of a webpage, while <span> is an inline element used for styling smaller portions of text or content within a larger block. 

### Looking Ahead: Terms for Next Unit

1. Object-oriented programming:
    - Object Oriented Programming is a programming paradigm that was created to deal with the complexity of large software systems using the concept of "objects" to structure and organize code. OOP promotes modular and reusable code which allows for easier design and implementation. 

2. Ruby: Ruby is an open source, object-oriented programming language created by Yukihiro "Matz" Matsumoto in the early 1990's. Ruby is known for its simplicity and a style that is both easy to read and write. It is a general-purpose, interpreted, dynamically-typeded, server-side scripting language. 

3. Ruby Hashes:
    - A ruby hash is a dictionary-like container for unique keys and their corresponding values. There are many ways to define the keys and values in a hash. 

---

### Assessment Review Process

When an instructor reviews a student's assessment the instructor is evaluating the work through the lens of the Dreyfus model of skill acquisition. The Dreyfus model describes how individuals progress through various levels in their learning process of new skills in the following levels: novice, advanced beginner, competent, proficient, expert. For this course students will be evaluated as novice, advanced beginner, or competent skill levels. Skill levels are not grades! Skill levels measure current understanding of a set of topics covered in class.

Assessments are expected to be completed on time. In the event of an emergency, a professional developer will communicate to the instructor and reestablish a deadline suitable to both parties. Assessments turned in late without communication will be evaluated at a lower level of skill acquisition.

### Incomplete

An assessment that is considered incomplete is one that did not meet the requirements of a valid attempt on every question. Incomplete assessments will not be reviewed and will be returned to the student for completion. Students with incomplete assessments will not be able access the next assessment until the current one is complete. An assessment will be considered incomplete due to the following:

- questions with no answer (excluding STRETCH options)
- no pseudo code when requested
- non-working code with no accompanying explanation

### Complete

An assessment that is considered complete is one that met the bare minimum requirements of a valid attempt on every question. An assessment that is considered complete did not display enough effort to reach the novice level of skill acquisition.

### Novice

The novice stage is the first level of skill acquisition. In the novice level, the student is just beginning to understand the skill and requires a step-by-step "recipe" to produce an output. An assessment that is considered at the novice level of skill acquisition is one that met the requirements of a valid attempt on every question while closely following process notes from class to produce:

- basic pseudo code
- code that will output content in the terminal
- "your answers" written in the student's own words
- researched answers written in the student's own words that provides additional context

### Advanced Beginner

The advanced beginner stage is the second level of skill acquisition. In the advanced beginner level, the student can begin to troubleshoot problems on their own and can decide if the "recipe" will be able to produce a particular outcome. An assessment that is considered at the advanced beginner level of skill acquisition is one that met the requirements of a valid attempt on every question while adapting process notes from class to produce:

- pseudo code with proper vocabulary terms
- code that will output correct content in the terminal
- "your answers" written in complete sentences the student's own words that provide partially correct comments
- researched answers written in complete sentences in the student's own words that provides additional context

### Competent

The competent stage is the third level of skill acquisition. In the competent level, the student can decide what information is relevant to solve the problem and can begin to create their own "recipe" to produce a particular outcome. An assessment that is considered at the competent level of skill acquisition is one that met the requirements of a valid attempt on every question while adapting process notes from class as well as from other resources to produce:

- detailed pseudo code with proper vocabulary terms
- code that will output correct content in the terminal following best practices
- "your answers" written in complete sentences the student's own words that provide correct answers
- well researched and detailed answers written in complete sentences in the student's own words that provides additional context
