export default new class NotifyTemplate {

    unknownError() {
        return {
            title: 'Ошибка',
            text: 'Что-то пошло не так',
            type: 'error',
        }
    }

    make(resData) {
        let title = '';
        let type = '';
        if (resData.success) {
            title = 'Успех';
            type = 'success';
        } else {
            title = 'Ошибка';
            type = 'error';
        }

        return {
            title: title,
            text : resData.message,
            type : type,
        }
    }
}