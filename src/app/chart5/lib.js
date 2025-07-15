export function transformChartData(rawJson) {
  const categories = rawJson.data.xaxis.categories;
  const categoryKey = rawJson.data.xaxis.type || "Category"; // "Asisten"
  const seriesArray = rawJson.data.series;

  // Extract all series data keyed by series name
  const seriesData = {};
  seriesArray.forEach(serie => {
    seriesData[serie.name] = serie.data;
  });

  // Build final array
  const result = categories.map((category, index) => {
    const entry = { [categoryKey]: category };
    for (const [name, dataArray] of Object.entries(seriesData)) {
      entry[name] = dataArray[index] || 0;
    }
    return entry;
  });

  return result;
}
