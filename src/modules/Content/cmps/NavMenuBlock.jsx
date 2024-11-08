
const NavMenuBlock = ({ menuTitle, menu }) => {
    if (!menuTitle || !menu[menuTitle]) {
        return null;
    }

    return (
        <div className="menu-section">
            <h3>{menuTitle}</h3>
            {menu[menuTitle].subMenu && (
                <ul>
                    {menu[menuTitle].subMenu.map((subItem) => (
                        <li key={subItem.title}>{subItem.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavMenuBlock