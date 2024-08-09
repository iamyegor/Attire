import { Link } from "react-router-dom";

interface LinkItem {
    name: string;
    path: string;
}

export default function FooterSection({ title, links }: { title: string; links: LinkItem[] }) {
    return (
        <div>
            <h3 className="font-bold text-lg mb-4">{title}</h3>
            <ul className="space-y-3 max-w-22">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link to={link.path} className="hover:underline text-wrap">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
