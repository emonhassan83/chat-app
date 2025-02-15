import { Avatar, List } from "antd";
import { DeleteOutlined, ShareAltOutlined } from "@ant-design/icons";

const ChatArea = ({ allMessage, user, handleDeleteMessage }: any) => {
  return (
    <div className="h-[78%] overflow-y-auto bg-[#f9f9f9] p-4">
      {/* Date Tag */}
      <div className="py-2 sticky flex justify-center">
        <p className="rounded-3xl px-4 py-2 bg-gray-200 text-xs">Today</p>
      </div>

      {allMessage?.map((item: any, index: number) => (
        <List.Item
          className={`w-full mb-2 flex ${
            item?.sender?._id === user._id ? "justify-end" : "justify-start"
          }`}
          key={index}
        >
          {/* Chat Bubble & Avatar Container */}
          <div
            className={`flex items-end gap-2 w-[70%] ${
              item?.sender?._id === user._id ? "flex-row-reverse" : ""
            }`}
          >
            {/* Avatar */}
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
            />

            {/* Message Bubble */}
            <div className="bg-white p-3 rounded-lg shadow-md w-full flex flex-col">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item?.sender?.name}</p>
                  <p className="text-gray-600 text-sm">{item.message}</p>
                </div>
              </div>

              {/* Action Icons & Timestamp */}
              <div className="flex flex-row-reverse justify-between items-center mt-2">
                <div
                  className={`flex gap-2 text-gray-500 ${
                    item?.sender?._id === user._id ? "flex-row-reverse" : ""
                  }`}
                >
                  <ShareAltOutlined className="cursor-pointer" />
                  <DeleteOutlined className="cursor-pointer" />
                </div>

                {/* Timestamp */}
                <p className="text-xs text-gray-400">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
              </div>
            </div>
          </div>
        </List.Item>
      ))}
    </div>
  );
};

export default ChatArea;
