import { useState } from 'react';

function Profile() {
  const[count,setCount] = useState(0)
  const handleButtonClick = (user) => {
    alert(`Welcome ${user}`);
  }

  const handleIncrementClick = () => {
    setCount( () => count+1 )
  }
  
  return (
    <div className="container">
      <h1>WELCOME</h1>
      <ProfileCard 
        name="Hamid Hussain"
        age={22}
        greeting={
          <div>
            <strong>WELCOME TO REACT</strong>
          </div>
        } 
      >
        <p>football, cricket, hockey</p>
        <h3>{count}</h3>
        <button className="btn" onClick={() => handleButtonClick('Hamid') }>Click Now</button>
        <button className="btn" onClick={handleIncrementClick}>Increment</button>
      </ProfileCard>
    </div>
  );
}

export default Profile;

function ProfileCard(data) {
  const { name, age, greeting, children } = data
  return (
    <div className="profile-card">
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </div>
  );
}
