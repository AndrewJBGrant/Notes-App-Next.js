
import { getServerSession } from "next-auth";
import CreateNote from "./notes/CreateNote"
import { redirect } from "next/dist/server/api-utils";


export default async function HomePage() {
const session = await getServerSession();

if(!session) {
  return <>Sign in to continue!</>;
}




  return (
    <div className=" justify-center p-8">


      <p>
       23/08/2023
       Today I will get back into the app <br></br>
       Hopefully organise the layouts and make it flexible
      </p>

      <CreateNote />
    </div>
  );
}
