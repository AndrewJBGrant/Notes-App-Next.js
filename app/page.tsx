
import { getServerSession } from "next-auth";
import CreateNote from "./notes/CreateNote"
import { redirect } from "next/dist/server/api-utils";
import AuthChecker from "./AuthChecker";



export default async function HomePage() {
const session = await getServerSession();

console.log(session,"session on the home page")

if(session) {
  return <>Sign in to continue!</>;
} else {




  return (
    <AuthChecker>
    <div className=" justify-center p-8">

<h2>Hello there</h2>

      <CreateNote />
    </div>
    </AuthChecker>
  );
}
}
