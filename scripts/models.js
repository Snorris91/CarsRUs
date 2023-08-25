import { setModelOption } from "./TransientState.js";

export const modelOptions = async () => {
  const response = await fetch("http://localhost:8088/types");
  const types = await response.json();

  document.addEventListener("change", handleModelChoice);

  let modelHTML = `<select id="model"><option value="0">Pick Your Model</option>`;
  const modelArr = types.map((type) => {
    modelHTML += `
        <option value="${type.id}">${type.type}</option>
        `;
  });
  modelHTML += modelArr.join("");
  modelHTML += `</select>`;
  return modelHTML;
};

const handleModelChoice = (event) => {
  if (event.target.id === "model") {
    setModelOption(parseInt(event.target.value));
  }
};
