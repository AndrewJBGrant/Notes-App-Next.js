import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />

      <h1>HOME PAGE</h1>
      <p className="text-1xl text-center">
        Hello There, I am building a small app here to help with productivity
        and focus, You can create notes of what you worked on, make a to-do list
        and use a pomodoro timer to keep focused.
      </p>
    </div>
  );
}
