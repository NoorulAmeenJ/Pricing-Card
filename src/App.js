import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Card/>
        <Card/>
        <Card/>
    </div>
  );
}

function Card(){
  return(
      <div className="card">
        <div className="inside header">title</div>
        <div className="inside rate">amount</div>
        <hr></hr>
        <ul>
          <li>Single User</li>
          <li>5GB Storage</li>
          <li>Unlimited Public Projects</li>
          <li>Community Access</li>
          <li>Unlimited Private Projects</li>
          <li>Dedicated Phone Support</li>
          <li>Free Subdomain</li>
          <li>Monthly Status Reports</li>
        </ul>
        <button>Button</button>

        </div>
  )
}


export default App;
