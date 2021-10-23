import {VictoryBar, VictoryChart, VictoryStack, VictoryGroup } from 'victory';
import logo from '../example.jpg'
import {useState} from "react";


export const PlanningChart = () => {
    const [isHidden, setIsHidden] = useState(true)
    const groupedAggregates = [
        {
            "КЦ-1": {
                date: '07.10.2021',
                occupiedPercentage: 90,
                unavailablePercentage: 24,
            },
            "КЦ-2": {
                date: '07.10.2021',
                occupiedPercentage: 54,
                unavailablePercentage: 10,
            },
            "ЦТС": {
                date: '07.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 12,
            },
            "ЦХПП": {
                date: '07.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 3,
            }
        },
        {
            "КЦ-1": {
                date: '08.10.2021',
                occupiedPercentage: 84,
                unavailablePercentage: 30,
            },
            "КЦ-2": {
                date: '08.10.2021',
                occupiedPercentage: 60,
                unavailablePercentage: 7,
            },
            "ЦТС": {
                date: '08.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 12,
            },
            "ЦХПП": {
                date: '08.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 3,
            }
        },
        {
            "КЦ-1": {
                date: '09.10.2021',
                occupiedPercentage: 78,
                unavailablePercentage: 32,
            },
            "КЦ-2": {
                date: '09.10.2021',
                occupiedPercentage: 64,
                unavailablePercentage: 9,
            },
            "ЦТС": {
                date: '09.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 12,
            },
            "ЦХПП": {
                date: '09.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 3,
            }
        },
        {
            "КЦ-1": {
                date: '10.10.2021',
                occupiedPercentage: 88,
                unavailablePercentage: 32,
            },
            "КЦ-2": {
                date: '10.10.2021',
                occupiedPercentage: 64,
                unavailablePercentage: 9,
            },
            "ЦТС": {
                date: '10.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 12,
            },
            "ЦХПП": {
                date: '10.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 3,
            }
        },
        {
            "КЦ-1": {
                date: '11.10.2021',
                occupiedPercentage: 90,
                unavailablePercentage: 30,
            },
            "КЦ-2": {
                date: '11.10.2021',
                occupiedPercentage: 64,
                unavailablePercentage: 10,
            },
            "ЦТС": {
                date: '11.10.2021',
                occupiedPercentage: 94,
                unavailablePercentage: 13,
            },
            "ЦХПП": {
                date: '11.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 4,
            }
        },
        {
            "КЦ-1": {
                date: '12.10.2021',
                occupiedPercentage: 90,
                unavailablePercentage: 30,
            },
            "КЦ-2": {
                date: '12.10.2021',
                occupiedPercentage: 64,
                unavailablePercentage: 10,
            },
            "ЦТС": {
                date: '12.10.2021',
                occupiedPercentage: 94,
                unavailablePercentage: 13,
            },
            "ЦХПП": {
                date: '12.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 4,
            }
        },
        {
            "КЦ-1": {
                date: '13.10.2021',
                occupiedPercentage: 91,
                unavailablePercentage: 32,
            },
            "КЦ-2": {
                date: '13.10.2021',
                occupiedPercentage: 65,
                unavailablePercentage: 10,
            },
            "ЦТС": {
                date: '13.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 13,
            },
            "ЦХПП": {
                date: '13.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 2,
            }
        }
    ];

    const size = {
        width: '1200px',
        height: '500px',
    }
    let imgStyle = {
        width: '900px',
        height: '350px',
        marginLeft: '160px',
        position: 'absolute',
    }

    function clickHandler() {
        setIsHidden(!isHidden)
    }

    const getOccupiedPercentage = () => {
        return groupedAggregates.map((el) => {
            const keys = Object.keys(el);
            const result = [];
            keys.forEach((key) => {
                result.push({x:el[key].date, y: 1000 / 100 * el[key].occupiedPercentage})
            })
            return result
        });
    };
    const getUnavailablePercentage = () => {
        return groupedAggregates.map((el) => {
            const keys = Object.keys(el);
            const result = [];
            keys.forEach((key) => {
                result.push({x:el[key].date, y: 1000 / 100 * el[key].unavailablePercentage})
            })
            return result
        });
    };

    const divStyle = {
        position: "absolute",
        width: '50px',
        height: '380px',
        bottom: '455px',
        left: '445px'
    };

    return (
        <div style={size}>
            <VictoryChart domainPadding={{x: 50}} width={800} height={400}>
                <VictoryGroup offset={5} style={{data: {width: 15}}}>
                    <VictoryStack style={{data:{fill:"gray"}}} >
                        {getOccupiedPercentage().map((data, index) => {
                            return <VictoryBar onClick={() => {console.log(1)}}  style={{ labels: { fill: "black" } }} key={index} data={data}/>;
                        })}
                    </VictoryStack>
                    <VictoryStack  style={{data:{fill: "red", width:5}}}>
                        {getUnavailablePercentage().map((data, index) => {
                            return <VictoryBar   style={{ labels: { fill: "black" } }} key={index} data={data}/>;
                        })}
                    </VictoryStack>
                </VictoryGroup>
            </VictoryChart>
            {isHidden ? null : <img id={'img'} style={imgStyle} src={logo}/>}
            <div isHidden onClick={() => {clickHandler()}} style={divStyle}></div>
        </div>
    );
}
