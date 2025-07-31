import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate] = useState(8.9);

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
                   (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return Math.round(payment);
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    amount: '',
    purpose: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Building2" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">КредитТраст</h1>
                <p className="text-sm text-gray-600">Надежно и выгодно</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#products" className="text-gray-700 hover:text-primary transition-colors">Кредиты</a>
              <a href="#calculator" className="text-gray-700 hover:text-primary transition-colors">Калькулятор</a>
              <a href="#application" className="text-gray-700 hover:text-primary transition-colors">Заявка</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Кредиты с <span className="text-primary">гарантией надежности</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Получите кредит на выгодных условиях всего за 15 минут. 
              Минимум документов, максимум доверия.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать кредит
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Icon name="FileText" className="mr-2" size={20} />
                Подать заявку
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 animate-slide-up">
            {[
              { icon: 'Users', value: '250 000+', label: 'Довольных клиентов' },
              { icon: 'Clock', value: '15 мин', label: 'Среднее время одобрения' },
              { icon: 'Shield', value: '99.9%', label: 'Уровень безопасности' },
              { icon: 'TrendingDown', value: 'от 6.9%', label: 'Процентная ставка' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon as any} className="text-primary" size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши кредитные продукты</h2>
            <p className="text-xl text-gray-600">Выберите подходящий вариант для ваших потребностей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Потребительский кредит',
                description: 'Универсальный кредит на любые цели',
                rate: 'от 7.9%',
                amount: 'до 3 млн ₽',
                term: 'до 7 лет',
                features: ['Без залога', 'Быстрое одобрение', 'Гибкие условия'],
                color: 'primary'
              },
              {
                title: 'Микрозайм',
                description: 'Быстрые займы на короткий срок',
                rate: 'от 0.8%',
                amount: 'до 100 тыс ₽',
                term: 'до 365 дней',
                features: ['Мгновенное одобрение', 'Онлайн оформление', 'Первый займ 0%'],
                color: 'secondary'
              },
              {
                title: 'Автокредит',
                description: 'Кредит на покупку автомобиля',
                rate: 'от 6.9%',
                amount: 'до 5 млн ₽',
                term: 'до 7 лет',
                features: ['Без первоначального взноса', 'Страхование включено', 'Быстрое оформление'],
                color: 'primary'
              }
            ].map((product, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 animate-scale-in">
                <div className={`absolute top-0 left-0 w-full h-1 bg-${product.color}`}></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                      <CardDescription className="text-gray-600">{product.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className={`bg-${product.color}/10 text-${product.color}`}>
                      {product.rate}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Сумма:</span>
                      <div className="font-semibold">{product.amount}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Срок:</span>
                      <div className="font-semibold">{product.term}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" className="text-secondary" size={16} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full bg-${product.color} hover:bg-${product.color}/90`}>
                    Подать заявку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-900">Кредитный калькулятор</CardTitle>
              <CardDescription className="text-lg">
                Рассчитайте ежемесячный платеж и переплату по кредиту
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Сумма кредита</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="text-lg"
                  />
                  <div className="text-sm text-gray-500">
                    {loanAmount.toLocaleString('ru-RU')} ₽
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="term">Срок кредита (месяцы)</Label>
                  <Select value={loanTerm.toString()} onValueChange={(value) => setLoanTerm(Number(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[6, 12, 18, 24, 36, 48, 60, 72, 84].map(term => (
                        <SelectItem key={term} value={term.toString()}>
                          {term} мес ({Math.round(term/12*10)/10} лет)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Процентная ставка</Label>
                  <div className="text-2xl font-bold text-primary">{interestRate}% годовых</div>
                  <div className="text-sm text-gray-500">Персональная ставка</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Ежемесячный платеж</div>
                    <div className="text-3xl font-bold text-primary">
                      {calculateMonthlyPayment().toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Общая сумма</div>
                    <div className="text-2xl font-semibold text-gray-900">
                      {(calculateMonthlyPayment() * loanTerm).toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Переплата</div>
                    <div className="text-2xl font-semibold text-gray-700">
                      {(calculateMonthlyPayment() * loanTerm - loanAmount).toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Подать заявку на эту сумму
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-900">Подать заявку на кредит</CardTitle>
              <CardDescription className="text-lg">
                Заполните форму и получите решение за 15 минут
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Полное имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Иванов Иван Иванович"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="ivan@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="form-amount">Желаемая сумма *</Label>
                    <Input
                      id="form-amount"
                      type="number"
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                      placeholder="500000"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="purpose">Цель кредита</Label>
                    <Select value={formData.purpose} onValueChange={(value) => setFormData({...formData, purpose: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите цель" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Личные нужды</SelectItem>
                        <SelectItem value="auto">Покупка автомобиля</SelectItem>
                        <SelectItem value="home">Ремонт/покупка жилья</SelectItem>
                        <SelectItem value="business">Развитие бизнеса</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" className="text-primary mt-0.5" size={20} />
                    <div className="text-sm text-gray-700">
                      <p className="font-medium mb-1">Для рассмотрения заявки потребуется:</p>
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        <li>Паспорт гражданина РФ</li>
                        <li>Справка о доходах (2-НДФЛ или справка по форме банка)</li>
                        <li>Трудовая книжка или трудовой договор</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 py-3">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают КредитТраст?</h2>
            <p className="text-xl opacity-90">Надежность, проверенная временем</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Shield',
                title: 'Полная безопасность',
                description: 'Данные защищены 256-битным шифрованием'
              },
              {
                icon: 'Clock',
                title: 'Быстрое решение',
                description: 'Рассмотрение заявки за 15 минут'
              },
              {
                icon: 'UserCheck',
                title: 'Индивидуальный подход',
                description: 'Персональные условия для каждого клиента'
              },
              {
                icon: 'Headphones',
                title: 'Поддержка 24/7',
                description: 'Консультации в любое время'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Building2" size={24} />
                </div>
                <span className="text-xl font-bold">КредитТраст</span>
              </div>
              <p className="text-gray-400 text-sm">
                Надежный партнер в мире финансов. Лицензия ЦБ РФ №123456
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Потребительские кредиты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Микрозаймы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Автокредиты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия кредитования</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>8 (800) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@kredittrust.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Москва, ул. Финансовая, 1</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 КредитТраст. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}