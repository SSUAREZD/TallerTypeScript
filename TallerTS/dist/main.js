"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var seriesTbody = document.getElementById('series');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
btnfilterByName.onclick = function () { return applyFilterByName(); };
renderCoursesInTable(data_1.data);
function renderCoursesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var seriesFiltered = searchSeriesByName(text, data_1.data);
    renderCoursesInTable(seriesFiltered);
}
function searchSeriesByName(nameKey, series) {
    return nameKey === '' ? data_1.data : series.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function clearCoursesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
}
