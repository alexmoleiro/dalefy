export const getFilesAction = "GET_FILES";
export const logoutAction = "LOGOUT";
export const getFilesDriveSuccessAction = "GET_FILES_DRIVE_SUCCESS";
export const updateFileAction = "UPDATE_FILE";
export const shareFileWithAnyoneAction = "SHARE_FILE_WITH_ANYONE";

export function getFiles() {
    return {type: getFilesAction}
};

export function getFilesDriveSuccess(files) {
    return {type: getFilesDriveSuccessAction, files: Object.values(files)};
}

export function updateFile(fileId, form) {
    return {type: updateFileAction, fileId, form};
}

export function shareFileWithAnyone(fileId) {
    return {type: shareFileWithAnyoneAction, fileId};
}