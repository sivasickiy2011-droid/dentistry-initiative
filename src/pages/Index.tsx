import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import { services, doctors } from '@/data/clinicData';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} doctors={doctors} services={services} />

      <section id="hero" className="relative bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Лечение и протезирование зубов<br />
                по Европейским стандартам
              </h1>
              <p className="text-2xl text-primary font-medium">
                Предоставим 2-3 плана качественного<br />
                лечения под ваш бюджет
              </p>
              <div className="space-y-4">
                <p className="text-xl text-foreground">
                  Запишитесь на <span className="text-primary font-semibold">бесплатную</span> первичную<br />
                  консультацию — диагностику зубов
                </p>
                <Button size="lg" className="px-8 py-6 text-lg rounded-full">
                  Записаться
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/8f4ed8de-9619-4619-adcb-dc4aee427d16.jpg"
                alt="Стоматологическое лечение"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-none bg-secondary/30 rounded-3xl">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon name="Calendar" size={32} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Работаем с 2011 года</h3>
                  <p className="text-foreground/70">
                    Многолетний опыт работы —<br />
                    залог качественного сервиса
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-secondary/30 rounded-3xl">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon name="Users" size={32} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Опытные врачи</h3>
                  <p className="text-foreground/70">
                    Огромный опыт персонала<br />
                    и слаженность работы
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-secondary/30 rounded-3xl">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon name="Fingerprint" size={32} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Уникальный подход</h3>
                  <p className="text-foreground/70">
                    Применяем в своей работе<br />
                    современные технологии
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Бесплатная консультация врача</h2>
            <p className="text-xl text-primary">
              На бесплатной консультации врач клиники проведет диагностику всех зубов:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-none shadow-lg rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/6437e4ee-1664-4079-a40f-3338f237e435.jpg"
                  alt="Диагностика полости рта"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Полный осмотр и диагностика<br />
                  полости рта
                </h3>
                <p className="text-muted-foreground text-sm">
                  При необходимости сделаем дополнительный<br />
                  снимок зубов, у нас в клинике
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/6437e4ee-1664-4079-a40f-3338f237e435.jpg"
                  alt="План лечения"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Составит 2-3 плана лечения<br />
                  на выбор
                </h3>
                <p className="text-muted-foreground text-sm">
                  Вы сможете выбрать подходящий план лечения,<br />
                  исходя из бюджета
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/6437e4ee-1664-4079-a40f-3338f237e435.jpg"
                  alt="Профессиональная гигиена"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  При необходимости проведем<br />
                  проф. гигиену
                </h3>
                <p className="text-muted-foreground text-sm">
                  Чистка зубов в 4 этапа
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="px-12 py-6 text-lg rounded-full">
              Записаться
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground">Наши услуги</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Семейный доктор. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
