async function queryTargetUsers(data) {
    const response = await fetch(
        "http://75.119.157.23:3001/api/v1/prediction/44801c30-8b94-4c38-a372-01b84ccee1b4",
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
    return result;

}
export { queryTargetUsers };