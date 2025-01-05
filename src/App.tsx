import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="container p-4">
      <div>
        <h1 className="text-3xl font-600">Expense Tracker</h1>
      </div>
      <div>
        <Button>Add Expense</Button>
      </div>
    </div>
  );
}

export default App;
