import './App.css'
import Clock from "./components/clock";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";

function ClockApp() {
  return (
    <center className="">
  <Clock/>
<ClockSlogan></ClockSlogan>
<CurrentTime></CurrentTime>
  

    </center>

  );
}

export default ClockApp;
