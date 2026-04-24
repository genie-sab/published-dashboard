"use client";
import CommonDropdown from "../../../../components/CommonDropdown";
import { BsThreeDots } from "react-icons/bs";
import DeleteIcon from "../../../../iconComponents/DeleteIcon";
import ViewIcon from "../../../../iconComponents/ViewIcon";
import LibraryIcon from "../../../../iconComponents/LibraryIcon";

const fileActionItems = [
  { value: "locate", label: "Locate in library", icon: <LibraryIcon /> },
  { value: "view", label: "View on market place", icon: <ViewIcon /> },
  { value: "remove", label: "Remove from market place", icon: <DeleteIcon /> },
];

const FileActionMenu = () => {
  const handleSelect = (value: string) => {
    // handle file actions here
    console.log(value);
  };

  return (
    <CommonDropdown
      trigger={<BsThreeDots />}
      items={fileActionItems}
      onSelect={handleSelect}
    />
  );
};

export default FileActionMenu;
