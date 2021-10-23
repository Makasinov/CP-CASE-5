function createWarehousesDictionary({ ResourceWarehouse, Remains }) {
  const warehouses = {};
  ResourceWarehouse.forEach((obj) => {
    if (obj.InputSP) {
      const warehousesId = obj.InputSP.split(';');
      warehousesId.forEach((warehouseId) => {
        if (!warehouses[warehouseId]) {
          warehouses[warehouseId] = {
            dates: [],
            maximum: 0,
            likeInput: [obj.Id],
            likeOutput: []
          };
          Remains.forEach(({ Id, PlannedDate, StockLevel, maximumAmountOfStocks, }) => {
            if (Id === warehouseId) {
              if (!warehouses[warehouseId].maximum) {
                warehouses[warehouseId].maximum = +maximumAmountOfStocks;
              }
              const dayInfo = {
                date: new Date(PlannedDate),
                stockLevel: +StockLevel,
              };
              warehouses[warehouseId].dates.push(dayInfo)
            }
          });
        } else {
          if (!warehouses[warehouseId].likeInput.includes(obj.Id)) warehouses[warehouseId].likeInput.push(obj.Id)
        }
      })
    }
    if (obj.OutputSP) {
      const warehousesId = obj.OutputSP.split(';');
      warehousesId.forEach((warehouseId) => {
        if (!warehouses[warehouseId]) {
          warehouses[warehouseId] = {
            dates: [],
            maximum: 0,
            likeInput: [],
            likeOutput: [obj.Id]
          };
          Remains.forEach(({ Id, PlannedDate, StockLevel, maximumAmountOfStocks }) => {
            if (Id === warehouseId) {
              if (!warehouses[warehouseId].maximum) {
                warehouses[warehouseId].maximum = +maximumAmountOfStocks;
              }
              const dayInfo = {
                date: new Date(PlannedDate),
                stockLevel: +StockLevel,
              };
              warehouses[warehouseId].dates.push(dayInfo)
            }
          });
        } else {
          if (!warehouses[warehouseId].likeOutput.includes(obj.Id)) warehouses[warehouseId].likeOutput.push(obj.Id)
        }
      })
    }
  });

  return warehouses;
}

module.exports = {
  createWarehousesDictionary
}
