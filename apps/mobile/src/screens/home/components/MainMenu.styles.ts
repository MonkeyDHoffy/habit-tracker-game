import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../theme/colors";
import { spacing } from "../../../theme/spacing";

export const createMainMenuStyles = (colors: ThemeColors) =>
	StyleSheet.create({
		header: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
		},
		toggleHint: {
			color: colors.subtitle,
		},
		menuContent: {
			gap: spacing.sm,
			marginTop: spacing.sm,
		},
	});