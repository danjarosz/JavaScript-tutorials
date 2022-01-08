window.addEventListener("DOMContentLoaded", () => {

    const genWrap = (generator) => {
        gen = generator();

        const handle = (yielded) => {
            if(!yielded.done) {
                yielded.value.then((data) => {
                    return handle(gen.next(data));
                })
            }
        }

        return handle(gen.next());
    }

    function* dataFetcher(){

        const fetchData = (url, config) => {
            return  fetch(url, config).then(response => {
                if (response.ok && response.status >= 200 && response.status < 400) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            }).then(data => {
                return data;
            }).catch(err => {
                console.log(err)
            });
        }

        const tweets = yield fetchData("./tweets.json",{
            method: "GET"
        });
        console.log(tweets);

        const friends = yield fetchData("./friends.json",{
            method: "GET"
        });
        console.log(friends);

        const fruits = yield fetchData("./fruits.json",{
            method: "GET"
        });
        console.log(fruits);

    }

    genWrap(dataFetcher)



   console.log("done");
})