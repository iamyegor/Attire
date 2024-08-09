import { Link } from "react-router-dom";

interface IconLinkProps {
    to: string;
    SvgIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}


export default function HeaderIconLink({ to, SvgIcon }: IconLinkProps) {
    return (
        <Link to={to}>
            <SvgIcon className="w-5 h-5" />
        </Link>
    );
}
