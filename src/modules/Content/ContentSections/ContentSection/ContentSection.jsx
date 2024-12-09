import React from "react";
import ContentHeader from "../../cmps/ContentHeader/ContentHeader";
import TabComponent from "../../cmps/TabComponent/TabComponent";
import KeyContactsTable from "../../cmps/KeyContactsTable/KeyContactsTable";

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

const ContentSection = ({
                            activeSubMenu,
                            collapseAllTables,
                            expandAllTables,
                            togglePanelVisibility,
                            activeTable,
                            handleTableFocus,
                            areTablesCollapsed,
                        }) => {
    return (
        <div className="content-wrapper">
            <ContentHeader
                hello={"hello"}
                activeSubMenu={activeSubMenu}
                collapseAllTables={collapseAllTables}
                expandAllTables={expandAllTables}
                togglePanelVisibility={togglePanelVisibility}
            />
            <TabComponent />
            <KeyContactsTable
                title="Partner Number Configuration"
                columns={columns1}
                data={data1}
                actions={actions}
                isActive={activeTable === 1}
                onTableFocus={() => handleTableFocus(1)}
                areTablesCollapsed={areTablesCollapsed}
                isSearchable={true}
            />
            <KeyContactsTable
                title="Applications IDS"
                columns={columns2}
                data={data2}
                actions={actions2}
                isActive={activeTable === 2}
                onTableFocus={() => handleTableFocus(2)}
                areTablesCollapsed={areTablesCollapsed}
            />
            <KeyContactsTable
                title="Microsofts offers"
                columns={columns1}
                data={data1}
                actions={actions3}
                isActive={activeTable === 3}
                onTableFocus={() => handleTableFocus(3)}
                areTablesCollapsed={areTablesCollapsed}
                isSearchable={true}
            />
        </div>
    );
};

export default ContentSection;
