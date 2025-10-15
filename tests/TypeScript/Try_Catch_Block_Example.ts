const jsonString = '{ "name": "Abhinay", "age":  }';

try {
  const user = JSON.parse(jsonString);
  console.log("User age:", user.age);
} catch (error) {
  if (error instanceof Error) {
    console.log("Invalid JSON:", error.message);
  } else {
    console.log("Invalid JSON:", error);
  }
}