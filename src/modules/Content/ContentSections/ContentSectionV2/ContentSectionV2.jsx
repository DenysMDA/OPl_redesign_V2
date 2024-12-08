import React, {useEffect, useState} from "react";
import ContentHeaderV2 from "./ContentHeaderV2/ContentHeaderV2";
import TableContentV2 from "./TableContentV2/TableContentV2";
import {CgMenuGridR} from "react-icons/cg";


const columnsOperators = [
    {
        Header: "Operator",
        accessor: "Operator",
    },
    {
        Header: "Friendly Name",
        accessor: "FriendlyName",
    },
    {
        Header: "State", // Перемещаем State
        accessor: "State",
    },
    {
        Header: "Website", // Перемещаем Website ниже State
        accessor: "Website",
    },
    {
        Header: "Audio Conference",
        accessor: "AudioConference",
    },
    {
        Header: "Calling",
        accessor: "Calling",
    },
];
const dataOperators = [
    {
        Operator: "Rogers Inc",
        FriendlyName: "Rogers",
        Website: "www.rogers.com",
        State: "Active",
        AudioConference: false,
        Calling: true,
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Inactive",
                listType: "BlockedMarkets",
                markets: "AU, JP",
            },
            Calling: {
                type: "Calling",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "CA",
            },
        },
    },
    {
        Operator: "Bell Canada",
        FriendlyName: "Bell",
        Website: "www.bell.ca",
        State: "Active",
        AudioConference: true,
        Calling: false,
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "FR",
            },
            Calling: {
                type: "Calling",
                status: "Inactive",
                listType: "BlockedMarkets",
                markets: "US",
            },
        },
    },
    {
        Operator: "Telus",
        FriendlyName: "Telus",
        Website: "www.telus.com",
        State: "PrivatePreview",
        AudioConference: false,
        Calling: false,
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Blocked",
                listType: "BlockedMarkets",
                markets: "UK, DE",
            },
            Calling: {
                type: "Calling",
                status: "Blocked",
                listType: "BlockedMarkets",
                markets: "AU",
            },
        },
    },
    {
        Operator: "Vodafone",
        FriendlyName: "Vodafone",
        Website: "www.vodafone.com",
        State: "Blocked",
        AudioConference: true,
        Calling: false,
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "IN, SG",
            },
            Calling: {
                type: "Calling",
                status: "Blocked",
                listType: "BlockedMarkets",
                markets: "BR, ZA",
            },
        },
    },
    {
        Operator: "AT&T",
        FriendlyName: "AT&T",
        Website: "www.att.com",
        State: "Active",
        AudioConference: true,
        Calling: true,
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "US, MX",
            },
            Calling: {
                type: "Calling",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "CA",
            },
        },
    },
    {
        Operator: "T-Mobile",
        FriendlyName: "T-Mobile",
        Website: "www.t-mobile.com",
        State: "PrivatePreview",
        AudioConference: false,
        Calling: true,
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Inactive",
                listType: "BlockedMarkets",
                markets: "AU, JP",
            },
            Calling: {
                type: "Calling",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "DE, FR",
            },
        },
    },
    {
        Operator: "Orange",
        FriendlyName: "Orange",
        Website: "www.orange.com",
        State: "Active",
        AudioConference: false,
        Calling: true,
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Active",
                listType: "BlockedMarkets",
                markets: "AU, NZ",
            },
            Calling: {
                type: "Calling",
                status: "Inactive",
                listType: "AllowedMarkets",
                markets: "FR, DE",
            },
        },
    },
    {
        Operator: "Deutsche Telekom",
        FriendlyName: "DT",
        Website: "www.telekom.com",
        State: "Active",
        AudioConference: true,
        Calling: false,
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Blocked",
                listType: "BlockedMarkets",
                markets: "IT, GR",
            },
            Calling: {
                type: "Calling",
                status: "Inactive",
                listType: "AllowedMarkets",
                markets: "US, UK",
            },
        },
    },
    {
        Operator: "Verizon",
        FriendlyName: "Verizon",
        Website: "www.verizon.com",
        State: "Blocked",
        AudioConference: false,
        Calling: false,
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Inactive",
                listType: "BlockedMarkets",
                markets: "AU, CA",
            },
            Calling: {
                type: "Calling",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "MX, US",
            },
        },
    },
    {
        Operator: "China Mobile",
        FriendlyName: "CMCC",
        Website: "www.chinamobile.com",
        State: "Active",
        AudioConference: true,
        Calling: true,
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "CN",
            },
            Calling: {
                type: "Calling",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "HK",
            },
        },
    },
];

const actions = [
    {label: "Add", onClick: () => console.log("Add clicked"), disabled: true},
    {label: "Edit", onClick: () => console.log("Edit clicked")},
    {label: "Delete", onClick: () => console.log("Delete clicked")},
    // { label: "Row", onClick: () => console.log("Delete clicked") },
    // { label: "Tiles", onClick: () => console.log("Delete clicked") },
];

const ContentSectionV2 = ({
                              activeSubMenu,
                              collapseAllTables,
                              expandAllTables,
                              togglePanelVisibility,
                              activeTable,
                              handleTableFocus,
                              areTablesCollapsed,
                          }) => {

    const [selectedItem, setSelectedItem] = useState(dataOperators ? dataOperators[0] : null);
    const [selectedTileType, setSelectedTileType] = useState(false);


    useEffect(() => {
        console.log("selectedItem", selectedItem);
    }, [selectedItem]);

    useEffect(() => {
        console.log("selectedTileType", selectedTileType);
    }, [selectedTileType]);

    const handleRowSelect = (item) => {
        setSelectedItem(item); // Сохраняем выбранный элемент
    };

    const handleTypeSelect = (type) => {
        setSelectedTileType(type); // Переключаем тип тайла
    }

    return (
        <div className="content-wrapper content-wrapper-v2">
            <ContentHeaderV2
                activeSubMenu={activeSubMenu}
                collapseAllTables={collapseAllTables}
                expandAllTables={expandAllTables}
                togglePanelVisibility={togglePanelVisibility}
                handleRowSelect={handleRowSelect}
            />
            <TableContentV2
                title="Operators"
                columns={columnsOperators}
                data={dataOperators}
                actions={actions}
                isActive={activeTable === 1}
                onTableFocus={() => handleTableFocus(1)}
                areTablesCollapsed={areTablesCollapsed}
                isSearchable={true}
                onRowSelect={handleRowSelect}
                handleTypeSelect={handleTypeSelect}
                selectedTileType={selectedTileType}
            />
        </div>
    );
};

export default ContentSectionV2;
