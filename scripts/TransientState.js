const transientState = {
  wheelId: 0,
  interiorId: 0,
  paintId: 0,
  packageId: 0,
  typeId: 0,
};

export const setInteriorOption = (chosenInterior) => {
  transientState.interiorId = chosenInterior;
  console.log(transientState);
};
export const setPackageOption = (chosenPackage) => {
  transientState.packageId = chosenPackage;
  console.log(transientState);
};
export const setPaintOption = (chosenPaint) => {
  transientState.paintId = chosenPaint;
  console.log(transientState);
};
export const setRimOption = (chosenRim) => {
  transientState.wheelId = chosenRim;
  console.log(transientState);
};
export const setModelOption = (chosenModel) => {
  transientState.typeId = chosenModel;
  console.log(transientState);
};

export const placedOrder = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  const response = await fetch("http://localhost:8088/orders", postOptions);

  const customEvent = new CustomEvent("TheClickening");

  document.dispatchEvent(customEvent);
};
