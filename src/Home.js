import { useState , useRef } from "react";
import { Link,Switch,BrowserRouter as Router,Route } from "react-router-dom";
import Main from "./Main";
import "./styles.css";
const Home = ()=>{
    const [play , setPlay] = useState(false);
    const shift = useRef(0)
    const visible = (val)=>{
        setPlay(val)
    }
    const changeStyle = () =>{
        shift.current.style.left = "25%";
        setTimeout(()=>{
            shift.current.style.left ="50%";
            setPlay(true);
        },2000);
    }
    return (
      <div className="App">
          {
              play?<Main visible={visible}/>: <div className="main-page"> <div className="first-div"><h1>Hogwarts Memory Game</h1></div>
              <div className="second-div"><h2>Onwards to Hogwarts</h2></div>
              <div className="third-div">
                  <h3>Click on the broom and let's take off....</h3>
                  <img src="https://m.media-amazon.com/images/I/41K1kDMDHcL._AC_SX425_.jpg" onClick={()=>changeStyle()} ref={shift} style={{}}/>
                  {/* <Router>
                      <Link to="/begin"></Link>
                      <Switch>
                          <Route path="/begin">
                              <Main/>
                          </Route>
                      </Switch>
                  </Router> */}
                  
              </div>
              </div>
             
          }
      
      </div>)
}
export default Home;