# **FP4 \- Final Project Writeup**

## Part 1: Website Description

* What is the purpose of your website?   
* Who is the target audience?  
* What information do you convey with your website?   
* How is it interesting and engaging? 

* The purpose of my website is to serve as the front end of a tool which uses Gen AI to create a recipe interface that allows users to edit the recipe via an “edit mode.”  In a fully fleshed out version of the application, users may change the following things about their recipe: calories, serving size, and ingredients (replace/delete.)

* The website seeks to convey recipes in a very organized manner. It also seeks to convey how users may be creative with their cooking by changing ingredients and experimenting. 

* I tried to make my website engaging by incorporating micro animations and a branding resembling cooking motifs. The idea of designing your own recipes has been interesting to users in my testing. 

* *The target audience are those who cook a lot and often want to edit their recipes, but struggle to do so. This may include people who are very health-conscious and want more nutrition in their recipe, people who have allergies and can’t eat certain ingredients, or even people who do not have a certain ingredient on hand


## Part 2: User Interaction

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

1. Interaction type. Click on X on page Y / scroll on page X, etc.  


1. Landing page: Starting a recipe. Interaction: type in a recipe to the form in the landing page and click on the search button (button with airplane)
2. Landing page. Choosing a recipe. Prepopulated prompts: select one of the recipe suggestions (test using the first option)
3. Landing page / recipe page: Open the menu. (Actually going to saved recipes is a feature for the future)
4. Recipe page: Turn on edit mode. Interaction: Press on edit mode. 
4. Recipe page: Replace an ingredient. Interaction: Press on replace icon. Click No. (replacing ingredient is a future feature)
5. Recipe page: Remove an ingredient. Interaction: Press on remove icon. Click Yes - remove ingredeint. 
6. Recipe page: Bookmark a recipe. Interaction: Press save recipe icon. Notification pops up saying that recipe was saved/is already saved. This saves recipe to an array. 
7. Menu toggle: Press hamburger menu to toggle on/off.


## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. Name of tool1: Javascript library Lottie
   * Why did you choose to use it over other alternatives? (2 sentences max)  
   * How you used it? (2 sentences max)  
   * What does it add to your website? (2 sentences max)  

    * I chose Lottie for my loading animation over other libraries because I liked the range of animations they offered and I could customize each to fit my application’s branding. 
    * I imported the lottie library into my loading screen’s html, downloaded the animation’s JSON file into the assets folder in my project, and called a function to play the animation in my loading.js file.
    * Lottie adds a bit of fun interaction and believability, since gen AI results take some time to load and don’t just appear instantaneously. 


## Part 4: Design Iteration

Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)

I had three major rounds of iterations and revisions for my prototype.

* Round one: I changed how users were onboarded onto the application, providing users a lot more guidance and information about what they could do. 
* Round two: When on the recipe page, I tried to increase user control over how much information they saw at one time by creating an “edit mode” from which they could make changes to their recipe. 
* Round 3: I ensured that users always had feedback after creating an action, such as replace or remove an ingredient. I also placed a modal screen that appeared after a user chose an action to confirm a decision and avoid any accidental mistakes. 

## Part 5: Implementation Challenge

What challenges did you experience in implementing your website? (2-4 sentences max)

* I really struggled with making my website responsive to different screen sizes. Initially, I wanted to make my site responsive for mobile, iPad, and desktop resolutions. However, I began to struggle with text/image sizes and just decided to simplify to two different screens.
*  Another thing I struggled with was keeping my code clean and organized, at times I found my code becoming repetitive. Even now looking back, I wish that I had been more strategic with some of my naming conventions for classes. 


## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).

* I used chatgpt and perplexity AI. I used chat gpt to find out what steps I needed to incorporate into functions, to ask about how to organize files within my project, how to make code more accessible, and to get help with fixing bugs. I used Perplexity AI to find a good JS library to use for micro animations. 
* Gen AI helped me a lot with accessibility features. Any code that Gen AI suggested I reviewed carefully, line by line to ensure that the algorithm was actually understanding my final goal. Sometimes I asked ChatGPT to refine the code itself telling it what to modify and other times I did it myself. 
* I was surprised by how much Gen AI was able to help me. I did not expect to use Gen AI as much as I did because I did not use it for my homeworks previously. The benefits I found from using Gen AI were that it allowed me to consider creative ways of coding things that I would not have thought about before. I also really liked using chatGPT to help me think through how I wanted to code things. I found that this sped up the process a lot.
Prompts and chat history links if applicable. 
* Prompts: 
--> "What is the best way to style a button that has images inside of it?"
--> "Why is my media query not working?"
--> “Please tell me the most efficient way to implement functionality so that when an edit button/icon is clicked, new icons show up and there is a highlight around things that are editable”
-->  “Why is my list item <span> not wrapping around the text, but around the whole <div>? Please help debug.”
-->  ““What does ‘an event handler may not be accessible’ mean?” / “My web page needs more accessible input modes. How can I improve my code?” 
--> "What is an ARIA landmark?"
--> “What are some JS libraries I can use for micro animations?”
-->  “What is a JS library I can use to create a hamburger menu?”
-->  “Why is my <ol> list not showing any numbers?”
--> "Please help explain what are the benefits of using rem instead of px?"
--> "Please give me the code for an label box with a a label inside the box?"

### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| ChatGPT | Usage | No | No | Yes/No | Yes | Yes |
| ChatGPT | Productivity | n/a | n/a | 1 | 4 | 7 |
| Perplexity | Usage | Yes | Yes | No | No | No |
| Perplexity  | Productivity | 3 | 3 | n/a | n/a | n/a |


### Usage Reflection

> Impact on your design and plan 
* I will be answering the below for ChatGPT because I used that tool much more. 

* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. ChatGPT: It was actually able to help me see bugs in my code, something I did not expect. For example, at times I really was struggling to find an error - and I described step by step what I did up to that point to ChatGPT. ChatGPT listed potential sources of error in order from likelihood. I was able to check the list in order to find where my bug was. 
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. N/A: ChatGPT matched my expecations. 
* GenAI tool did/did not influence my final design and implementation plan because … For example, 
  1. ChatGPT: ChatGPT did influence my final design and implementaiton plan by helping my realize that some features are actually a lot easier to implement than what I had imagined. For example, I thought that adding a microinteraction would be too hard, but by leveraging a library it actually was not.

> Use patterns
* I accepted the generations when …  For example, 
  1. ChatGPT: this tool once suggested that I edit my buttons and heading strcutures to be more accessible. I adjusted my design according to the suggestion because I knew it was the necessary step - I had overemphasized style over accessibility and left some accessibility features off.  
* I critiqued/evaluated the generated suggestions by … For example, 
  1. ChatGPT: this tool once suggested that I combine my classes to reduce redundant codebut I modified/rejected the suggestion because I want to scale my app and knew that I wanted to keep my classes seprated intentionally. 


> Pros and cons of using GenAI tools
* Pros
  1. ChatGPT: Move fast by getting help structuring the code you want to implement. Check to see deep understanding of the benefits of certain decisions in the code. 
* Cons
  1. ChatGPT: Often, GenAI didn't understand intent and strategy with your project (because I didn't share it). Thus, the tool was better for small questions where I wanted help getting a concept explained or examples of code, rather than larger questions about how to structure code that was interdependent on other code in my project.



### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

1. [ChatGPT](https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq) / [Gemini](https://support.google.com/gemini/answer/13743730?hl=en&co=GENIE.Platform%3DDesktop): share the anonymous link to all of your chat histories relevant to this project
2. [GitHub Copilot (VSCode)](https://code.visualstudio.com/docs/copilot/copilot-chat#:~:text=You%20can%20export%20all%20prompts%20and%20responses%20for%20a%20chat%20session%20in%20a%20JSON%20file%20with%20the%20Chat%3A%20Export%20Session...%20command%20(workbench.action.chat.export)%20in%20the%20Command%20Palette.): export chat histories relevant to this project.

---

1. https://chatgpt.com/c/6730eb0f-8d1c-800a-b52c-9c036c6b3c83 // Getting sample code for a form
2. https://chatgpt.com/c/6734e5c2-7cac-800a-a63e-53706cd41a52 // Styling a button
3. https://chatgpt.com/c/673ea94a-31fc-800a-a4b8-f658fbe6985e // Library to create a menu
4. https://chatgpt.com/c/675310f5-87b0-800a-8110-0fb7a16356b3 // Help with responsive design
5. https://chatgpt.com/c/675790a8-4db4-800a-aa40-025dc06d5b55 // Help with accessible design
6. https://chatgpt.com/c/67579118-baa8-800a-966a-d26a532bb5cf // Help with coding an edit state with JS, HTMl, CSS


# **FP2 \- Evaluation of the Final project**

## Project Description

My project is a web app that uses LLM to create a recipe that users can interact with on the screen. 

## High-Fi Prototypes

### *Prototype 1*

![Landing for Sabor.ai](images/FP2_prototype1.png)

Description: This is the landing page for my prototype - the page where users will learn about the app and get inspiration for the type of recipe they want to create.

Feedback Summary: It's not clear what a user can do on this page, and the instructions are shaped like disabled buttons. It seems like too much information at once.

//A brief description and summary of the user feedback (\<100 words, 2 images) 

### *Prototype 2*
![Recipe page for Sabor.ai](images/FP2_prototype2.png)

Description: This is the UI for a recipe. From here, a user can edit the serving size, calorie per serving, and the ingredients. For the purpose of my project, a user will be able to remove an ingredient from the recipe and receive a new recipe.

Feedback Summary: Users could not tell what was clickable -- no one had a mental model where you can edit a recipe from the recipe itself. As such, users were shocked to see what they could do on this UI. 

## Usability Test

Discuss the user feedback you got during the evaluation / usability test (\~300 words). Indicate which feedback you implemented, inspired new directions, or otherwise influenced your final design. 

Three large insights from my usability test:

1) Insight: Users were constantly surprised about what they could do on each screen 
   
   Implication: Set clear expectations for functionality of the application, and enhance affordances for interactable components on each page
   
   Design change: On the home page, (1) I included instructions as to what users can do on the page, broken down by numbered steps (2) I made sure that buttons had the right contrast and that the visual language of each button signified their state (active or inactive). On the recipe page, I ()

2) Insight: Users felt like the application couldn’t be fully trusted to create a strong recipe and update it to reflect their inputs, such as changing an ingredient

    Implication: Show the user that the recipe is being created thoughtfully, and provide more feedback that the app is doing what they want

    Design change: Include interactions that show how a recipe is generated, and for every change that users make to the recipe, highlight the implemented changes


