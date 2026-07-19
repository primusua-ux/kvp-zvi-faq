/* =========================================
   Audience state (persona switcher)
   ========================================= */
const AUDIENCE_KEY = "kvpAudience"; // "civilian" | "military" | null (= "all")
let currentAudience = localStorage.getItem(AUDIENCE_KEY) || null;

function setAudience(value) {
    currentAudience = value === "all" ? null : value;
    if (currentAudience) {
        localStorage.setItem(AUDIENCE_KEY, currentAudience);
    } else {
        localStorage.removeItem(AUDIENCE_KEY);
    }
    applyAudienceUI();
}

function applyAudienceUI() {
    document.querySelectorAll(".persona-card").forEach(card => {
        card.classList.toggle("active", card.dataset.setAudience === currentAudience);
    });

    renderRoadmap();
    renderChecklist();
    renderFAQ();
    updateCopy();
}

function initAudienceSwitcher() {
    document.querySelectorAll("[data-set-audience]").forEach(el => {
        el.addEventListener("click", () => setAudience(el.dataset.setAudience));
    });
    applyAudienceUI();
}

// Text that changes depending on chosen audience
function updateCopy() {
    const roadmapLead = document.getElementById("roadmap-lead");
    const faqLead = document.getElementById("faq-lead");
    const checklistTitle = document.getElementById("checklist-title");
    const checklistDesc = document.getElementById("checklist-desc");
    const checklistCopyReqs = document.getElementById("checklist-copy-reqs");
    const printDocTitle = document.getElementById("print-doc-title");
    const timelineLead = document.getElementById("timeline-lead");
    const timelineFinalDesc = document.getElementById("timeline-final-desc");

    if (currentAudience === "civilian") {
        roadmapLead.textContent = "Ваш план як цивільного громадянина - від документів до зарахування.";
        faqLead.textContent = "Питання, які стосуються саме вас як цивільного вступника.";
        checklistTitle.textContent = "Перелік документів для особової справи (тільки для цивільних громадян)";
        checklistDesc.textContent = "Позначте документи, які вже підготували, та роздрукуйте перелік для відправки в інститут після отримання довідки ВЛК.";
        checklistCopyReqs.style.display = "";
        printDocTitle.textContent = "Список документів, які надаються для особової справи";
        timelineLead.textContent = "Ваш графік навчання.";
        timelineFinalDesc.textContent = "Складання випускного екзамену та Військової присяги на вірність українському народові.";
    } else if (currentAudience === "military") {
        roadmapLead.textContent = "Ваш план як військовослужбовця - рапорт з дозволом командира є вашою підставою для вступу.";
        faqLead.textContent = "Питання, які стосуються саме вас як військовослужбовця.";
        checklistTitle.textContent = "Перелік документів для військовослужбовця";
        checklistDesc.textContent = "Це весь пакет документів, який вам потрібен для вступу.";
        checklistCopyReqs.style.display = "none";
        printDocTitle.textContent = "Список документів військовослужбовця для вступу";
        timelineLead.textContent = "Ваш графік навчання.";
        timelineFinalDesc.textContent = "Складання випускного екзамену.";
    } else {
        roadmapLead.textContent = "Оберіть статус вище, щоб побачити персональний покроковий план. Нижче показані обидва варіанти поруч.";
        faqLead.textContent = "Показані всі питання - і спільні, і для цивільних, і для військовослужбовців.";
        checklistTitle.textContent = "Перелік документів вступника";
        checklistDesc.textContent = "Оберіть статус вище, щоб побачити саме ваш перелік. Нижче показано обидва варіанти.";
        checklistCopyReqs.style.display = "";
        printDocTitle.textContent = "Список документів, які надаються для особової справи";
        timelineLead.textContent = "Однаковий для всіх вступників, незалежно від статусу.";
        timelineFinalDesc.textContent = "Іспит складають усі. Присягу - лише ті випускники, які її не складали.";
    }
}

/* =========================================
   Roadmap data & rendering
   ========================================= */
const roadmapCivilian = [
    { title: "Зробіть фото документів", text: "Паспорт, довідка ІПН, довідка про реєстрацію місця проживання, військово-обліковий документ, диплом, власноруч написана заява." },
    { title: "Вставте всі фото в один файл .docx", text: "Назва файлу: ПІБ_дата_народження.docx (наприклад, Коваленко_Степан_Петрович_12051985.docx)." },
    { title: "Реєстрація на сайті вступу", text: "Оберіть ВОС і прикріпіть створений файл.", link: { href: "https://sites.google.com/view/kvpzvi/", text: "сайт вступу" } },
    { title: "Психологічне тестування", text: "Три методики онлайн на сайті інституту." },
    { title: "Тест «Захист України»", text: "Тільки для тих, у кого немає досвіду служби." },
    { title: "ВЛК за направленням", text: "Направлення на ВЛК прийде Новою поштою разом з контрактами.", faq: "faq-vlk-1" },
    { title: "Контракти та повний пакет документів", text: "Заповніть 2 примірники контракту й надішліть повний перелік документів.", faq: "faq-docs-civilian" },
    { title: "Зарахування та оплата", text: "Оплатіть <a href=\"#faq-10\" class=\"step-link\">вартість навчання</a> протягом двох тижнів після наказу про зарахування." }
];

