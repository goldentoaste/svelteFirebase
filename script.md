
1. show setups first
2. introdcutions
    + brief self intro
    + agenda for the workshop
    + briefly show demo of final project
3. give context about tech stack
    + What is a tech stack
    + what front/backend mean?
    + explain that stacks can get real complex
    + introduce the stack we are using and why.
4. Clientside coding
    1. pull template repo
    2. install npm packages and vscode extensions
    3. run dev server and show what template already have
    4. briefly on file system routing
    5. in message page, do basic feature demo
        * file structure
        * variables
        * onclick event, and make change to state (reactivity)
        * conditional rendering, #if statement
    6. introduce components
        * show the kind of button we are making, the states needed
        * make a component button in message tab
        * write a button template
        * write button states adn apply to template
        * apply styles depending on state
        * export variables
        * `<slot/>` in button
        * bubble events
    7. make a input component
        * make the input bar and states needed
        * do conditional renders for the label
        * bind input variable to component variable
        * show variable changes bidirectionally
        * also show that exported variables can also be binded
    8. make post component
        1. First show locally the list of posts
        2. make post comp take in a post obj and render
        3. make button with display for number of likes
        4. test to see how it looks (just render a single post for now)
    9. for loop in main page
        * make a for loop in main page to render each posts
    10. back to post comp
        + add custom event for likes
        + add set to track liked ids
        + implement the like toggle now in main page
    11. the rest
        + make username field
        + bind to variable
        + make post content field, bind to variable
        + make button add new post to local
    12. transition
        + add transition for new posts.
    
5. Firebase stuff
    1. login to google's firebase console
    2. make new projects
    3. make new database
    4. talk about database structure
        + doc are like js objects, can have properties like usual, string, nums, arrays etc
        + docs can have many "collections" which is like a group of docs
        + show how you can use a path to access each doc or collection
    5. import db info into client side.

6. Client side firebase
    1. briefly on firebase js api
    2. implement each function and integrate.