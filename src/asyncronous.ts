type DataType = {
  data: string;
  isValied: boolean;
};
const data: DataType = {
  data: "Hello Bangladesh",
  isValied: true,
};
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch");
    }
  });
};
const makePromiseData = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch");
    }
  });
};

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await response.json();
};
const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};

getTodoData();
const makePromiseDataObject = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = { data: "data is fetched", isValied: true };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch");
    }
  });
};
const getPromiseData = async (): Promise<DataType> => {
  const data = await makePromiseDataObject();
  return data;
};
const getPromiseData2 = async (): Promise<boolean> => {
  const data = await makePromiseData();
  return data;
};
const result1 = makePromise();
