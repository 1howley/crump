interface ArrowProps {
    direction: "left" | "right";
}

export const Arrow: React.FC<ArrowProps> = ({ direction }) => {
    return (
        <span style={{ color: "var(--color-main)" }} className="text-xl">
            {direction === "left" ? "<" : ">"}
        </span>
    );
}