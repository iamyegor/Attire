import useAboutSectionTranslation from "./hooks/useAboutSectionTranslation";

export default function AboutSection() {
    const t = useAboutSectionTranslation();

    return (
        <div className="space-y-7">
            <h3 className="font-medium italic text-3xl">{t.title}</h3>
            <p>{t.description}</p>
            <div className="flex space-x-3 text-sm xl:text-base whitespace-nowrap">
                <p className="font-semibold italic">{t.phoneNumber}</p>
                <p className="text-neutral-400">{t.workingHours}</p>
            </div>
        </div>
    );
}
