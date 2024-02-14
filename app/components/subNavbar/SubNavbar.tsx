
import {Button, ButtonGroup} from "@nextui-org/react";
import Tab from "./../Tab";

const SubNavbar = () => {
    return (
        <div className="flex w-full">
            <div className="flex w-full">
                <Tab label="First" outline/>
                <Tab label="Second" outline/>
                <Tab label="Third" outline/>
            </div>
        </div>
        )
}

export default SubNavbar;