export const mainTabSelectedAction = "MAIN_TAB_SELECTED";

export function mainTabSelected(tabNumber) {
    return {type: mainTabSelectedAction,tabNumber};
}