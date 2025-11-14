import Calendar from "./components/calendar/Calendar";

function App() {
  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <div className="flex flex-row items-center gap-6">
        <Calendar date="06/16/2000" />
      </div>
    </main>
  );
}

export default App;
