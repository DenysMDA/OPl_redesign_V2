import React, { useState } from "react";
import ContentHeader from "../ContentHeader/ContentHeader";
import GridLayout from "react-grid-layout";
import "./Dashboard.scss";
import DashTile from "./DashTile/DashTile";
import myImage from "../../../../assest/ATT.png";
import { CiBookmarkCheck } from "react-icons/ci";
import UserChart from "./DashTile/UserChart/UserChart";
import { HiExternalLink } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import MySwiper from "./DashTile/Slider/MySwiper";
import { IoIosWarning } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

import image1 from "../../../../assest/1.png";
import image2 from "../../../../assest/2.png";
import image3 from "../../../../assest/3.png";
import image4 from "../../../../assest/4.png";
import image5 from "../../../../assest/5.png";
import image6 from "../../../../assest/6.png";

const announcement = [
  {
    title: "Shared Calling",
    description:
      "Want to refuse Shared Calling? Now you have such an opportunity.",
    backgroundImage: image1,
  },
  {
    title: "Routing Permissions",
    description:
      "Now you can quickly make an emergency call, such as 911 or other emergency numbers, using the device's native dialer.",
    backgroundImage: image3,
  },
  {
    title: "Copilot",
    description:
      "New possibilities of artificial intelligence. Now you don't have to think how to solve a problem, everything has already been thought for you.",
    backgroundImage: image4,
  },
];

const latestUpdates = [
  {
    title: "Operator Connect V2",
    description:
      "Еhe application UI/UX will never be the same again. Simplicity, speed and updated interface will change the approach to communication",
    backgroundImage: image5,
  },
  {
    title: "MSAL",
    description:
      "The new authorization and authentication mechanism will further enhance the security level",
    backgroundImage: image6,
  },
];

const Dashboard = () => {
  const layout = [
    { i: "operatorDetails", x: 0, y: 0, w: 3, h: 4 },
    { i: "statistics", x: 3, y: 0, w: 6, h: 4 },
    { i: "tenants", x: 9, y: 0, w: 3, h: 4 },
    { i: "announcement", x: 0, y: 3, w: 4, h: 3 },
    { i: "latestUpdates", x: 4, y: 3, w: 4, h: 3 },
    { i: "notification", x: 8, y: 3, w: 4, h: 3 },
    { i: "addNew", x: 0, y: 6, w: 4, h: 3 }, // Занимает всю ширину
  ];

  const regions = ["North America", "Europe", "Asia", "Australia"];
  const [showAllRegions, setShowAllRegions] = useState(false);

  // Функция для переключения состояния показа всех регионов
  const toggleShowAllRegions = () => {
    setShowAllRegions(!showAllRegions);
  };

  // Формирование списка регионов
  const displayedRegions = showAllRegions ? regions : regions.slice(0, 3);
  const remainingCount = regions.length - 3;

  return (
    <div className="content-wrapper dashboard">
      <ContentHeader activeSubMenu="Dashboard" pageNavigation={false} />

      <div className="dashboard-content">
        <GridLayout
          className="layout"
          layout={layout}
          cols={16}
          rowHeight={100}
          width={1600}
          // isResizable={false}
          // isDraggable={false}
          draggableHandle=".drag-handle"
        >
          <div key="operatorDetails">
            <DashTile title="Operator Details" footerContent="">
              <div className="logo-wrapper">
                <div className="logo">
                  <img src={myImage} alt="At&T" />
                </div>
              </div>
              <p className="title">AT&T Business</p>
              <div className="op-desc-wrapper">
                <div className="left-desc">
                  <div className="left-desc-title">Available products:</div>
                  <div className="left-desc-value">
                    <CiBookmarkCheck className="icon" />
                    <span>Teams Phone Calling</span>
                  </div>
                  <div className="left-desc-value">
                    <CiBookmarkCheck className="icon" />
                    <span>Audio Conference</span>
                  </div>
                </div>
                <div className="regions-desc">
                  <div className="regions-desc-title">Served Regions:</div>
                  <div className="regions">
                    {displayedRegions.join(", ")}
                    {remainingCount > 0 && !showAllRegions && (
                      <span
                        className="show-more"
                        onClick={toggleShowAllRegions}
                      >
                        {" "}
                        +{remainingCount}
                      </span>
                    )}
                    {showAllRegions && (
                      <span
                        className="show-more"
                        onClick={toggleShowAllRegions}
                      >
                        {" "}
                        Show less
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </DashTile>
          </div>

          <div key="statistics">
            <DashTile title="Statistics" footerContent="">
              <UserChart />
            </DashTile>
          </div>
          <div key="tenants">
            <DashTile title="Tenants" footerContent="">
              <div className="search">
                <div className="search-icon">
                  <LuSearch className="icon" />
                </div>
                <input
                  placeholder="Search Tenant"
                  type="text"
                  className="search-input"
                />
              </div>

              <div className="no-data">No Data</div>
            </DashTile>
          </div>
          <div key="announcement">
            <DashTile
              title="Announcement"
              footerContent=""
              className="slider-dashboard"
            >
              <MySwiper slides={latestUpdates} />
            </DashTile>
          </div>
          <div key="latestUpdates">
            <DashTile
              title="Latest Updates"
              footerContent=""
              className="slider-dashboard"
            >
              <MySwiper slides={announcement} />
            </DashTile>
          </div>
          <div key="notification">
            <DashTile title="Notification" footerContent="">
              <div className="notification">
                <div className="notification-icon">
                  <IoIosWarning />
                  <div>Service unavailable</div>
                </div>
                <div className="notification-content">
                  <div className="notification-text">
                    <span>
                      Maintenance work is currently being carried out and is
                      expected to be completed by 5:00 PM. The service will be
                      available as soon as all issues are resolved. Thank you
                      for your patience.
                    </span>
                  </div>
                </div>
              </div>
            </DashTile>
          </div>
          <div key="addNew">
            <DashTile title="Add New" footerContent="">
              <div className="add-tile">
                <IoMdAdd />
              </div>
            </DashTile>
          </div>
        </GridLayout>
      </div>
    </div>
  );
};

export default Dashboard;
