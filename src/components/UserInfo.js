export default class UserInfo {
    constructor(data) {
    this._data = data;
    }

    getUserInfo() {
    return {
        name: this._data.name.textContent,
        job: this._data.job.textContent
    }
    }

    setUserInfo(newData) {
    this._data.name.textContent = newData.name;
    this._data.job.textContent = newData.job;
    }
}