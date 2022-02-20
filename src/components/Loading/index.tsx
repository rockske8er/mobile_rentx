import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

interface LoadingProps {}

function Loading({}: LoadingProps) {
  const { Colors } = useTheme();
  return (
    <ActivityIndicator color={Colors.Main} size={"large"} style={{ flex: 1 }} />
  );
}

export { Loading };
