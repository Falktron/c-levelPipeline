

async function queryTargetUsers(prompt) {
  try {
    const response = await fetch("https://api-service-v26r.onrender.com/target-users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(prompt)
    });
    
    if (response.ok) {
      const jsonData = await response.json();
      const data = JSON.parse(jsonData);  
      return data[0];
    } else {
      throw new Error('Error fetching data from the API');
    }
  } catch (error) {
    console.error('Error:', error.message);
    return null; 
  }
}



async function queryBusinessModel(prompt) {
  try {
    const response = await fetch("https://api-service-v26r.onrender.com/business-model", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(prompt)
    });
    
    if (response.ok) {
      const jsonData = await response.json();
      const data = JSON.parse(jsonData);    
      return data[0];
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
      },
      body: JSON.stringify(prompt)
    });
    
    if (response.ok) {
      const jsonData = await response.json();
      const data = JSON.parse(jsonData);    
      return data[0];
    } else {
      throw new Error('Error fetching data from the API');
    }
  } catch (error) {
    console.error('Error:', error.message);
    return null; // or you can return an error object/message
  }
}


async function queryBrandIdentity(prompt) {
  try {
    const response = await fetch("https://api-service-v26r.onrender.com/brand-identity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(prompt)
    });
    
    if (response.ok) {
      const jsonData = await response.json();
      const data = JSON.parse(jsonData);    
      return data[0];
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
      
      if (data.length > 0 && data[0].results.length > 0) {
        return data[0].results[0];
      }
    }
  } catch (error) {
    console.error('Error:', error.message);
  }

  return null;
}

export {queryTargetUsers, queryTargetDB, queryBusinessModel, queryMarketingResearch, queryBrandIdentity};