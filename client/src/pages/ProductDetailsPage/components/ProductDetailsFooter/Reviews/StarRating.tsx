import { LinearProgress } from "@mui/material";

interface StarRatingProps {
    label: string;
    count: number;
    totalStars: number;
}

export default function StarRating({ label, count, totalStars }: StarRatingProps) {
    const progressValue = (count / totalStars) * 100;

    return (
        <div className="flex items-center space-x-3">
            <span className="text-nowrap w-[108px]">{label}</span>
            <LinearProgress
                variant="determinate"
                value={progressValue}
                sx={{
                    width: "100%",
                    height: "8px",
                    borderRadius: "6px",
                    backgroundColor: "#DADADA",
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: "#FFA800",
                        borderRadius: "2px",
                    },
                }}
            />
            <span>{count}</span>
        </div>
    );
}
