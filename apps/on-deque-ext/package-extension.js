const child_process = require("child_process");
const fs = require('fs');
const path = require("path");
const ARCHIVE_NAME = "extension";
const EXT_DIST_PATH = path.join(__dirname, "../../dist/apps/on-deque-ext");
const ARCHIVE_PATH = `${EXT_DIST_PATH}/${ARCHIVE_NAME}`;


module.exports = () => {
    try {
        //child_process.execSync(`zip -r ${ARCHIVE_NAME} *`, { cwd: EXT_DIST_PATH });
        //fs.copyFileSync(`${ARCHIVE_PATH}.zip`, `${EXT_DIST_PATH}/temp.zip`);
        //fs.renameSync(`${EXT_DIST_PATH}/temp.zip`, `${ARCHIVE_PATH}.xpi`);
    } catch (error) {
        console.error(`Error packaging extension. ${error}`);
    }
};

