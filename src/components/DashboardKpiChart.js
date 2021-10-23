import {
    VictoryChart,
    VictoryGroup,
    VictoryStack,
    VictoryBar,
    VictoryLabel
} from 'victory';

export const DashboardKpiChart = ({ kpiRecord }) => {
    const { indicators, category  } = kpiRecord;
    // TODO: remove stabs
    const dates = Object.keys(indicators[0].marksByDays);
    const indicatorsByDates = dates.reduce((acc, date) => {
        const indicatorsByDate = indicators.map(indicatorRecord => ({
            indicator: indicatorRecord.indicator,
            value: indicatorRecord.marksByDays[date]
        }));

        acc[date] = indicatorsByDate;
        return acc;
    }, {});
    // TODO: remove stabs
    const dataToRender = Object.entries(indicatorsByDates).map(([date, indicators], index) => {
        return indicators.map((indicator) => {
            const data = {
                x: date,
                y: indicator.value
            }
            return data;
        })
    });

    return (
        <VictoryChart domainPadding={{ x: 70 }} >
            <VictoryLabel
                x={225}
                y={25}
                textAnchor="middle"
                text={category}
            />
            <VictoryGroup offset={5} style={{ data: { width: 10 } }}>
                { dataToRender.map((element, idx) => (
                    <VictoryStack key={idx} colorScale={"blue"}>
                        <VictoryBar data={element}/>
                    </VictoryStack>
                )) }
            </VictoryGroup>
        </VictoryChart>
    )
}
