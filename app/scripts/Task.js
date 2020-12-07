const electron = require('electron');
const path = require('path');

class Task {
  constructor(info) {
    //tags for tasks
    //scheduleTypes = ['scheduled','unscheduled'];
    //taskTypes = ['timed','stepped'];
    //completionTypes = ['whole','part','step'];
    //task data
    this.title = info.title;
    this.recurring = recurring;
    this.recurringType = "monthly";
    this.scheduled = true;
    this.dueDays = dates;
    this.daysPerWeek = dpw;
    this.taskType = 'timed';
    this.taskTime = time;
    this.taskType = 'stepped';
    this.StepsDone = steps;
    this.completionType = 'whole';
    this.completed = false;
    this.reqSteps = req;
  }
}
