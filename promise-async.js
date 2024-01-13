async function name1() {
    return new Promise((resolve, reject) => {
      console.log("James Bond");
      // Simulating an error for demonstration purposes
      const randomError = Math.random() < 0.5;
      if (randomError) {
        reject("Error in name1 function");
      } else {
        resolve();
      }
    });
  }
  
  async function id(name) {
    return new Promise((resolve, reject) => {
      console.log("My name is " + name);
      // Simulating an error for demonstration purposes
      const randomError = Math.random() < 0.5;
      if (randomError) {
        reject("Error in id function");
      } else {
        resolve();
      }
    });
  }
  
  async function main() {
    try {
      await id("bond");
      await name1();
      console.log("Success");
    } catch (error) {
      console.error(error);
    }
  }
  
  main();
  