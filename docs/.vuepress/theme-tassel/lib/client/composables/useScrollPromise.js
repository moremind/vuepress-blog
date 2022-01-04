let promise = null;
let promiseResolve = null;
const scrollPromise = {
    wait: () => promise,
    pending: () => {
        promise = new Promise((resolve) => (promiseResolve = resolve));
    },
    resolve: () => {
        promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
        promise = null;
        promiseResolve = null;
    },
};
export const useScrollPromise = () => scrollPromise;
