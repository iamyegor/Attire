import AboutSection from "@/components/RootLayout/Footer/AboutSection/AboutSection";
import FooterSection from "@/components/RootLayout/Footer/FooterSection";
import useFooterTranslation from "./hooks/useFooterTranslation";

export default function Footer() {
    const t = useFooterTranslation();

    return (
        <footer className="bg-neutral-900 text-white py-8">
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 px-8 gap-y-10 gap-8">
                    <FooterSection
                        title={t.company}
                        links={[
                            { name: t.about, path: "/" },
                            { name: t.career, path: "/" },
                            { name: t.blog, path: "/" },
                            { name: t.contacts, path: "/" },
                        ]}
                    />
                    <FooterSection
                        title={t.rules}
                        links={[
                            { name: t.privacyPolicy, path: "/" },
                            { name: t.publicOffer, path: "/" },
                        ]}
                    />
                    <FooterSection
                        title={t.forBuyer}
                        links={[
                            { name: t.delivery, path: "/" },
                            { name: t.payment, path: "/" },
                            { name: t.returns, path: "/" },
                            { name: t.sizeChart, path: "/" },
                        ]}
                    />
                    <AboutSection />
                </div>
                <div className="mt-8 text-center text-sm">{t.rights}</div>
            </div>
        </footer>
    );
}
