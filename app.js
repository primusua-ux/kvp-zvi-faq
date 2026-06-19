// FAQ Data
const faqData = [
    {
        id: "faq-1",
        category: "general",
        question: "Хто саме має право вступати на кафедру військової підготовки?",
        answer: `<p>Вступити на військову кафедру Житомирського військового інституту імені С. П. Корольова за програмою підготовки офіцерів запасу мають право:</p>
        <ul>
            <li><strong>Громадяни України</strong> (як чоловічої, так і жіночої статі);</li>
            <li>Особи, які вже мають вищу освіту ступеня не нижче бакалавра;</li>
            <li>Придатні до військової служби за станом здоров'я та морально-діловими якостями;</li>
            <li>Віком <strong>до 60 років</strong> на момент отримання первинного офіцерського звання.</li>
        </ul>
        <p><strong>Важливо:</strong> програма підготовки офіцерів запасу призначена виключно для формування резерву ЗСУ, тому вона <strong>не доступна для діючих військовослужбовців</strong>.</p>`
    },
    {
        id: "faq-2",
        category: "general",
        question: "Чи можуть дівчата проходити військову підготовку на кафедрі?",
        answer: `<p><strong>Так, звичайно.</strong> Громадяни України жіночої статі залучаються до військової підготовки на рівних правах із чоловіками. Усі вимоги щодо вступу, проходження медичної комісії (ВЛК), складання фізпідготовки та вимоги до навчання є однаковими для всіх кандидатів.</p>`
    },
    {
        id: "faq-3",
        category: "general",
        question: "Чи можна вступити на військову кафедру, якщо я навчаюся в іншому університеті?",
        answer: `<p><strong>Так, це можливо.</strong> Студенти будь-яких інших цивільних закладів вищої освіти (ЗВО) України мають право навчатися на кафедрі військової підготовки Житомирського військового інституту імені С. П. Корольова за контрактом, якщо це їхня друга вища освіта і вони вже мають диплом бакалавра. Головна умова — виконання плану військової підготовки.</p>`
    },
    {
        id: "faq-4",
        category: "general",
        question: "Як проходить конкурсний відбір і які тести потрібно скласти?",
        answer: `<p>Конкурсний відбір для вступу на військову кафедру ЖВІ наразі проводиться дистанційно (онлайн) і включає такі складові:</p>
        <ol>
            <li><strong>Психологічне тестування</strong> на спеціалізованому сайті інституту для визначення вашої професійно-психологічної придатності до військової служби;</li>
            <li><strong>Тест з предмета &quot;Захист України&quot;</strong>, який також складається в онлайн-форматі на освітній платформі інституту для перевірки базових знань.</li>
        </ol>
        <p>Усі необхідні посилання для реєстрації та проходження тестувань доступні в розділі <strong>&quot;Етапи вступу крок за кроком&quot;</strong> (кроки 3 та 4) у верхній частині цієї сторінки.</p>`
    },
    {
        id: "faq-5",
        category: "documents",
        question: "Які документи та копії потрібно підготувати для формування особової справи?",
        answer: `<p>Для формування особової справи з метою присвоєння наказом Міністра оборони України військового звання &quot;молодший лейтенант запасу&quot; необхідно підготувати такі документи:</p>
        <ol>
            <li>Ксерокопія паспорта (1, 2 стор.) або ID-картка з двох сторін — <strong>2 примірники</strong>;</li>
            <li>Довідка про місце реєстрації — <strong>2 примірники</strong>;</li>
            <li>Копія Довідки про присвоєння ідентифікаційного номера (ІПН) — <strong>2 примірники</strong>;</li>
            <li>Копія Свідоцтва про народження — <strong>1 примірник</strong>;</li>
            <li>Довідка ВЛК (оригінал) — <strong>1 примірник</strong>;</li>
            <li>Копія довідки ВЛК — <strong>1 примірник</strong>;</li>
            <li>Контракт про навчання на військовій кафедрі — <strong>2 примірники</strong>;</li>
            <li>Ксерокопія військового облікового документу (приписне свідоцтво, військовий квиток, Резерв+) — <strong>1 примірник</strong>;</li>
            <li>Фотокартка у військовій формі одягу 3х4 см, матові з білим кутом — <strong>6 примірників</strong>;</li>
            <li>Фотокартка у військовій формі одягу 9x11 см, глянцеві — <strong>2 примірники</strong>;</li>
            <li>Копія Диплома про вищу освіту з додатками (завірені нотаріально або в деканаті вишу) — <strong>1 примірник</strong>;</li>
            <li>Копія Диплома про вищу освіту (незавірена, звичайна) — <strong>1 примірник</strong>;</li>
            <li>Автобіографія написана власноруч (підписана власноруч) — <strong>1 примірник</strong>;</li>
            <li>Автобіографія друкована (підписана власноруч) — <strong>1 примірник</strong>;</li>
            <li>Копії: свідоцтва про шлюб, свідоцтв про народження дітей — <strong>по 1 примірнику</strong> (при наявності).</li>
        </ol>
        <p>Ви можете скористатися інтерактивним <strong>Чек-листом документів</strong> праворуч на цій сторінці, щоб відзначати готові довідки та роздрукувати персональний перелік.</p>`
    },
    {
        id: "faq-6",
        category: "documents",
        question: "До якого числа приймаються заяви та документи на вступ?",
        answer: `<p>Прийом заяв та документів триває <strong>до 15 липня</strong>.</p>
        <p>Ми наполегливо рекомендуємо проходити реєстрацію та тестування онлайн якомога раніше, оскільки проходження медичної комісії (ВЛК) в ТЦК та СП часто потребує здачі додаткових аналізів і може тривати від кількох днів до двох-трьох тижнів.</p>`
    },
    {
        id: "faq-7",
        category: "vlk",
        question: "Як проходить військово-лікарська комісія (ВЛК) і де отримати направлення?",
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
        id: "faq-9",
        category: "education",
        question: "Скільки триває навчання та в якій формі воно організоване?",
        answer: `<p>Навчання за інтенсивним курсом триває <strong>4 місяці</strong>.</p>
        <p>Етапи цього навчання та форми їх проведення (дистанційно чи очно) вказані в розділі <strong>&quot;Графік навчального процесу&quot;</strong> у верхній частині цієї сторінки.</p>`
    },
    {
        id: "faq-10",
        category: "education",
        question: "Чи є навчання на військовій кафедрі безкоштовним (бюджет)?",
        answer: `<p><strong>Ні.</strong> Навчання на кафедрі здійснюється виключно на платній основі — за рахунок коштів фізичних чи юридичних осіб (за контрактом). Вартість навчання фіксується у контракті на навчання і складає 44 800 грн. за всю програму підготовки.</p>`
    },
    {
        id: "faq-11",
        category: "education",
        question: "Чи можна поєднувати навчання на військовій кафедрі з працевлаштуванням?",
        answer: `<p><strong>Так.</strong> Через те що навчання проходить за змішаною формою, воно може бути поєднане з роботою.</p>
        <p>Основну частину очної частини навчання складає навчальний збір. Саме на нього вас викликає начальник вашого ТЦК та СП своїм наказом. Відповідно до законодавства України (Закон України «Про військовий обов'язок і військову службу» частина 3 статті 29, Кодекс законів про працю України (КЗпП) частина 2 статті 119) у разі такого виклику ви звільняєтесь від посадових обов'язків (незалежно від форми власності підприємства) і за вами зберігається посада і середня заробітна плата за весь термін навчального збору.</p>`
    },
    {
        id: "faq-12",
        category: "oath",
        question: "Що таке навчальний збір і коли він проводиться?",
        answer: `<p><strong>Навчальний збір (збори)</strong> — це практичний етап навчання військової підготовки. Він триває <strong>3 тижні</strong> і проводиться на фінальному етапі навчання.</p>
        <p>Під час збору студенти перебувають на казарменому або табірному становищі, проходять вогневу підготовку із бойовими стрільбами на полігоні, вивчають експлуатацію техніки, відпрацьовують тактичні прийоми у польових умовах та готуються до випускних іспитів.</p>
        <p>Усі учасники навчального збору безкоштовно забезпечуються комфортними умовами проживання, повноцінним триразовим харчуванням, медичним обслуговуванням, засобами індивідуального захисту, зброєю та необхідним технічним приладдям.</p>
        <p><strong>Важливо:</strong> прибути на навчальний збір необхідно з власною польовою формою одягу відповідно до сезону (забарвлення «піксель» ЗСУ).</p>`
    },
    {
        id: "faq-13",
        category: "oath",
        question: "Яке звання присвоюється після завершення та чи обов'язково йти служити?",
        answer: `<p>Після завершення повного курсу військової підготовки, складання випускного іспиту та складання <strong>Військової присяги на вірність українському народові</strong> випускникам присвоюється первинне офіцерське звання — <strong>молодший лейтенант запасу</strong>.</p>
        <p>Випускники зараховуються в запас Збройних Сил України. Служба після закінчення кафедри <strong>не є обов'язковою</strong>. Офіцери запасу можуть за власним бажанням піти на контрактну службу в ЗСУ, СБУ, Нацгвардію, ДПСУ чи поліцію, або працювати на цивільних посадах.</p>`
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
        faqItem.className = "faq-item";
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
