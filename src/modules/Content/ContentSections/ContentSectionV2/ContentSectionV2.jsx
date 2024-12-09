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
        id: "5f3d5a1a-6c5b-4a39-9f75-b8e41d541ea7",
        Operator: "Rogers Inc",
        FriendlyName: "Rogers",
        Website: "www.rogers.com",
        State: "Active",
        AudioConference: false,
        Calling: true,
        tenants: 120,
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
        id: "7cbb3de6-9df5-47b3-8771-118456529fd4",
        Operator: "Bell Canada",
        FriendlyName: "Bell",
        Website: "www.bell.ca",
        State: "Active",
        AudioConference: true,
        Calling: false,
        tenants: 85,
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
        id: "c9cfe8e5-3a5e-42f1-a998-7a8a2fef7f8c",
        Operator: "Telus",
        FriendlyName: "Telus",
        Website: "www.telus.com",
        State: "PrivatePreview",
        AudioConference: false,
        Calling: false,
        tenants: 45,
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
        id: "fea0a73c-42c8-4c8f-95f7-7dd92a9357d9",
        Operator: "Vodafone",
        FriendlyName: "Vodafone",
        Website: "www.vodafone.com",
        State: "Blocked",
        AudioConference: true,
        Calling: false,
        tenants: 70,
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
        id: "4c1d5b39-6e2b-4386-846f-3d8e94e038dc",
        Operator: "AT&T",
        FriendlyName: "AT&T",
        Website: "www.att.com",
        State: "Active",
        AudioConference: true,
        Calling: true,
        tenants: 150,
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
        id: "a2c4e85e-5e3f-4087-b8fd-dfd1c4a7c92d",
        Operator: "T-Mobile",
        FriendlyName: "T-Mobile",
        Website: "www.t-mobile.com",
        State: "PrivatePreview",
        AudioConference: false,
        Calling: true,
        tenants: 95,
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
        id: "82c8f7f5-748a-4b38-8135-3b7c281df0a5",
        Operator: "Orange",
        FriendlyName: "Orange",
        Website: "www.orange.com",
        State: "Active",
        AudioConference: false,
        Calling: true,
        tenants: 110,
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
        id: "d0b7f4c2-a7f8-4629-9b25-3baf8f2c3e6b",
        Operator: "Deutsche Telekom",
        FriendlyName: "DT",
        Website: "www.telekom.com",
        State: "Active",
        AudioConference: true,
        Calling: false,
        tenants: 60,
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
        id: "a25c3b2a-8d41-4996-8e1d-f5f7d8e9b12a",
        Operator: "Verizon",
        FriendlyName: "Verizon",
        Website: "www.verizon.com",
        State: "Blocked",
        AudioConference: false,
        Calling: false,
        tenants: 50,
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
        id: "f29c3e8a-4c29-47f9-849c-f8c3e5b1e7b3",
        Operator: "China Mobile",
        FriendlyName: "CMCC",
        Website: "www.chinamobile.com",
        State: "Active",
        AudioConference: true,
        Calling: true,
        tenants: 200,
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
                selectedItem={selectedItem}
            />
        </div>
    );
};

export default ContentSectionV2;
