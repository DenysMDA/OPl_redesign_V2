import React from "react";
import ContentHeader from "../../cmps/ContentHeader/ContentHeader";
import TabComponent from "../../cmps/TabComponent/TabComponent";
import KeyContactsTable from "../../cmps/KeyContactsTable/KeyContactsTable";


const ContentSection = ({
                            activeSubMenu,
                            collapseAllTables,
                            expandAllTables,
                            togglePanelVisibility,
                            columns1,
                            data1,
                            actions,
                            columns2,
                            data2,
                            actions2,
                            actions3,
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
