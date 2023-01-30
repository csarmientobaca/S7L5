const monkey = "https://striveschool-api.herokuapp.com/api/deezer/search?q=Arctic%20Monkeys"
const sheep = "https://striveschool-api.herokuapp.com/api/deezer/search?q=sheep%20go%20to%20heaven%20goats%20go%20to%20hell"
const songsOrder = document.getElementById("ul-songs")

const orderRankListener = document.getElementById("orderRank").addEventListener("click", orderR)

const closeRankListener = document.querySelector(".btn-close").addEventListener("click", closeR)



// alert logic>>>>>><
document.getElementById("changeDisplay").style.display = "none"

function closeR() {
    document.getElementById("changeDisplay").style.display = "none"

}

function orderR() {
    songsOrder.innerHTML = ""

    for (let i = 0; i < siteAllSongs.length; i++) {

        songsOrder.innerHTML +=


            `
            <li class="nav-item">
                <a href="#" class="nav-link active my-1" aria-current="page">${siteAllSongs[i].title}</a>
            </li>           
        `
    }
    document.getElementById("changeDisplay").style.display = "initial"
}
// <<<<<<<<<<<<<alert logic




let siteAllSongs = []

// fetch ARTIC MONKEYS------>>>>>>>>>>>>>>>
// qui si puo fare invece di inserire manualmente le querys, di monkey and sheep metendo query dentro
// di async e usare ${ dentro di fetch}
const loadData = async () => {
    try {
        // MONKEY
        const res = await fetch(monkey)
        console.log(res.ok)
        const data = await res.json()
        console.log(data.data)

        // SHEEP
        const res2 = await fetch(sheep)
        console.log(res2.ok)
        const data2 = await res2.json()
        console.log(data2.data[0])
        const selectOutput = document.querySelector(".row")

        for (let i = 0; i < 4; i++) {
            // console.log(data.data[i].title)
            siteAllSongs.push(data.data[i])
            selectOutput.innerHTML +=
                `            
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card">
                        <img class="card-img-top" src="${data.data[i].album.cover}">
                        <div class="card-body ">
                            <h4 class="card-title">${data.data[i].title}</h4>
                            <p class="card-text ">Text</p>
                        </div>
                    </div>
                </div>
                    `

        }
        console.log("***********")

        const selectOutput2 = document.querySelector(".coverAl")
        siteAllSongs.push(data2.data[0])

        selectOutput2.innerHTML += `
        <img class="img-fluid shadow"
                            src="${data2.data[0].artist.picture}"
                            alt="sheep">`

        // order array all the arrays
        siteAllSongs.sort((a, b) => a.rank - b.rank);



    }
    catch (err) {
        console.error(err)
    }

}

loadData()

// <<<<<<<<<<<<<<<<------fetch ARTIC MONKEYS




// // two last exercises*****
// console.log(">>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<")

// const loadAll = async () => {
//     try {
//         const res = await fetch(all)
//         console.log(res.ok)
//         const data = await res.json()
//         console.log(data.data)

//     } catch (error) {
//         console.error(error)
//     }



// }

