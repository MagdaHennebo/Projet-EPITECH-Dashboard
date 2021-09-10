import React from 'react'
import "./Sidebar.css"
import { AcUnitOutlined, TheatersOutlined, SubscriptionsOutlined, AnnouncementOutlined, AccessTimeOutlined, MapOutlined, TrendingUpOutlined, EuroSymbolOutlined } from '@material-ui/icons';

export default function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <AcUnitOutlined className="sidebarIcon" />
                            Weather
                        </li>
                        <li className="sidebarListItem">
                            <TheatersOutlined className="sidebarIcon" />
                            Movies
                        </li>
                        <li className="sidebarListItem">
                            <SubscriptionsOutlined className="sidebarIcon" />
                            Youtube
                        </li>
                        <li className="sidebarListItem">
                            <AnnouncementOutlined className="sidebarIcon" />
                            News
                        </li>
                        <li className="sidebarListItem">
                            <AccessTimeOutlined className="sidebarIcon" />
                            Clock
                        </li>
                        {/* <li className="sidebarListItem">
                            <MapOutlined className="sidebarIcon" />
                            Waze
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpOutlined className="sidebarIcon" />
                            Stock exchange
                        </li>
                        <li className="sidebarListItem">
                            <EuroSymbolOutlined className="sidebarIcon" />
                            Converter
                        </li> */}
                    </ul>
                </div>
            </div>


            
        </div>
    )
}
