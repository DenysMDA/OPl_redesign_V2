import React from "react";
import ContentHeaderV2 from "./ContentHeaderV2/ContentHeaderV2";
import KeyContactsTableV2 from "./KeyContactsTableV2/KeyContactsTableV2";
import { CgMenuGridR } from "react-icons/cg";


const columnsOperators = [
    { Header: "Operator", accessor: "Operator", },
    { Header: "Friendly Name", accessor: "FriendlyName",},
    { Header: "Website", accessor: "Website",  },
    { Header: "State", accessor: "State",},
    { Header: "Audio Conference", accessor: "AudioConference",  },
    { Header: "Calling", accessor: "Calling",  },
];

const dataOperators = [
    {
        Operator: "Rogers Inc",
        FriendlyName: "Rogers",
        Website: "www.rogers.com",
        State: "Active",
        AudioConference: "Unavailable",
        Calling: "Available",
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
        AudioConference: "Available",
        Calling: "Unavailable",
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
        AudioConference: "Unavailable",
        Calling: "Unavailable",
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
        AudioConference: "Available",
        Calling: "Unavailable",
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
        AudioConference: "Available",
        Calling: "Available",
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
        AudioConference: "Unavailable",
        Calling: "Available",
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
        AudioConference: "Unavailable",
        Calling: "Available",
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
        AudioConference: "Available",
        Calling: "Unavailable",
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
        AudioConference: "Unavailable",
        Calling: "Unavailable",
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
        AudioConference: "Available",
        Calling: "Available",
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
    {
        Operator: "SK Telecom",
        FriendlyName: "SKT",
        Website: "www.sktelecom.com",
        State: "PrivatePreview",
        AudioConference: "Unavailable",
        Calling: "Available",
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Blocked",
                listType: "BlockedMarkets",
                markets: "KR, JP",
            },
            Calling: {
                type: "Calling",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "KR",
            },
        },
    },
    {
        Operator: "BT Group",
        FriendlyName: "BT",
        Website: "www.bt.com",
        State: "Active",
        AudioConference: "Available",
        Calling: "Unavailable",
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "UK",
            },
            Calling: {
                type: "Calling",
                status: "Inactive",
                listType: "BlockedMarkets",
                markets: "FR",
            },
        },
    },
    {
        Operator: "KPN",
        FriendlyName: "KPN",
        Website: "www.kpn.com",
        State: "Blocked",
        AudioConference: "Unavailable",
        Calling: "Unavailable",
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Blocked",
                listType: "BlockedMarkets",
                markets: "NL, BE",
            },
            Calling: {
                type: "Calling",
                status: "Inactive",
                listType: "BlockedMarkets",
                markets: "LU",
            },
        },
    },
    {
        Operator: "Telia",
        FriendlyName: "Telia",
        Website: "www.telia.com",
        State: "Active",
        AudioConference: "Available",
        Calling: "Available",
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "SE, FI",
            },
            Calling: {
                type: "Calling",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "NO",
            },
        },
    },
    {
        Operator: "Sprint",
        FriendlyName: "Sprint",
        Website: "www.sprint.com",
        State: "PrivatePreview",
        AudioConference: "Available",
        Calling: "Available",
        teamsOffers: {
            AudioConferencing: {
                type: "AudioConferencing",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "US",
            },
            Calling: {
                type: "Calling",
                status: "Active",
                listType: "AllowedMarkets",
                markets: "CA",
            },
        },
    },
];

const actions = [
    { label: "Add", onClick: () => console.log("Add clicked"), disabled: true },
    { label: "Edit", onClick: () => console.log("Edit clicked") },
    { label: "Delete", onClick: () => console.log("Delete clicked") },
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
    return (
        <div className="content-wrapper content-wrapper-v2">
            <ContentHeaderV2
                activeSubMenu={activeSubMenu}
                collapseAllTables={collapseAllTables}
                expandAllTables={expandAllTables}
                togglePanelVisibility={togglePanelVisibility}
            />
            <KeyContactsTableV2
                title="Operators"
                columns={columnsOperators}
                data={dataOperators}
                actions={actions}
                isActive={activeTable === 1}
                onTableFocus={() => handleTableFocus(1)}
                areTablesCollapsed={areTablesCollapsed}
                isSearchable={true}
            />
        </div>
    );
};

export default ContentSectionV2;
