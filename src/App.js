import { Button } from "@mui/material";
import BSModal from "./BSModal";
import BSNav from "./BSNav";
import Navbar from "./Navbar";
import OrderFood from "./OrderFood";
import SiteRoutes from "./SiteRoutes";
import VolumeDown from '@mui/icons-material/VolumeDown';
import AccessAlarmTwoToneIcon from '@mui/icons-material/AccessAlarmTwoTone';

import "./styles.css"
import MUISlider from "./MUISlider";
import { LoadingButton } from "./LoadingButton";

function App() {  
  return ( <>
    <Navbar />    
    <SiteRoutes /> 
    
    </>);
}

export default App;