const roadmapMilitary = [
    { title: "Рапорт командиру частини", text: "Напишіть рапорт за зразком, зареєструйте його та отримайте резолюцію-дозвіл на навчання. Сфотографуйте рапорт з дозволом.", link: { href: "https://drive.google.com/file/d/1LXUsQayZomRSRa2Fzpyzhj5UBUxBMrla/view", text: "зразок рапорту" } },
    { title: "Заява, військовий квиток, диплом", text: "Власноруч напишіть заяву на ім'я голови відбіркової комісії, сфотографуйте військовий квиток і диплом (або довідку ЄДЕБО).", link: { href: "https://drive.google.com/file/d/15nOhUpsjAf81dUS7xF75c2ZgN5Jlo5-z/view?usp=sharing", text: "зразок заяви" } },
    { title: "Вставте всі фото в один файл .docx", text: "Назва файлу: ПІБ_дата_народження.docx (наприклад, Коваленко_Степан_Петрович_12051985.docx)." },
    { title: "Реєстрація на сайті вступу", text: "Оберіть ВОС і прикріпіть створений файл.", link: { href: "https://sites.google.com/view/kvpzvi/", text: "сайт вступу" } },
    { title: "Психологічне тестування", text: "Три методики онлайн. Тест «Захист України» військовослужбовцям проходити не потрібно." },
    { title: "Контракт Новою поштою", text: "Отримайте 2 примірники контракту, заповніть і надішліть разом із заявою та копіями документів." },
    { title: "Зарахування та оплата", text: "Оплатіть <a href=\"#faq-payment-military\" class=\"step-link\">вартість навчання</a> протягом двох тижнів після наказу про зарахування." }
];

const roadmapCommon = [
    { title: "Підготовка документів", text: "Пакет документів залежить від статусу - див. ваш план вище після вибору статусу." },
    { title: "Реєстрація", text: "Пройдіть реєстрацію на сайті вступу, оберіть ВОС.", link: { href: "https://sites.google.com/view/kvpzvi/", text: "сайт вступу" } },
    { title: "Психологічне тестування", text: "Три методики онлайн на сайті інституту." },
    { title: "Тест «Захист України»", text: "Тільки для тих, хто не має досвіду служби (цивільні без досвіду)." },
    { title: "ВЛК (тільки цивільним)", text: "Військовослужбовцям проходити не потрібно." },
    { title: "Надсилання документів", text: "Контракт та інші документи - на відділення Нової пошти №10 у Житомирі." },
    { title: "Зарахування та оплата", text: "Оплата 44 800 грн протягом двох тижнів після наказу про зарахування." }
];

