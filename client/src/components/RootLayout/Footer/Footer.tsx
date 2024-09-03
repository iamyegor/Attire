import AboutSection from "@/components/RootLayout/Footer/AboutSection.tsx";
import FooterSection from "@/components/RootLayout/Footer/FooterSection.tsx";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-8">
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 px-8 gap-y-10 gap-8">
                    <FooterSection
                        title="КОМПАНИИЯ"
                        links={[
                            { name: "О бренде", path: "/" },
                            { name: "Карьера", path: "/" },
                            { name: "Блог", path: "/" },
                            { name: "Контакты", path: "/" },
                        ]}
                    />
                    <FooterSection
                        title="ПРАВИЛА"
                        links={[
                            { name: "Политика конфиденциальности", path: "/" },
                            { name: "Публичная оферта", path: "/" },
                        ]}
                    />
                    <FooterSection
                        title="ПОКУПАТЕЛЮ"
                        links={[
                            { name: "Доставка", path: "/" },
                            { name: "Оплата", path: "/" },
                            { name: "Возврат", path: "/" },
                            { name: "Таблица размеров", path: "/" },
                        ]}
                    />
                    <AboutSection />
                </div>
                <div className="mt-8 text-center text-sm">© Attire 2024. Все права защищены.</div>
            </div>
        </footer>
    );
}
