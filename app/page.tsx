import CreateNote from "./notes/CreateNote";
import AuthChecker from "./AuthChecker";
// import MostRecentJournal from "./journal/MostRecent";
import { getServerSession } from "next-auth";
// import AuthButton from "./AuthButtons";
import { authOptions } from "./api/auth/[...nextauth]/route";

async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <>
        <h1>PLEASE SIGN IN HERE</h1>
      </>
    );
  } else {
    return (
      <AuthChecker>
        <h1>HELLOOOOO</h1>
        {/* <MostRecentJournal /> */}
        <CreateNote />
      </AuthChecker>
    );
  }
}

export default HomePage;
