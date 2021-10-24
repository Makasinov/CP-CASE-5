import {
    VictoryChart,
    VictoryGroup,
    VictoryStack,
    VictoryBar,
    VictoryLabel,
    VictoryTooltip
} from 'victory';

export const KpiCategoryChart = ({ kpiRecord }) => {
    const { indicators, category  } = kpiRecord;
    // const colors = ["tomato", "lightgreen", "blueviolet", "lightblue", "aqua"]
    const colors = ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"];
    const dataToRender = indicators.map(indicator => {
        return {
            label: indicator.indicator,
            bars: Object.entries(indicator.marksByDays).map(([date, value]) => ({
                x: date,
                y: parseInt(value)
            }))
        }
    })

    return (
        <VictoryChart domainPadding={{ x: 70 }} >
            <VictoryLabel
                x={225}
                y={25}
                textAnchor="middle"
                text={category}
            />
            <VictoryGroup offset={15} style={{ data: { width: 10 } }}>
                { dataToRender.map((indicator, idx) => (
                    <VictoryStack key={idx}>
                        <VictoryBar
                            style={{
                                data: { fill: colors[idx] }
                            }}
                            labelComponent={<VictoryTooltip/>}
                            labels={({ datum }) => `${indicator.label} - ${datum.y} %`}
                            data={indicator.bars}/>
                    </VictoryStack>
                )) }
            </VictoryGroup>
        </VictoryChart>
    )
}
