
import React, { useState } from 'react';
import './CustomPage.scss';
import ContentHeaderV2 from "../ContentSectionV2/ContentHeaderV2/ContentHeaderV2";
import TableContentV2 from "../ContentSectionV2/TableContentV2/TableContentV2";
import TabComponent from "../../cmps/TabComponent/TabComponent";
import KeyContactsTable from "../../cmps/KeyContactsTable/KeyContactsTable";

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
const actions_v2 = [
    {label: "Add", onClick: () => console.log("Add clicked"), disabled: true},
    {label: "Edit", onClick: () => console.log("Edit clicked")},
    {label: "Delete", onClick: () => console.log("Delete clicked")},
    // { label: "Row", onClick: () => console.log("Delete clicked") },
    // { label: "Tiles", onClick: () => console.log("Delete clicked") },
];
const columns1 = [
    { Header: "Type", accessor: "Type", minWidth: 200 },
    { Header: "Display Name", accessor: "Display Name", minWidth: 200 },
    { Header: "First Name", accessor: "First Name", minWidth: 200 },
    { Header: "Last Name", accessor: "Last Name", minWidth: 200 },
    { Header: "Title", accessor: "Title", minWidth: 200 },
    { Header: "Phone Number", accessor: "Phone Number", minWidth: 200 },
    {
        Header: "Alternative Number",
        accessor: "Alternative Number",
        minWidth: 200,
    },
    { Header: "Email", accessor: "Email", minWidth: 200 },
    { Header: "Department", accessor: "Department", minWidth: 200 },
    { Header: "Location", accessor: "Location", minWidth: 200 },
    { Header: "Status", accessor: "Status", minWidth: 200 },
];
const data1 = [
    {
        Type: "ServiceManager",
        "Display Name": "Alice Johnson",
        "First Name": "Alice",
        "Last Name": "Johnson",
        Title: "Senior Service Manager",
        "Phone Number": "123-456-7890",
        "Alternative Number": "321-654-0987",
        Email: "alice.johnson@example.com",
        Department: "Service Management",
        Location: "New York",
        Status: "Active",
    },
    {
        Type: "OperationsCenter",
        "Display Name": "Bob Smith",
        "First Name": "Bob",
        "Last Name": "Smith",
        Title: "Operations Supervisor",
        "Phone Number": "234-567-8901",
        "Alternative Number": "432-765-1098",
        Email: "bob.smith@example.com",
        Department: "Operations",
        Location: "Chicago",
        Status: "Active",
    },
    {
        Type: "SupportTeam",
        "Display Name": "Charlie Brown",
        "First Name": "Charlie",
        "Last Name": "Brown",
        Title: "Support Specialist",
        "Phone Number": "345-678-9012",
        "Alternative Number": "543-876-2109",
        Email: "charlie.brown@example.com",
        Department: "Support",
        Location: "San Francisco",
        Status: "Active",
    },
    {
        Type: "ProjectManager",
        "Display Name": "Diana Prince",
        "First Name": "Diana",
        "Last Name": "Prince",
        Title: "Project Manager",
        "Phone Number": "456-789-0123",
        "Alternative Number": "654-987-3210",
        Email: "diana.prince@example.com",
        Department: "Project Management",
        Location: "Seattle",
        Status: "On Leave",
    },
    {
        Type: "ITAdmin",
        "Display Name": "Edward King",
        "First Name": "Edward",
        "Last Name": "King",
        Title: "IT Administrator",
        "Phone Number": "567-890-1234",
        "Alternative Number": "765-098-4321",
        Email: "edward.king@example.com",
        Department: "IT",
        Location: "Boston",
        Status: "Active",
    },
    {
        Type: "HRManager",
        "Display Name": "Fiona Clark",
        "First Name": "Fiona",
        "Last Name": "Clark",
        Title: "HR Manager",
        "Phone Number": "678-901-2345",
        "Alternative Number": "876-210-5432",
        Email: "fiona.clark@example.com",
        Department: "Human Resources",
        Location: "Denver",
        Status: "Active",
    },
    {
        Type: "MarketingLead",
        "Display Name": "George Williams",
        "First Name": "George",
        "Last Name": "Williams",
        Title: "Marketing Lead",
        "Phone Number": "789-012-3456",
        "Alternative Number": "987-321-6543",
        Email: "george.williams@example.com",
        Department: "Marketing",
        Location: "Los Angeles",
        Status: "Inactive",
    },
    {
        Type: "FinanceOfficer",
        "Display Name": "Hannah Lee",
        "First Name": "Hannah",
        "Last Name": "Lee",
        Title: "Finance Officer",
        "Phone Number": "890-123-4567",
        "Alternative Number": "098-432-7654",
        Email: "hannah.lee@example.com",
        Department: "Finance",
        Location: "Houston",
        Status: "Active",
    },
    {
        Type: "LegalAdvisor",
        "Display Name": "Ian Roberts",
        "First Name": "Ian",
        "Last Name": "Roberts",
        Title: "Legal Advisor",
        "Phone Number": "901-234-5678",
        "Alternative Number": "109-543-8765",
        Email: "ian.roberts@example.com",
        Department: "Legal",
        Location: "Miami",
        Status: "Active",
    },
    {
        Type: "Procurement",
        "Display Name": "Jane Adams",
        "First Name": "Jane",
        "Last Name": "Adams",
        Title: "Procurement Officer",
        "Phone Number": "012-345-6789",
        "Alternative Number": "210-654-9876",
        Email: "jane.adams@example.com",
        Department: "Procurement",
        Location: "Phoenix",
        Status: "Active",
    },
    {
        Type: "QualityAssurance",
        "Display Name": "Kevin Scott",
        "First Name": "Kevin",
        "Last Name": "Scott",
        Title: "QA Engineer",
        "Phone Number": "123-456-7890",
        "Alternative Number": "321-765-0987",
        Email: "kevin.scott@example.com",
        Department: "Quality Assurance",
        Location: "San Diego",
        Status: "Active",
    },
];
const columns2 = [
    { Header: "Type", accessor: "Type", minWidth: 200 },
    { Header: "Display Name", accessor: "Display Name", minWidth: 200 },
    { Header: "First Name", accessor: "First Name", minWidth: 200 },
    { Header: "Last Name", accessor: "Last Name", minWidth: 200 },
];
const data2 = [
    {
        Type: "NetworkManager",
        "Display Name": "Net-DisplayName",
        "First Name": "Net-FirstName",
        "Last Name": "Net-LastName",
    },
    {
        Type: "SupportCenter",
        "Display Name": "Support-DisplayName",
        "First Name": "Support-FirstName",
        "Last Name": "Support-LastName",
    },
];
const actions = [
    { label: "Add", onClick: () => console.log("Add clicked"), disabled: true },
    { label: "Edit", onClick: () => console.log("Edit clicked") },
    { label: "Delete", onClick: () => console.log("Delete clicked") },
];
const actions2 = [{ label: "Add", onClick: () => console.log("Add clicked") }];
const actions3 = [
    { label: "Add", onClick: () => console.log("Add clicked") },
    { label: "Edit", onClick: () => console.log("Edit clicked") },
];

