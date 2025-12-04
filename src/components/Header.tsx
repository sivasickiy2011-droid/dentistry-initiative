import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  image: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
  price: string;
}

interface HeaderProps {
  scrollToSection: (id: string) => void;
  doctors: Doctor[];
  services: Service[];
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="bg-white py-4 px-6 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-xs font-semibold uppercase leading-tight">семейный</div>
                <div className="text-xs font-semibold uppercase leading-tight">доктор</div>
              </div>
            </div>
            <div>
              <div className="text-primary text-lg font-semibold">Стоматологическая</div>
              <div className="text-primary text-lg font-semibold">клиника</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Адрес:</div>
              <div className="text-sm font-medium">г. Коломна, ул. Октябрьской</div>
              <div className="text-sm font-medium">революции, д. 181</div>
            </div>

            <div className="text-center">
              <div className="text-sm text-muted-foreground">Время работы</div>
              <div className="text-sm font-medium">Работаем без выходных</div>
              <div className="text-sm font-medium">с 9:00 до 21:00</div>
            </div>

            <div className="flex gap-2">
              <Button size="icon" variant="default" className="rounded-full bg-green-500 hover:bg-green-600">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button size="icon" variant="default" className="rounded-full">
                <Icon name="Send" size={20} />
              </Button>
            </div>

            <div className="text-right">
              <div className="text-lg font-bold">+7 (496) 614-15-15</div>
              <div className="text-lg font-bold">+7 (926) 025-57-67</div>
              <button className="text-sm text-primary hover:underline">Перезвоните мне</button>
            </div>
          </div>
        </div>

        <nav className="mt-6 flex justify-center gap-8 text-primary font-medium">
          <button onClick={() => scrollToSection('hero')} className="hover:text-primary/80 transition-colors">Главная</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-primary/80 transition-colors">Акции</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-primary/80 transition-colors">Услуги</button>
          <button onClick={() => scrollToSection('doctors')} className="hover:text-primary/80 transition-colors">Врачи</button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-primary/80 transition-colors">Отзывы</button>
          <button onClick={() => scrollToSection('licenses')} className="hover:text-primary/80 transition-colors">Лицензии</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-primary/80 transition-colors">О клинике</button>
          <button onClick={() => scrollToSection('contacts')} className="hover:text-primary/80 transition-colors">Контакты</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
