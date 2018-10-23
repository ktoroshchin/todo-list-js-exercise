// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    completeTask: function() {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState(task1)
task1.completeTask(task1)
task1.logTaskState(task1)


console.log(tasks);
// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }
//
// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }
//
// // DRIVER CODE BELOW
//
// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1
// newTask("Finish TODO LIST"); // task 2
//
// logTaskState(1); // Clean Cat Litter has not been completed
// completeTask(1);
// logTaskState(1); // Clean Cat Litter has been completed