const CustomPage = ({
                        activeSubMenu,
                        collapseAllTables,
                        expandAllTables,
                        togglePanelVisibility,
                        activeTable,
                        handleTableFocus,
                        areTablesCollapsed,
                    }) => {
    const [selectedItem, setSelectedItem] = useState(dataOperators ? dataOperators[0] : null);
    const [selectedTileType, setSelectedTileType] = useState(true);
    const [selectedComponents, setSelectedComponents] = useState(['Operators']);

    const handleRowSelect = (item) => {
        setSelectedItem(item);
    };

    const handleTypeSelect = (type) => {
        setSelectedTileType(type);
    };

    const allComponents = [
        {
            id: 'Operators',
            label: 'Operators',
            component: (
                <TableContentV2
                    title="Operators"
                    columns={columnsOperators}
                    data={dataOperators}
                    actions={actions_v2}
                    isActive={activeTable === 1}
                    onTableFocus={() => handleTableFocus(1)}
                    areTablesCollapsed={areTablesCollapsed}
                    isSearchable={true}
                    onRowSelect={handleRowSelect}
                    handleTypeSelect={handleTypeSelect}
                    selectedTileType={selectedTileType}
                    selectedItem={selectedItem}
                />
            ),
        },
        {
            id: 'PartnerNumberConfiguration',
            label: 'PN Configuration',
            component: <TabComponent activeSubMenu={activeSubMenu} />,
        },
        {
            id: 'ManageByTenant',
            label: 'Manage by Tenant',
            component: (
                <KeyContactsTable
                    title="Menage by Tenant"
                    columns={columns1}
                    data={data1}
                    actions={actions_v2}
                    isActive={activeTable === 1}
                    onTableFocus={() => handleTableFocus(1)}
                    areTablesCollapsed={areTablesCollapsed}
                    isSearchable={true}
                />
            ),
        },
        {
            id: 'ApplicationsIDS',
            label: 'Applications IDS',
            component: (
                <KeyContactsTable
                    title="Applications IDS"
                    columns={columns2}
                    data={data2}
                    actions={actions2}
                    isActive={activeTable === 2}
                    onTableFocus={() => handleTableFocus(2)}
                    areTablesCollapsed={areTablesCollapsed}
                />
            ),
        },
        {
            id: 'MicrosoftOffers',
            label: 'Microsoft Offers',
            component: (
                <KeyContactsTable
                    title="Microsoft Offers"
                    columns={columns1}
                    data={data1}
                    actions={actions3}
                    isActive={activeTable === 3}
                    onTableFocus={() => handleTableFocus(3)}
                    areTablesCollapsed={areTablesCollapsed}
                    isSearchable={true}
                />
            ),
        },
    ];

    const toggleComponent = (id) => {
        setSelectedComponents((prev) =>
            prev.includes(id) ? prev.filter((compId) => compId !== id) : [...prev, id]
        );
    };

    return (
        <div className="content-wrapper content-wrapper-v2">

            <ContentHeaderV2
                activeSubMenu={activeSubMenu}
                collapseAllTables={collapseAllTables}
                expandAllTables={expandAllTables}
                togglePanelVisibility={togglePanelVisibility}
                handleRowSelect={handleRowSelect}
                allComponents={allComponents} // Передаем список всех компонентов
                selectedComponents={selectedComponents} // Передаем выбранные компоненты
                toggleComponent={toggleComponent} // Передаем функцию управления выбором
            />

            <div className="dynamic-components">
                {allComponents
                    .filter((comp) => selectedComponents.includes(comp.id))
                    .map((comp) => (
                        <div key={comp.id} className="dynamic-component">
                            {comp.component}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CustomPage;
