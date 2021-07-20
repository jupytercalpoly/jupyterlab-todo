// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export interface ITask {
  task: string
  id: number
  subtasks: ISubtask[],
  done: boolean
}

export interface ISubtask {
  subtask: string, 
  id: number, 
  parentId: number,
  done: boolean
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  expanded: {},
  content: {
    '&$expanded': {
      marginBottom: 0,
    },
  },
}));

//TODO: decouple elements of the TODO center, consider using something else than Material UI accordion
//TODO: consider not using Material UI
export function TodoCenter() : JSX.Element {
  let [taskTextInput, setTaskText] = useState<string>("");
  let [subtaskTextInput, setSubtaskText] = useState<string>("");
  let [tasks, setTasks] = useState<ITask[]>([]);

  const classes = useStyles();

  let handleTaskChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTaskText(e.currentTarget.value);
  };

  let handleSubtaskChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSubtaskText(e.currentTarget.value);
  };

  let handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks([...tasks, {
      task: taskTextInput, 
      id: Date.now(), 
      subtasks: [],
      done: false
    }]);
    e.currentTarget.reset();
  };

  let handleSubtaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let curTasks = [...tasks];
    let i = curTasks.findIndex(task => task.id === parseInt(e.currentTarget.id));
    curTasks[i].subtasks.push({
      subtask: subtaskTextInput, 
      id: Date.now(), 
      parentId: curTasks[i].id,
      done: false
    })
    setTasks(curTasks);
    e.currentTarget.reset();
  };

  let toggleTask = (e: React.FormEvent<HTMLInputElement>) => {
    let curTasks = [...tasks];
    let i = curTasks.findIndex(task => task.id === parseInt(e.currentTarget.id));
    curTasks[i].done = !curTasks[i].done;
    if (curTasks[i].done) {
      curTasks[i].subtasks.map(function(subtask) {
        subtask.done = true;
        return subtask;
      })
    }
    setTasks(curTasks);
  }

  let toggleSubtask = (e: React.FormEvent<HTMLInputElement>) => {
    let curTasks = [...tasks];
    let i = curTasks.findIndex(task => task.id === parseInt(e.currentTarget.id.split('-')[0])); //parent id
    let curSubtasks = [...curTasks[i].subtasks];
    let j = curSubtasks.findIndex(subtask => subtask.id === parseInt(e.currentTarget.id.split('-')[1])); //id
    curSubtasks[j].done = !curSubtasks[j].done;
    curTasks[i].subtasks = curSubtasks;
    setTasks(curTasks);
  };

  return (
    <div>
      <div>
        {tasks.map((task: ITask) => ( 
          <div className={classes.root} key={task.id}>
            {/* bool defaultExpanded below controls default state of accordion */}  
            <Accordion defaultExpanded={true} elevation={0}>
                <AccordionSummary
                  classes={{ content: classes.content, expanded: classes.expanded }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-label="Expand"
                  aria-controls="additional-actions1-content"
                  id="additional-actions1-header"
                >
                  <FormControlLabel
                    aria-label="Acknowledge"
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={<Checkbox 
                      checked={task.done} 
                      id={task.id.toString()} 
                      onChange={toggleTask}/>}
                    label={
                      <div
                        style={{
                          textDecoration: task.done ? "line-through" : "none",
                          color: task.done ? "grey" : "black"
                        }}
                      >
                        {task.task}
                      </div>
                    }   
                  />
                </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary" component={'span'}>
                  <Box pl={4}> 
                    {task.subtasks.map((subtask: ISubtask) => ( 
                      <div className={classes.root} key={subtask.id}>
                          <Accordion defaultExpanded={false} elevation={0}>
                              <FormControlLabel
                                aria-label="Acknowledge"
                                onClick={(event) => event.stopPropagation()}
                                onFocus={(event) => event.stopPropagation()}
                                control={<Checkbox 
                                  checked={subtask.done} 
                                  id={'' + subtask.parentId + '-' + subtask.id} 
                                  onChange={toggleSubtask} 
                                />} 
                                label={
                                  <div
                                    style={{
                                      textDecoration: subtask.done ? "line-through" : "none",
                                      color: subtask.done ? "grey" : "black"
                                    }}
                                  >
                                    {subtask.subtask}
                                  </div>                
                                }
                              />
                          </Accordion>
                      </div>
                    ))}
                    <div>
                      <form method="post" id={task.id.toString()} onSubmit={handleSubtaskSubmit}>
                        <input type="text" placeholder="+ Add Subtask" onChange={handleSubtaskChange} />
                      </form>
                    </div>
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
      <div>
        <form method="post" onSubmit={handleTaskSubmit}>
          <input type="text" placeholder="+ Add Task" onChange={handleTaskChange} />
        </form>
      </div>
    </div>
  );
}