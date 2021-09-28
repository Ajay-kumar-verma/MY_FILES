import {BrowserRouter as Router ,Route,NavLink,Switch,useParams,Redirect} from 'react-router-dom'
import './style.css';
const Routing=()=>{
return(<>
   <Router>
    <h1>This is Router pages !</h1>  
    <br/>

   <Switch>
   <Route path="/" exact component={Home} />
   <Route path="/login" exact component={Longin} />
   <Route path="/signup" exact component={SignUp} />
   <Route path="/main"  exact component={Main} />
   {/* <Route component={Error} /> */}
   {/* <Redirect to="/" />  */}
   {/* this is use for routing  */}
   </Switch>

  <p></p>
  <NavLink  exact activeClassName="link"   to={`/`}>
      <button>HOME </button>
  </NavLink>

  <NavLink exact activeClassName="link"  to={`/login/:name`}>
      <button>LOGIN </button>
  </NavLink>

  <NavLink exact activeClassName="link"  to={`/signup`}>
      <button>SIGNUP</button>
  </NavLink>

  <NavLink  exact activeClassName="link"   to={`/main`}>
      <button>MAIN </button>
  </NavLink>
    
    </Router>
</>)
}

export default Routing;



const Home=()=>{
    let {id}=useParams();
 return(<>THIS IS HOME PAGE ! {id} </>);
}


const Longin=({match})=>{
    // let id=match.params.name;
 return(<>THIS IS LOGIN PAGES !{match.params.name} </>);
}


const SignUp=()=>{
    let {id}=useParams();
    return(<>THIS IS SignUp  PAGES !  {id} </>);
}


const Main=()=>{
    let {id}=useParams();
    return(<>THIS IS MAIN PAGES !  {id} </>);
}

const Error=()=>{
    let {id}=useParams();
   return(<>
        <p>Invalid NavLink !  {id} </p>
    </>)
}
