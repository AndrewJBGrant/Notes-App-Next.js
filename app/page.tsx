import { UserButton } from "@clerk/nextjs";
import CreateNote from "./notes/CreateNote"


export default function HomePage() {
  return (
    <div className="border-4 border-indigo-500/100">
      <UserButton afterSignOutUrl="/" />

      <h1> HOME PAGE</h1>
      <p>
        Hello There, I am building a small app here to help with productivity
        and focus, You can create notes of what you worked on, make a to-do list
        and use a pomodoro timer to keep focused.
      </p>

      <CreateNote />
    </div>
  );
}
