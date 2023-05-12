import { useState } from 'react';

const Profile = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Profile Us Page</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count
      </button>
    </div>
  );
};

export default Profile;
