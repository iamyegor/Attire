import { ComponentProps } from "react";
import Skeleton from "react-loading-skeleton";

export default function BaseSkeleton(props: ComponentProps<typeof Skeleton>) {
    return <Skeleton baseColor="#f0eded" highlightColor="#c9c9c9" {...props} />;
}
