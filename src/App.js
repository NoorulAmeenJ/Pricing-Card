import logo from './logo.svg';
import './App.css';

function App() {
  let values = [ 
    {
             item: "Free",
             amount: "$0/month",
             user: "Single User",
             storage: "5GB Storage",
             public: "Unlimited Public Projects",
             community:"Community Access",
             private: "Unlimited Private Projects",
             phone: "Dedicated Phone Support",
             domain: "Free Subdomain",
             report: "Monthly Status Reports"
    },
    {
      item: "PLUS",
      amount: "$9/month",
      user: "5 Users",
      storage: "50GB Storage",
      public: "Unlimited Public Projects",
      community:"Community Access",
      private: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Reports"
},
{
  item: "PRO",
  amount: "$49/month",
  user: "Unlimited Users",
  storage: "150GB Storage",
  public: "Unlimited Public Projects",
  community:"Community Access",
  private: "Unlimited Private Projects",
  phone: "Dedicated Phone Support",
  domain: "Free Subdomain",
  report: "Monthly Status Reports"
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
        <div className="inside rate"><h1> {props.amount}</h1></div>
        <hr></hr>
        <ul>
          <li>{props.user}</li>
          <li>{props.storage}</li>
          <li>{props.public}</li>
          <li>{props.community}</li>
          <li>{props.private}</li>
          <li>{props.phone}</li>
          <li>{props.domain}</li>
          <li>{props.report}</li>
        </ul>
        <button>Button</button>

        </div>
  )
}


export default App;
