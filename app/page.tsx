import CreateNote from "./notes/CreateNote";
import AuthChecker from "./AuthChecker";
import MostRecentJournal from "./journal/MostRecent";

async function Page() {
  return (
    <AuthChecker>
      <MostRecentJournal />
      {/* <CreateNote /> */}
    </AuthChecker>
  );
}

export default Page;
