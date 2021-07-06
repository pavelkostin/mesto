import { popupLink, popupPlace, popupAvatarInput } from "../utils/constants.js";

export default class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }


    getCardsFromServer() {
        return fetch(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers,
        }).then(this._checkResponse);
    }


    getUSerInfoFromServer() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers,
        }).then(this._checkResponse);
    }


    setUserInfo(name, info, avatar) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: info,
                avatar: avatar
            }),
        }).then(this._checkResponse);
    }

    postNewCard() {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: popupPlace.value,
                link: popupLink.value,
            }),
        }).then(this._checkResponse);
    }



    getCardInfo(card) {
        return fetch(`${this._url}/cards/${card._cardId}`, {
            method: "GET",
            headers: this._headers
        })
            .then(this._checkResponse);
    }


    deleteCard(card) {

        return fetch(`${this._url}/cards/${card._cardId}`, {
            method: "DELETE",
            headers: this._headers
        })
            .then(this._checkResponse);
    }


    likeCard(card) {
        return fetch(`${this._url}/cards/likes/${card._cardId}`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this._checkResponse)
    }

    disLikeCard(card) {
        return fetch(`${this._url}/cards/likes/${card._cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse)
    }


    getCountsOfLikes(card) {
        return fetch(`${this._url}/cards/likes/${card._cardId}`, {
            headers: this._headers
        })
            .then(this._checkResponse)
    }

    editAvatar() {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: popupAvatarInput.value
            })
        }).then(this._checkResponse);
    }



}