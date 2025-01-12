import React, { ReactElement, ReactNode } from "react";
import Home from "./pages/Home";
import {
  IoCog,
  IoCogOutline,
  IoDownload,
  IoDownloadOutline,
  IoExtensionPuzzle,
  IoExtensionPuzzleOutline,
  IoPricetags,
  IoPricetagsOutline,
  IoSearch,
  IoSearchOutline,
} from "react-icons/io5";
import SearchPage from "./pages/SearchPage";
import CategoriesPage from "./pages/CategoriesPage";
import SettingsPage from "./pages/SettingsPage";
import SearchPluginsPage from "./pages/SearchPluginsPage";

export type PageNames =
  | "sideNav"
  | "bottomNav"
  | "sideNavBottom"
  | "mobileSettingsList";

type PageObject = {
  url: string;
  label: string;
  component: ReactNode;
  Icon: {
    active: (props: any) => ReactElement;
    inactive: (props: any) => ReactElement;
  };
  visibleOn: PageNames[];
  layout?: (props: any) => ReactNode;
};

export const Pages: PageObject[] = [
  {
    label: "Downloads",
    url: "/",
    component: <Home />,
    Icon: {
      active: (props) => <IoDownload {...props} />,
      inactive: (props) => <IoDownloadOutline {...props} />,
    },
    visibleOn: ["bottomNav"],
  },
  {
    label: "Search",
    url: "/search",
    component: <SearchPage />,
    Icon: {
      active: (props) => <IoSearch {...props} />,
      inactive: (props) => <IoSearchOutline {...props} />,
    },
    visibleOn: ["bottomNav", "sideNav"],
  },
  {
    label: "Search",
    url: "/search/:query",
    component: <SearchPage />,
    Icon: {
      active: (props) => <IoSearch {...props} />,
      inactive: (props) => <IoSearchOutline {...props} />,
    },
    visibleOn: [],
  },
  {
    label: "Categories",
    url: "/categories",
    component: <CategoriesPage />,
    Icon: {
      active: (props) => <IoPricetags {...props} />,
      inactive: (props) => <IoPricetagsOutline {...props} />,
    },
    visibleOn: ["bottomNav", "sideNav"],
  },
  {
    label: "Settings",
    url: "/settings",
    component: <SettingsPage />,
    Icon: {
      active: (props) => <IoCog {...props} />,
      inactive: (props) => <IoCogOutline {...props} />,
    },
    visibleOn: ["bottomNav", "sideNavBottom"],
  },
  {
    label: "Search Plugins",
    url: "/plugins",
    component: <SearchPluginsPage />,
    Icon: {
      active: (props) => <IoExtensionPuzzle {...props} />,
      inactive: (props) => <IoExtensionPuzzleOutline {...props} />,
    },
    visibleOn: ["mobileSettingsList", "sideNav"],
  },
];
