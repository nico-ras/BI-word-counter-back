const getFetch = async (url) => {

    try {
        resp = await fetch(url);
        data = await resp.json();
        return data;

    } catch (error) {

        console.error(error);
        return error;

    }
}

module.exports = { getFetch }