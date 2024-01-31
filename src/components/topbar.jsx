import './topbar.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function Topbar() {
    return (
        <>
        <div id="TopBarContainer" >
                <div id="ContainerOne" >
                     <div id='ContainerOneText' >
                        Revenues
                     </div>
                     <div>
                        <div id='ContainerOneInnerBox' >
                             <div id='ContainerOneInnerBoxText' >
                                15 %
                             </div>
                             <div>
                                 <ArrowOutwardIcon sx={{color : 'rgb(157, 247, 21)' , fontSize : '30px'}} ></ArrowOutwardIcon>
                             </div>
                        </div>
                        <div style={{color : "grey"}} >
                               increase compared to last week
                        </div>
                     </div>
                     <div id='ContainerOneInnerBox' >
                        <div id='ContainerOneInnerBoxTextTwo'  >
                            Revenues report
                        </div>
                        <div>
                            <ArrowRightAltIcon></ArrowRightAltIcon>
                        </div>
                     </div>
                </div>
                <div id="ContainerOne" >
                <div id='ContainerOneText' >
                        Lost Deals
                     </div>
                     <div>
                        <div id='ContainerOneInnerBox' >
                             <div id='ContainerOneInnerBoxText' >
                                4 %
                             </div>
                             
                        </div>
                        <div style={{color : "grey"}} >
                               increase compared to last week
                        </div>
                     </div>
                     <div id='ContainerOneInnerBox' >
                        <div id='ContainerOneInnerBoxTextTwo'  >
                          All deals
                        </div>
                        <div>
                            <ArrowRightAltIcon sx={{color : "brown"}} ></ArrowRightAltIcon>
                        </div>
                     </div>
                </div>
                <div id="ContainerTwo" >
                <div id='ContainerTwoText' >
                        Quarter goal
                     </div>
                            <div id='design' >
                                   <div>
                                   <div  id='ContainerTwoInnerBoxText' >
                                     84 %
                                  </div>
                                   </div>
                                  
                            </div>
                            <div id='ContainerOneInnerBox' >
                        <div id='ContainerOneInnerBoxTextTwo'  >
                          All goals
                        </div>
                        <div>
                            <ArrowRightAltIcon sx={{color : "brown"}} ></ArrowRightAltIcon>
                        </div>
                     </div>
                </div>
        </div>
        </>
    )
}

export default Topbar