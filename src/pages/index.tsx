import React from "react"
import * as paths from "routes";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home-page";
import SearchAddressPage from "./search-address-page";
import ProfilePage from "./profile-page";
import SettingsPage from "./settings-page";
import ExistPage from "./exist-page";
import MapsPage from "./maps-page";
import TablesPage from "./tables-page";
import CalenderPage from "./calender-page";
import WidgetsPage from "./widgets-page";
import FianancePage from "./fianance-page";
import ProfileSettingsPage from "./profile-settings-page";

const Pages: React.FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path={paths.home_page_path} element={<HomePage />} />
            <Route path={paths.address_page_path} element={<SearchAddressPage />} />
            <Route path={paths.profile_page_path} element={<ProfilePage />} />
            <Route path={paths.settings_page_path} element={<SettingsPage />} />
            <Route path={paths.exit_page_path} element={<ExistPage />} />
            <Route path={paths.maps_page_path} element={<MapsPage />} />
            <Route path={paths.table_page_path} element={<TablesPage />} />
            <Route path={paths.calender_page_path} element={<CalenderPage />} />
            <Route path={paths.widgets_page_path} element={<WidgetsPage />} />
            <Route path={paths.fianance_page_path} element={<FianancePage />} />
            <Route path={paths.profile_settings_page_path} element={<ProfileSettingsPage />} />
        </Routes>
    )
}
export default Pages;