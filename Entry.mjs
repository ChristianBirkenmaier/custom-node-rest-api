import { v4 as uuidv4 } from "uuid";

export default class Entry {
    constructor(category, project, fromDate, untilDate, comment) {
        this.id = uuidv4();
        this.category = category;
        this.project = project;
        this.fromDate = fromDate;
        this.untilDate = untilDate;
        this.comment = comment;
    }
}
