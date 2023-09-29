
import './App.css';
import checkIcon from './assets/check.png'
import wrongIcon from './assets/cross-button.png'

function Card(props)
{
  let user= <p><img className="iconSpace" src={checkIcon} alt="checkicon" width={15} height={12}/>{props.user}</p>
  let storage= <p><img className="iconSpace" src={checkIcon} alt="checkicon" width={15} height={12}/>{props.storage}</p>
  let uprojects=<p><img className="iconSpace" src={checkIcon} alt="checkicon" width={15} height={12}/>Unlimited Public Projects</p>
  let caccess=<p><img className="iconSpace" src={checkIcon} alt="checkicon" width={15} height={12}/>Community access</p>
  let privatePro ;
  if(props.private) privatePro=<p><img className="iconSpace" src={checkIcon} alt="checkicon" width={15} height={12}/>Unlimited Private Projects</p>
  else privatePro=<p class="muted"><img className="iconSpace" src={wrongIcon} alt="wrongicon" width={15} height={12}/>Unlimited Private Projects</p>
  let phone;
  if(props.phone) phone=<p><img className="iconSpace" src={checkIcon} alt="checkicon" width={15} height={12}/>Dedicated Phone Support</p>
  else phone=<p class="muted"><img className="iconSpace" src={wrongIcon} alt="wrongicon" width={15} height={12}/>Dedicated Phone Support</p>
  let domain=props.domain
  if(props.domain) domain=<p><img className="iconSpace" src={checkIcon} alt="checkicon" width={15} height={12}/><b>{domain}</b> Free Subdomain</p>
  else domain=<p class="muted"><img className="iconSpace" src={wrongIcon} alt="wrongicon" width={15} height={12}/>Free Subdomain</p>
  let report;
  if(props.report) report=<p><img className="iconSpace" src={checkIcon} alt="checkicon" width={15} height={12}/>Monthly Status Reports</p>
  else report=<p class="muted"><img className="iconSpace" src={wrongIcon} alt="wrongicon" width={15} height={12}/>Monthly Status Reports</p>
  return(
    <div className="card">
        <div className="header"><p>{props.cardType}</p></div>
        <div className="price"><h1>{props.price}</h1></div>
        <hr/>
        <ul>
          <li>{user}</li>
          <li>{storage}</li>
          <li>{uprojects}</li>
          <li>{caccess}</li>
          <li>{privatePro}</li>
          <li>{phone}</li>
          <li>{domain}</li>
          <li>{report}</li>
        </ul>
      <button className="button">Button</button>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <div className="outerContainer">
        <Card cardType="F R E E" price = "$0/month" user="Single User" storage="50GB Storage"  private={false} phone={false} domain={false} report={false} />
        <Card cardType="P L U S" price = "$9/month" user="5 Users" storage="50GB Storage"  private={true} phone={true} domain={true}  report={false}/>
        <Card cardType="P R O" price = "$49/month" user="Unlimited Users" storage="50GB Storage"  private={true} phone={true} domain={true}  report={true}/>
      </div>
    </div>
  );
}
export default App;
