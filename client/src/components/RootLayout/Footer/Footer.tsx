import AboutSection from "@/components/RootLayout/Footer/AboutSection.tsx";
import FooterSection from "@/components/RootLayout/Footer/FooterSection.tsx";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 px-8 gap-y-10 gap-8">
                <FooterSection
                    title="КОМПАНИИЯ"
                    links={[
                        { name: "О бренде", path: "/about" },
                        { name: "Карьера", path: "/careers" },
                        { name: "Блог", path: "/blog" },
                        { name: "Контакты", path: "/contact" },
                    ]}
                />
                <FooterSection
                    title="ПРАВИЛА"
                    links={[
                        { name: "Политика конфиденциальности", path: "/privacy-policy" },
                        { name: "Публичная оферта", path: "/public-offer" },
                    ]}
                />
                <FooterSection
                    title="ПОКУПАТЕЛЮ"
                    links={[
                        { name: "Доставка", path: "/shipping" },
                        { name: "Оплата", path: "/payment" },
                        { name: "Возврат", path: "/returns" },
                        { name: "Таблица размеров", path: "/size-chart" },
                    ]}
                />
                <AboutSection />
            </div>
            <div className="mt-8 text-center text-sm">© Attire 2024. Все права защищены.</div>
        </footer>
    );
}
