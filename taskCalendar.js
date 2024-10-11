let day = prompt("'Monday', 'Friday'");

day = day.toLowerCase();

switch (day) {
    case "monday":
        console.log("Task for Monday: Team meeting at 10 AM.");
        break;
    case "tuesday":
        console.log("Task for Tuesday: Work on project development.");
        break;
    case "wednesday":
        console.log("Task for Wednesday: Review code and documentation.");
        break;
    case "thursday":
        console.log("Task for Thursday: Client call at 3 PM.");
        break;
    case "friday":
        console.log("Task for Friday: Submit project updates.");
        break;
    case "saturday":
        console.log("Task for Saturday: Attend workshop.");
        break;
    case "sunday":
        console.log("Task for Sunday: Plan the week ahead.");
        break;
    default:
        console.log("Invalid day entered. Please enter a valid day of the week.");
}