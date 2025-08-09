import { CustomDarkTheme, CustomLightTheme } from "@/constants/Colors";
import { ThemeProvider } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { Appearance } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabLayout() {
  const deviceTheme = Appearance.getColorScheme();
  return (
    <PaperProvider>
        <SafeAreaProvider>
        <ThemeProvider value={deviceTheme === 'dark' ? CustomDarkTheme : CustomLightTheme}>
        <Tabs>
            <Tabs.Screen name="library" options={{ title: "Library", headerShown: false }} />
            <Tabs.Screen name="index" options={{ title: "Home", headerShown: false }} />
            <Tabs.Screen name="chat" options={{ title: "Chat", headerShown: false }} />
        </Tabs>
        </ThemeProvider>
        </SafeAreaProvider>
    </PaperProvider>
  );
}