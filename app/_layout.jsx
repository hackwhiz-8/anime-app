
import { Stack } from "expo-router"
// import { Provider } from "react-redux";

// import store from "../components/Redux/Store";
export default function RootLayout() {


  return (


      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)"
          options={{
            headerShown: false
          }}
        />

      </Stack >



  );
}
