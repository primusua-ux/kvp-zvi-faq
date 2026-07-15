// FAQ Data
const faqData = [
    {
        id: "faq-vos-list",
        category: "general",
        question: "За якими військово-обліковими спеціальностями проводиться підготовка?",
        answer: `<p>Підготовка офіцерів запасу здійснюється за такими військово-обліковими спеціальностями (ВОС):</p>
        <table class="faq-vos-table">
            <thead>
                <tr>
                    <th>Код</th>
                    <th>Назва спеціальності</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>063401</strong></td>
                    <td>Бойове застосування підрозділів БпАК тактичного класу</td>
                </tr>
                <tr>
                    <td><strong>093300</strong></td>
                    <td>Бойове застосування радіозв'язку спеціальної розвідки</td>
                </tr>
                <tr>
                    <td><strong>141000</strong></td>
                    <td>Бойове застосування з'єднань, в/ч і підрозділів, озброєних наземними засобами РЕБ</td>
                </tr>
                <tr>
                    <td><strong>300500</strong></td>
                    <td>Застосування військових частин і підрозділів технічного захисту інформації</td>
                </tr>
                <tr>
                    <td><strong>491100</strong></td>
                    <td>Експлуатація та ремонт засобів радіотехнічної розвідки</td>
                </tr>
            </tbody>
        </table>`
    },
    {
        id: "faq-1",
        category: "general",
        question: "Хто саме має право вступати на кафедру військової підготовки?",
        answer: `<p>Вступити на військову кафедру Житомирського військового інституту імені С. П. Корольова за програмою підготовки офіцерів запасу мають право:</p>
        <ul>
            <li><strong>Громадяни України</strong> (як чоловічої, так і жіночої статі);</li>
            <li><strong>Цивільні громадяни</strong>, які вже мають вищу освіту ступеня не нижче бакалавра, <strong>військовослужбовці</strong>, які мають або здобувають вищу освіту ступеня не нижче бакалавра;</li>
            <li>Придатні до військової служби за станом здоров'я та морально-діловими якостями;</li>
            <li>Віком <strong>до 60 років</strong> на момент отримання первинного офіцерського звання.</li>
        </ul>`
    },
    {
        id: "faq-3",
        category: "general",
        question: "Чи можуть чинні військовослужбовці проходити підготовку за цією програмою?",
        answer: `<p><strong>Так, це можливо.</strong> Військовослужбовці Збройних Сил України та інших військових формувань мають право навчатися за програмою підготовки офіцерів запасу за умови отримання <strong>письмового дозволу командира військової частини</strong>.</p>
        <p>Після успішного завершення навчання випускникам видаються сертифікати <strong>L1A</strong> (базовий курс) та <strong>L1B</strong> (фаховий курс), які засвідчують отримання професійної військової освіти офіцера тактичного рівня за обраною військово-обліковою спеціальністю.</p>`
    },
    {
        id: "faq-military-algorithm",
        category: "general",
        question: "Який алгоритм і послідовність дій військовослужбовця для вступу на навчання за цією програмою підготовки офіцерів?",
        answer: `<p>Для вступу на навчання чинним військовослужбовцям необхідно виконати такі кроки:</p>
        <ol>
            <li>Написати <strong>рапорт</strong> на ім'я командира своєї військової частини відповідно до <a href="https://drive.google.com/file/d/1LXUsQayZomRSRa2Fzpyzhj5UBUxBMrla/view" target="_blank" rel="noopener">зразка</a>;</li>
            <li>Рапорт має бути зареєстрований і на ньому має бути <strong>резолюція командира</strong> з дозволом на навчання;</li>
            <li>Зробити <strong>фото цього рапорта</strong> з дозволом командира;</li>
            <li>Власноруч написати <strong>заяву на вступ</strong> на навчання на ім'я голови відбіркової комісії відповідно до <a href="https://drive.google.com/file/d/15nOhUpsjAf81dUS7xF75c2ZgN5Jlo5-z/view?usp=sharing" target="_blank" rel="noopener">зразка</a>;</li>
            <li>Зробити <strong>фото цієї заяви</strong>;</li>
            <li>Зробити <strong>фото військового квитка</strong> (сторінки з фото, військовою частиною, де проходите службу, посадою, військовим званням);</li>
            <li>Зробити <strong>фото диплома</strong> про вищу освіту або <strong>довідки ЄДЕБО</strong>, якщо ви ще навчаєтесь (бакалавр або вище);</li>
            <li>Створити <strong>електронний документ .docx</strong>, у який вставити фотографії всіх вищезазначених документів (рапорт, заява, військовий квиток, диплом про вищу освіту). Назва документа має бути ПІБ_дата_народження.docx (наприклад, <code>Коваленко_Степан_Петрович_12051985.docx</code>);</li>
            <li>Пройти <strong>реєстрацію</strong> на сайті вступу, де обрати ВОС та прикріпити створений файл;</li>
            <li>Пройти <strong>психологічне тестування</strong> (три методики);</li>
            <li>Тестування <strong>&quot;Захист України&quot;</strong> військовослужбовцям проходити <strong>не треба</strong>;</li>
            <li>Отримати <strong>контракт на навчання</strong> у 2-х примірниках (прийде Новою поштою);</li>
            <li>Заповнити <strong>контракти</strong> (<a href="https://drive.google.com/file/d/1fpKGmA_ftcMRENMNiIEcolr5iVj8Au7a/view?usp=drive_link" target="_blank" rel="noopener">зразок заповнення</a>);</li>
            <li>Відправити <strong>обидва екземпляри контракту</strong> на навчання разом із <strong>заявою на вступ</strong> і <strong>роздрукованими копіями документів</strong> (рапорт, військовий квиток, диплом про вищу освіту) на відділення Нової пошти №10 у м. Житомирі (контактний телефон: <a href="tel:+380672807940">067 280 79 40</a>);</li>
            <li>Отримати <strong>підтвердження зарахування</strong> та <strong>оплатити навчання</strong> за наданими реквізитами.</li>
        </ol>`
    },
    {
        id: "faq-civilian-algorithm",
        category: "general",
        question: "Який алгоритм і послідовність дій цивільних громадян для вступу на навчання за цією програмою підготовки офіцерів?",
        answer: `<p>Для вступу на навчання цивільним громадянам необхідно виконати такі кроки:</p>
        <ol>
            <li>Зробіть <strong>фото документів</strong>: паспорта, довідки про присвоєння РНОКПП (ІПН), витягу з реєстру про реєстрацію місця проживання, військово-облікового документа, диплома про вищу освіту та <a href="https://drive.google.com/file/d/1Yym-JCw6i1rxdT6noPYb9gsBlGHCcDkY/view?usp=sharing" target="_blank" rel="noopener">заяви</a> на вступ, написаної від руки;</li>
            <li>Створити <strong>електронний документ .docx</strong>, у який вставити фотографії всіх вищезазначених документів (паспорт, код, реєстрація, військово-обліковий документ, диплом, заява). Назва документа має бути ПІБ_дата_народження.docx (наприклад, <code>Коваленко_Степан_Петрович_12051985.docx</code>);</li>
            <li>Пройти <strong>реєстрацію</strong> на сайті вступу, де обрати ВОС та прикріпити створений файл;</li>
            <li>Пройти <strong>психологічне тестування</strong> (три методики);</li>
            <li>Пройти <strong>тестування з предмета &quot;Захист України&quot;</strong> (тільки ті, у кого немає досвіду служби);</li>
            <li>Отримати <strong>направлення на ВЛК</strong> (прийде Новою поштою разом з контрактами на навчання);</li>
            <li>Пройти <strong>ВЛК</strong> та заповнити <strong>контракти</strong> (<a href="https://drive.google.com/file/d/1fpKGmA_ftcMRENMNiIEcolr5iVj8Au7a/view?usp=drive_link" target="_blank" rel="noopener">зразок заповнення</a>);</li>
            <li>Відправити <a href="#faq-5" style="color: var(--color-gold-light); text-decoration: underline;"><strong>документи</strong></a> (з переліку для особової справи) на відділення Нової пошти №10 у м. Житомирі (контактний телефон: <a href="tel:+380672807940">067 280 79 40</a>);</li>
            <li>Отримати <strong>підтвердження зарахування</strong> та оплатити навчання за наданими реквізитами.</li>
        </ol>`
    },
    {
        id: "faq-11",
        category: "education",
        question: "Чи можна поєднувати навчання на військовій кафедрі з роботою чи зі службою?",
        answer: `<p><strong>Так.</strong> Через те що навчання проходить за змішаною формою, воно може бути поєднане з роботою.</p>
        <p>Дистанційна частина навчання переважно відбувається у зручному для вас режимі: конкретний час для вивчення навчального матеріалу не встановлюється, визначаються лише дедлайни звітності.</p>
        <p>Основну частину очної частини навчання складає навчальний збір. Саме на нього вас викликає начальник вашого ТЦК та СП своїм наказом (військовослужбовців відряджає командир). <strong>Брати відпустку за власний рахунок або за графіком не потрібно.</strong> Відповідно до законодавства України (Закон України &laquo;Про військовий обов'язок і військову службу&raquo; ч. 3 ст. 29, КЗпП ч. 2 ст. 119) у разі такого виклику ви звільняєтесь від посадових обов'язків (незалежно від форми власності підприємства) і за вами зберігається посада і середня заробітна плата за весь термін навчального збору.</p>`
    },
    {
        id: "faq-13",
        category: "oath",
        question: "Яке звання присвоюється після завершення та чи обов'язково йти служити?",
        answer: `<p><strong>Якщо ви є цивільною особою:</strong></p>
        <p>Після завершення повного курсу військової підготовки, складання випускного іспиту та складання <strong>Військової присяги на вірність українському народові</strong> випускникам присвоюється первинне офіцерське звання — <strong>молодший лейтенант запасу</strong>.</p>
        <p>Випускники зараховуються в запас Збройних Сил України. Служба після закінчення кафедри <strong>не є обов'язковою</strong>. Офіцери запасу можуть за власним бажанням піти на контрактну службу в ЗСУ, СБУ, Нацгвардію, ДПСУ чи поліцію, або працювати на цивільних посадах.</p>
        <p>Якщо на момент присвоєння офіцерського звання ви маєте відстрочку або бронювання, вони продовжують діяти відповідно до законодавства України. Отримання звання не впливає на цей статус.</p>
        <p><strong>Якщо ви є чинним військовослужбовцем:</strong></p>
        <p>Після успішного завершення навчання випускникам видаються сертифікати <strong>L1A</strong> (базовий курс) та <strong>L1B</strong> (фаховий курс), які засвідчують отримання професійної військової освіти офіцера тактичного рівня за обраною військово-обліковою спеціальністю.</p>`
    },
    {
        id: "faq-10",
        category: "payment",
        question: "Чи є навчання на військовій кафедрі безкоштовним (бюджет)?",
        answer: `<p><strong>Ні.</strong> Навчання на кафедрі здійснюється виключно на платній основі — за рахунок коштів фізичних чи юридичних осіб (за контрактом). Вартість навчання фіксується у контракті і складає <strong>44 800 грн. за всю програму підготовки</strong>.</p>
        <p>Вартість навчання покриває, у тому числі, проживання, харчування, спорядження та медичне забезпечення під час навчального збору. Окремо вступник забезпечує лише власну польову форму одягу (&laquo;піксель&raquo; ЗСУ), з якою необхідно прибути на навчальний збір.</p>`
    },
    {
        id: "faq-10b",
        category: "payment",
        question: "Коли і в які строки потрібно сплатити за навчання?",
        answer: `<p>Оплата за навчання вноситься протягом <strong>двох тижнів</strong> після видання наказу начальника Військового інституту про зарахування на навчання за цією програмою підготовки офіцерів.</p>
        <p>Оплата здійснюється за реквізитами, які надає інститут разом із повідомленням про зарахування.</p>`
    },
    {
        id: "faq-9",
        category: "education",
        question: "Скільки триває навчання та в якій формі воно організоване?",
        answer: `<p>Навчання за інтенсивним курсом триває <strong>4 місяці</strong>.</p>
        <p>Етапи цього навчання та форми їх проведення (дистанційно чи очно) вказані в розділі <strong>&quot;Графік навчального процесу&quot;</strong> у верхній частині цієї сторінки.</p>`
    },
    {
        id: "faq-6",
        category: "documents",
        question: "До якого числа приймаються заяви та документи на вступ?",
        answer: `<p>Набір уже триває. Подання документів і тестування здійснюються онлайн. Завершення прийому документів — <strong>15 серпня</strong>. Початок навчання — <strong>1 вересня</strong>.</p>
        <p>Ми наполегливо рекомендуємо проходити реєстрацію та тестування онлайн якомога раніше, оскільки проходження медичної комісії (ВЛК) в ТЦК та СП часто потребує здачі додаткових аналізів і може тривати від кількох днів до двох-трьох тижнів.</p>`
    },
    {
        id: "faq-2",
        category: "general",
        question: "Чи можуть жінки проходити військову підготовку на кафедрі?",
        answer: `<p><strong>Так, звичайно.</strong> Громадяни України жіночої статі залучаються до військової підготовки на рівних правах із чоловіками. Усі вимоги щодо вступу, проходження медичної комісії (ВЛК) та вимоги до навчання є однаковими для всіх кандидатів.</p>`
    },
    {
        id: "faq-4",
        category: "general",
        question: "Як проходить конкурсний відбір і які тести потрібно скласти?",
        answer: `<p>Конкурсний відбір для вступу на військову кафедру ЖВІ наразі проводиться дистанційно (онлайн) і включає такі складові:</p>
        <ol>
            <li><strong>Психологічне тестування</strong> на спеціалізованому сайті інституту для визначення вашої професійно-психологічної придатності до військової служби;</li>
            <li><strong>Тест з предмета &quot;Захист України&quot;</strong>, який також складається в онлайн-форматі на освітній платформі інституту для перевірки базових знань (тільки для тих, хто не має досвіду служби).</li>
        </ol>
        <p>Усі необхідні посилання для реєстрації та проходження тестувань доступні в розділі <strong>&quot;Етапи вступу крок за кроком&quot;</strong> (кроки 3 та 4) у верхній частині цієї сторінки.</p>`
    },
    {
        id: "faq-5",
        category: "documents",
        question: "Які документи та копії потрібно підготувати для формування особової справи? <span style=\"font-weight: 400; font-size: 0.9em; opacity: 0.85; display: inline-block;\">(військовослужбовцям не потрібно)</span>",
        answer: `<p>Для формування особової справи з метою присвоєння наказом Міністра оборони України військового звання &quot;молодший лейтенант запасу&quot; необхідно підготувати такі документи:</p>
        <p><strong>Загальні вимоги до копій документів:</strong> усі копії виконуються на папері формату <strong>А4</strong> у <strong>портретній орієнтації</strong>, на одній стороні листа. Поля: <strong>ліве — 30 мм</strong>, верхнє і нижнє — 15 мм, праве — 10 мм або більше. Усі документи на копіях розташовуються <strong>вертикально</strong>. Усі записи мають бути <strong>читабельними</strong>.</p>
        <ol>
            <li>Заява на вступ на навчання за цією програмою підготовки офіцерів (написана власноруч) — <strong>1 примірник</strong>;</li>
            <li>Ксерокопія паспорта (1, 2 стор.) або ID-картка з двох сторін — <strong>2 примірники</strong>;</li>
            <li>Довідка про місце реєстрації — <strong>2 примірники</strong>;</li>
            <li>Копія Довідки про присвоєння ідентифікаційного номера (ІПН) — <strong>2 примірники</strong>;</li>
            <li>Копія Свідоцтва про народження — <strong>1 примірник</strong>;</li>
            <li>Довідка ВЛК (оригінал) — <strong>1 примірник</strong>;</li>
            <li>Копія довідки ВЛК — <strong>1 примірник</strong>;</li>
            <li>Контракт про навчання на військовій кафедрі — <strong>2 примірники</strong>;</li>
            <li>Ксерокопія військового облікового документу (приписне свідоцтво, військовий квиток, Резерв+) — <strong>1 примірник</strong>;</li>
            <li>Фотокартка у польовій військовій формі одягу ЗСУ (піксель, на формі має бути вказане прізвище) 3х4 см, матові з білим кутом — <strong>6 примірників</strong>;</li>
            <li>Фотокартка у польовій військовій формі одягу ЗСУ (піксель, на формі має бути вказане прізвище) 9x11 см, глянцеві — <strong>2 примірники</strong>;</li>
            <li>Копія Диплома про вищу освіту з додатками (завірені нотаріально або в деканаті вишу) — <strong>1 примірник</strong>;</li>
            <li>Копія Диплома про вищу освіту (незавірена, звичайна) — <strong>1 примірник</strong>;</li>
            <li>Автобіографія написана власноруч (підписана власноруч) — <strong>1 примірник</strong>;</li>
            <li>Автобіографія друкована (підписана власноруч) — <strong>1 примірник</strong>;</li>
            <li>Копії: свідоцтва про шлюб, свідоцтв про народження дітей — <strong>по 1 примірнику</strong> (при наявності).</li>
        </ol>
        <p>Ви можете скористатися інтерактивним <strong>Переліком документів</strong> праворуч на цій сторінці (внизу, при перегляді зі смартфону), щоб відзначати готові довідки та роздрукувати персональний перелік.</p>`
    },
    {
        id: "faq-7",
        category: "vlk",
        question: "Як проходить військово-лікарська комісія (ВЛК) і де отримати направлення? <span style=\"font-weight: 400; font-size: 0.9em; opacity: 0.85; display: inline-block;\">(військовослужбовцям не потрібно)</span>",
        answer: `<p>Процедура проходження медичної комісії наступна:</p>
        <ol>
            <li>Після повного проходження всіх етапів вступу на <a href="https://sites.google.com/view/kvpzvi/" class="step-link" target="_blank" rel="noopener">сайті вступу</a> ми надаємо вам направлення на проходження ВЛК;</li>
            <li>З цим направленням ви звертаєтеся до районного (міського) ТЦК та СП (військкомату) за місцем вашого перебування на військовому обліку або проживання;</li>
            <li>Здаєте обов'язкові аналізи та отримуєте сертифікати від нарколога і психіатра;</li>
            <li>Проходите огляд у профільних лікарів ВЛК при ТЦК та СП;</li>
            <li>Отримуєте остаточний висновок ВЛК у вигляді довідки із записом: <strong>&quot;Придатний до військової служби&quot;</strong> або <strong>&quot;Придатний до служби у військових частинах забезпечення, ТЦК та СП, ВНЗ, установах, організаціях, навчальних центрах&quot;</strong>;</li>
            <li>Оригінал та копію цієї довідки ви надсилаєте в інститут разом з копіями вказаних документів.</li>
        </ol>`
    },
    {
        id: "faq-8",
        category: "vlk",
        question: "Чи можна пройти ВЛК у приватній клініці?",
        answer: `<p><strong>Ні, не можна.</strong> Відповідно до законодавства України, придатність до військової служби або навчання на військовій кафедрі визначається виключно військово-лікарськими комісіями при територіальних центрах комплектування та соціальної підтримки (ТЦК та СП). Результати медичних оглядів у приватних клініках ТЦК не затверджує, проте ви можете використовувати аналізи з приватних лабораторій для пред'явлення лікарям ВЛК.</p>`
    },
    {
        id: "faq-8b",
        category: "vlk",
        question: "Який строк дії висновку військово-лікарської комісії?",
        answer: `<p>У воєнний час термін дії висновку ВЛК для військовозобов'язаних становить <strong>один рік</strong>. У військово-обліковому документі, який формується у застосунку &laquo;Резерв+&raquo;, зазначено дату проходження ВЛК та її висновки.</p>
        <p><strong>Важливо:</strong> якщо від дати проходження ВЛК до орієнтовного строку присвоєння вам звання молодшого лейтенанта запасу наказом Міністра оборони України минає більше ніж 12 місяців, вам необхідно буде пройти ВЛК повторно за нашим направленням.</p>`
    },
    {
        id: "faq-10c",
        category: "payment",
        question: "Чи повертаються кошти, якщо я припиню навчання або буду відрахований?",
        answer: `<p><strong>Ні.</strong> У разі відрахування за академічну заборгованість або добровільного припинення навчання кошти за навчання не повертаються. Ці умови передбачені контрактом на навчання.</p>`
    },
    {
        id: "faq-11b",
        category: "education",
        question: "Що буде, якщо я не складу залік або модульний контроль?",
        answer: `<p>Кожна навчальна дисципліна передбачає певний вид звітності. Незакриття цієї звітності вважається <strong>академічною заборгованістю</strong> і може бути причиною відрахування з програми підготовки офіцерів запасу.</p>
        <p>У разі відрахування за академічну заборгованість кошти за навчання не повертаються.</p>`
    },
    {
        id: "faq-11c",
        category: "payment",
        question: "Звідки взяти бланк контракту і як його подати?",
        answer: `<p>Бланк контракту надається разом із направленням на військово-лікарську комісію. Його необхідно заповнити зі свого боку у <strong>двох примірниках</strong> і надіслати в інститут разом із довідкою про проходження ВЛК та копіями інших документів, які вказані у чек-листі на цьому сайті.</p>`
    },
    {
        id: "faq-12",
        category: "oath",
        question: "Що таке навчальний збір і коли він проводиться?",
        answer: `<p><strong>Навчальний збір (збори)</strong> — це практичний етап навчання військової підготовки. Він проводиться на фінальному етапі навчання.</p>
        <p>Під час збору студенти перебувають на казарменому або табірному становищі, проходять вогневу підготовку із бойовими стрільбами на полігоні, вивчають експлуатацію техніки, відпрацьовують тактичні прийоми у польових умовах та готуються до випускних іспитів.</p>
        <p>Усі учасники навчального збору безкоштовно забезпечуються комфортними умовами проживання, повноцінним триразовим харчуванням, медичним обслуговуванням, засобами індивідуального захисту, зброєю та необхідним технічним приладдям.</p>
        <p><strong>Важливо:</strong> прибути на навчальний збір необхідно з власною польовою формою одягу відповідно до сезону (забарвлення «піксель» ЗСУ).</p>`
    },
    {
        id: "faq-14",
        category: "general",
        question: "Чи дає навчання на кафедрі відстрочку від мобілізації?",
        answer: `<p><strong>Ні.</strong> Сам по собі факт навчання на кафедрі за програмою підготовки офіцерів запасу не є підставою для відстрочки від мобілізації відповідно до Закону України &laquo;Про мобілізаційну підготовку та мобілізацію&raquo;.</p>`
    },
    {
        id: "faq-15",
        category: "general",
        question: "Чи можуть мобілізувати під час навчання або після присвоєння звання?",
        answer: `<p>Статус офіцера запасу не звільняє від військового обов'язку. Після зарахування в запас особа перебуває на військовому обліку і може бути призвана за мобілізацією на загальних підставах, <strong>вже як офіцер</strong>.</p>
        <p>Винятком є жінки: вони не підлягають призову за мобілізацією і можуть проходити військову службу виключно за власним бажанням на контрактній основі.</p>`
    },
    {
        id: "faq-16",
        category: "documents",
        question: "На яку адресу надсилати документи для кафедри?",
        answer: `<p>Усі документи для кафедри військової підготовки надсилайте поштою за такими реквізитами:</p>
        <ul>
            <li><strong>Місто:</strong> м. Житомир</li>
            <li><strong>Відділення:</strong> Нова Пошта, відділення № 10</li>
            <li><strong>Телефон отримувача:</strong> 067 280 79 40</li>
        </ul>
        <p><strong>Важливо:</strong> вартість доставки оплачує відправник (тобто ви). Рекомендуємо надсилати документи з оголошеною цінністю та описом вкладення.</p>
        <p>Після відправки обов'язково повідомте про це у <strong>WhatsApp за тим самим номером: <a href="https://wa.me/380672807940" target="_blank" rel="noopener">067 280 79 40</a></strong>.</p>`
    }
];

