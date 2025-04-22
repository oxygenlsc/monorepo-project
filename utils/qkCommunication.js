window._QIANKUN_YD = window._QIANKUN_YD || {
  // 通信
  event: (() => {
    class Emitter {
      constructor() {
        this.events = {};
        this.watchs = [];
      }
      add(eventName, callback, count) {
        if (!eventName || typeof callback !== "function") return;
        if (!this.events[eventName]) {
          this.events[eventName] = [];
          this.events[eventName].push({ callback, count });
        } else {
          const hasExist = this.events[eventName].some(
            (item) => item.callback === callback && item.count === count
          );
          !hasExist && this.events[eventName].push({ callback, count });
        }
      }
      emit(...args) {
        const [eventName, ...restArgs] = args;
        const callbacks = this.events[eventName] || [];
        if (eventName && this.watchs.length > 0) {
          this.watchs.forEach((item) => {
            item.apply(this, [eventName, ...restArgs]);
          });
        }
        if (eventName && callbacks.length > 0) {
          callbacks.forEach(({ callback, count }) => {
            callback.apply(this, [eventName, ...restArgs]);
            count && this.off(eventName, callback);
          });
        }
      }
      on(eventName, callback) {
        this.add(eventName, callback, 0);
      }
      once(eventName, callback) {
        this.add(eventName, callback, 1);
      }
      off(eventName, callback) {
        const callbacks = this.events[eventName] || [];
        if (callbacks.legnth <= 0) return;
        if (!callback) this.events[eventName] = [];
        callbacks.forEach((item, index) => {
          if (item.callback === callback) {
            callbacks.splice(index, 1);
          }
        });
      }
      watch(callback) {
        if (typeof fn !== "function") return;
        this.watchs.push(callback);
      }
    }
    return new Emitter();
  })(),
  // 数据共享（具备持久化能力）
  store: (() => {
    class Storage {
      constructor() {
        // 持久化
        this.storage = generatorStorage(window.localStorage);
        // this.storage = generatorStorage(window.sessionStorage);
        // 全局数据，生命周期同window
        this.global = {};
      }
      set(key, value) {
        return this.storage.set(key, value);
      }
      get(key) {
        return this.storage.get(key);
      }
      remove(key) {
        this.storage.remove(key);
      }
      clear() {
        this.storage.clear();
      }
      setGlobalData(key, value) {
        this.global[key] = value;
      }
      getGlobalData(key) {
        return this.global[key];
      }
    }
    return new Storage();
  })(),
};
function generatorStorage(storage) {
  const prefix = (key) => `__qiankun_yd_${key}`;
  return {
    set(key, value) {
      const valueFormat = (value) => {
        if (
          ["[object Array]", "[object Object]"].includes(
            Object.prototype.toString.call(value)
          )
        ) {
          return JSON.stringify(value);
        } else {
          return value;
        }
      };
      storage.setItem(prefix(key), valueFormat(value));
    },
    get(key) {
      try {
        return JSON.parse(storage.getItem(prefix(key)));
      } catch {
        return storage.getItem(prefix(key));
      }
    },
    remove(key) {
      storage.removeItem(prefix(key));
    },
    clear() {
      storage.clear();
    },
  };
}
export const qiankunEvent = window._QIANKUN_YD.event;
export const qiankunStore = window._QIANKUN_YD.store;
