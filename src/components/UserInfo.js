export default class UserInfo {
    constructor({name, about, avatar}) {
        this._name = name
        this._info = about
        this._avatar = avatar
        
    }

    getUserInfo() {
        return {
            name: this._name,
            about: this._info,
            avatar: this._avatar.src
            
        }
    }


    setUserInfo({name, about, avatar}) {

        this._name.textContent = name
        this._info.textContent = about
        this._avatar.src = avatar;
    }
}





















// export default class UserInfo{
//     constructor({name, info}) {
//         this._name = name
//         this._info = info
//     }

//     setInfo({name, info}) {
//         this._name.textContent = name
//         this._info.textContent = info
//     }

//     getInfo() {
//         return {
//             name: this._name.textContent,
//             info: this._info.textContent
//         }
//     }

// }



/*
export default class UserInfo {
    constructor({name, info}) {
        this.nameSelector = name // profile__Name
        this.infoSelector = info
    }

    getInfo() {
        return {
            name: this.nameSelector.textContent,
            info: this.infoSelector.textContent
        }
    }

    setInfo({name, info}) {
        this.nameSelector.textContent = name // profile_name.textContent = popup__name.value
        this.infoSelector.textContent = info
    }

}

*/


/*
export default class UserInfo {
    constructor({nameSelector, jobSelector}) {
        this.nameSelector = nameSelector;
        this.jobSelector = jobSelector;
    }


    getUserInfo() {
        return {
            name: this.nameSelector.textContent,
            job: this.jobSelector.textContent
        }
    }

    setUserInfo({name, job}) { // с попапа на страницу
        this.nameSelector.textContent = name
        this.jobSelector.textContent = job
    }
}

*/
/*

export default class UserInfo {
    constructor({nameSelector, jobSelector}) {
        this.nameSelector = nameSelector;
        this.jobSelector = jobSelector;
    }


    getUserInfo() { // со страницы в попап
        return {
            name: this.nameSelector.textContent,
            job: this.jobSelector.textContent
        }
    }

    setUserInfo({name, job}) { // с попапа на страницу
        this.nameSelector.textContent = name
        this.jobSelector.textContent = job
    }
}
*/
/*
export default class UserInfo {

    constructor({nameSelector, jobSelector}) {
        this.nameSelector = nameSelector
        this.jobSelector = jobSelector
    }

    getUserInfo() {
        return {
            name: this.nameSelector.textContent,
            job: this.jobSelector.textContent
        }
    }

    setUserInfo({newNameSelector, newJobSelector}) {
        this.nameSelector.textContent = newNameSelector
        this.jobSelector.textContent = newJobSelector
    }

}

*/