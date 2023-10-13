
function extractData(data) {
    const parsedData = JSON.parse(data);
    const extractedData = [];

    parsedData.forEach((item) => {
        var companyName = parsedData[0].company_name;
        var companyStatement = parsedData[0].company_statement;
        extractedData.push({ companyName, companyStatement });
    });

    return extractedData;
    
}

export { extractData };