import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const GroupContainer = styled(SafeAreaView)`
  background: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;
  padding: 24px;
`;
