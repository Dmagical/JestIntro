const axios = require("axios");

const fetchData = async (id) => {
    const results = await axios.get(
        `https://jsonplaceholder.typicode.com/todo/${id}`
    );
    return results.data;
}

module.exports = fetchData;