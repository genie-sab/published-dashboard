"use client";
import CommonDropdown, { DropdownItem } from "@/app/components/CommonDropdown";
import styles from "@/app/features/published/styles/SortButton.module.scss";
import { TbArrowsSort } from "react-icons/tb";
import { IoChevronDown } from "react-icons/io5";

const sortItems: DropdownItem[] = [
  { value: "downloads-asc", label: "Downloads: Low to High" },
  { value: "downloads-desc", label: "Downloads: High to Low" },
  { value: "views-asc", label: "Views: Low to High" },
  { value: "views-desc", label: "Views: High to Low" },
  { value: "revenue-asc", label: "Revenue: Low to High" },
  { value: "revenue-desc", label: "Revenue: High to Low" },
];

interface SortButtonProps {
  value: string;
  onChange: (value: string) => void;
  style?: object;
}

const SortButton = ({ value, onChange, style }: SortButtonProps) => {
  const activeLabel = sortItems.find((i) => i.value === value)?.label ?? "Sort";

  const trigger = (
    <span className={styles.trigger}>
      <TbArrowsSort />
      <span className={styles.label}>{activeLabel}</span>
      <IoChevronDown className={styles.chevron} />
    </span>
  );

  return (
    <CommonDropdown
      trigger={trigger}
      items={sortItems}
      onSelect={onChange}
      activeValue={value}
      style={style}
    />
  );
};

export default SortButton;
