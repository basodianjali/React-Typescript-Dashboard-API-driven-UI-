import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <header className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-semibold">React TS Dashboard</h1>
      </header>

      <main className="flex-1 max-w-4xl mx-auto p-6">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;