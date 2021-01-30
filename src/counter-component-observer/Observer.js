

class Observer {

    handlers = new Map();

    subscribe(eventName, instance, func) {
        debugger;
        let handlerMap = this.handlers.get(eventName);
        if(!handlerMap) {
            this.handlers.set(eventName, new Map());
            handlerMap = this.handlers.get(eventName);
        }
        handlerMap.set(instance, func);
    }

    unSubscribe(eventName, instance) {
        const handlerMap = this.handlers.get(eventName);
        if(!handlerMap) {
            return;
        }
        handlerMap.delete(instance);
    }

    publish(eventName, data) {
        const handlerMap = this.handlers.get(eventName);
        if(!handlerMap) {
            return;
        }
        handlerMap.forEach(funcValue => {
            funcValue(data);
        });
    }
}

export default new Observer();