3) Insight: Users felt like every page had too much information and felt overwhelmed to the point where they did not want to use the app anymore

    Implication: Reduce cognitive load for the user at any given point in the flow

    Design change: Break down information through the use of space and instruction. Further, instead of giving users all of the information at once, allow them to expand information to control how much they see at a time


## Updated Designs

![Prototype 1 Update](/images/FP2_prototype1.2.png) 

Summary: Reflects changes in user instruction, updates in accessibility (contrast increased for buttons), and enhanced affordances for buttons.

![Prototype 2 Update](/images/FP2_prototype2.2.png) 

Summary:  Reflects changes in the affordances provided for buttons - now they have a textbox to indicate that they are clickable and are in a different color. Also added in an icon to each recipe ingredient to show that the ingredient is editable. 

## Feedback Summary

Summarize the feedback you received in the lab session and discuss how it influenced your design (\~300 words). 

The feedback that I received in the lab session is to ensure that I am using data that will simulate AI generated data so as to make the application believable and scalable for a future integration with an LLM API. Further, I also received instruction to not make my usability testing script too simple so as to not give users too much instruction. 

## Milestones

Outline weekly milestones to plan your expected implementation progress until the end of the semester (\~300 words). 

### *Implementation Plan*

- [ ] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
  
- [ ] Week 10 Nov 4 \- Nov 8:  Planning and Landing Page

       [ ] Start up
            Set up the project repository and version control 
            List all requirements to create the application's flows

        [ ] HTML
            Create a basic HTML structure for the home page

        [ ] CSS
            Set up CSS file
            Style basic layout and typography
            Implement button click functionality
            Create button element + Style button
        
- [ ] Week 11 Nov 11 \- Nov 15:  Recipe Generation
       [ ]  Start up
            Set up development environment
        
       [ ]  Implement preset recipe data structure
            Create a JavaScript file to store preset recipes
            Build the recipe structure as shown in the recipe UI 
        
        [ ] Create recipe generation function
            Implement a function that selects a recipe from preset data
            Test the function to ensure it works correctly
        
       [ ]  Connect button to recipe generation
            Add event listener to button
            Call recipe generation function on click

- [ ] Week 12 Nov 18 \- Nov 22: Recipe Generation + Editing 

         [ ]Create recipe display component
            Design layout for recipe display
            Implement component structure to show recipe name, ingredients, and instructions
        
        [ ] Render recipe data
            Parse and display selected recipe information
        
         [ ]Ingredient removal UI
            Create remove buttons for each ingredient
            Style ingredient list
        
         [ ]Implement ingredient removal logic
            Create a function to update recipe by removing an ingredient
            Update recipe state on ingredient removal

- [ ] Week 13 Nov 25 \- Nov 29: Recipe Update + Refinement
         [ ]Refine recipe update functionality
            Ensure the update_recipe function works correctly with the preset data

        [ ] Implement UI update after ingredient removal
            Update the displayed recipe when an ingredient is removed
            Ensure smooth transition and clear user feedback

        [ ] Add loading states and error handling


  - [ ] Thanksgiving  
- [ ] Week 14 Dec 2 \- Dec 6:  
        [ ] Conduct flow testing
            Test recipe generation flow
            Test ingredient removal flow

        [ ] Perform accessibility checks
            Test with screen readers
            Fix identified issues

        [ ] Resolve any bugs found during testing
            Cross-browser testing
            Test on different browsers and devices

### *Libraries and Other Components*

