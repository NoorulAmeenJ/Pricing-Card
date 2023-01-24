import logo from './logo.svg';
import './App.css';

function App() {
  let values = [ 
    {
             item: "Free",
             amount: "$0",
             user: "✔Single User",
             storage: "✔5GB Storage",
             public: "✔Unlimited public Projects",
             community:"✔Community Access",
             private: "❌Unlimited Private Projects",
             phone: "❌Dedicated Phone Support",
             domain: "❌",
             report: "❌Monthly Status Reports"
    },
    {
      item: "PLUS",
      amount: "$9",
      user: <b>✔5 Users</b>,
      storage: "✔50GB Storage",
      public: "✔Unlimited public Projects",
      community:"✔Community Access",
      private: "✔Unlimited Private Projects",
      phone: "✔Dedicated Phone Support",
      domain: "✔",
      report: "❌Monthly Status Reports"
},
{
  item: "PRO",
  amount: "$49",
  user: <b>✔Unlimited Users</b>,
  storage: "✔150GB Storage",
  public: "✔Unlimited Pubc Projects",
  community:"✔Community Access",
  private: "✔Unlimited Private Projects",
  phone: "✔Dedicated Phone Support",
  domain: <b>✔Unlimited</b>,
  report: "✔Monthly Status Reports"
}
  ]
  return (
    <div className="App">
      {values.map( (eachone,id) =>(
        <Card item={eachone.item} 
        amount={eachone.amount} 
        user={eachone.user}
        storage={eachone.storage}
        public={eachone.public}
        community={eachone.community}
        private={eachone.private}
        phone={eachone.phone}
        domain={eachone.domain}
        report={eachone.report}
         />
      ) )}
        
       
    </div>
  );
}

function Card(props){
  return(
      <div className="card">
        <div className="inside header">{props.item}</div>
        <div className="inside rate"><b> {props.amount}</b>/month</div>
        <hr></hr>
        
          <p>{props.user}</p>
          <p>{props.storage}</p>
          <p>{props.public}</p>
          <p>{props.community}</p>
          <p>{props.private}</p>
          <p>{props.phone}</p>
          <p>{props.domain}Free Subdomain</p>
          <p>{props.report}</p>
      
        <button>Button</button>

        </div>
  )
}


export default App;
