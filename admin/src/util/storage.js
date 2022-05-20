
const storage = sessionStorage

export default {
    set(key, val) {
        storage.setItem(key, val)
    },
    get(key) {
        return storage.getItem(key)
    },
    remove(key) {
        storage.removeItem(key)
    }
}