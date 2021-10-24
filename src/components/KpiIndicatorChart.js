import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {
    Grid
} from '@material-ui/core';

const useStyles = makeStyles({
    chart: {
        minHeight: '240px',
        margin: '0 auto',
        maxWidth: '400px',
        width: '100%',
        height: '400px'
    },
    chartBar: {
        position: 'relative',
        height: '2px',
    },
    chartBarPer: {
        position: 'absolute',
        right: 0,
        top: '-20px'
    },
    chartBarBottom: {
        marginTop: '15px'
    },
    chartBarPerBottom: {
        position: 'absolute',
        right: 0,
        bottom: '-20px'
    },
    chartGroup: {
        position: 'relative',
        marginBottom: '60px'
    },
    chartContent: {
        padding: '10px 0',
        borderLeft: '2px solid'
    },
    chartTitle: {
        marginBottom: '30px',
        fontSize: '22px'
    },
    chartBarTitle: {
        position: 'absolute',
        width: '120px',
        left: '-135px',
        marginTop: '-12px'
    }
});

export const KpiIndicatorChart = ({ kpiRecord, handleBack }) => {
    const { indicators, category  } = kpiRecord;
    const classes = useStyles();

    const colors = ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"];
    const dataToRender = indicators.map((indicator, index) => {
        return {
            goal: indicator.goal,
            label: indicator.indicator,
            bars: Object.entries(indicator.marksByDays).slice(0, 2).map(([date, value]) => ({
                x: index + 1,
                y: parseInt(value)
            }))
        }
    });

    const calculateWidth = (width) => {
        return width < 10 ? width + 30 : width;
    }

    const createStyles = (bar, index) => ({
        width: `${calculateWidth(bar.y)}%`,
        backgroundColor: colors[index]
    })

    const createGoalStyles = (goal) => {
        return {
            position: 'absolute',
            top: '-10px',
            left: `${goal.substring(2)}%`,
            width: '20px',
            height: '40px',
            background: 'darkseagreen'
        }
    }

    const handleClick = () => {
        handleBack()
    }

    return (
        <div>
            <Grid container justify="flex-end">
                <IconButton sx={{ textAlign: 'left' }} onClick={handleClick} size="small">
                    <ArrowRightIcon />
                </IconButton>
            </Grid>
            <div className={classes.chart}>
                <div className={classes.chartTitle}>{category}</div>
                <div className={classes.chartContent}>
                    { dataToRender.map((indicator, indicatorIndex) => {
                        return (
                          <div className={classes.chartGroup} key={indicatorIndex}>
                              <div className={classes.chartBarTitle}>{indicator.label}</div>
                              <div style={createGoalStyles(indicator.goal)}></div>
                              <div
                                className={`${classes.chartBar}`}
                                key={0}
                                style={createStyles(indicator.bars[0], indicatorIndex)}
                              >
                                  <div className={classes.chartBarPer}>{indicator.bars[0].y}%</div>
                              </div>
                              <div
                                className={`${classes.chartBar} ${classes.chartBarBottom}`}
                                key={1}
                                style={createStyles(indicator.bars[1], indicatorIndex)}
                              >
                                  <div className={classes.chartBarPerBottom}>{indicator.bars[0].y}%</div>
                              </div>
                          </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    )
}

/*<VictoryChart
    domain={{
        x: [0, 3],
        y: [0, 100]
    }}
>
    <VictoryLabel
        x={225}
        y={25}
        textAnchor="middle"
        text={category}
    />
    <VictoryGroup
        horizontal
        offset={10}
        style={{ data: { width: 6 } }}
    >
        { dataToRender.map((indicator, idx) => (
            <VictoryBar
                key={idx}
                data={indicator.bars}
                style={{
                    data: { fill: colors[idx] }
                }}

            />
        )) }
    </VictoryGroup>
</VictoryChart>*/
