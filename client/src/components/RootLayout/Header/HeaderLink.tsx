import React from "react";
import { Link } from "react-router-dom";

interface HeaderLinkProps {
    to: string;
    children: React.ReactNode;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onClick: () => void;
}

function HeaderLink({ to, children, onMouseEnter, onMouseLeave, onClick }: HeaderLinkProps) {
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
            <Link to={`catalog/${to}`} className="text-base font-medium">
                {children}
            </Link>
        </div>
    );
}

export default HeaderLink;
