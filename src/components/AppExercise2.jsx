import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function App() {
  // Step 1: Create a state named users and set empty array as default value

  useEffect(() => {
    const fetchAPI = async () => {
      // Step 2: Use fetch function to request data to API from jsonplaceholder
      // GET: https://jsonplaceholder.typicode.com/users
      // Step 3: After getting data from API, update state users with the coming API data
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

  return (
    <div className="container">
      <h1>Users</h1>

      {/* Step 5: Use curly bracket to put the user cards */}
      {/* Step 6: Update UserCard component to receive a user prop => (Go to UserCard.jsx)*/}
      <UserCard user={mockUser} />
      <UserCard user={mockUser} />
      <UserCard user={mockUser} />
    </div>
  );
}

export default App;
