import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var avgSeasonsElement = document.getElementById("avg-seasons");
renderCoursesInTable(data);
updateAvgSeasons(data);
function renderCoursesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function searchSeriesByName(nameKey, series) {
    return nameKey === '' ? data : series.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function clearCoursesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
} // <-- Add this closing brace
function getAvgSeasons(series) {
    var totalCredits = 0;
    series.forEach(function (serie) { return totalCredits = totalCredits + serie.seasons; });
    var avgSeason = totalCredits / series.length;
    return avgSeason;
}
function updateAvgSeasons(series) {
    var avgSeasons = getAvgSeasons(series);
    avgSeasonsElement.innerHTML = "<strong>Promedio Temporadas: </strong>".concat(avgSeasons);
}
