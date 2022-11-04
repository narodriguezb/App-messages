import TaskList from "./components/Tasklist";
import Taskform from "./components/Taskform";



function MainApp() {
  return (
    <main className="bg-zinc-900 h-screen" >
      <div className="container mx-auto p-10">
      <Taskform />
      <TaskList />
      </div>
    </main>
  );
}

export default MainApp;
