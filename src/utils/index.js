export const filterByAtrr = (component, atrr) => {
    return component.find(`[data-test='${atrr}']`);
}