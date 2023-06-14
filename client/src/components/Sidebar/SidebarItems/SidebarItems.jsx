import React from "react";
import styles from "./SidebarItems.module.css";

function SidebarItems({
  Icon,
  itemName,
  selectedItem,
  updateSelected,
  id,
  ...props
}) {
  function handleClickSlected(e) {
    updateSelected(e.target.id);
  }

  return (
    <div
      onClick={handleClickSlected}
      className={
        selectedItem === id
          ? `${styles.selected} ${styles.sidebarItem}`
          : `${styles.sidebarItem}`
      }
      id={id}
      {...props}
    >
      <Icon />
      <span>{itemName}</span>
    </div>
  );
}

export default SidebarItems;
