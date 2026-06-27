async function test() {
    try {
        console.log("Start");

        throw new Error("Something went wrong");

        console.log("End");
    } catch (err) {
        console.log(err.message);
    }

    console.log("Finished");
}

test();