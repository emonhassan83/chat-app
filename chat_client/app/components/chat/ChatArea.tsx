import { Avatar, List } from "antd";

const data = Array.from({ length: 20 }, (_, i) => ({
  title: `User Chat ${i + 1}`,
}));

const ChatArea = () => {
  return (
    <div
      style={{ flex: "1 0 0" }}
      className="h-[78%] overflow-y-auto bg-[#f9f9f9]"
    >
      <div className="py-2 z-20 sticky flex justify-center mx-auto">
        <p className="block rounded-3xl px-4 py-2 bg-gray-200 text-xs">Today</p>
      </div>

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item style={{ backgroundColor: "white", margin: "6px", borderRadius: "10px" }}>
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
  );
};

export default ChatArea;