function renderRoadmap() {
    const grid = document.getElementById("roadmap-grid");
    const title = document.getElementById("roadmap-title");
    grid.innerHTML = "";

    let steps, accentClass;
    if (currentAudience === "civilian") {
        steps = roadmapCivilian; accentClass = "card-civilian";
        title.textContent = "Ваші кроки вступу (цивільний громадянин)";
    } else if (currentAudience === "military") {
        steps = roadmapMilitary; accentClass = "card-military";
        title.textContent = "Ваші кроки вступу (військовослужбовець)";
    } else {
        steps = roadmapCommon; accentClass = "";
        title.textContent = "Загальні кроки вступу";
    }

    steps.forEach((step, i) => {
        const card = document.createElement("div");
        card.className = "roadmap-card" + (accentClass ? " " + accentClass : "");
        const linkHtml = step.link ? ` <a href="${step.link.href}" class="step-link" target="_blank" rel="noopener">${step.link.text}</a>` : "";
        card.innerHTML = `
            <div class="roadmap-step">${i + 1}</div>
            <div class="roadmap-content">
                <h3>${step.title}</h3>
                <p>${step.text}${linkHtml}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* =========================================
   Checklist data & rendering
   ========================================= */
const checklistCivilian = [
    { id: "doc-application", text: "Заява на вступ на навчання за цією програмою підготовки офіцерів (написана власноруч) - <strong>1 шт.</strong>" },
    { id: "doc-passport", text: "Ксерокопія паспорта (1, 2 стор.) або ID-картка з двох сторін - <strong>2 шт.</strong>" },
    { id: "doc-registration", text: "Довідка про місце реєстрації - <strong>2 шт.</strong>" },
    { id: "doc-inn", text: "Копія Довідки про присвоєння ідентифікаційного номера (ІПН) - <strong>2 шт.</strong>" },
    { id: "doc-birth-cert", text: "Копія Свідоцтва про народження - <strong>1 шт.</strong>" },
    { id: "doc-vlk-orig", text: "Довідка ВЛК (оригінал) - <strong>1 шт.</strong>" },
    { id: "doc-vlk-copy", text: "Копія довідки ВЛК - <strong>1 шт.</strong>" },
    { id: "doc-contract", text: "Контракт про навчання на військовій кафедрі - <strong>2 шт.</strong>" },
    { id: "doc-military-record", text: "Ксерокопія військового облікового документу (приписне свідоцтво, військовий квиток, Резерв+) - <strong>1 шт.</strong>" },
    { id: "doc-photos-small", text: "Фотокартка у польовій військовій формі одягу ЗСУ (піксель, з прізвищем) 3х4 см, матові з білим кутом - <strong>6 шт.</strong>" },
    { id: "doc-photos-large", text: "Фотокартка у польовій військовій формі одягу ЗСУ (піксель, з прізвищем) 9x11 см, глянцеві - <strong>2 шт.</strong>" },
    { id: "doc-diploma-certified", text: "Копія Диплома про вищу освіту з додатками (завірені нотаріально або в деканаті вишу) - <strong>1 шт.</strong>" },
    { id: "doc-diploma-ordinary", text: "Копія Диплома про вищу освіту (незавірена, звичайна) - <strong>1 шт.</strong>" },
    { id: "doc-autobiography-handwritten", text: "Автобіографія написана власноруч (підписана власноруч) - <strong>1 шт.</strong>" },
    { id: "doc-autobiography-typed", text: "Автобіографія друкована (підписана власноруч) - <strong>1 шт.</strong>" },
    { id: "doc-family-certs", text: "Копії: свідоцтва про шлюб, свідоцтв про народження дітей - <strong>по 1 шт.</strong> (за наявності)" }
];

const checklistMilitary = [
    { id: "mil-doc-report", text: "Рапорт на ім'я командира військової частини з резолюцією-дозволом на навчання (фото) - <strong>1 компл.</strong>" },
    { id: "mil-doc-application", text: "Заява на вступ на ім'я голови відбіркової комісії, написана власноруч (фото) - <strong>1 шт.</strong>" },
    { id: "mil-doc-military-id", text: "Фото військового квитка (сторінки з фото, частиною, посадою, званням) - <strong>1 шт.</strong>" },
    { id: "mil-doc-diploma", text: "Фото диплома про вищу освіту або довідки ЄДЕБО (якщо ще навчаєтесь) - <strong>1 шт.</strong>" },
    { id: "mil-doc-contract", text: "Контракт про навчання на військовій кафедрі (надійде Новою поштою, заповнити) - <strong>2 прим.</strong>" }
];

function renderChecklist() {
    const container = document.getElementById("checklist-items");
    container.innerHTML = "";

    let items;
    if (currentAudience === "civilian") {
        items = checklistCivilian;
    } else if (currentAudience === "military") {
        items = checklistMilitary;
    } else {
        items = [...checklistCivilian.map(i => ({ ...i, group: "Цивільний громадянин" })), ...checklistMilitary.map(i => ({ ...i, group: "Військовослужбовець" }))];
    }

    let lastGroup = null;
    items.forEach(item => {
        if (item.group && item.group !== lastGroup) {
            lastGroup = item.group;
            const heading = document.createElement("div");
            heading.style.cssText = "font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.05em; color: var(--color-gold-light); margin-top: 8px;";
            heading.textContent = lastGroup;
            container.appendChild(heading);
        }

        const label = document.createElement("label");
        label.className = "checklist-item";
        label.innerHTML = `
            <input type="checkbox" data-id="${item.id}">
            <span class="custom-checkbox">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
            <span class="checklist-text">${item.text}</span>
        `;
        container.appendChild(label);
    });

    initChecklistState();
}

function initChecklistState() {
    const checkboxes = document.querySelectorAll("#checklist-items input[type=\"checkbox\"]");
    checkboxes.forEach(checkbox => {
        const docId = checkbox.getAttribute("data-id");
        checkbox.checked = localStorage.getItem("chk_" + docId) === "true";
        checkbox.addEventListener("change", (e) => {
            localStorage.setItem("chk_" + docId, e.target.checked);
        });
    });
}

/* =========================================
   FAQ data (audience: "all" | "civilian" | "military")
   ========================================= */
const faqData = [
    {
        id: "faq-vos-list",
        category: "general",
        audience: "all",
        question: "За якими військово-обліковими спеціальностями проводиться підготовка?",
        answer: `<p>Підготовка офіцерів здійснюється за такими військово-обліковими спеціальностями (ВОС):</p>
        <table class="faq-vos-table">
            <thead><tr><th>Код</th><th>Назва спеціальності</th></tr></thead>
            <tbody>
                <tr><td><strong>063401</strong></td><td>Бойове застосування підрозділів БпАК тактичного класу</td></tr>
                <tr><td><strong>093300</strong></td><td>Бойове застосування радіозв'язку спеціальної розвідки</td></tr>
                <tr><td><strong>141000</strong></td><td>Бойове застосування з'єднань, в/ч і підрозділів, озброєних наземними засобами РЕБ</td></tr>
                <tr><td><strong>300500</strong></td><td>Застосування військових частин і підрозділів технічного захисту інформації</td></tr>
                <tr><td><strong>491100</strong></td><td>Експлуатація та ремонт засобів радіотехнічної розвідки</td></tr>
            </tbody>
        </table>`
    },
    {
        id: "faq-1",
        category: "general",
        audience: "all",
        question: "Хто саме має право вступати на кафедру військової підготовки?",
        answer: `<p>Вступити на військову кафедру ЖВІ ім. С. П. Корольова за програмою підготовки офіцерів запасу мають право:</p>
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
        audience: "military",
        question: "Чи можуть чинні військовослужбовці проходити підготовку за цією програмою?",
        answer: `<p><strong>Так, це можливо.</strong> Військовослужбовці Збройних Сил України та інших військових формувань мають право навчатися за програмою підготовки офіцерів запасу за умови отримання <strong>письмового дозволу командира військової частини</strong> (рапорт).</p>
        <p>Після успішного завершення навчання видаються сертифікати <strong>L1A</strong> (базовий курс) та <strong>L1B</strong> (фаховий курс), що засвідчують отримання професійної військової освіти офіцера тактичного рівня за обраною ВОС і дають підставу для призначення на офіцерську посаду з присвоєнням відповідного військового звання.</p>`
    },
    {
        id: "faq-military-algorithm",
        category: "general",
        audience: "military",
        question: "Повний алгоритм дій для військовослужбовця",
        answer: `<p>Для вступу на навчання чинним військовослужбовцям необхідно виконати такі кроки:</p>
        <ol>
            <li>Написати <strong>рапорт</strong> на ім'я командира своєї військової частини відповідно до <a href="https://drive.google.com/file/d/1LXUsQayZomRSRa2Fzpyzhj5UBUxBMrla/view" target="_blank" rel="noopener">зразка</a>;</li>
            <li>Рапорт має бути зареєстрований і на ньому має бути <strong>резолюція командира</strong> з дозволом на навчання;</li>
            <li>Зробити <strong>фото цього рапорта</strong> з дозволом командира;</li>
            <li>Власноруч написати <strong>заяву на вступ</strong> на ім'я голови відбіркової комісії відповідно до <a href="https://drive.google.com/file/d/15nOhUpsjAf81dUS7xF75c2ZgN5Jlo5-z/view?usp=sharing" target="_blank" rel="noopener">зразка</a>;</li>
            <li>Зробити <strong>фото цієї заяви</strong>;</li>
            <li>Зробити <strong>фото військового квитка</strong> (сторінки з фото, військовою частиною, де проходите службу, посадою, військовим званням);</li>
            <li>Зробити <strong>фото диплома</strong> про вищу освіту або <strong>довідки ЄДЕБО</strong>, якщо ви ще навчаєтесь (бакалавр або вище);</li>
            <li>Створити <strong>електронний документ .docx</strong> з фотографіями всіх документів (рапорт, заява, військовий квиток, диплом). Назва файлу - ПІБ_дата_народження.docx (наприклад, <code>Коваленко_Степан_Петрович_12051985.docx</code>);</li>
            <li>Пройти <strong>реєстрацію</strong> на сайті вступу, обрати ВОС і прикріпити файл;</li>
            <li>Пройти <strong>психологічне тестування</strong> (три методики);</li>
            <li>Тестування <strong>«Захист України»</strong> військовослужбовцям проходити <strong>не треба</strong>;</li>
            <li>Отримати <strong>контракт на навчання</strong> у 2-х примірниках (прийде Новою поштою);</li>
            <li>Заповнити <strong>контракти</strong> (<a href="https://drive.google.com/file/d/1fpKGmA_ftcMRENMNiIEcolr5iVj8Au7a/view?usp=drive_link" target="_blank" rel="noopener">зразок заповнення</a>);</li>
            <li>Відправити <strong>обидва екземпляри контракту</strong> разом із <strong>заявою на вступ</strong> і <strong>роздрукованими копіями документів</strong> (рапорт, військовий квиток, диплом) на відділення Нової пошти №10 у м. Житомирі (<a href="tel:+380672807940">067 280 79 40</a>);</li>
            <li>Отримати <strong>підтвердження зарахування</strong> та <strong>оплатити навчання</strong> за наданими реквізитами.</li>
        </ol>
        <p><strong>Важливо:</strong> це весь необхідний пакет документів на цьому етапі - рапорт з дозволом командира є вашою підставою для вступу.</p>`
    },
    {
        id: "faq-civilian-algorithm",
        category: "general",
        audience: "civilian",
        question: "Повний алгоритм дій для цивільного громадянина",
        answer: `<p>Для вступу на навчання цивільним громадянам необхідно виконати такі кроки:</p>
        <ol>
            <li>Зробіть <strong>фото документів</strong>: паспорта, довідки про присвоєння РНОКПП (ІПН), витягу з реєстру про реєстрацію місця проживання, військово-облікового документа, диплома про вищу освіту та <a href="https://drive.google.com/file/d/1Yym-JCw6i1rxdT6noPYb9gsBlGHCcDkY/view?usp=sharing" target="_blank" rel="noopener">заяви</a> на вступ, написаної від руки;</li>
            <li>Створити <strong>електронний документ .docx</strong> з фотографіями всіх документів (паспорт, код, реєстрація, військово-обліковий документ, диплом, заява). Назва файлу - ПІБ_дата_народження.docx (наприклад, <code>Коваленко_Степан_Петрович_12051985.docx</code>);</li>
            <li>Пройти <strong>реєстрацію</strong> на сайті вступу, обрати ВОС і прикріпити файл;</li>
            <li>Пройти <strong>психологічне тестування</strong> (три методики);</li>
            <li>Пройти <strong>тестування з предмета «Захист України»</strong> (тільки ті, у кого немає досвіду служби);</li>
            <li>Отримати <strong>направлення на ВЛК</strong> (прийде Новою поштою разом з контрактами на навчання);</li>
            <li>Пройти <strong>ВЛК</strong> та заповнити <strong>контракти</strong> (<a href="https://drive.google.com/file/d/1fpKGmA_ftcMRENMNiIEcolr5iVj8Au7a/view?usp=drive_link" target="_blank" rel="noopener">зразок заповнення</a>);</li>
            <li>Відправити <a href="#faq-docs-civilian" style="color: var(--color-gold-light); text-decoration: underline;"><strong>повний пакет документів</strong></a> для особової справи на відділення Нової пошти №10 у м. Житомирі (<a href="tel:+380672807940">067 280 79 40</a>);</li>
            <li>Отримати <strong>підтвердження зарахування</strong> та оплатити навчання за наданими реквізитами.</li>
        </ol>`
    },
    {
        id: "faq-combine-civilian",
        category: "education",
        audience: "civilian",
        question: "Чи можна поєднувати навчання на військовій кафедрі з роботою?",
        answer: `<p><strong>Так.</strong> Навчання проходить за змішаною формою, тому може бути поєднане з роботою.</p>
        <p>Дистанційна частина відбувається у зручному для вас режимі: конкретний час не встановлюється, є лише дедлайни звітності.</p>
        <p>На навчальний збір вас викликає начальник вашого ТЦК та СП своїм наказом. <strong>Брати відпустку за власний рахунок або за графіком не потрібно.</strong> Відповідно до Закону України «Про військовий обов'язок і військову службу» (ч. 3 ст. 29) та КЗпП (ч. 2 ст. 119), на час збору за вами зберігається посада і середня заробітна плата.</p>`
    },
    {
        id: "faq-combine-military",
        category: "education",
        audience: "military",
        question: "Чи можна поєднувати навчання на військовій кафедрі зі службою?",
        answer: `<p><strong>Так.</strong> Навчання проходить за змішаною формою, тому може бути поєднане зі службою.</p>
        <p>Дистанційна частина відбувається у зручному для вас режимі: конкретний час не встановлюється, є лише дедлайни звітності.</p>
        <p>На навчальний збір вас відряджає командир вашої частини своїм наказом.</p>`
    },
    {
        id: "faq-rank-civilian",
        category: "oath",
        audience: "civilian",
        question: "Яке звання присвоюється після завершення та чи обов'язково йти служити?",
        answer: `<p>Після завершення курсу, складання випускного іспиту та Військової присяги на вірність українському народові присвоюється первинне офіцерське звання - <strong>молодший лейтенант запасу</strong>.</p>
        <p>Служба після закінчення кафедри <strong>не є обов'язковою</strong>: можна за бажанням піти на контрактну службу в ЗСУ, СБУ, Нацгвардію, ДПСУ чи поліцію, або працювати на цивільних посадах. Якщо на момент присвоєння звання діє відстрочка або бронювання, вони продовжують діяти.</p>`
    },
    {
        id: "faq-10",
        category: "payment",
        audience: "civilian",
        question: "Чи є навчання на військовій кафедрі безкоштовним (бюджет)?",
        answer: `<p><strong>Ні.</strong> Навчання здійснюється на платній основі за контрактом. Вартість - <strong>44 800 грн за всю програму підготовки</strong>.</p>
        <p>Вартість покриває проживання, харчування, спорядження та медичне забезпечення під час навчального збору. Окремо вступник забезпечує лише власну польову форму одягу («піксель» ЗСУ), з якою необхідно прибути на збір.</p>`
    },
    {
        id: "faq-payment-military",
        category: "payment",
        audience: "military",
        question: "Чи є навчання на військовій кафедрі безкоштовним (бюджет)?",
        answer: `<p><strong>Ні.</strong> Навчання здійснюється на платній основі за контрактом. Вартість - <strong>44 800 грн за всю програму підготовки</strong>.</p>`
    },
    {
        id: "faq-10b",
        category: "payment",
        audience: "all",
        question: "Коли і в які строки потрібно сплатити за навчання?",
        answer: `<p>Оплата вноситься протягом <strong>двох тижнів</strong> після видання наказу начальника Військового інституту про зарахування на навчання.</p>
        <p>Реквізити для оплати надає інститут разом із повідомленням про зарахування.</p>`
    },
    {
        id: "faq-9",
        category: "education",
        audience: "all",
        question: "Скільки триває навчання та в якій формі воно організоване?",
        answer: `<p>Навчання за інтенсивним курсом триває <strong>4 місяці</strong> у змішаній формі (дистанційно + очно).</p>
        <p>Точні етапи та формат кожного з них - у розділі «<a href="#timeline-section" class="step-link">Графік навчального процесу</a>» вище на цій сторінці.</p>`
    },
    {
        id: "faq-6",
        category: "documents",
        audience: "all",
        question: "До якого числа приймаються заяви та документи на вступ?",
        answer: `<p>Набір триває, подання документів і тестування здійснюються онлайн. Завершення прийому документів - <strong>15 серпня</strong>. Початок навчання - <strong>1 вересня</strong>.</p>
        <p>Рекомендуємо реєструватися та проходити тестування якомога раніше, щоб мати запас часу на всі наступні кроки вашого плану вступу.</p>`
    },
    {
        id: "faq-2",
        category: "general",
        audience: "all",
        question: "Чи можуть жінки проходити військову підготовку на кафедрі?",
        answer: `<p><strong>Так, звичайно.</strong> Громадянки України залучаються до військової підготовки на рівних правах із чоловіками. Усі вимоги щодо вступу та навчання однакові для всіх кандидатів незалежно від статі.</p>`
    },
    {
        id: "faq-4",
        category: "general",
        audience: "all",
        question: "Як проходить конкурсний відбір і які тести потрібно скласти?",
        answer: `<p>Конкурсний відбір проводиться дистанційно (онлайн) і включає:</p>
        <ol>
            <li><strong>Психологічне тестування</strong> на сайті інституту для визначення професійно-психологічної придатності до військової служби;</li>
            <li><strong>Тест з предмета «Захист України»</strong> в онлайн-форматі (тільки для тих, хто не має досвіду служби).</li>
        </ol>
        <p>Посилання для реєстрації та тестувань доступні на сайті вступу.</p>`
    },
    {
        id: "faq-docs-civilian",
        category: "documents",
        audience: "civilian",
        question: "Які документи та копії потрібно підготувати для формування особової справи?",
        answer: `<p>Для формування особової справи (для присвоєння звання наказом Міністра оборони України) потрібні:</p>
        <p><strong>Загальні вимоги до копій:</strong> формат <strong>А4</strong>, <strong>портретна</strong> орієнтація, друк з одного боку. Поля: <strong>ліве - 30 мм</strong>, верхнє і нижнє - 15 мм, праве - 10 мм або більше. Документи розташовуються <strong>вертикально</strong>. Усі записи мають бути читабельними.</p>
        <ol>
            <li>Заява на вступ, написана власноруч - <strong>1 примірник</strong>;</li>
            <li>Ксерокопія паспорта (1, 2 стор.) або ID-картка з двох сторін - <strong>2 примірники</strong>;</li>
            <li>Довідка про місце реєстрації - <strong>2 примірники</strong>;</li>
            <li>Копія Довідки про присвоєння ІПН - <strong>2 примірники</strong>;</li>
            <li>Копія Свідоцтва про народження - <strong>1 примірник</strong>;</li>
            <li>Довідка ВЛК (оригінал) - <strong>1 примірник</strong>;</li>
            <li>Копія довідки ВЛК - <strong>1 примірник</strong>;</li>
            <li>Контракт про навчання - <strong>2 примірники</strong>;</li>
            <li>Ксерокопія військово-облікового документу (приписне свідоцтво, військовий квиток, Резерв+) - <strong>1 примірник</strong>;</li>
            <li>Фотокартка у польовій формі ЗСУ (піксель, з прізвищем) 3х4 см, матові з білим кутом - <strong>6 примірників</strong>;</li>
            <li>Фотокартка у польовій формі ЗСУ (піксель, з прізвищем) 9x11 см, глянцеві - <strong>2 примірники</strong>;</li>
            <li>Копія Диплома з додатками (завірені нотаріально або в деканаті) - <strong>1 примірник</strong>;</li>
            <li>Копія Диплома (незавірена, звичайна) - <strong>1 примірник</strong>;</li>
            <li>Автобіографія, написана власноруч - <strong>1 примірник</strong>;</li>
            <li>Автобіографія друкована, підписана власноруч - <strong>1 примірник</strong>;</li>
            <li>Копії свідоцтва про шлюб і свідоцтв про народження дітей - <strong>по 1 примірнику</strong> (за наявності).</li>
        </ol>
        <p>Скористайтеся інтерактивним переліком документів праворуч на цій сторінці, щоб позначати готові довідки та роздрукувати персональний перелік.</p>`
    },
    {
        id: "faq-vlk-1",
        category: "vlk",
        audience: "civilian",
        question: "Як проходить військово-лікарська комісія (ВЛК) і де отримати направлення?",
        answer: `<p>Процедура проходження медичної комісії:</p>
        <ol>
            <li>Після проходження всіх етапів вступу на <a href="https://sites.google.com/view/kvpzvi/" class="step-link" target="_blank" rel="noopener">сайті вступу</a> кафедра надає направлення на ВЛК;</li>
            <li>З цим направленням зверніться до районного (міського) ТЦК та СП за місцем перебування на військовому обліку або проживання;</li>
            <li>Здайте обов'язкові аналізи, отримайте сертифікати від нарколога і психіатра;</li>
            <li>Пройдіть огляд у профільних лікарів ВЛК при ТЦК та СП;</li>
            <li>Отримайте остаточний висновок ВЛК: <strong>«Придатний до військової служби»</strong> або <strong>«Придатний до служби у військових частинах забезпечення, ТЦК та СП, ВНЗ, установах, організаціях, навчальних центрах»</strong>;</li>
            <li>Надішліть оригінал та копію довідки в інститут разом з іншими документами.</li>
        </ol>
        <p><strong>Плануйте час заздалегідь:</strong> проходження ВЛК у ТЦК та СП часто потребує додаткових аналізів і може тривати від кількох днів до двох-трьох тижнів, тому направлення варто отримувати якомога раніше.</p>`
    },
    {
        id: "faq-8",
        category: "vlk",
        audience: "civilian",
        question: "Чи можна пройти ВЛК у приватній клініці?",
        answer: `<p><strong>Ні, не можна.</strong> Придатність до військової служби або навчання на кафедрі визначається виключно військово-лікарськими комісіями при ТЦК та СП. ТЦК не затверджує результати приватних клінік, проте аналізи з приватних лабораторій можна пред'явити лікарям ВЛК.</p>`
    },
    {
        id: "faq-8b",
        category: "vlk",
        audience: "civilian",
        question: "Який строк дії висновку військово-лікарської комісії?",
        answer: `<p>У воєнний час строк дії висновку ВЛК для військовозобов'язаних - <strong>один рік</strong>. Дата проходження та висновок зазначені у військово-обліковому документі в застосунку «Резерв+».</p>
        <p><strong>Важливо:</strong> якщо від дати проходження ВЛК до орієнтовного строку присвоєння звання минає більше 12 місяців, ВЛК потрібно пройти повторно за направленням кафедри.</p>`
    },
    {
        id: "faq-10c",
        category: "payment",
        audience: "all",
        question: "Чи повертаються кошти, якщо я припиню навчання або буду відрахований?",
        answer: `<p><strong>Ні.</strong> У разі відрахування за академічну заборгованість або добровільного припинення навчання кошти не повертаються. Ці умови передбачені контрактом на навчання.</p>`
    },
    {
        id: "faq-11b",
        category: "education",
        audience: "all",
        question: "Що буде, якщо я не складу залік або модульний контроль?",
        answer: `<p>Незакриття звітності (заліку, модульного контролю, екзамену) вважається <strong>академічною заборгованістю</strong> і може бути причиною відрахування з програми.</p>
        <p>У разі відрахування за академічну заборгованість кошти не повертаються.</p>`
    },
    {
        id: "faq-contract-civilian",
        category: "payment",
        audience: "civilian",
        question: "Звідки взяти бланк контракту і як його подати?",
        answer: `<p>Бланк контракту надається разом із направленням на ВЛК. Контракт заповнюється у <strong>двох примірниках</strong> і надсилається в інститут разом із іншими документами, вказаними у вашому чек-листі на цьому сайті.</p>`
    },
    {
        id: "faq-contract-military",
        category: "payment",
        audience: "military",
        question: "Звідки взяти бланк контракту і як його подати?",
        answer: `<p>Бланк контракту надсилається вам окремо Новою поштою. Контракт заповнюється у <strong>двох примірниках</strong> і надсилається в інститут разом із іншими документами, вказаними у вашому чек-листі на цьому сайті.</p>
        <p><a href="https://drive.google.com/file/d/1fpKGmA_ftcMRENMNiIEcolr5iVj8Au7a/view?usp=drive_link" target="_blank" rel="noopener">Зразок заповнення контракту</a></p>`
    },
    {
        id: "faq-gathering-civilian",
        category: "oath",
        audience: "civilian",
        question: "Що таке навчальний збір і коли він проводиться?",
        answer: `<p><strong>Навчальний збір</strong> - практичний завершальний етап навчання. Слухачі перебувають на казарменому чи табірному становищі, проходять вогневу підготовку з бойовими стрільбами на полігоні, вивчають техніку, відпрацьовують тактичні прийоми у польових умовах і готуються до випускних іспитів.</p>
        <p>Учасники безкоштовно забезпечуються проживанням, триразовим харчуванням, медичним обслуговуванням, засобами індивідуального захисту, зброєю та технічним приладдям.</p>
        <p><strong>Важливо:</strong> на збір необхідно прибути з власною сезонною польовою формою одягу («піксель» ЗСУ).</p>`
    },
    {
        id: "faq-gathering-military",
        category: "oath",
        audience: "military",
        question: "Що таке навчальний збір і коли він проводиться?",
        answer: `<p><strong>Навчальний збір</strong> - практичний завершальний етап навчання. Слухачі перебувають на казарменому чи табірному становищі, проходять вогневу підготовку з бойовими стрільбами на полігоні, вивчають техніку, відпрацьовують тактичні прийоми у польових умовах і готуються до випускних іспитів.</p>
        <p><strong>Важливо:</strong> на збір необхідно прибути з власною сезонною польовою формою одягу («піксель» ЗСУ) і продовольчим атестатом.</p>`
    },
    {
        id: "faq-14",
        category: "general",
        audience: "civilian",
        question: "Чи дає навчання на кафедрі відстрочку від мобілізації?",
        answer: `<p><strong>Ні.</strong> Сам факт навчання на кафедрі не є підставою для відстрочки від мобілізації відповідно до Закону України «Про мобілізаційну підготовку та мобілізацію».</p>`
    },
    {
        id: "faq-15",
        category: "general",
        audience: "civilian",
        question: "Чи можуть мобілізувати під час навчання або після присвоєння звання?",
        answer: `<p>Статус офіцера запасу не звільняє від військового обов'язку. Після зарахування в запас особа перебуває на військовому обліку і може бути призвана за мобілізацією на загальних підставах, <strong>вже як офіцер</strong>.</p>
        <p>Виняток - жінки: вони не підлягають призову за мобілізацією і можуть служити виключно за власним бажанням на контрактній основі.</p>`
    },
    {
        id: "faq-16",
        category: "documents",
        audience: "all",
        question: "На яку адресу надсилати документи для кафедри?",
        answer: `<p>Документи надсилайте поштою:</p>
        <ul>
            <li><strong>Місто:</strong> м. Житомир</li>
            <li><strong>Відділення:</strong> Нова Пошта, відділення № 10</li>
            <li><strong>Телефон отримувача:</strong> 067 280 79 40</li>
        </ul>
        <p><strong>Важливо:</strong> вартість доставки оплачує відправник. Рекомендуємо надсилати документи з оголошеною цінністю та описом вкладення.</p>
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
const printChecklistBtn = document.getElementById("btn-print-checklist");
const resetChecklistBtn = document.getElementById("btn-reset-checklist");
const printDatePlaceholder = document.getElementById("print-date-placeholder");

// App State
let currentCategory = "all";
let searchQuery = "";

const AUDIENCE_BADGE = {
    all: '<span class="audience-badge badge-all">Спільне</span>',
    civilian: '<span class="audience-badge badge-civilian">Цивільним</span>',
    military: '<span class="audience-badge badge-military">Військовим</span>'
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    initAudienceSwitcher();
    initTabs();
    initSearch();
    initPrint();
    generateFAQSchema();
    initBackToTop();
    handleHashLinks();
    updateVlkTabVisibility();
});

// Hide the VLK category tab entirely when it has no items for the current audience
function updateVlkTabVisibility() {
    const vlkTab = categoryTabsContainer.querySelector('[data-category="vlk"]');
    if (!vlkTab) return;
    const hasVlkItems = faqData.some(item => item.category === "vlk" && (item.audience === "all" || item.audience === currentAudience || currentAudience === null));
    vlkTab.style.display = hasVlkItems ? "" : "none";
    if (!hasVlkItems && currentCategory === "vlk") {
        currentCategory = "all";
        categoryTabsContainer.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.category === "all"));
    }
}

// Render FAQ items based on audience, search and category filters
function renderFAQ() {
    faqListContainer.innerHTML = "";
    updateVlkTabVisibility();

    const filteredData = faqData.filter(item => {
        const matchesAudience = currentAudience === null || item.audience === "all" || item.audience === currentAudience;
        const matchesCategory = currentCategory === "all" || item.category === currentCategory;
        const matchesSearch = searchQuery === "" ||
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesAudience && matchesCategory && matchesSearch;
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

        let questionText = item.question;
        let answerText = item.answer;

        if (searchQuery !== "") {
            questionText = highlightText(questionText, searchQuery);
            answerText = highlightText(answerText, searchQuery);
        }

        const badge = currentAudience === null ? (AUDIENCE_BADGE[item.audience] || "") : "";

        faqItem.innerHTML = `
            <button class="faq-question-btn" aria-expanded="false">
                <span class="faq-question-top">
                    <span>${questionText}</span>
                    <svg class="faq-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
                ${badge ? `<span>${badge}</span>` : ""}
            </button>
            <div class="faq-answer-wrapper">
                <div class="faq-answer-content">
                    ${answerText}
                </div>
            </div>
        `;

        const questionBtn = faqItem.querySelector(".faq-question-btn");
        const answerWrapper = faqItem.querySelector(".faq-answer-wrapper");

        questionBtn.addEventListener("click", () => {
            const isActive = faqItem.classList.contains("active");

            let offsetHeightAdjustment = 0;
            const header = document.querySelector(".main-header");
            const headerHeight = header ? header.offsetHeight : 0;
            const margin = 16;

            document.querySelectorAll(".faq-item.active").forEach(activeItem => {
                if (activeItem !== faqItem) {
                    if (activeItem.getBoundingClientRect().top < faqItem.getBoundingClientRect().top) {
                        offsetHeightAdjustment += activeItem.querySelector(".faq-answer-wrapper").scrollHeight;
                    }
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

                const elementPosition = faqItem.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offsetHeightAdjustment - headerHeight - margin;

                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });

        faqListContainer.appendChild(faqItem);
    });
}

function highlightText(text, search) {
    if (!search) return text;
    const regex = new RegExp(`(${escapeRegExp(search)})`, "gi");
    const parts = text.split(/(<[^>]*>)/g);
    return parts.map(part => {
        if (part.startsWith("<") && part.endsWith(">")) return part;
        return part.replace(regex, `<mark class="highlight">$1</mark>`);
    }).join("");
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function initTabs() {
    const tabButtons = categoryTabsContainer.querySelectorAll(".tab-btn");
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-category");
            renderFAQ();
        });
    });
}

function initSearch() {
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        searchClearBtn.style.display = searchQuery.length > 0 ? "flex" : "none";
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

function generateFAQSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": { "@type": "Answer", "text": item.answer.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() }
        }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
}

function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initPrint() {
    printChecklistBtn.addEventListener("click", () => {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formatter = new Intl.DateTimeFormat('uk-UA', options);
        printDatePlaceholder.textContent = `Створено: ${formatter.format(today)}`;
        window.print();
    });

    resetChecklistBtn.addEventListener("click", () => {
        document.querySelectorAll("#checklist-items input[type=\"checkbox\"]").forEach(checkbox => {
            checkbox.checked = false;
            localStorage.removeItem("chk_" + checkbox.getAttribute("data-id"));
        });
    });
}

function handleHashLinks() {
    const expandAndScrollTo = (targetId) => {
        const itemData = faqData.find(item => item.id === targetId);
        if (itemData && currentCategory !== "all" && itemData.category !== currentCategory) {
            const tabBtn = categoryTabsContainer.querySelector(`[data-category="${itemData.category}"]`) ||
                           categoryTabsContainer.querySelector('[data-category="all"]');
            if (tabBtn) tabBtn.click();
        }

        if (searchQuery !== "") {
            searchInput.value = "";
            searchQuery = "";
            renderFAQ();
        }

        const targetItem = document.getElementById(targetId);
        if (targetItem) {
            const questionBtn = targetItem.querySelector('.faq-question-btn');
            if (questionBtn && !targetItem.classList.contains('active')) {
                questionBtn.click();
            } else if (questionBtn) {
                const header = document.querySelector(".main-header");
                const headerHeight = header ? header.offsetHeight : 0;
                const margin = 16;
                const elementPosition = targetItem.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - margin;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        }
    };

    const handleHash = () => {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#faq-')) {
            expandAndScrollTo(hash.substring(1));
        }
    };

    window.addEventListener('hashchange', handleHash);

    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('#faq-')) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            history.pushState(null, null, `#${targetId}`);
            expandAndScrollTo(targetId);
        }
    });

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
    let scrollSpacer = null;

    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('hidden');
            if (!chatbotWindow.classList.contains('hidden')) chatbotInput.focus();
        });
    }

    if (chatbotClose) {
        chatbotClose.addEventListener('click', () => chatbotWindow.classList.add('hidden'));
    }

    document.addEventListener('click', (e) => {
        if (!chatbotWindow.classList.contains('hidden') &&
            !chatbotWindow.contains(e.target) &&
            !chatbotToggle.contains(e.target)) {
            chatbotWindow.classList.add('hidden');
        }
    });

    const sendMessage = async () => {
        const text = chatbotInput.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        chatbotInput.value = '';
        chatHistory.push({ role: 'user', text });

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

    if (chatbotSend) chatbotSend.addEventListener('click', sendMessage);
    if (chatbotInput) chatbotInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}-message`;

        let htmlText = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>');

        msgDiv.innerHTML = htmlText;
        appendToMessages(msgDiv);

        if (sender === 'user') {
            addScrollSpacer();
            scrollMessageToTop(msgDiv);
        } else {
            removeScrollSpacer();
        }
    }

    function appendToMessages(node) {
        if (scrollSpacer) {
            chatbotMessages.insertBefore(node, scrollSpacer);
        } else {
            chatbotMessages.appendChild(node);
        }
    }

    function addScrollSpacer() {
        removeScrollSpacer();
        scrollSpacer = document.createElement('div');
        scrollSpacer.setAttribute('aria-hidden', 'true');
        scrollSpacer.style.height = chatbotMessages.clientHeight + 'px';
        chatbotMessages.appendChild(scrollSpacer);
    }

    function removeScrollSpacer() {
        if (scrollSpacer) {
            scrollSpacer.remove();
            scrollSpacer = null;
        }
    }

    function scrollMessageToTop(msgDiv) {
        if (!chatbotMessages) return;
        const delta = msgDiv.getBoundingClientRect().top - chatbotMessages.getBoundingClientRect().top;
        chatbotMessages.scrollTop += delta;
    }

    function showTypingIndicator() {
        const id = 'typing-' + Date.now();
        const msgDiv = document.createElement('div');
        msgDiv.className = 'typing-indicator';
        msgDiv.id = id;
        msgDiv.innerHTML = '<span></span><span></span><span></span>';
        appendToMessages(msgDiv);
        return id;
    }

    function removeTypingIndicator(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }
});
