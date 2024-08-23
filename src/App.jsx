import { Main } from "./Components/main/Main";
import { Sidebar } from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <Main />
      </main>
    </>
  );
}

export default App;