// Document Elements
const faqListContainer = document.getElementById("faq-list");
const categoryTabsContainer = document.getElementById("category-tabs");
const searchInput = document.getElementById("faq-search");
const searchClearBtn = document.getElementById("search-clear-btn");
const noResultsState = document.getElementById("no-results");
const resetSearchBtn = document.getElementById("reset-search-btn");
const searchHighlightText = document.getElementById("search-query-highlight");
const checklistContainer = document.getElementById("checklist-items");
const printChecklistBtn = document.getElementById("btn-print-checklist");
const resetChecklistBtn = document.getElementById("btn-reset-checklist");
const printDatePlaceholder = document.getElementById("print-date-placeholder");

// App State
let currentCategory = "all";
let searchQuery = "";

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    renderFAQ();
    initTabs();
    initSearch();
    initChecklist();
    initPrint();
    generateFAQSchema();
    initBackToTop();
    handleHashLinks();
});

// Render FAQ items based on search and category filters
function renderFAQ() {
    faqListContainer.innerHTML = "";
    
    const filteredData = faqData.filter(item => {
        const matchesCategory = currentCategory === "all" || item.category === currentCategory;
        const matchesSearch = searchQuery === "" || 
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.answer.toLowerCase().includes(searchQuery.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });

    if (filteredData.length === 0) {
        faqListContainer.classList.add("hidden");
        noResultsState.classList.remove("hidden");
        searchHighlightText.textContent = searchQuery;
        return;
    }

    faqListContainer.classList.remove("hidden");
    noResultsState.classList.add("hidden");

    filteredData.forEach(item => {
        const faqItem = document.createElement("div");
        let accentClass = "";
        if (item.id === "faq-military-algorithm") {
            accentClass = " faq-item-accented";
        } else if (item.id === "faq-civilian-algorithm") {
            accentClass = " faq-item-accented-olive";
        }
        faqItem.className = "faq-item" + accentClass;
        faqItem.id = item.id;

        // Apply highlighting to text if search query exists
        let questionText = item.question;
        let answerText = item.answer;

        if (searchQuery !== "") {
            questionText = highlightText(questionText, searchQuery);
            answerText = highlightText(answerText, searchQuery);
        }

        faqItem.innerHTML = `
            <button class="faq-question-btn" aria-expanded="false">
                <span>${questionText}</span>
                <svg class="faq-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            <div class="faq-answer-wrapper">
                <div class="faq-answer-content">
                    ${answerText}
                </div>
            </div>
        `;

        // Click event for Accordion
        const questionBtn = faqItem.querySelector(".faq-question-btn");
        const answerWrapper = faqItem.querySelector(".faq-answer-wrapper");

        questionBtn.addEventListener("click", () => {
            const isActive = faqItem.classList.contains("active");
            
            // Calculate height change of elements above the clicked one before closing them
            let offsetHeightAdjustment = 0;
            const header = document.querySelector(".main-header");
            const headerHeight = header ? header.offsetHeight : 0;
            const margin = 16; // 16px breathing margin

            document.querySelectorAll(".faq-item.active").forEach(activeItem => {
                if (activeItem !== faqItem) {
                    // Check if the active item is above the clicked item
                    if (activeItem.getBoundingClientRect().top < faqItem.getBoundingClientRect().top) {
                        offsetHeightAdjustment += activeItem.querySelector(".faq-answer-wrapper").scrollHeight;
                    }
                    
                    // Close the active item
                    activeItem.classList.remove("active");
                    activeItem.querySelector(".faq-question-btn").setAttribute("aria-expanded", "false");
                    activeItem.querySelector(".faq-answer-wrapper").style.height = "0";
                }
            });

            if (isActive) {
                faqItem.classList.remove("active");
                questionBtn.setAttribute("aria-expanded", "false");
                answerWrapper.style.height = "0";
            } else {
                faqItem.classList.add("active");
                questionBtn.setAttribute("aria-expanded", "true");
                const contentHeight = faqItem.querySelector(".faq-answer-content").scrollHeight;
                answerWrapper.style.height = `${contentHeight}px`;

                // Scroll to the final position of the element (adjusting for collapsed items above and header height)
                const elementPosition = faqItem.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offsetHeightAdjustment - headerHeight - margin;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });

        faqListContainer.appendChild(faqItem);
    });
}

// Highlight matched search terms
function highlightText(text, search) {
    if (!search) return text;
    
    // Regular expression to find search query case-insensitively, keeping HTML tags intact
    // This handles matches outside HTML tag structures
    const regex = new RegExp(`(${escapeRegExp(search)})`, "gi");
    
    // Simplistic text replacement (works well for simple markup)
    // We match text content and avoid replacing inside HTML tags like <strong class="...">
    const parts = text.split(/(<[^>]*>)/g);
    return parts.map(part => {
        if (part.startsWith("<") && part.endsWith(">")) {
            return part; // Don't highlight HTML tags
        }
        return part.replace(regex, `<mark class="highlight">$1</mark>`);
    }).join("");
}

// Helper to escape regex special characters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Initialize Category Tabs
function initTabs() {
    const tabButtons = categoryTabsContainer.querySelectorAll(".tab-btn");
    
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class from all tabs
            tabButtons.forEach(b => b.classList.remove("active"));
            
            // Add active class to clicked tab
            btn.classList.add("active");
            
            // Update state and render
            currentCategory = btn.getAttribute("data-category");
            renderFAQ();
        });
    });
}

