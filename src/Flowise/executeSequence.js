async function executeSequence(funcArray) {
    let result = null;
  
    for (const funcObj of funcArray) {
      const { func, name } = funcObj;
      
      try {
        result = await func(result);
      } catch (error) {
        console.error(`Error in ${name}:`, error);
        throw error;
      }
    }
  
    return result;
  }

  export { executeSequence };