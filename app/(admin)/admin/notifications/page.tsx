import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const messages = [
  {
    id: 1,
    sender: "John Doe",
    content: "Hello, I have a question about my order.",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "Jane Smith",
    content: "When will my package be shipped?",
    time: "11:45 AM",
  },
  {
    id: 3,
    sender: "Bob Johnson",
    content: "I need to change my shipping address.",
    time: "1:15 PM",
  },
  {
    id: 4,
    sender: "Alice Brown",
    content: "Is this product in stock?",
    time: "2:30 PM",
  },
  {
    id: 5,
    sender: "Charlie Davis",
    content: "Can I get a refund for my order?",
    time: "3:45 PM",
  },
];

export default function Messages() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Messages</h1>
        <Button>Compose New Message</Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card className="col-span-1 bg-gray-900 border-none text-white">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Search messages..."
              className="mb-4 bg-inherit"
            />
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="flex items-center space-x-4 p-2 hover:bg-gray-800 rounded cursor-pointer"
                >
                  <Avatar>
                    <AvatarImage
                      src={`https://api.dicebear.com/6.x/initials/svg?seed=${message.sender}`}
                    />
                    <AvatarFallback>
                      {message.sender
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {message.sender}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {message.content}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400">{message.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2 bg-gray-900 border-none text-white">
          <CardHeader>
            <CardTitle>Message Thread</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-4">
              {messages.map((message) => (
                <div key={message.id} className="flex space-x-4">
                  <Avatar>
                    <AvatarImage
                      src={`https://api.dicebear.com/6.x/initials/svg?seed=${message.sender}`}
                    />
                    <AvatarFallback>
                      {message.sender
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{message.sender}</span>
                      <span className="text-xs text-gray-400">
                        {message.time}
                      </span>
                    </div>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <Textarea
                placeholder="Type your message..."
                className="flex-1 bg-inherit"
              />
              <Button>Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