// Initialize Search Functionality
function initSearch() {
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        
        if (searchQuery.length > 0) {
            searchClearBtn.style.display = "flex";
        } else {
            searchClearBtn.style.display = "none";
        }
        
        renderFAQ();
    });

    searchClearBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        searchClearBtn.style.display = "none";
        renderFAQ();
        searchInput.focus();
    });

    resetSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        searchClearBtn.style.display = "none";
        renderFAQ();
    });
}

// Initialize Document Checklist
function initChecklist() {
    const checkboxes = checklistContainer.querySelectorAll('input[type="checkbox"]');
    
    // Load saved states from localStorage
    checkboxes.forEach(checkbox => {
        const docId = checkbox.getAttribute("data-id");
        const isChecked = localStorage.getItem(docId) === "true";
        checkbox.checked = isChecked;

        checkbox.addEventListener("change", (e) => {
            localStorage.setItem(docId, e.target.checked);
        });
    });

    // Reset Checklist Button
    resetChecklistBtn.addEventListener("click", () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            const docId = checkbox.getAttribute("data-id");
            localStorage.removeItem(docId);
        });
    });
}

// Generate FAQPage schema.org JSON-LD and inject into <head>
function generateFAQSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
            }
        }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
}

// Back-to-top button
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialize Print Action for Checklist
function initPrint() {
    printChecklistBtn.addEventListener("click", () => {
        // Set current date in Ukrainian format for print layout
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formatter = new Intl.DateTimeFormat('uk-UA', options);
        printDatePlaceholder.textContent = `Створено: ${formatter.format(today)}`;
        
        // Open print dialogue
        window.print();
    });
}

