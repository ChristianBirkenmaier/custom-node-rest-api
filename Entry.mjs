import { v4 as uuidv4 } from "uuid";

export default class Entry {
    constructor(
        id,
        categoryName,
        projectName,
        fromDate,
        untilDate,
        optionalText
    ) {
        this.id = id ? id : uuidv4();
        this.categoryName = categoryName;
        this.projectName = projectName;
        this.fromDate = fromDate;
        this.untilDate = untilDate;
        this.optionalText = optionalText;
    }
}
