const handleSubmitForm = (values) => {
    axios.post('ваш url указанный в urlpatterns', {
        username: values.login_reg,
        password: values.password_reg,
    })
        .then(response => {
            if (response.status != 201) return
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
        })
        .catch(error => console.error(error))
}

const handleLogOut = () => {
    axios.post('ваш url как в urlpatterns', {
        refresh_token: localStorage.getItem('refreshToken'),
    })
        .then(response => {
            if (response.status != 200) return
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        })
        .catch(error => console.error(error))
}

export const updateTokens = () => {
    axios.post('Ваш url', {refresh: localStorage.getitem('refreshToken')})
        .then(response => {
            const newAccessToken = response.data.access;
            const newRefreshToken = response.data.refresh;
            localStorage.setItem('accessToken', newAccessToken)
            localStorage.setItem('refreshToken', newRefreshToken)
        })
        .catch(error => {
            console.error('Ошибка при обновлении токена:', error);
        })
}


axios.get('url', {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
})

