import './sidebar.css'
import orangeImg from '../assets/orange.png'
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArticleIcon from '@mui/icons-material/Article';
import LanguageIcon from '@mui/icons-material/Language';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorageIcon from '@mui/icons-material/Storage';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Sidebar() {
    return (
        <> 
        <div id='sidePannelContainer' > 
          <div>
                <div id='logoContainer' >
                     <div>
                             <img id='image' src={orangeImg} ></img>
                     </div>
                     <div id='logoText' >
                        OrangeFarm
                     </div>
                </div>
                <div id='searchBoxContainer' >
                       <div style={{marginLeft : '10px'}} >  
                         <SearchIcon></SearchIcon>
                       </div>
                       <div id='searchBoxText' >
                        Search
                       </div>
                </div>

                <div> 
                        <div className='sidePannelBox' >
                             <div>
                                <DashboardIcon sx={{color : "grey"}} ></DashboardIcon>
                             </div>
                             <div className='sidePannelBoxText' > 
                                Dashboard
                             </div>
                        </div>
                        <div className='sidePannelBox' >
                             <div>
                                <PeopleAltIcon sx={{color : "grey"}} ></PeopleAltIcon>
                             </div>
                             <div className='sidePannelBoxText' >
                                Customers
                             </div>
                        </div>
                        <div className='sidePannelBox' >
                             <div>
                                <ArticleIcon sx={{color : "grey"}} ></ArticleIcon>
                             </div>
                             <div className='sidePannelBoxText' >
                                All Reports
                             </div>
                        </div>
                        <div className='sidePannelBox' >
                             <div>
                                <LanguageIcon sx={{color : "grey"}} ></LanguageIcon>
                             </div>
                             <div className='sidePannelBoxText' >
                                Geography
                             </div>
                        </div> 
                        <div className='sidePannelBox' >
                             <div>
                                <ChatIcon sx={{color : "grey"}} ></ChatIcon>
                             </div>
                             <div className='sidePannelBoxText' >
                                Conversation
                             </div>
                        </div>
                        <div className='sidePannelBox' >
                            <div>
                                <ShoppingBagIcon sx={{color : "grey"}} ></ShoppingBagIcon>
                            </div>
                            <div className='sidePannelBoxText' >
                                Deals
                            </div>
                        </div>
                        <div className='sidePannelBox' > 
                            <div>
                                <StorageIcon sx={{color : "grey"}} ></StorageIcon>
                            </div>
                            <div className='sidePannelBoxText' >
                                Exports
                            </div>
                        </div>
                  </div>
                </div>  
        <div>
                <div id='profile' >
                    <div  >
                        <img id='imageIcon' src='https://tse3.mm.bing.net/th?id=OIP.HhPxEnng8-809YzSQjp9SAHaHa&pid=Api&P=0&h=220' ></img>
                    </div> 
                    <div>
                    <div>
                    <div id='profileTextOne' >
                        Cheem Xavier
                    </div>
                    <div id='profileTextTwo' >
                        admin
                    </div>
                    </div>
                    </div>
                   
                    
                </div> 
                <div  className='lowerSidePannelBox' >
                     <div  >
                        <ManageAccountsIcon sx={{color : "grey"}} ></ManageAccountsIcon>
                     </div>
                     <div> 
                        Settings
                     </div>   
                </div> 
                <div  className='lowerSidePannelBox' >
                    <div >
                        <ExitToAppIcon sx={{color : "red"}} ></ExitToAppIcon>
                    </div>
                    <div id='lowerText' >
                        Log out
                    </div>
                    </div>
            </div>        
        </div>
        </>
    )
}

export default Sidebar