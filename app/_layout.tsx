import { Stack } from "expo-router";
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
        <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="startPage" />
      <Stack.Screen name="(tabs)" />
    </Stack>
    </GestureHandlerRootView>
    
  );
}
