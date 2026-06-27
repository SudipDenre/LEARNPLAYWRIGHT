function getData() {
    return Promise.resolve("Hello");
}

// async function display() {
//     const data = await getData();
//     console.log(data);
// }

// display();

async function display() {
    const data = getData();
    console.log(data);
}

display();