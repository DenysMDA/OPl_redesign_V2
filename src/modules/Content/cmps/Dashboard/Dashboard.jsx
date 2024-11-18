import React from 'react';
import ContentHeader from "../ContentHeader/ContentHeader";
import GridLayout from 'react-grid-layout';
import "./Dashboard.scss";
import DashTile from "./DashTile/DashTile";

const Dashboard = () => {
    const layout = [
        { i: 'operatorDetails', x: 0, y: 0, w: 4, h: 4 },
        { i: 'statistics', x: 4, y: 0, w: 4, h: 4 },
        { i: 'tenants', x: 8, y: 0, w: 4, h: 4 },
        { i: 'announcement', x: 0, y: 3, w: 4, h: 3 },
        { i: 'latestUpdates', x: 4, y: 3, w: 4, h: 3 },
        { i: 'notification', x: 8, y: 3, w: 4, h: 3 },
        { i: 'addNew', x: 0, y: 6, w: 4, h: 3 } // Занимает всю ширину
    ];

    return (
        <div className="content-wrapper dashboard">
            <ContentHeader activeSubMenu="Dashboard" pageNavigation={false} />
            <div className="dashboard-content">
                <GridLayout
                    className="layout"
                    layout={layout}
                    cols={14}
                    rowHeight={100}
                    width={window.innerWidth}
                >
                    <div key="operatorDetails">
                        <DashTile title="Operator Details" footerContent="">
                            <p>Content for Operator Details</p>
                        </DashTile>
                    </div>
                    <div key="statistics">
                        <DashTile title="Statistics" footerContent="">
                            <p>Content for Statistics</p>
                        </DashTile>
                    </div>
                    <div key="tenants">
                        <DashTile title="Tenants" footerContent="">
                            <p>Content for Tenants</p>
                        </DashTile>
                    </div>
                    <div key="announcement">
                        <DashTile title="Announcement" footerContent="">
                            <p>Content for Announcement</p>
                        </DashTile>
                    </div>
                    <div key="latestUpdates">
                        <DashTile title="Latest Updates" footerContent="">
                            <p>Content for Latest Updates</p>
                        </DashTile>
                    </div>
                    <div key="notification">
                        <DashTile title="Notification" footerContent="">
                            <p>Content for Notification</p>
                        </DashTile>
                    </div>
                    <div key="addNew">
                        <DashTile title="Add New" footerContent="">
                            <p>Content for Add New</p>
                        </DashTile>
                    </div>
                </GridLayout>
            </div>
        </div>
    );
};

// const Dashboard = () => {
//
//     const layout = [
//         { i: 'tile1', x: 0, y: 0, w: 3, h: 6 }, // Увеличьте h до 6, чтобы высота была больше
//         { i: 'tile2', x: 3, y: 0, w: 3, h: 6 },
//         { i: 'tile3', x: 6, y: 0, w: 3, h: 6 },
//         { i: 'tile4', x: 0, y: 6, w: 3, h: 6 },
//         { i: 'tile5', x: 3, y: 6, w: 3, h: 6 },
//     ];
//
//     return (
//         <div className="content-wrapper dashboard">
//             <ContentHeader activeSubMenu="Dashboard" pageNavigation={false} />
//             <div className="dashboard-content">
//                 <GridLayout
//                     className="layout"
//                     layout={layout}
//                     cols={12}
//                     rowHeight={50} // Увеличьте rowHeight, чтобы сделать плитки выше
//                     width={window.innerWidth}
//
//                 >
//                     <div key="tile1">
//                         <DashTile title="Operator Details" footerContent="Tile 1 Footer">
//                             <p>This is the content for Tile 1</p>
//                         </DashTile>
//                     </div>
//                     <div key="tile2">
//                         <DashTile title="Announcement" footerContent="Tile 2 Footer">
//                             <p>This is the content for Tile 2</p>
//                         </DashTile>
//                     </div>
//                     <div key="tile3">
//                         <DashTile title="Latest Updates" footerContent="Tile 3 Footer">
//                             <p>This is the content for Tile 3</p>
//                         </DashTile>
//                     </div>
//                     <div key="tile4">
//                         <DashTile title="Notification" footerContent="Tile 4 Footer">
//                             <p>This is the content for Tile 4</p>
//                         </DashTile>
//                     </div>
//                     <div key="tile5">
//                         <DashTile title="Tenant Statistics" footerContent="Tile 5 Footer">
//                             <p>This is the content for Tile 5</p>
//                         </DashTile>
//                     </div>
//                 </GridLayout>
//             </div>
//         </div>
//     );
// };

export default Dashboard;
