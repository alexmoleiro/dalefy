export const getFilesAction = "GET_FILES";
export const logoutAction = "LOGOUT";
export const getFilesDriveSuccessAction = "GET_FILES_DRIVE_SUCCESS";

export function getFiles() {
    return {type: getFilesAction}
};

export function getFilesDriveSuccess(files) {
    return {type:getFilesDriveSuccessAction, files:Object.values(files)};
}