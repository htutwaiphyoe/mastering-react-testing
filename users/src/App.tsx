import { useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <main className="grid gap-10 p-20">
      <UserForm
        onSubmit={(user: User) => setUsers((users) => [...users, user])}
      />
      <UserTable list={users} />
    </main>
  );
}

export default App;
