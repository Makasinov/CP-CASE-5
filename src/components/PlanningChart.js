import {VictoryBar, VictoryChart, VictoryStack, VictoryGroup, VictoryAxis} from 'victory';

// const groupedAggregates = [
//     {
//         date: '07.10.2021',
//         warehouses: [{
//             "КЦ-1": {
//                 occupiedPercentage: 90,
//                 unavailablePercentage: 24,
//             },
//             "КЦ-2": {
//                 occupiedPercentage: 54,
//                 unavailablePercentage: 10,
//             },
//             "ЦТС": {
//                 occupiedPercentage: 100,
//                 unavailablePercentage: 12,
//             },
//             "ЦХПП": {
//                 occupiedPercentage: 100,
//                 unavailablePercentage: 3,
//             }
//         }]
//     },
//     {
//         date: '08.10.2021',
//         warehouses: [{
//             "КЦ-1": {
//                 occupiedPercentage: 84,
//                 unavailablePercentage: 30,
//             },
//             "КЦ-2": {
//                 occupiedPercentage: 60,
//                 unavailablePercentage: 7,
//             },
//             "ЦТС": {
//                 occupiedPercentage: 100,
//                 unavailablePercentage: 12,
//             },
//             "ЦХПП": {
//                 occupiedPercentage: 100,
//                 unavailablePercentage: 3,
//             }
//         }]
//     },
//     {
//         date: '09.10.2021',
//         warehouses: [{
//             "КЦ-1": {
//                 occupiedPercentage: 88,
//                 unavailablePercentage: 32,
//             },
//             "КЦ-2": {
//                 occupiedPercentage: 64,
//                 unavailablePercentage: 9,
//             },
//             "ЦТС": {
//                 occupiedPercentage: 100,
//                 unavailablePercentage: 12,
//             },
//             "ЦХПП": {
//                 occupiedPercentage: 100,
//                 unavailablePercentage: 3,
//             }
//         }]
//     },
//     {
//         date: '10.10.2021',
//         warehouses: [{
//             "КЦ-1": {
//                 occupiedPercentage: 88,
//                 unavailablePercentage: 32,
//             },
//             "КЦ-2": {
//                 occupiedPercentage: 64,
//                 unavailablePercentage: 9,
//             },
//             "ЦТС": {
//                 occupiedPercentage: 100,
//                 unavailablePercentage: 12,
//             },
//             "ЦХПП": {
//                 occupiedPercentage: 100,
//                 unavailablePercentage: 3,
//             }
//         }]
//     },
//     {
//         date: '11.10.2021',
//         warehouses: [{
//             "КЦ-1": {
//                 occupiedPercentage: 90,
//                 unavailablePercentage: 30,
//             },
//             "КЦ-2": {
//                 occupiedPercentage: 64,
//                 unavailablePercentage: 10,
//             },
//             "ЦТС": {
//                 occupiedPercentage: 94,
//                 unavailablePercentage: 13,
//             },
//             "ЦХПП": {
//                 occupiedPercentage: 100,
//                 unavailablePercentage: 4,
//             }
//         }]
//     },
//     {
//         date: '12.10.2021',
//         warehouses: [{
//             "КЦ-1": {
//                 occupiedPercentage: 90,
//                 unavailablePercentage: 30,
//             },
//             "КЦ-2": {
//                 occupiedPercentage: 64,
//                 unavailablePercentage: 10,
//             },
//             "ЦТС": {
//                 occupiedPercentage: 94,
//                 unavailablePercentage: 13,
//             },
//             "ЦХПП": {
//                 occupiedPercentage: 100,
//                 unavailablePercentage: 4,
//             }
//         }]
//     },
//     {
//         date: '13.10.2021',
//         warehouses: [{
//             "КЦ-1": {
//                 occupiedPercentage: 91,
//                 unavailablePercentage: 32,
//             },
//             "КЦ-2": {
//                 occupiedPercentage: 65,
//                 unavailablePercentage: 10,
//             },
//             "ЦТС": {
//                 occupiedPercentage: 100,
//                 unavailablePercentage: 13,
//             },
//             "ЦХПП": {
//                 occupiedPercentage: 100,
//                 unavailablePercentage: '2%',
//             }
//         }]
//     }
// ];

export const PlanningChart = () => {
    const groupedAggregates = [
        {
            "КЦ-1": {
                date: '7.10.2021',
                occupiedPercentage: 90,
                unavailablePercentage: 24,
            },
            "КЦ-2": {
                date: '7.10.2021',
                occupiedPercentage: 54,
                unavailablePercentage: 10,
            },
            "ЦТС": {
                date: '7.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 12,
            },
            "ЦХПП": {
                date: '7.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 3,
            }
        },
        {
            "КЦ-1": {
                date: '8.10.2021',
                occupiedPercentage: 84,
                unavailablePercentage: 30,
            },
            "КЦ-2": {
                date: '8.10.2021',
                occupiedPercentage: 60,
                unavailablePercentage: 7,
            },
            "ЦТС": {
                date: '8.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 12,
            },
            "ЦХПП": {
                date: '8.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 3,
            }
        },
        {
            "КЦ-1": {
                date: '9.10.2021',
                occupiedPercentage: 88,
                unavailablePercentage: 32,
            },
            "КЦ-2": {
                date: '9.10.2021',
                occupiedPercentage: 64,
                unavailablePercentage: 9,
            },
            "ЦТС": {
                date: '9.10.2021',
                occupiedPercentage: 100,
                unavailablePercentage: 12,
            },
            "ЦХПП": {
                date: '9.10.2021',
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

    function groupAggregatesByDay(aggregates) {
        const keys = Object.keys(el);
        const result = [];
        aggregates.forEach((el) => {
            keys.forEach((key) => {
                if (!obj[el[key].date]){
                    result.push({
                        name: key,
                        occupiedPercentage: el[key].occupiedPercentage,
                        unavailablePercentage: el[key].unavailablePercentage,
                    })
                } else {

                }
            })
        });

    }

    const chartContainerStyle = {
        width: '1200px',
        height: '600px',
    }

    const getOccupiedPercentage = () => {
        return groupedAggregates.map((el) => {
            const keys = Object.keys(el);
            const result = [];
            keys.forEach((key) => {
                result.push({x:el[key].date, y: 100 / 100 * el[key].occupiedPercentage})
            })
            return result
        });
    };
    const getUnavailablePercentage = () => {
        return groupedAggregates.map((el) => {
            const keys = Object.keys(el);
            const result = [];
            keys.forEach((key) => {
                console.log(key)
                result.push({x:el[key].date, y: 100 / 100 * el[key].unavailablePercentage})
            })
            return result
        });
    };
    return (
        <div style={chartContainerStyle}>
            <VictoryChart domainPadding={{x: 50}} width={800} height={400}>
                <VictoryGroup offset={5} style={{data: {width: 15}}}>
                    <VictoryStack style={{data:{fill:"gray"}}} >
                        {getOccupiedPercentage().map((data, index) => {
                            return <VictoryBar key={index} data={data}/>;
                        })}
                    </VictoryStack>
                    <VictoryStack  style={{data:{fill: "red", width:5}}}>
                        {getUnavailablePercentage().map((data, index) => {
                            return <VictoryBar key={index} data={data}/>;
                        })}
                    </VictoryStack>
                    <VictoryAxis
                        tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => (`$${x / 1000}k`)}
                    />
                </VictoryGroup>
            </VictoryChart>
        </div>
    );
}