// Handle hash links pointing to FAQ items
function handleHashLinks() {
    const expandAndScrollTo = (targetId) => {
        // 1. Switch category first if necessary
        const itemData = faqData.find(item => item.id === targetId);
        if (itemData && currentCategory !== "all" && itemData.category !== currentCategory) {
            // Switch to the correct category or "all"
            const tabBtn = document.querySelector(`.category-btn[data-category="${itemData.category}"]`) || 
                           document.querySelector('.category-btn[data-category="all"]');
            if (tabBtn) {
                tabBtn.click(); // Re-renders FAQ synchronously
            }
        }
        
        // 2. If search query is active and filters out our item, clear it
        if (searchQuery !== "") {
            const searchInput = document.getElementById("faq-search");
            if (searchInput) {
                searchInput.value = "";
                searchQuery = "";
                renderFAQ(); // Re-renders FAQ synchronously
            }
        }

        // 3. Get the fresh element from DOM after any rendering is complete
        const targetItem = document.getElementById(targetId);
        if (targetItem) {
            // Expand the item
            const questionBtn = targetItem.querySelector('.faq-question-btn');
            if (questionBtn && !targetItem.classList.contains('active')) {
                questionBtn.click();
            } else if (questionBtn) {
                // Already expanded, just scroll to it
                const header = document.querySelector(".main-header");
                const headerHeight = header ? header.offsetHeight : 0;
                const margin = 16;
                const elementPosition = targetItem.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - margin;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    };

    const handleHash = () => {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#faq-')) {
            expandAndScrollTo(hash.substring(1));
        }
    };

    // Listen to hashchange
    window.addEventListener('hashchange', handleHash);
    
    // Intercept clicks on links pointing to FAQ items
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('#faq-')) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Set the hash without triggering default jumping
            history.pushState(null, null, `#${targetId}`);
            
            // Run expansion and scrolling
            expandAndScrollTo(targetId);
        }
    });
    
    // Check hash on page load after components render
    setTimeout(handleHash, 400);
}