List the JS libraries and other components (if applicable) that you plan to use. 
* JS Libraries I plan to use:
    - A graphics library such as p5.js that allows developers to make very interactive experiences
    - A library that helps with data fetching, such as React Query
    - An input library to get user input such as React Select


## Generative AI Use Plan

Outline how you plan to use Generative AI tools to aid in the implementation (\~300 words).

### *Tool Use*

 What would you use? Edit the list given your plan. For each tool, explain briefly on what do you expect Generative AI to help you with and what might it not be able to help you with.

* ChatGPT + Perplexity.ai
  * I intend to use the above tools to guide me on how to:
    - best structure my code based on my goal to later integrate the app with an API
    - guide me on how to create reusable code to later scale the app's functionality
    - select libraries that work to create the animations I want to include
    - debug problem areas that I am stuck on
    - consider accessibility guidelines at every step of my design
    - consider how to best structure my workflow prioritization to be efficient in my development
  * I will not use the above tools for creating actual code to implement because: 
    - it will not help build a strong, scalable foundational base code for my application
    - I believe it will limit my creativity when problem solving because it might discourage me to explore with novel, creative interaction patters

### *Responsible Use*

How would you use Generative AI responsibly? 
* By citing how Gen AI supported my code development and using AI to ensure my design is inclusive and accessible. 


# FP1 - Proposal for Critique

What is the basic idea of the final project?

    1. Idea 1:
    The main purpose of the app is to help users find and modify recipes to best tailor their preferences and nutritional needs.

    /Users/ashs/Documents/GitHub/pui-homework-template/final-project/Idea-1.png

    The end goal is to create an interactive interface that simulates the use of AI to:
    (1) load a recipe from a home page 
    (2) allow the user to substitute/remove an ingredient from a recipe and 
    (3) allow the user to visualize the nutritional content of their recipe. 

    2. Idea 2:

    The main purpose of this project is to automate the updating of events for a non-profit’s Squarespace site. 

    The end goal would be to (1) create a template for the non-profit to input an image, time, copy, etc. and have that event auto-populate on their website (2) create a page that shows an overview of the events and (3) create a page that shows a detail of the event and allows the user to sign up for it. 

    /Users/ashs/Documents/GitHub/pui-homework-template/final-project/Idea-2.png

    3. Idea 3:

    The main purpose of this project is to make my portfolio more scannable, interactive, and overall fun to use. 
    The end goal is to create (1) interactive project cards on the home page, (2) a feature with which to filter and sort projects and (3) a way to navigate through a project quickly. 

    ![Idea 3](Idea-3-1.png)

How you plan to make your design interactive and engaging.
    I plan to make my design interactive and engaging through microinteractions such as button animations, animated transitions, and interactive icons. 

How you plan to make your design accessible.
    I plan to make my design accessible by ensuring that my application's contrast, text and typography, and navigation are accessible. As a way to ensure I will ensure that my application is compliant with WCAG guidelines. 

What information do you specifically want to convey and include on your website.
    (Idea 1) The information I want to convey includes a recipe, its nutrition content, and alternative ingredients. 
    (Idea 2) The information I want to convey includes event date/times, images, map location, and descriptions. 
    (Idea 3) The information I want to convery includes the content of my portfolio projects displayed through microinteractions. 

On 0.5 pages (~300 words), summarize all the critiques you received during the lab session. 
    (Idea 1) For Idea 1, the feedback I received revolved around ensuring that the data I use for my design is of high-quality. Other people in my lab shared that they would use a product such as this. The other piece of key feedback revolved around scoping this application correctly - defining what is a "must-have" and what is a "nice-to-have"
    (Idea 2) The feedback revolved around the possibility that this automation project might not focus on the user experience, but rather on backend API calls. 
    (Idea 3) Feedback is to consider how Webflow (where my portfolio is currently hosted) does not 


Add 0.5 pages (~300 words) that digest the feedback you got in the lab. Indicate on which critique you will act on in your next design and why you chose to incorporate/dismiss pieces of critique.
    (Idea 1) I will act on the critiques for my first idea. The critique/advice revolved around (1) using data that is realistic to create an application simulating the use of an LLM to function and (2) Ensuring that the project is scoped correctly to be feasible. 

    Feedback 1, using realistic data, will set up the application to be scaled and integrated with an LLM in the future. By incorporating realistic data, the simulation would appear more believable and align with the expectations of users who are increasingly familiar with AI-driven applications. Realistic data will also enhance user experience by providing a deeper level of engagement and will demonstrate the viability of integrating LLMs in future versions. 

    Feedback 2, ensuring that the flows I will develop are scoped correctly, will also be essential since each flow is complex. By defining a clear scope, I can prioritize the most critical aspects, such as user interaction patterns and realistic simulated responses, while allowing for potential expansions with an LLM API. A clear scope will allow the design of my application to feel robust and intentional, balancing functionality with development constraints.