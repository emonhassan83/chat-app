import { Avatar, List } from "antd";
import { DeleteOutlined, ShareAltOutlined } from "@ant-design/icons";

const userChats = [
  {
    title: "User Chat 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    time: "10:30 AM",
  },
];

const otherChats = [
  {
    title: "Other Chat 1",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    time: "10:35 AM",
  },
];

const ChatArea = () => {
  return (
    <div className="h-[78%] overflow-y-auto bg-[#f9f9f9] p-4">
      {/* Date Tag */}
      <div className="py-2 sticky flex justify-center">
        <p className="rounded-3xl px-4 py-2 bg-gray-200 text-xs">Today</p>
      </div>

      {/* User Messages (Right-aligned) */}
      <List
        itemLayout="horizontal"
        dataSource={userChats}
        renderItem={(item, index) => (
          <List.Item className="flex justify-end w-full">
            <div className="flex items-end max-w-[100%] w-full justify-end gap-2">
              <div className="bg-white p-3 rounded-lg shadow-md max-w-[80%] relative flex flex-col">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  {/* Share & Delete Icons */}
                </div>

                <div className="flex flex-row-reverse gap-2 mt-3 text-gray-500">
                  <ShareAltOutlined className="cursor-pointer" />
                  <DeleteOutlined className="cursor-pointer" />
                </div>
                <p className="text-xs text-gray-400 -mt-4">{item.time}</p>
              </div>
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            </div>
          </List.Item>
        )}
      />

      {/* Other Messages (Left-aligned) */}
      <List
        itemLayout="horizontal"
        dataSource={otherChats}
        renderItem={(item, index) => (
          <List.Item className="flex justify-start w-full">
            <div className="flex items-end max-w-[100%] w-full justify-start gap-2">
              {/* Avatar */}
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
              <div className="bg-white p-3 rounded-lg shadow-md max-w-[80%] relative flex flex-col">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
                {/* Share & Delete Icons */}
                <div className="flex flex-row-reverse gap-2 text-gray-500 mt-3">
                  <ShareAltOutlined className="cursor-pointer" />
                  <DeleteOutlined className="cursor-pointer" />
                </div>
                <p className="text-xs text-gray-400 -mt-2">{item.time}</p>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ChatArea;
