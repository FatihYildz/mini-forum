export class Message {

    id;

    constructor(content, date, topic, author) {
        this.content = content;
        this.date = date;
        this.topic = topic;
        this.author = author;
    }

    static createMessage(message) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/api/message', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ content: message.content, date: message.date, user: message.author, topic: message.topic }));

        new Promise((resolve, reject) => {
            xhr.onload = () => (xhr.status !== 200) ? reject() : resolve(JSON.parse(xhr.response));
        }).then(message => {
            console.log(message);
            return message;
        }).catch((error) => {
            console.log('Error', error);
        });
    };
};