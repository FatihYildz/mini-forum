export class Topic {

    id;

    constructor(title, date, author, messages) {
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

    static createTopic(topic) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/api/topic', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ title: topic.title, date: topic.date, user: topic.author, content: topic.content }));

        new Promise((resolve, reject) => {
            xhr.onload = () => (xhr.status !== 200) ? reject() : resolve(JSON.parse(xhr.response));
        }).then(topic => {
            console.log(topic);
            return topic;
        }).catch((error) => {
            console.log('Error', error);
        });
    };

    static deleteTopic(id) {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `http://localhost:8080/api/topic/${id}`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();

        new Promise((resolve, reject) => {
            xhr.onload = () => (xhr.status !== 200) ? reject() : resolve(JSON.parse(xhr.response));
        }).then(topic => {
            console.log(topic);
            return topic;
        }).catch((error) => {
            console.log('Error', error);
        });
    }
};