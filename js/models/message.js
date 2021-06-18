export class Message {
    constructor(id, content, date, topic_id, author_id) {
        this.id = id;
        this.content = content;
        this.date = date;
        this.topic_id = topic_id;
        this.author_id = author_id;
    }
};