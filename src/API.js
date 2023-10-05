async function query(data) {
    /*const response = await fetch(
        "http://75.119.157.23:3001/api/v1/prediction/b2b0ac29-249a-4b2f-aab9-5cd70679ff68",
        {
            headers: {
                Authorization: "Bearer gDqzGFaOSHeOKe4Sc6Js1iZg1RuQERr8po8TgDKMGHE=",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;*/
    /* local test */
    const response = await fetch(
        "http://localhost:3000/api/v1/prediction/6abdbd88-1d74-43ae-936b-70411a1163fa",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;

}

export { query };