/* =========================================
   Chatbot Integration Logic
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    let chatHistory = [];

    // Toggle Chat Window
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('hidden');
            if (!chatbotWindow.classList.contains('hidden')) {
                chatbotInput.focus();
            }
        });
    }

    if (chatbotClose) {
        chatbotClose.addEventListener('click', () => {
            chatbotWindow.classList.add('hidden');
        });
    }

    // Handle Sending Messages
    const sendMessage = async () => {
        const text = chatbotInput.value.trim();
        if (!text) return;

        // Add user message
        addMessage(text, 'user');
        chatbotInput.value = '';

        // Add to history
        chatHistory.push({ role: 'user', text });

        // Show typing indicator
        const typingId = showTypingIndicator();

        try {
            const response = await fetch('/.netlify/functions/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text, history: chatHistory })
            });

            const data = await response.json();
            removeTypingIndicator(typingId);

            if (data.reply) {
                addMessage(data.reply, 'bot');
                chatHistory.push({ role: 'model', text: data.reply });
            } else if (data.error) {
                addMessage(`Помилка: ${data.error}`, 'bot');
            } else {
                addMessage(`Вибачте, виникла невідома помилка. Деталі: ${JSON.stringify(data)}`, 'bot');
            }
        } catch (error) {
            removeTypingIndicator(typingId);
            addMessage('Вибачте, не вдалося з\'єднатися з сервером. Спробуйте пізніше.', 'bot');
            console.error('Chat error:', error);
        }
    };

    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendMessage);
    }
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    // Helpers
    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}-message`;
        
        // Convert basic markdown
        let htmlText = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>');
        
        msgDiv.innerHTML = htmlText;
        chatbotMessages.appendChild(msgDiv);
        scrollToBottom();
    }

    function showTypingIndicator() {
        const id = 'typing-' + Date.now();
        const msgDiv = document.createElement('div');
        msgDiv.className = 'typing-indicator';
        msgDiv.id = id;
        msgDiv.innerHTML = '<span></span><span></span><span></span>';
        chatbotMessages.appendChild(msgDiv);
        scrollToBottom();
        return id;
    }

    function removeTypingIndicator(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }

    function scrollToBottom() {
        if (chatbotMessages) {
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    }
});
