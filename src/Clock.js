class Clock {
    constructor(going, done, time, goal) {
        this.going = going;
        this.done = done;
        this.time = time;
        this.goal = goal;
    }

    start() {
        this.going = true;
    }

    stop() {
        this.going = false;
    }
}