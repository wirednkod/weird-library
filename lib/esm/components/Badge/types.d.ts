export interface BadgeProps {
    type: "info" | "success" | "warning" | "error" | "aqua" | "mint" | "white";
    text: string;
    fullWidth?: boolean;
    align?: "start" | "center" | "end";
}
