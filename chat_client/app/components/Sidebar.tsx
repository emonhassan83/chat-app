import { useState } from "react";
import { Avatar, List, Tabs } from "antd";
import { MessageOutlined, UserOutlined } from "@ant-design/icons";
import Header from "./Sidebar/Header";

const { TabPane } = Tabs;

const data = Array.from({ length: 20 }, (_, i) => ({
  title: `User Chat ${i + 1}`,
}));

const Sidebar = ({ user, onlineUsers }: any) => {
  const [activeTab, setActiveTab] = useState("1");
  const sidebarUser = onlineUsers?.filter((item: any)=> item?._id !== user?._id )

  return (
    <div className="w-[25%] flex flex-col max-h-[100vh] overflow-hidden">
      <Header user={user} />

      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        type="card"
        className="w-full"
        tabBarStyle={{ width: "100%", fontSize: "18px", fontWeight: "500" }}
      >
        {/* Chat List Tab */}
        <TabPane
          key="1"
          tab={
            <div className="flex items-center gap-2">
              <MessageOutlined />
              <span>Chat List</span>
            </div>
          }
        >
          <div className="overflow-y-auto max-h-[calc(100vh-120px)] p-2">
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                      />
                    }
                    title={<a href="#">{item.title}</a>}
                    description="Active user"
                  />
                </List.Item>
              )}
            />
          </div>
        </TabPane>

        {/* User List Tab */}
        <TabPane
          key="2"
          tab={
            <div className="flex items-center gap-2">
              <UserOutlined />
              <span>User List</span>
            </div>
          }
        >
          <List
            itemLayout="horizontal"
            dataSource={sidebarUser}
            renderItem={(user: any, index: number) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<a href="#">{user?.name}</a>}
                  description={user?.email}
                />
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Sidebar;
