import { IconBell, IconConf, IconHome, IconLogout } from "components/icons";
import MenuItem from "./MenuItem";
import Logo from "./Logo";

export default function SideMenu() {
  return (
    <aside
      className={`
      flex flex-col
      bg-gray-200 text-gray-700
      dark:bg-gray-900
    `}
    >
      <div
        className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
      `}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Home" icon={IconHome} />
        <MenuItem url="/settings" text="Settings" icon={IconConf} />
        <MenuItem url="/notifications" text="Notifications" icon={IconBell} />
      </ul>
      <ul>
        <MenuItem
          className={`
            text-red-600 dark:text-red-400
            hover:bg-red-400 hover:text-white dark:hover:text-white
          `}
          onClick={() => console.log("iiii")}
          text="Logout"
          icon={IconLogout}
        />
      </ul>
    </aside>
  );
}
