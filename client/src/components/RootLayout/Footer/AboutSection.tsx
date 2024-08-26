import gDigitalLogo from "@/assets/g-digital-logo.png";

export default function AboutSection() {
    return (
        <div className="space-y-7">
            <h3 className="font-medium italic text-3xl">Мы - Attire</h3>
            <p>
                Attire — это удобный интернет-магазин, предлагающий одежду для любых случаев жизни и
                погодных условий. Наша продукция помогает покупателям выразить свою индивидуальность
                и создавать уникальные образы. Мы стремимся сделать ваш шопинг комфортным и
                приятным.
            </p>
            <div className="flex space-x-3 text-sm xl:text-base whitespace-nowrap">
                <p className="font-semibold italic">8 800 777-4-999</p>
                <p className="text-neutral-400">7:00 – 22:00 МСК</p>
            </div>
            <div className="font-bold flex items-center space-x-2">
                <img className="w-14 h-14" src={gDigitalLogo} alt="G Digital логотип" />
                <a href="https://kwork.ru/user/gdigital_development" className="underline">
                    Разработано командой GDigital
                </a>
            </div>
        </div>
    );
}
