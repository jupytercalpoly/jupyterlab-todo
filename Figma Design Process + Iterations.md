# **Early Sketches**
Quick sketches done on Procreate after conducting several user interviews with Jupyter users to understand what they pictured for the ToDo extension. All of the sketches implement a task nesting model. 

### 1. **First Version**

<img width="1922" alt="To_Do_UI 2" src="https://user-images.githubusercontent.com/83098854/130705495-ba7320e1-18a5-4d30-b799-1e2fe31bea84.png">

Implements the extension to live in the "main area" of the JupyterLab space relying on todo files as tabs on the top, allowing users to create and navigate around multiple files. The overall model follows top-level tasks, and subtasks are nested with partial completed icons for the users to know the progress of the task item. Completed subtasks were to move to the bottom and lower its opacity to 50% while moving the rest of the list towards the top prompting the users to focus on items at the top. This action was to act as a guide to infer items on the top of the list were uncompleted and needed to be focused on more.

### 2. **Second Version**

<img width="1801" alt="Version_2" src="https://user-images.githubusercontent.com/83098854/130706435-03f7c199-25a8-487f-aa71-682e130ae94c.png">

Like the first version, it implements multiple project tabs, but all project files are listed on top of each other based on the order of the project tab on the top of the screen. Subtasks have their own due dates inlined with each subtask. When subtasks are marked as complete, the due date is replaced with the date that the user completed the subtask. There is an edit button on the top of the right corner to allow users to customize their to do list. This option leads to the conversation of whether users will utilize this option to customize their to do list with colors or priority tags.

### 3. **Third Version**

<img width="1802" alt="Version_3" src="https://user-images.githubusercontent.com/83098854/130706970-7b87fcca-e692-4786-b702-d42198c5b620.png">

The most complex sketch with a side panel on the left side of the screen to help categorize the to do lists based on the file name (instead of a tab on the top of the screen) and tags. These tags would touch on multiple todo files. Still, users can mark a subtask with a tag labeling the type of subtask with labeling conventions like "research" or "code" to allow users more organization with their upcoming tasks.

This version also tracks the to do list based on the day and allows the user to look forward into the future to see what their upcoming tasks are for their convenience. Number tags show incompleted subtasks next to the top-level task to quickly alert the user how many tasks they need to complete. By numbering the open tasks, there are as the user works on their to do list, the number decreases giving users a sense of satisfaction knowing they are working on their tasks. 

# **First Figma Iteration**
After conversing with mentors and the rest of the development team, we decided it was best to go with the second version and move the extension as a side panel. The open drawer allows the extension to give users a companion program experience, with the main area free for users.
<img width="1435" alt="Iteration 1 Screens" src="https://user-images.githubusercontent.com/83098854/130708658-fd90efaf-a694-4959-b9e8-386cf0f1f85e.png">
Check out the Figma Prototype [**Here!**](https://www.figma.com/proto/vhdqgmt1q6FTqCe0KwP2ld/To-Do-UI?node-id=267%3A1589&scaling=contain&page-id=18%3A2&starting-point-node-id=267%3A1589)

# **Second Figma Iteration**
From rounds of user testing, the completed items move to the bottom of the screen to minimize clutter, while still allowing users to lookback and see the completed task items for a later use. Flagging and sorting is implemented in this interation with partial completion icons next to the the top level tasks. Sorting is based on the default nesting order and due date. The ability to add in task items "+ add task" moved to the top of the screen instead of the bottom to streamline the space. Two meta data fields are also added when users want to add in a task or subtask, like due dates with a calendar pop up screen and flagging. This iteration also shows how users can navigate through multiple to do files in a drop down and how to create a new to do file.

While meta data fields were further explored and implemented in this version the ability to color code wasn't seen favorably and let go.

<img width="1280" alt="Iteration 2 Screen" src="https://user-images.githubusercontent.com/83098854/130710316-f26fc6ed-b191-4baf-9cdd-d8dbf3e2e485.png">

###### Example of one of the screens from this iteration's prototype.

Check out the Figma Prototype [**Here!**](https://www.figma.com/proto/vhdqgmt1q6FTqCe0KwP2ld/To-Do-UI?node-id=38%3A36&scaling=contain&page-id=18%3A3&starting-point-node-id=38%3A36)

# **Third Figma Iteration**
The most recent version of the to do extension with the most up to date features. Individual completed items don't move to the bottom unless all of the subtasks and parent task are completed. The number tags indicate how many subtask items are incompleted and open. The menu panel has been updated to allow users to either Sort the list by default (my order) and due date, View the list by flagged tasks, and Edit the list by either renaming or dismissing the list altogether.

![Iteration 3 Screen](https://user-images.githubusercontent.com/83098854/130711239-161c00d7-5707-43c2-b391-e5ef0ac43262.png)
###### Example of one of the screens from this iteration's prototype.

Check out the Figma Prototype [**Here!**](https://www.figma.com/proto/vhdqgmt1q6FTqCe0KwP2ld/To-Do-UI?node-id=194%3A840&scaling=contain&page-id=194%3A836&starting-point-node-id=194%3A840)
