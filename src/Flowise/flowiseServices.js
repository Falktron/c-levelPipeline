

async function queryTargetUsers(prompt) {
  try {
    const response = await fetch("https://api-service-v26r.onrender.com/target-users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        ,Authorization: "Bearer gDqzGFaOSHeOKe4Sc6Js1iZg1RuQERr8po8TgDKMGHE="
      },
      body: JSON.stringify(prompt)
    });
    
    if (response.ok) {
      const data = await response.json();
      return data[0].results[0];
    } else {
      throw new Error('Error fetching data from the API');
    }
  } catch (error) {
    console.error('Error:', error.message);
    return null; // or you can return an error object/message
  }
}



async function queryBusinessModel(prompt) {
  try {
    const response = await fetch("https://api-service-v26r.onrender.com/business-model", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        ,Authorization: "Bearer gDqzGFaOSHeOKe4Sc6Js1iZg1RuQERr8po8TgDKMGHE="
      },
      body: JSON.stringify(prompt)
    });
    
    if (response.ok) {
      const data = await response.json();
      return data[0].results[0];
    } else {
      throw new Error('Error fetching data from the API');
    }
  } catch (error) {
    console.error('Error:', error.message);
    return null; // or you can return an error object/message
  }
}

async function queryMarketingResearch(prompt) {
  try {
    const response = await fetch("https://api-service-v26r.onrender.com/marketing-research", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        ,Authorization: "Bearer gDqzGFaOSHeOKe4Sc6Js1iZg1RuQERr8po8TgDKMGHE="
      },
      body: JSON.stringify(prompt)
    });
    
    if (response.ok) {
      const data = await response.json();
      return data[0].results[0];
    } else {
      throw new Error('Error fetching data from the API');
    }
  } catch (error) {
    console.error('Error:', error.message);
    return null; // or you can return an error object/message
  }
}


async function queryTargetDB(projectId, pipelineName) {
    try {
      const response = await fetch(`https://api-service-v26r.onrender.com/result?project_id=${projectId}&pipeline_name=${pipelineName}`);
      
      if (response.ok) {
        const data = await response.json();
        return data[0].results[0];
      } else {
        throw new Error('Error fetching data from the API');
      }
    } catch (error) {
      console.error('Error:', error.message);
      return null; // or you can return an error object/message
    }
  }
  


/*
  async function queryTargetUsers(data) {
     const response = await fetch(
        "http://75.119.157.23:3001/api/v1/prediction/df3a83b7-60da-43d6-ac2f-8939a5e86b72",
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
  async function queryBussinesModel(data) {
    const response = await fetch(
       "http://75.119.157.23:3001/api/v1/prediction/58f9feec-0b72-4f4a-9d29-bf5671c976a2",
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

async function queryMarketingResearch(data) {
    const response = await fetch(
      "http://75.119.157.23:3001/api/v1/prediction/afa6f22a-60f4-4a13-a644-d522ed749562",
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

}*/
export {queryTargetUsers, queryTargetDB, queryBusinessModel, queryMarketingResearch};