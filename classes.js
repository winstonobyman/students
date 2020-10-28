class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }
}

class Clock {
    constructor(template) {
        this.template = template;
    }

    render(template) {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }

        let minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        let seconds = date.getSeconds();
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        let output = template
            .replace('h', hours)
            .replace('m', minutes)
            .replace('s', seconds);

        console.log(output);
    }

    start() {
        this.render(this.template);
        this.timer = setInterval(this.render, 1000, this.template);
    }

    stop() {
        clearInterval(this.timer);
    }
}
