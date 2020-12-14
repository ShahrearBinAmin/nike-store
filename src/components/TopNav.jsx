import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import "./TopNav.css";

export default function TopNav() {
  return (
    <div class="right-nav">
      <SearchIcon />
      <ShoppingCartOutlinedIcon />
      <ListOutlinedIcon />
    </div>
  );
}
