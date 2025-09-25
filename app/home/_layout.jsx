import React from "react";
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        Option={{
          title: "Home",
          
        }}
      />
      <Tabs.Screen
        name="Networks"
        Option={{
          title: "Connection",
         
        }}
        
      />
      <Tabs.Screen
        name="Post"
        Option={{
          title: "Posts",
          
        }}
        
      />
      <Tabs.Screen
        name="notices"
        Option={{
          title: "Notification",
          
        }}
      />
    </Tabs>
  );
}
