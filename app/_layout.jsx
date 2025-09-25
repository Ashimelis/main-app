import { Drawer } from "expo-router/drawer";
import * as React from "react";
//import MyStack from "./index";



export default function RootLayout() {
  return (
    <Drawer>
        <Drawer.Screen name="LoginScreen"  
         Option={{
          drawerLabel: "Login",
          title: 'Login'
         }}/>
         <Drawer.Screen name="SignupScreen"  
         Option={{
          drawerLabel: "Signup",
          title: 'Signup'
         }}/>
         <Drawer.Screen name="HomeScreen"  
         Option={{
          drawerLabel: "Home",
          title: 'Home'
         }}/>
          <Drawer.Screen name="Loan"  
         Option={{
          drawerLabel: "LoanService",
          title: 'LoanService'
         }}/>
          <Drawer.Screen name="Saving"  
         Option={{
          drawerLabel: "Saving",
          title: 'Saving'
         }}/>
          <Drawer.Screen name="investment"  
         Option={{
          drawerLabel: "investment",
          title: 'investment'
         }}/>

      
    </Drawer>
  );
}
