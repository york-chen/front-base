import { Tabbar } from "react-vant";
import { HomeO, Search } from "@react-vant/icons";
import { useNavigate, useLocation } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  return (
    <Tabbar
    value={pathname}
      onChange={(name:string) => {
        navigate(name);
      }}
    >
      <Tabbar.Item name="/" icon={<HomeO />}>
        首页
      </Tabbar.Item>
      <Tabbar.Item name="/mine" icon={<Search />}>
        我的
      </Tabbar.Item>
    </Tabbar>
  );
};
