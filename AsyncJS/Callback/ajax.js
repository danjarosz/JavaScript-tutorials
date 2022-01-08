window.addEventListener("DOMContentLoaded", () => {

    const handleSuccess = res => {
        if (res.ok && res.status >= 200 && res.status < 400) {
            return res.json()
        } else {
            throw new Error(res.message)
        }
    }

    const handleError = err => {
        console.log(err)
    };

    const fetchData = async () => {
        let tweets;
        let friends;
        let fruits;

        try {
             tweets = await fetch("./tweets.json", {
                method: "GET"
            }).then(handleSuccess).catch(handleError);

            if (!tweets) {
                throw new Error(tweets);
            }

            friends = await fetch("./friends.json", {
                method: "GET"
            }).then(handleSuccess).catch(handleError);

            if (!friends) {
                throw new Error();
            }

            fruits = await fetch("./fruits.json", {
                method: "GET"
            }).then(handleSuccess).catch(handleError);

            if (!fruits) {
                throw new Error();
            }

            return {
                ...tweets,
                ...friends,
                ...fruits
            }
        } catch (err) {
            return err;
        }
    }

    const data = fetchData();
    data.then(data => {
        console.log(data);
    })

   console.log("done");
})