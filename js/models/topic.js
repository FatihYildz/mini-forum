export class Topic {
    constructor(id, title, date, author, messages) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.author = author;
        this.messages = messages
    }

    static getTopics() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:8080/api/topic', true);
        xhr.send();
        const result = new Promise((resolve, reject) => {
            xhr.onload = () => (xhr.status !== 200) ? reject() : resolve(JSON.parse(xhr.response));
        }).then(topics => topics).catch(error => console.log(error));
        return result;
    }

    static getTopic(id) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:8080/api/topic/${id}`, true);
        xhr.send();
        const result = new Promise((resolve, reject) => {
            xhr.onload = () => (xhr.status !== 200) ? reject() : resolve(JSON.parse(xhr.response));
        }).then(topic => topic).catch(error => console.log(error));
        return result;
    }
};