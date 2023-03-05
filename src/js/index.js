import { getTranslation } from "./helpers.js";

const languagesList = document.querySelector("#languages-list");
const outputText = document.querySelector("#output-text");

languagesList.addEventListener("change", (event) => {
  outputText.textContent = getTranslation(languagesList.value);
});
