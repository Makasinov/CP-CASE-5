module.exports = {
    ResourceWarehouse: [
        {
            HasConstraintViolations: false,
            name: "Участок обработки КЦ-1",
            haveLimiteByPower: false,
            Id: "G_ATO1",
            InputSP: "Q3062",
            OutputSP: "Q3061;Q3063",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АПХКР 1,2 ЦДС",
            haveLimiteByPower: false,
            Id: "G_APHKRD",
            InputSP: "Q3156",
            OutputSP: "Q3157;Q315B",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "ВТО ЦТС (LOI, СГН, СГВ)",
            haveLimiteByPower: true,
            Id: "G_VTOT",
            InputSP: "Q311A;Q311B",
            OutputSP: "Q311C",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Отгрузка КЦ-2",
            haveLimiteByPower: true,
            Id: "G_OTGRO2",
            InputSP: "Q3071",
            OutputSP: "Q3001",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Ручная порезка на параллельном рольганге",
            haveLimiteByPower: false,
            Id: "G_MCUTG",
            InputSP: "Q3128",
            OutputSP: "Q3121",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АР 3 ЦТС",
            haveLimiteByPower: false,
            Id: "G_AR3T",
            InputSP: "Q311SFG",
            OutputSP: "Q3117",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Конвертеры КЦ-2",
            haveLimiteByPower: true,
            Id: "G_VSO2",
            InputSP: "Q307M",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Агрегат нормализации ЦДС",
            haveLimiteByPower: false,
            Id: "G_NORD",
            InputSP: "Q3153",
            OutputSP: "Q3154",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АПП-1,2 ЦХПП",
            haveLimiteByPower: true,
            Id: "G_APPH",
            InputSP: "Q313A;Q313M",
            OutputSP: "Q3137;Q313C",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Агрегат продольной резки 1,4, Тупик 1А ЦГП",
            haveLimiteByPower: true,
            Id: "G_APRRG",
            InputSP: "Q3128",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АНГЦ ЦХПП",
            haveLimiteByPower: true,
            Id: "G_ANGCH",
            InputSP: "Q3134;Q313M",
            OutputSP: "Q3137;Q313A;Q313C",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Упаковка ЦТС",
            haveLimiteByPower: false,
            Id: "G_UPAT",
            InputSP: "Q311F;Q311SHR",
            OutputSP: "Q3111;Q311FHR",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АР-6 ЦТС",
            haveLimiteByPower: false,
            Id: "G_AR6T",
            InputSP: "Q311F",
            OutputSP: "Q311F",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АЭИП ЦТС",
            haveLimiteByPower: true,
            Id: "G_AEIPT",
            InputSP: "Q311A;Q311C",
            OutputSP: "Q311E",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АЗП ЦТС",
            haveLimiteByPower: true,
            Id: "G_AZPT",
            InputSP: "Q311A;Q311E;Q311SFG",
            OutputSP: "Q311B",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Участок обработки КЦ-2",
            haveLimiteByPower: false,
            Id: "G_ATO2",
            InputSP: "Q3072",
            OutputSP: "Q3071",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Агрегаты продольной резки (АПИ, 5,7,8,9,10) ЦХПП",
            haveLimiteByPower: true,
            Id: "G_APRR",
            InputSP: "Q3137",
            OutputSP: "Q313A;Q313C",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Ж/Д: После ТК ЦТС->Склад перед Прокатным станом ЦДС",
            haveLimiteByPower: false,
            Id: "G_RTRAIN6",
            InputSP: "Q311FHR",
            OutputSP: "Q3155",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "НТА ЦХПП",
            haveLimiteByPower: true,
            Id: "G_NTAH",
            InputSP: "Q3132",
            OutputSP: "Q3134;Q3135;Q3136;Q313C",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Отгрузка ЦГП",
            haveLimiteByPower: true,
            Id: "G_OTGRG",
            InputSP: "Q3121",
            OutputSP: "Q3001",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "КП (LOI, Эбнер, Стальпроект) ЦХПП",
            haveLimiteByPower: true,
            Id: "G_KPH",
            InputSP: "Q3134",
            OutputSP: "Q3135",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Ж/Д: После ТК ЦТС->Склад перед Прокатным станом,Травл. г/к рулоны ЦДС/ЦХПП",
            haveLimiteByPower: false,
            Id: "G_RTRAIN7",
            InputSP: "Q311FHR",
            OutputSP: "Q3136",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Реверсивный стан ЦДС",
            haveLimiteByPower: true,
            Id: "G_RSTD",
            InputSP: "Q3155",
            OutputSP: "Q3156;Q3157",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АНГЦ 2,4 ЦДС",
            haveLimiteByPower: true,
            Id: "G_ANGCD",
            InputSP: "Q3157;Q315M",
            OutputSP: "Q3158;Q315B;Q315C",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Ж/Д: Склад ГК рулонов в УОМ (перед АР и туп. 1А) ЦГП->Склад перед Подготовкой ГК Рулонов ЦДС",
            haveLimiteByPower: false,
            Id: "G_RTRAIN14",
            InputSP: "Q3128",
            OutputSP: "Q3152",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Потребление чугуна",
            haveLimiteByPower: true,
            Id: "G_BF",
            InputSP: "Q3065;Q3075",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Ж/Д: Травл. г/к рулоны ЦХПП->Склад ГК рулонов в УОМ (перед АР и туп. 1А) ЦГП",
            haveLimiteByPower: false,
            Id: "G_RTRAIN1",
            InputSP: "Q3131",
            OutputSP: "Q3128",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АПП3 ЦДС",
            haveLimiteByPower: true,
            Id: "G_APPD",
            InputSP: "Q315C;Q315M",
            OutputSP: "Q315B",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АНО ЦХПП",
            haveLimiteByPower: true,
            Id: "G_ANOH",
            InputSP: "Q3134",
            OutputSP: "Q3137;Q313C",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АНО-3,4 ЦТС",
            haveLimiteByPower: true,
            Id: "G_ANOG2T",
            InputSP: "Q3118",
            OutputSP: "Q311A",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АПГКР 1,2 ЦДС",
            haveLimiteByPower: false,
            Id: "G_APGKRD",
            InputSP: "Q3152",
            OutputSP: "Q3153;Q3154",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "МВПС-1 КЦ-2",
            haveLimiteByPower: false,
            Id: "G_CMO2",
            InputSP: "Q3072",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Автотранспорт: Склад перед Агрегатами Резки ЦДС->Из ПДС ЦТС",
            haveLimiteByPower: false,
            Id: "G_TRUCK3",
            InputSP: "Q3158",
            OutputSP: "Q311SFG",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Агрегат поперечной резки 2,3,5 ЦГП",
            haveLimiteByPower: true,
            Id: "G_APORG",
            InputSP: "Q3128",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "НТА ЦДС",
            haveLimiteByPower: true,
            Id: "G_NTAD",
            InputSP: "Q3154",
            OutputSP: "Q3155",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Отгрузка ЦДС",
            haveLimiteByPower: false,
            Id: "G_OTGRD",
            InputSP: "Q3151;Q3151CC",
            OutputSP: "Q3001",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "ЦХПП Упаковка",
            haveLimiteByPower: false,
            Id: "G_UPAH",
            InputSP: "Q313C",
            OutputSP: "Q3131",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Стан 1400 ЦДС",
            haveLimiteByPower: true,
            Id: "G_ST140D",
            InputSP: "Q3155",
            OutputSP: "Q3156;Q3157;Q3158",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Автотранспорт: Тов. рул. л/о 2,Тов. рул. л/о 1 ЦХПП->Склад перед АНО ЦДС",
            haveLimiteByPower: false,
            Id: "G_TRUCK1",
            InputSP: "Q3131",
            OutputSP: "Q3157",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Крановая операция: Склад слябов КЦ-1 КЦ-1 -> Склад слябов ЦГП ЦГП",
            haveLimiteByPower: false,
            Id: "G_RTRAIN11",
            InputSP: "Q3061;Q3063",
            OutputSP: "Q3122",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АР-10 ЦТС",
            haveLimiteByPower: true,
            Id: "G_AR10T",
            InputSP: "Q311F",
            OutputSP: "Q311F",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Ж/Д: Склад толстого листа ЦГП->Склад слябов КЦ-2 КЦ-2",
            haveLimiteByPower: false,
            Id: "G_RTRAIN12",
            InputSP: "Q3122",
            OutputSP: "Q3072",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АР 1-6 ЦДС",
            haveLimiteByPower: true,
            Id: "G_APD",
            InputSP: "Q3158",
            OutputSP: "Q315B;Q315C",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Дрессировочные станы 1,2 ЦХПП",
            haveLimiteByPower: false,
            Id: "G_DSH",
            InputSP: "Q3135",
            OutputSP: "Q3134;Q3137",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Отгрузка ЦТС",
            haveLimiteByPower: false,
            Id: "G_OTGRT",
            InputSP: "Q3111;Q311FHR",
            OutputSP: "Q3001",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Конвейер: Конвейер уборочной группы в ЦХПП ЦГП->СГКР ЦХПП ЦХПП",
            haveLimiteByPower: false,
            Id: "G_TRFCN",
            InputSP: "Q3128K",
            OutputSP: "Q3132",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АР-1,4 ЦТС",
            haveLimiteByPower: false,
            Id: "G_ARG2T",
            InputSP: "Q3117",
            OutputSP: "Q3118",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Методические печи ЦГП",
            haveLimiteByPower: false,
            Id: "G_MPG",
            InputSP: "Q3122",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Ручная порезка слябов",
            haveLimiteByPower: false,
            Id: "G_CMO1",
            InputSP: "Q3062",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АНО 2-4, 6-10 ЦДС",
            haveLimiteByPower: true,
            Id: "G_ANOD",
            InputSP: "Q3157",
            OutputSP: "Q3155;Q3158;Q3159",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Стан 2030 ЦХПП",
            haveLimiteByPower: true,
            Id: "G_ST203H",
            InputSP: "Q3136",
            OutputSP: "Q3134;Q3137;Q313C",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Отгрузка ЦХПП",
            haveLimiteByPower: true,
            Id: "G_OTGRH",
            InputSP: "Q3131",
            OutputSP: "Q3001",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "20-ти валк. 2, 3, реверсивный станы ЦТС",
            haveLimiteByPower: false,
            Id: "G_STG1T",
            InputSP: "Q3117;Q311F",
            OutputSP: "Q3117",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АТОиА-5 ЦДС",
            haveLimiteByPower: true,
            Id: "G_AOAD",
            InputSP: "Q3157",
            OutputSP: "Q3158",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Автотранспорт: Травл. г/к рулоны ЦХПП->Склад перед Прокатным станом ЦДС",
            haveLimiteByPower: false,
            Id: "G_TRUCK5",
            InputSP: "Q3151",
            OutputSP: "Q3136",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Автотранспорт: После II-ой подготовки ЦТС->Склад перед АНО ЦДС",
            haveLimiteByPower: false,
            Id: "G_TRUCK6",
            InputSP: "Q3118",
            OutputSP: "Q3157",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "УДЧ КЦ-2",
            haveLimiteByPower: false,
            Id: "G_DSO2",
            InputSP: "Q307M",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "ДС ЦДС",
            haveLimiteByPower: false,
            Id: "G_DSD",
            InputSP: "Q3159",
            OutputSP: "Q3158",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "ЛТК ЦТС",
            haveLimiteByPower: true,
            Id: "G_AR7T",
            InputSP: "Q311F",
            OutputSP: "Q311F",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "УДЧ КЦ-1",
            haveLimiteByPower: false,
            Id: "G_DSO1",
            InputSP: "Q306M",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Агрегат правки растяжением стальной полосы ЦХПП",
            haveLimiteByPower: false,
            Id: "G_STRS1H",
            InputSP: "Q3137",
            OutputSP: "Q3137",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Агрегаты поперечной резки (2,3,6) ЦХПП",
            haveLimiteByPower: true,
            Id: "G_APOR",
            InputSP: "Q3137",
            OutputSP: "Q313C",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Травильный комплекс ЦТС",
            haveLimiteByPower: true,
            Id: "G_TKT",
            InputSP: "Q3112",
            OutputSP: "Q311FHR;Q311SHR",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Упаковка ЦДС",
            haveLimiteByPower: false,
            Id: "G_UPAD",
            InputSP: "Q3155;Q315B",
            OutputSP: "Q3151;Q3151CC",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "АР-5,12,13,14 ЦТС",
            haveLimiteByPower: true,
            Id: "G_ARG1T",
            InputSP: "Q311E;Q311F",
            OutputSP: "Q311F",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Конвертеры КЦ-1",
            haveLimiteByPower: true,
            Id: "G_VSO1",
            InputSP: "Q306M",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Ж/Д: Склад слябов КЦ-2 КЦ-2->Склад слябов ЦГП ЦГП",
            haveLimiteByPower: false,
            Id: "G_RTRAIN10",
            InputSP: "Q3071",
            OutputSP: "Q3122",
            provider: false
        },
        {
            HasConstraintViolations: false,
            name: "Ж/Д: Склад ГК рулонов в УОМ (перед АР и туп. 1А) ЦГП->Перед ТК ЦТС",
            haveLimiteByPower: false,
            Id: "G_RTRAIN15",
            InputSP: "Q3128",
            OutputSP: "Q3112",
            provider: false
        }
    ],
    Remains: [
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "18750.27",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "3206.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "314.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "19846.53",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "3483.42",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "30000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "504.74",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "3066.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "1252.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "7055.77",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "34819.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "492.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "10014.82",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "12000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "7423.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "661.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "3045.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "8837.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "1232.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "27758.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "353.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "7017.46",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "41389.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "27143.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "3103.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "13717.65",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "653.53",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "7057.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "-230798.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "4025.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "932.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "931.98",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "16528.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "6487.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "5165.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "3064.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "3156.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "9946.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "3000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "2900.12",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "758.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "-10990.86",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "1250.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "2312.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "4875.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "3091.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "20515.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "5887.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "-2916.65",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "557.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "9118.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "20813.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "837.43",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "8003.86",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "2166.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "1271.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "55966.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "16363.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "537",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "72671.28",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "4709.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "5308.28",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "9723.27",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "857.77",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "-460596.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "700",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "8071.28",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "2813.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "10000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "5790.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "4835.91",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "7342.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "3026.92",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "475.79",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "5120.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "1460.98",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "12641.27",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "5002.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "3500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "9611.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "2596.67",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "-177906.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "5334.89",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "19232.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "-37433.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "5529.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "33306.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "12981.21",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "96.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "9044",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "5506.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "8205.62",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "8600.09",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "4962",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "1481.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "4394.47",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "150197.05",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "241.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "3230.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "11561.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "7343.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "-6376.2",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "748.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "480.05",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "5042.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "40000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "19973.65",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "700",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "10079.12",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "2986.9",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "186.13",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "6964.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "1271.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "-230798.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "4076.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "10040.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "2578.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "323.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "2451.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "4811.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "2312.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "5552.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "10454.04",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "40037.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "11500.08",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "-10120.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "3627.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "670.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "673.49",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "12011.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "4962",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "29029.12",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "10910.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "461.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "53501.43",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "-234179.52",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "6258.8",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "2818.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "2166.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "65000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "673.09",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "4482.13",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "46553.07",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "2818.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "23982.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "44025.72",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "4506.82",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "695.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "66973.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "114207.72",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "599.52",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "5517.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "27468.62",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "466.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "700",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "75722.89",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "3369.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "-226674.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "182.61",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "9214.91",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "5842.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "101689.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "3113.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "10606.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "10783.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "1732.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "7219.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "2615.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "294.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "27464.81",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "2592.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "7293.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "-4878.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "2993.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "7131.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "3952.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "6230.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "6831.39",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "5517.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "5927.88",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "2473.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "-1733.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "5522.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "526.52",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "272.74",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "15000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "456.28",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "353.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "91887.67",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "1184.08",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "21294.04",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "5131.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "353.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "2942.2",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "4206.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "20028.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "532.49",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "294.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "-159127.57",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "1183.53",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "9809.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "165837.67",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "369.2",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "-216302.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "2509.47",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "473.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "-110372.98",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "2721.13",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "40000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "9994.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "350",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "125208.51",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "39763.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "8220.8",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "4000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "428.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "1161.64",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "2630.62",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "294.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "-230798.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "7086.17",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "15940.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "9973.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "2740.53",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "5000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "-14006.73",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "105394.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "964.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "2890.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "418.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "27512.46",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "266.73",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "47.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "161.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "455.98",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "3000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "1246.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "5366.57",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "13010.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "9894.46",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "6142.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "55067.32",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "2146.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "58450.32",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "74842.94",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "2750.74",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "35873.89",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "60512.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "4953.29",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "172.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "294.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "4962",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "3074.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "3337.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "2756.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "10156.57",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "3212.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "4709.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "-9598.82",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "72047.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "-232498.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "5364.51",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "8637.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "323.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "9928.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "5002.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "1695.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "15994.89",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "7777.08",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "1545.18",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "4962",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "13040.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "294.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "-9723.74",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "22462.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "3000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "3451.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "1473.39",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "33050.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "3718.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "27075.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "8237.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "71057.86",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "13906.04",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "29073.47",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "4520.28",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "191.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "379.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "611.79",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "2869.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "1812.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "4962",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "69147.89",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "12051.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "8027.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "10634.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "52353.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "8550.39",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "4111.7",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "12300.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "13034.83",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "40867.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "1271.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "16800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "55033.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "12988.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "10224.06",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "9692.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "5646.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "22462.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "4000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "2616.28",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "7488.82",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "3064.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "53726.09",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "189704.11",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "92086.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "519.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "8620.05",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "3770.73",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "1115.13",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "2910.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "294.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "56956.65",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "40611.13",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "508",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "60187.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "1500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "622.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "2219.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "9954",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "62512.48",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "2023.9",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "11227.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "29609.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "3534.92",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "1246.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "59695.72",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "47159.83",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "5110.62",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "4709.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "105255.12",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "38189.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "640.09",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "83621.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "8659.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "2623.2",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "50664.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "1246.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "8476.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "145395.06",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "30826.79",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "1972.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "5800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "15145.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "22462.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "-2654.79",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "61395.11",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "40000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "1278.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "1250.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "681.61",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "4644.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "3000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "67953.89",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "12000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "4962",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "2864.2",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "12059.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "4693.49",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "2657.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "78558.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "78214.2",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "-9854.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "82.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "235.8",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "9020.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "-9349.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "410.43",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "239.93",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "6905.21",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "12792.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "7162.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "12803.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "473.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "11221.09",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "1246.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "64020.24",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "65464.07",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "8800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "-232498.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "65000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "9389.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "404.12",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "-73957.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "5162.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "-1606.03",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "2806.29",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "2755.06",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "8285.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "22462.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "9710.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "4905.9",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "959.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "32.07",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "525.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "45162.83",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "1955.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "34509.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "6665.28",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "-289863.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "2998.32",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "2851.04",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "10040.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "7190.42",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "160.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "13549.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "8158.47",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "319.46",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "5527.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "3421.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "1535.2",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "294.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "323.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "3157.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "1386.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "9178.47",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "-10325.47",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "19784.88",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "17797.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "-2106.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "8744.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "-9077.77",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "22462.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "1246.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "28004.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "3287.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "9642.28",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "1250.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "3234.21",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "15028.42",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "11088.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "5141.42",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "3234.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "625.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "9707.07",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "2287.43",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "41.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "1349.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "13009.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "4962",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "5366.57",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "939.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "16023.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "841.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "10004.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "3626.73",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "243.06",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "41977.52",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "3534.92",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "47.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "1025.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "3212.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "8737.92",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "2318.77",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "79356.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "-2779.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "28953.21",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "2807.05",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "8662.27",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "701.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "1246.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "-232498.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "-230798.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "7721.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "9973.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "5744.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "68354.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "2822.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "19877.74",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "54365.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "18485.27",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "4016.93",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "2768.63",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "29001.61",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "-170150.46",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "3421.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "46939.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "-309764.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "3297.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "3421.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "8112.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "6022.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "2922.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "62454.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "613.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "7304.43",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "56066.29",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "1246.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "49251.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "2910.91",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "1355.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "28.83",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "48782.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "20062.86",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "523.61",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "38425.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "10223.27",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "835.72",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "9875.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "8139.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "9007.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "10139.36",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "73.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "6374.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "2364.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "914.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "10453.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "3069.63",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "492.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "7380.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "27075.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "4709.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "14866.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "13302.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "1355.12",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "50",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "1086.89",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "13790.63",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "526.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "3512.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "9850.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "2736.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "8239.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "2805.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "160.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "3833.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "12153.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "97.65",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "527.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "3601.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "1338.11",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "8779.08",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "20022.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "27755.94",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "72108.13",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "14879.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "17636.73",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "8566.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "12751.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "4998.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "26927.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "10000.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "9116.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "359.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "11692.05",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "935.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "40000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "46870.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "14270.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "3366.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "55094.86",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "2811.05",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "49666.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "1040.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "8467.51",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "353.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "-452071.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "22462.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "3209.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "5473.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "16581.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "18460.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "6087.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "2846.67",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "-368.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "6070.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "3364.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "725.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "5602.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "18698.2",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "7180.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "64067.32",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "7465.9",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "544.82",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "20044.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "3553.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "6364.52",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "-69150.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "30000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "2602.42",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "609.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "-268784.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "18831.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "689.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "9495.08",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "7082.89",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "14536.83",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "10313.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "1279.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "72411.53",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "4313.98",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "2897.13",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "3331.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "799.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "4918.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "2818.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "5257.08",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "7110.92",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "54786.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "1513.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "78962.25",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "10215.27",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "150",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "73.2",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "10568.49",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "4531.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "1090.13",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "4914.79",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "27075.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "1504.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "3421.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "1500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "-49887.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "1000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "9188.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "10951.63",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "73.06",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "1823.79",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "124455.51",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "-1324.98",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "3014.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "14674.89",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "2585.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "6574.03",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "8906.97",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "2942.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "3316.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "3234.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "14764.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "40.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "239.93",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "153204.92",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "4992.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "1451.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "5808.09",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "46680.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "11005.92",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "5522.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "6896.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "122511.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "3234.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "12479.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "7085.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "15452.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "540.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "4254.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "6267.65",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "64597.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "-230798.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "483.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "4062.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "3131.77",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "9697.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "3603.11",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "49301.36",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "33548.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "294.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "4540.65",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "252.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "2030.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "2734.86",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "4331.65",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "199.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "160.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "-394779.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "5308.28",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "12000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "10000.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "5575.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "38501.73",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "6000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "249.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "160.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "3300.8",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "442.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "62414.11",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "113739.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "4302.27",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "2422.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "35653.29",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "491.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "5858.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "9077.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "7448.72",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "10153.88",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "-10058.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "69526.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "2802.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "50869.74",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "-10409.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "5895.06",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "-230798.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "7423.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "1471.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "75942.39",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "187.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "1651.99",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "65000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "96.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "202.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "1000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "10000.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "4709.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "527.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "14694.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "89300.94",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "36553.89",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "1500.08",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "66615.24",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "124370.07",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "40000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "1261.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "140006.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "322.29",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "2199.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "10000.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "2312.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "2999.62",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "6388.21",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "423.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "14981.82",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "53995.52",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "-232498.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "3122.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "3529.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "-10797.51",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "66531.78",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "14776.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "9113.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "47886.83",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "22462.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "342.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "416",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "1654.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "3064.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "4962",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "150",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "12937.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "279.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "159.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "128155.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "345.74",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "13691.32",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "2758.2",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "10168.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "17525.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "7593.61",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "-4274.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "14400.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "5682.83",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "96.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "1009.32",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "2500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "139152.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "10293.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "11530.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "41799.46",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "154939.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "7497.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "55077.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "12322.29",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "22462.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "10585.88",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "37758.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "641.29",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "6460.61",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "5880.67",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "3701.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "1422.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "3166.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "11697.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "4000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "18674.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "484.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "79643.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "4095.12",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "7527.28",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "5919.47",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "2149.36",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "3234.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "294.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "8797.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "5642.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "92323.52",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "15242.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "10497.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "4966.51",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "1246.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "326.53",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "8215.89",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "20536.82",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "4709.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "3534.92",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "6000.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "2357.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "3421.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "1331.83",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "-2424.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "3523.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "625.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "20376.13",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "1760.13",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "5522.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "61419.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "13899.36",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "3000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "18263.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "1832.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "7737.04",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "2451.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "-9639.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "532.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "1187.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "1775.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "14181.4",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "1279.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "14084.9",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "-7172.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "3566.73",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "3228.93",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "700",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "7339.25",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "434.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "14985.32",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "45301.92",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "2281.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "6926.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "700",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "3154.39",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "7668.8",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "5616.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "-101749.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "17599.82",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "13622.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "233.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "8984.03",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "22433.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "1279.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "36484.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "-212800.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "40412.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "584.11",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "1996.05",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "8504.48",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "11573.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "334.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "353.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "3667.9",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "799.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "55067.32",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "2719.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "1246.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "1312.09",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "28999.94",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "37.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "5950.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "-9666.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "1279.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "6339.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "9934.29",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "1975.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "9252.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "29837.79",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "8326.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "3346.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "1106.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "3287.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "4709.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "2819.88",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "64957.32",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "7665.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "10400.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "3000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "42.09",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "-230798.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "3534.92",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "102134.04",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "7443.86",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "700",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "27223.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "1250.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "4956.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "2298.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "11156.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "24936.63",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "13490.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "11970.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "2897.49",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "2745.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "212.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "1972.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "50",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "9190.47",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "13845.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "576.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "6716.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "1246.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "-11351.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "31487.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "3526.09",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "3212.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "10061.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "27263.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "4709.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "50320.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "5522.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "17734.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "5577.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "34939.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "353.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "-201190.05",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "1239.2",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "4866.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "2540.89",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "45000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "9940.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "541.04",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "440.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "20022.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "7029.94",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "1750.12",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "35710.53",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "95306.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "6865.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "77054.07",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "5682.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "5873.19",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "10032.93",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "5133.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "30317.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "4948.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "10953.07",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "5241.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "3495.09",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "20834.77",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "829.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "19902.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "212.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "7456.46",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "9765.88",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "557.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "1585.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "2500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "573.36",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "37547.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "34414.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "2500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "28610.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "8444.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "11500.08",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "-10952.05",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "9560.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "57190.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "38352.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "1161.64",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "1972.67",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "-25404.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "3761.51",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "76993.2",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "65000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "1775.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "3949.94",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "1000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "27570.48",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "10040.46",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "2683.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "1279.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "294.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "60289.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "19593.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "49971.51",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "156199.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "6243.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "28.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "13536.77",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "511.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "3352.51",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "1814.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "404.28",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "52845.83",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "4962",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "17799.93",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "3327.79",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "3831.82",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "11056.43",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "20065.91",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "1492.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "17500.98",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "5680.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "8118.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "70778.42",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "2877.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "2142.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "342.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "4401.57",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "944.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "60353.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "56787.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "4054.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "359.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "40000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "9452.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "-9809.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "60308.09",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "2312.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "7027.91",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "11419.12",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "1809.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "5166.49",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "3942.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "9573.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "10000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "48503.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "35367.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "56116.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "94016.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "72661.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "4325.21",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "6486.73",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "41725.79",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "14213.36",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "1485.43",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "40799.12",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "872.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "5393.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "4709.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "2772.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "10232.63",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "5467.28",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "47.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "15001.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "7016.49",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "2498.08",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "127258.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "3667.94",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "6069.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "811.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "-221730.88",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "7897.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "9627.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "630.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "1351.06",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "8547.86",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "-6347.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "70000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "14672.57",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "7814.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "-232498.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "4091.48",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "9870.05",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "40196.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "5022.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "43363.27",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "3234.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "1669.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "4795.08",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "13747.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "65082.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "4977.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "16000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "4709.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "4455.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "8800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "1221.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "4747.39",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "419.07",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "-10925.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "526.09",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "9145.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "-232498.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "65780.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "15001.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "5022.98",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "1422.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "-232498.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "2564.8",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "12265.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "42339.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "2755.06",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "8058.29",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "3220.72",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "2596.67",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "4897.8",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "4026.57",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "9698.13",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "-201518.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "1086.89",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "54678.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "13554.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "36680.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "413.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "11154.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "1775.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "66842.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "525.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "-5132.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "1960.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "9943.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "-16648.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "622.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "27201.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "2813.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "2999.72",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "-54070.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "137428.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "641.46",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "74097.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "7458.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "13390.48",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "1025.92",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "4807.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "4986.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "9366.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "6158.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "1504.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "562.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "323.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "1060.48",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "22462.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "404.8",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "2334.98",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "3754.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "4542.89",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "5127.79",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "1981.91",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "1657.86",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "9444.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "5505.91",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "2848.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "20022.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "1271.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "63730.93",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "64797.21",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "2866.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "13731.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "2171.86",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "3500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "1378.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "10001.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "2410.74",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "11413.77",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "700",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "-9622.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "-37595.79",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "16000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "1422.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "-1707.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "9.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "2813.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "2280.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "162",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "10195.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "8573.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "6971.52",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "22462.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "20307.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "3022.07",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "31482.11",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "3534.92",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "13138.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "55067.32",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "1890.21",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "4821.21",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "2210.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "5505.91",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "63018.8",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "56126.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "3180.9",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "7645.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "-413862.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "572.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "-373292.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "49980.13",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "17041.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "3006.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "77467.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "3250.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "469.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "5012.46",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "10000.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "68744.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "3234.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "700",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "12318.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "18044.88",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "215.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "4202.72",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "3346.63",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "3421.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "1279.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "6910.03",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "320.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "2638.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "19747.42",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "1000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "-222248.04",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "4947.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "3396.06",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "13265.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "3234.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "294.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "1378.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "29852.52",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "27138.51",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "8151.48",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "48653.04",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "2714.65",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "1333.28",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "2730.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "27.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "411.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "7236.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "10000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "-446022.94",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "10285.46",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "9037.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "2989.05",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "285.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "5000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "31363.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "9299.94",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "1545.18",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "11731.52",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "4709.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "19716.73",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "171919.1",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "14622.63",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "-230798.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "9418.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "1681.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "1291.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "2427.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "1310.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "7026.06",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "10629.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "3629.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "8409.98",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "22462.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "7132.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "4069.62",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "-146851.94",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "-257897.62",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "2261.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "56000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "18500.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "3711.57",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "4356.72",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "43067.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "20760.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "29133.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "4154.52",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "3234.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "-463446.77",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "1166.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "11559.32",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "12386.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "5517.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "-9692.49",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "3421.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "13109.08",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "4251.74",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "71188.12",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "40465.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "22462.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "74170.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "8542.67",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "3234.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "-202960.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "54376.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "483.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "2665.57",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "5207.03",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "4709.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "2958.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "1451.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "2852.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "3061.06",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "10683.27",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "4389.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "5896.88",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "1086.89",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "5991.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "323.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "46632.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "6338.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "814.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "3116.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "1099.72",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "28977.9",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "5505.91",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "3534.92",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "-195400.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "5215.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "5491.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "402.07",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "13845.72",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "5512.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "625.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "2500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "928.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "894.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "6538.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "39554.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "13121.65",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "5270.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "5036.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "12698.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "9302.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "10000.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "-10496.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "1246.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "6761.53",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "6648.9",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "7464.01",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "1016.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "2312.14",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "1669.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "-491.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "6147.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "3234.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "92557.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "2756.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "599.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "8272.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "7993.9",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "873.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "4051.62",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "27580.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "9612.94",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "14805.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "5478.73",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "18844.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "235.8",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "1500.08",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "8701.93",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "3701.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "42087.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "3234.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "7094.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "3118.52",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "492.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "535.48",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "3958.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "3800.91",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "9555.07",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "29979.49",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "5395.73",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "50094.51",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "17411.29",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "17483.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "13014.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "2802.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "-10160.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "1451.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "4962",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "9372.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "-97961.68",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "5047.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "-232498.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "49208.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "10000.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "36058.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "150",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "532.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "55067.32",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "2828.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "342.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "7135.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "49941.47",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "93962.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "1775.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "8772.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "6836.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "-10192.11",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "5540.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "4717.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "4912.88",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "1246.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "12212.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "8413.98",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "-135157.62",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "101.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "7407.67",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "10598.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "7041.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "65000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "402.39",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "4270.91",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "28633.11",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "4969.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "8800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "2289.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "-2673.2",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "1775.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "15000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "9600.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "12535.67",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "3230.39",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "65000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "-6465.05",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "342.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "9009.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "29273.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "28026.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "-232498.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "17057.94",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "44754.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "2131.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "527.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "2712.06",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "97062.27",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "1131.71",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "677.53",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "6000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "3184.73",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "5147.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "20953.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "10003.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "48956.77",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "8000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "1422.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "67845.36",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "86697.93",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "11355.32",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "29295.09",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "2784.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "7470.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "69675.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "18131.95",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "56091.8",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "7586.49",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "16986.04",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "6091.7",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "9675.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "520.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "28684.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "1246.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "2585.42",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "30000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "18387.12",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "56500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "10000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "9613.9",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "2832.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "1772.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "1279.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "296.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "9004.28",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "10441.57",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "7994.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "11009.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "49148.13",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "3918.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "342.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "47.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "4067.9",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "27122.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "1202.51",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "943.53",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "1310.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "5739.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "12000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "-230798.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "55067.32",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "670.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "1575.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "5265.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "3767.57",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "4345.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "1568.29",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "7559.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "3534.92",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "-86975.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "3500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "379.89",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "55043.04",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "927.77",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "1000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "-85760.96",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "3764.39",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "7978.11",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "6599.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "1279.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "45067.32",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "3210.74",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "5769.27",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "20064.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "2356.07",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "492.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "1250.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "757.36",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "6800.8",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "10748.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "-224387.08",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "490.06",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "3000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "1279.59",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "6438.06",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "700",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "8800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "651.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "77133.9",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "7547.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "5022.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "1485.43",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "50",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "11017.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "1669.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "7000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "2172.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "3185.74",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "3000.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "47238.73",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "8789.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "2741.93",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "1000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "10000.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "7878.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "-350830.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "432.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "2181.73",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "144637.98",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "858.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "5673.98",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "114081.18",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "8557.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "17155.89",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "34885.48",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "857.12",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "-122720",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "2981.79",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "2772.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q306M",
            name: "Склад КЦ-1 материалы",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "92189.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "9973.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "17875.21",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "-205717.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "1246.84",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "373.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3155",
            name: "Склад ЦДС ПФ перед Прокаткой",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "1741.83",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5800"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "2733.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "610.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "-10885.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "22462.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "17380.64",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "4709.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "2187.32",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "9894.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "3976.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "5122.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "28905.74",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "60715.66",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "68738.62",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "-436106.26",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "5396.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q311C",
            name: "Склад ЦТС ПФ перед АЭИП",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "3066.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "3819.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "2500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "-10576.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "353.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "5142.22",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "7325.24",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "4058.87",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "159.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "7164.52",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "10309.57",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "1250.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "2185.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "7199.42",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "4562.05",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "9321.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "10000.35",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "90567.04",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "4200.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "3598.92",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "1660.43",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "6374.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "5774.43",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "54840.72",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "13731.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "7317.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "131723.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "30000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "15000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3151",
            name: "Склад ЦДС ГП",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "7000.88",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "14500"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "1394.11",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "2388.29",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/11/21",
            StockLevel: "1800",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "Q307M",
            name: "Склад КЦ-2 материалы",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "51302.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "-1088.88",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "11699.86",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "-187020.21",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "1272.94",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "550"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "28337.89",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "5336.29",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "14672.57",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "4071.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "5878.97",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "700",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "28860.31",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "7751.48",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "78335.34",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "160.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "9449.28",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3153",
            name: "Склад ЦДС перед нормализацией",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "18.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1350"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "10040.85",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "-160326.19",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "2864.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "3485.86",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "10797.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/29/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "144115.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3134",
            name: "Склад ЦХПП ПФ х/к нагартованный",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "12378.23",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23500"
        },
        {
            Id: "Q3071",
            name: "Склад слябов КЦ-2",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "40000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "2737.39",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "65000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "31190.77",
            hasPlannedExcessMaximumInventory: true,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "373.46",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "313.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "1250.66",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "-140052.67",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "6366.16",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "-329565.98",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "64589.91",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "47056.21",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "3013.42",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q315M",
            name: "Склад ЦДС материалы",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128EXT",
            name: "Склад ЦГП под накопление",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "35000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/4/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "15825.3",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "2741.93",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3065",
            name: "Промежуточный склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "31264.17",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3112",
            name: "Склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "2917.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q3065",
            name: "Склад сырья и материалов КЦ-1",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "-61672.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3112",
            name: "Промежуточный склад ЦТС Травильный комплекс",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "9973.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "-178936",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "1972.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q315C",
            name: "Склад ЦДС ПФ перед АПП",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "4092.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "4000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "10128.52",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "60351.54",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "IQ3075",
            name: "Промежуточный склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3001",
            name: "Склад отгрузки",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "125068.12",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "516.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "423.55",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "1972.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "4709.74",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "83333.11",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3132",
            name: "Склад ЦХПП ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "41785.48",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "56500"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/25/21",
            StockLevel: "2813.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q3131",
            name: "Склад ЦХПП ГП",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "27075.41",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "55000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "353.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3122",
            name: "Склад слябов ЦГП",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "45136.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "64000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q3151CC",
            name: "Склад ЦДС ГП для полимерной продукции",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "473.78",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1960"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/2/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/12/21",
            StockLevel: "-9368.04",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "2239.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3128K",
            name: "Межцеховой конвейер ЦГП/ЦХПП",
            Duration: "1",
            PlannedDate: "10/19/21",
            StockLevel: "6041.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "11000"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "2085.6",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "27801.77",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3063",
            name: "Склад термические печи КЦ-1",
            Duration: "1",
            PlannedDate: "10/9/21",
            StockLevel: "1283.21",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1800"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3062",
            name: "Склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "3075.94",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3159",
            name: "Склад ЦДС ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "174.9",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1900"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "2818.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/13/21",
            StockLevel: "5505.91",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/8/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311B",
            name: "Склад ЦТС ПФ после термопокрытия",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "168.13",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "700"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "7368.25",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "373.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "2818.01",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "23363.61",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "10483.88",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/14/21",
            StockLevel: "20672.37",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "IQ3062",
            name: "Промежуточный склад слябов КЦ-1 разливка",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/15/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3136",
            name: "Склад ЦХПП ПФ г/к травленный",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "6026.39",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "17000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "203.72",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/14/21",
            StockLevel: "2218.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q313C",
            name: "Склад ЦХПП ГП перед упаковкой",
            Duration: "1",
            PlannedDate: "11/9/21",
            StockLevel: "10157.89",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "483.27",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "25938.07",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "IQ3122",
            name: "Склад Методические печи ЦГП",
            Duration: "1",
            PlannedDate: "11/19/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "770.77",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ311FHR",
            name: "Склад ТК ПТС готовая продукция",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/1/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311A",
            name: "Склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "211.92",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "1972.58",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "11160.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q3157",
            name: "Склад ЦДС ПФ перед АНО, АНГЦ",
            Duration: "1",
            PlannedDate: "11/3/21",
            StockLevel: "9913.02",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10000"
        },
        {
            Id: "Q3072",
            name: "Склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "65030.33",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "70000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "8667.8",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "958.12",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3118",
            name: "Склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/26/21",
            StockLevel: "799.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "2100"
        },
        {
            Id: "IQ3111",
            name: "Промежуточный склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3154",
            name: "Склад перед НТА",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "2752.03",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "7400"
        },
        {
            Id: "Q3121",
            name: "Склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "10/16/21",
            StockLevel: "11965.5",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "23000"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/24/21",
            StockLevel: "19690.81",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3156",
            name: "Склад ЦДС ПФ перед АПхкР",
            Duration: "1",
            PlannedDate: "10/17/21",
            StockLevel: "6706.76",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8800"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "10514.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "Q311SFG",
            name: "Склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "500",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "3000"
        },
        {
            Id: "IQ311A",
            name: "Промежуточный склад ЦТС ПФ после обезжиривания",
            Duration: "1",
            PlannedDate: "10/10/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "10/21/21",
            StockLevel: "15044.2",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "-466886.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3075",
            name: "Склад сырья и материалов КЦ-2",
            Duration: "1",
            PlannedDate: "10/15/21",
            StockLevel: "-123480.31",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "3992.15",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/23/21",
            StockLevel: "2813.71",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ3118",
            name: "Промежуточный склад ЦТС ПФ перед АНО",
            Duration: "1",
            PlannedDate: "10/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3137",
            name: "Промежуточный склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ3072",
            name: "Промежуточный склад слябов КЦ-2 разливка",
            Duration: "1",
            PlannedDate: "10/27/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/8/21",
            StockLevel: "400",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q311E",
            name: "Склад ЦТС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/12/21",
            StockLevel: "-518.45",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1300"
        },
        {
            Id: "Q313A",
            name: "Склад ЦХПП ПФ перед АПП",
            Duration: "1",
            PlannedDate: "10/7/21",
            StockLevel: "6314.4",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "8500"
        },
        {
            Id: "Q3137",
            name: "Склад ЦХПП ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/13/21",
            StockLevel: "21195.75",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "25000"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "10/30/21",
            StockLevel: "73358.44",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "626.21",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/18/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3111",
            name: "Склад ЦТС ГП",
            Duration: "1",
            PlannedDate: "11/10/21",
            StockLevel: "294.38",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "5000"
        },
        {
            Id: "Q3116",
            name: "Склад ЦТС после обезуглероживания",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "950"
        },
        {
            Id: "Q315B",
            name: "Склад перед упаковкой",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "5477.69",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1500"
        },
        {
            Id: "IQ3117",
            name: "Промежуточный склад ЦТС после II-ой прокатки",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/17/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3117",
            name: "Склад ЦТС после 1-й подготовки",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "325.06",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1400"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "10/31/21",
            StockLevel: "12258.99",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3135",
            name: "Склад ЦХПП ПФ перед ДС",
            Duration: "1",
            PlannedDate: "11/20/21",
            StockLevel: "1310.56",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "16000"
        },
        {
            Id: "Q3158",
            name: "Склад ЦДС ПФ перед АР",
            Duration: "1",
            PlannedDate: "10/20/21",
            StockLevel: "9187.93",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "10800"
        },
        {
            Id: "IQ311F",
            name: "Промежуточный склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "11/16/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3152",
            name: "Склад ЦДС ПФ г/к рулоны",
            Duration: "1",
            PlannedDate: "11/5/21",
            StockLevel: "5366.57",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "12200"
        },
        {
            Id: "IQ3121",
            name: "Промежуточный склад ЦГП ГП",
            Duration: "1",
            PlannedDate: "11/7/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q313M",
            name: "Склад ЦХПП материалы",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q311F",
            name: "Склад ЦТС после АР",
            Duration: "1",
            PlannedDate: "10/28/21",
            StockLevel: "2750.74",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "6000"
        },
        {
            Id: "IQ311SFG",
            name: "Промежуточный склад ЦТС ПФ х/к продукция",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "0",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "0"
        },
        {
            Id: "Q3128",
            name: "Склад ЦГП ПФ перед отделкой",
            Duration: "1",
            PlannedDate: "11/11/21",
            StockLevel: "46688.2",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "90000"
        },
        {
            Id: "Q311SHR",
            name: "Склад ТК ПТС перед упаковкой",
            Duration: "1",
            PlannedDate: "10/22/21",
            StockLevel: "1000",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "1000"
        },
        {
            Id: "Q3061",
            name: "Склад слябов КЦ-1",
            Duration: "1",
            PlannedDate: "11/6/21",
            StockLevel: "5739.83",
            hasPlannedExcessMaximumInventory: false,
            maximumAmountOfStocks: "30000"
        }
    ]
}
