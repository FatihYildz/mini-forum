export function createUser(user); {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/user', true);

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ username: user.username, password: user.password, passwordConfirm: user.password }));
    new Promise((resolve, reject) => {
        xhr.onload = () => (xhr.status !== 200) ? reject() : resolve(JSON.parse(xhr.response));
    }).then(user => {
        console.log(user);
    }).catch(() => {
        console.log('Oops, user not found');
    });
};

export function createMessage(message); {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/message', true);

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ content: `${message.content}`, date: `${message.date}`, user: `${message.author}`, topic: `${message.topic}` }));
    new Promise((resolve, reject) => {
        xhr.onload = () => (xhr.status !== 200) ? reject() : resolve(JSON.parse(xhr.response));
    }).then(message => {
        console.log(message);
    }).catch(() => {
        console.log('Oops, message not found');
    });
};

export function createTopic(topic); {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/topic', true);

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ title: `${topic.title}`, date: `${topic.date}`, user: `${topic.author}`, content: `${topic.content}` }));
    new Promise((resolve, reject) => {
        xhr.onload = () => (xhr.status !== 200) ? reject() : resolve(JSON.parse(xhr.response));
    }).then(topic => {
        console.log(topic);
    }).catch(() => {
        console.log('Oops, topic not found');
    });
};