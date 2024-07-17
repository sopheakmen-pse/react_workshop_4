import { useEffect, useState } from "react";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import UserCard from "./UserCard";

function App() {
  // Step 1: Create a state named users and set empty array as default value
  const [users, setUsers] = useState([]);

  // const users = [];

  useEffect(() => {
    const fetchAPI = async () => {
      // Step 2: Use fetch function to request data to API from jsonplaceholder
      // GET: https://jsonplaceholder.typicode.com/users
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      // Step 3: After getting data from API, update state users with the coming API data
      setUsers(data);
    };

    fetchAPI();
  }, []);

  // Finally, delete mockUser from the component
  const mockUser = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
  };

  // Step 4: Use array map function to build UserCards and store to a variable named content
  // Hint: [{user1}, {user2}, {user3}] => [<UserCard />, <UserCard />, <UserCard />]
  const content = users.map((user) => <UserCard key={user.id} user={user} />);

  return (
    <Theme>
      <div className="container">
        <h1>Users</h1>

        {/* Step 5: Use curly bracket to put the user cards */}
        {/* Step 6: Update UserCard component to receive a user prop => (Go to UserCard.jsx)*/}
        {content}
      </div>
    </Theme>
  );
}

export default App;
