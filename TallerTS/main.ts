import { Serie } from './Serie.js';
import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const avgSeasonsElement: HTMLElement = document.getElementById("avg-seasons")!;

renderCoursesInTable(data);
updateAvgSeasons(data);

function renderCoursesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}
function searchSeriesByName(nameKey: string, series: Serie[]) {
    return nameKey === '' ? data : series.filter( c => 
    c.name.match(nameKey));
}

function clearCoursesInTable() {
  while (seriesTbody.hasChildNodes()) {
    if (seriesTbody.firstChild != null) {
      seriesTbody.removeChild(seriesTbody.firstChild);
    }
  }
} // <-- Add this closing brace

function getAvgSeasons(series: Serie[]): number {
      let totalCredits: number = 0;
      series.forEach((serie) => totalCredits = totalCredits + serie.seasons);
      let avgSeason = totalCredits / series.length;
      return avgSeason;
    }
function updateAvgSeasons(series: Serie[]): void {
  const avgSeasons = getAvgSeasons(series);
  avgSeasonsElement.innerHTML = `<strong>Promedio Temporadas: </strong>${avgSeasons}`;
}