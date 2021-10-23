import {
    Card,
    CardContent,
    CardHeader,
    Grid
} from '@material-ui/core';
import { DashboardKpiChart } from "./DashboardKpiChart";
import { KpiChartIndicator } from "./KpiChartIndicator";
import {
    useState
} from "react";

const KPI_DATA = [
    {
        "Область": "Прием заказов",
        "Показатель": "Заказы не прошедшие проверку на техническую исполнимость",
        "goal": '< 1',
        "9/30/21": "2%",
        "10/1/21": "1%",
        "10/4/21": "3%",
        "10/5/21": "2%",
        "10/6/21": "2%"
    },
    {
        "Область": "Управление квотами",
        "Показатель": "% заполнения квот",
        "goal": '> 80',
        "9/30/21": "65%",
        "10/1/21": "66%",
        "10/4/21": "66%",
        "10/5/21": "73%",
        "10/6/21": "71%"
    },
    {
        "Область": "Календарное планирование",
        "Показатель": "Загрузка оборудования",
        "goal": '> 85',
        "9/30/21": "87%",
        "10/1/21": "85%",
        "10/4/21": "89%",
        "10/5/21": "87%",
        "10/6/21": "83%"
    },
    {
        "Показатель": "Плановый OTIF",
        "goal": '> 90',
        "9/30/21": "91%",
        "10/1/21": "91%",
        "10/4/21": "91%",
        "10/5/21": "90%",
        "10/6/21": "88%"
    },
    {
        "Показатель": "Нарушение уровней запасов",
        "goal": '< 15',
        "9/30/21": "15%",
        "10/1/21": "20%",
        "10/4/21": "21%",
        "10/5/21": "22%",
        "10/6/21": "15%"
    },
    {
        "Показатель": "Загрузка кампаний",
        "goal": '> 80',
        "9/30/21": "75%",
        "10/1/21": "80%",
        "10/4/21": "85%",
        "10/5/21": "90%",
        "10/6/21": "86%"
    },
    {
        "Показатель": "Обязательный горячий посад, %",
        "goal": '> 80',
        "9/30/21": "27%",
        "10/1/21": "17%",
        "10/4/21": "27%",
        "10/5/21": "29%",
        "10/6/21": "27%"
    },
    {
        "Область": "Комбинирование заказов",
        "Показатель": "Формирование и передача комбинаций",
        "goal": '< 90',
        "9/30/21": "99%",
        "10/1/21": "98%",
        "10/4/21": "99%",
        "10/5/21": "97%",
        "10/6/21": "99%"
    },
    {
        "Область": "Графикование конверторов",
        "Показатель": "Составление и передача серий",
        "goal": '> 80',
        "9/30/21": "75%",
        "10/1/21": "74%",
        "10/4/21": "71%",
        "10/5/21": "80%",
        "10/6/21": "83%"
    },
    {
        "Показатель": "Следование календарному плану",
        "goal": '< 70',
        "9/30/21": "60%",
        "10/1/21": "70%",
        "10/4/21": "50%",
        "10/5/21": "65%",
        "10/6/21": "75%"
    },
    {
        "Область": "Графикование горячих цехов",
        "Показатель": "Составление и передача монтажей",
        "goal": '< 70',
        "9/30/21": "70%",
        "10/1/21": "71%",
        "10/4/21": "69%",
        "10/5/21": "73%",
        "10/6/21": "74%"
    },
    {
        "Показатель": "Следование календарному плану",
        "goal": '< 70',
        "9/30/21": "50%",
        "10/1/21": "40%",
        "10/4/21": "47%",
        "10/5/21": "43%",
        "10/6/21": "39%"
    },
    {
        "Показатель": "Уровень резервирования",
        "goal": '> 80',
        "9/30/21": "80%",
        "10/1/21": "85%",
        "10/4/21": "83%",
        "10/5/21": "79%",
        "10/6/21": "80%"
    },
    {
        "Область": "Составление сменно-суточных заданий",
        "Показатель": "% составления ССЗ",
        "goal": '< 50',
        "9/30/21": "30%",
        "10/1/21": "35%",
        "10/4/21": "40%",
        "10/5/21": "54%",
        "10/6/21": "40%"
    },
    {
        "Показатель": "Уровень резервирования",
        "goal": '> 80',
        "9/30/21": "80%",
        "10/1/21": "81%",
        "10/4/21": "79%",
        "10/5/21": "76%",
        "10/6/21": "77%"
    },
    {
        "Показатель": "% составления заданий через контур системы",
        "goal": '> 80',
        "9/30/21": "90%",
        "10/1/21": "85%",
        "10/4/21": "83%",
        "10/5/21": "90%",
        "10/6/21": "87%"
    }
];

const normalizedKPIData = (KPI_DATA) => {
    let currentCategory = null;
    let categories = [];
    const kpiRecords = KPI_DATA.map(kpiRecord => {
        const {
            'Область': category,
            'Показатель': indicator,
            goal,
            ...marksByDays
        } = kpiRecord;

        if (category) {
            kpiRecord.category = currentCategory = category;
            categories.push(currentCategory);
            delete kpiRecord['Область'];
        }

        delete kpiRecord['Показатель'];

        return {
            category: currentCategory,
            indicator,
            goal,
            marksByDays: marksByDays
        };
    });

    return categories.map(category => ({
        category,
        indicators: kpiRecords.filter(record => record.category === category)
    }));
}

const kpiData = normalizedKPIData(KPI_DATA);

export const Dashboard = () => {
    const [ sideEnable, setSideEnable ] = useState(false);
    const [ leftSideSize, setLeftSideSize ] = useState(12);
    const [ activeKpi, setActiveKpi ] = useState();

    const handleClick = (activeKpiRecord) => {
        setLeftSideSize(sideEnable ? 4 : 12);
        setSideEnable(true);
        setActiveKpi(activeKpiRecord);
    }

    return (
        <Card>
            <CardHeader title="KPI" />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid container item xs={leftSideSize}>
                        { kpiData.map((data, index) => (
                            <Grid onClick={() => handleClick(data)} key={index} item xs={ 6 }>
                                <DashboardKpiChart kpiRecord={data} />
                            </Grid>
                        )) }
                    </Grid>
                    { sideEnable &&
                        <Grid item xs={8}>
                            <KpiChartIndicator kpiRecord={activeKpi} />
                        </Grid>
                    }
                </Grid>
            </CardContent>
        </Card>
    )
};
