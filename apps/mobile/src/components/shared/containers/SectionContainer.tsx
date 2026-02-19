import { ReactNode } from "react";
import { View } from "react-native";
import AppText from "../typography/AppText";
import AppCard from "../cards/AppCard";
import { sectionContainerStyles } from "./SectionContainer.styles";

type SectionContainerProps = {
  title: string;
  children: ReactNode;
};

export default function SectionContainer({ title, children }: SectionContainerProps) {
  return (
    <AppCard>
      {/* Section title at the top of the card */}
      <AppText variant="sectionTitle">{title}</AppText>
      {/* Content area for anything inside this section */}
      <View style={sectionContainerStyles.content}>{children}</View>
    </AppCard>
  );
}