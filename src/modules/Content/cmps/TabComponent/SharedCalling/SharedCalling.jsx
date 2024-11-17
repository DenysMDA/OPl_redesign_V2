import "./SharedCalling.scss"
import ActionButtons from "../../shared/ActionButtons";

const SharedCalling = () => {

    const actions = [
        { label: "Add", onClick: () => console.log("Add clicked!"), disabled: false },
        { label: "Edit", onClick: () => console.log("Edit clicked!"), disabled: true }, // Эта кнопка будет неактивной
    ];

    return (
        <div>
            <div className="header">
                <ActionButtons actions={actions} isSearchable={false}/>
            </div>
        </div>
    );
};

export default SharedCalling;
